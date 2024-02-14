import { useState } from 'react';
import { GetGuide, uploadRequest } from '../middleware/firestore/requests';

const OpenTaskHook = (uid) => {
  // Dialog States
  const [taskState, setTaskState] = useState({
    selectedTask: null,
    chooseTaskDialogOpen: false,
    formDialogOpen: false,
    guideOpen: false
  });

  const handleDialogOpen = () => {
    setTaskState({
      ...taskState,
      chooseTaskDialogOpen: true
    });
  };

  const handleTaskSelection = async (task) => {
    setTaskState({
      ...taskState,
      selectedTask: task,
      guideOpen: true,
      chooseTaskDialogOpen: false
    });
    const steps = await GetGuide(task);
    if (steps.length === 0) {
      print("No guide found for task: ", task);
      return;
    }
    setGuideSteps(steps);
  };

  // Guide States
  const [guideSteps, setGuideSteps] = useState([])

  const handleGuideContinue = () => {
    setTaskState({
      ...taskState,
      guideOpen: false,
      formDialogOpen: true
    });
  };

  // Form States
  const [taskDetails, setTaskDetails] = useState({
    description: "",
    additionalDetails: "",
    image: null,
  });

  const handleFormTextChange = (event) => {
    const { name, value } = event.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFormImageChange = (event) => {
    const file = event.target.files[0];
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      image: URL.createObjectURL(file),
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { description, additionalDetails, image } = taskDetails;
    await uploadRequest(uid, description, additionalDetails, taskState.selectedTask);
    handleExit();
  };

  // Exit
  const handleExit = () => {
    setTaskState({
      ...taskState,
      selectedTask: null,
      chooseTaskDialogOpen: false,
      formDialogOpen: false,
      guideOpen: false
    });
    setTaskDetails({
      description: "",
      additionalDetails: "",
      image: null,
    });
  };

  return {
    taskState,
    guideSteps,
    taskDetails,
    handleFormTextChange,
    handleFormImageChange,
    handleFormSubmit,
    handleDialogOpen,
    handleTaskSelection,
    handleExit,
    handleGuideContinue
  };
}

export default OpenTaskHook;
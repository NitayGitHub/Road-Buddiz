import React from "react";
import {
  Dialog, DialogTitle, DialogContent, List, ListItemButton, ListItemIcon, ListItemText,
  Button, Typography
} from "@mui/material";
import { LocalGasStation, TireRepair, Cable } from "@mui/icons-material";
import "../styles/OpenTaskPage.css";
import TaskForm from "./TaskForm";
import StepByStepGuide from "./IssueGuide";
import OpenTaskHook from "../hooks/OpenTaskStates";

const OpenTaskPage = () => {
  const { ...rest } = OpenTaskHook();
  const services = ["שירות דלק", "החלפת צמיג", "טעינת/החלפת מצבר"];
  const contactUsText = "אם התקלה שלך אינה מופיעה, אנא צור קשר עם מוקד הטלפוני במספר 00000 לקבלת עזרה אישית.";

  return (
    <>
      <div>
        <Button
          variant="contained"
          id="open-new-request-button"
          onClick={rest.handleDialogOpen}
        >
          פתיחת תקלה
        </Button>
        <Dialog
          open={rest.taskState.dialogOpen}
          onClose={rest.handleDialogExit} // Add onClose event handler
          slots={{
            backdrop: (props) => (
              <div
                {...props}
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
              />
            )
          }}
        >
          {rest.taskState.chooseTask && (
            <>
              <DialogTitle>בחר תקלה</DialogTitle>
              <DialogContent>
                <List className="openTask-task-list">
                  <ListItemButton onClick={() => rest.handleTaskSelection(services[0])}>
                    <ListItemText primary={services[0]} />
                    <ListItemIcon>
                      <LocalGasStation />
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton onClick={() => rest.handleTaskSelection(services[1])}>
                    <ListItemText primary={services[1]} />
                    <ListItemIcon>
                      <TireRepair />
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton onClick={() => rest.handleTaskSelection(services[2])}>
                    <ListItemText primary={services[2]} />
                    <ListItemIcon>
                      <Cable />
                    </ListItemIcon>
                  </ListItemButton>
                </List>
                <Typography variant="body1" id="contact-us-text">
                  {contactUsText}
                </Typography>
              </DialogContent>
            </>
          )}
          {/* Inserting StepByStepGuide and TaskForm inside the Dialog */}
          {rest.taskState.selectedTask && (
            <>
              {rest.taskState.guideOpen && (
                <div id='issue-guide'>
                  <StepByStepGuide
                    steps={rest.guideSteps}
                    selectedTask={rest.taskState.selectedTask}
                    onContinue={rest.handleGuideContinue}
                    onExit={rest.handleDialogExit}
                  />
                </div>
              )}
              {rest.taskState.formDialogOpen && (
                <div id='task-form'>
                  <TaskForm
                    selectedTask={rest.taskState.selectedTask}
                    taskDetails={rest.taskDetails}
                    onExit={rest.handleDialogExit}
                    onSubmit={rest.handleFormSubmit}
                    handleTextChange={rest.handleFormTextChange}
                    handleImageChange={rest.handleFormImageChange}
                    handleLocationChange={rest.handleFormLocationChange}
                  />
                </div>
              )}
            </>
          )}
        </Dialog>
      </div>
    </>
  );
};

export default OpenTaskPage;

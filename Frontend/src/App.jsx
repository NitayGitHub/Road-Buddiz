import SignUpPage from "./pages/SignUpPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ClientProfile from "./pages/ClientProfile.jsx";
import VolunteerProfile from "./pages/VolunteerProfile.jsx";
import RequestsPage from "./pages/RequestsPage.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import VolunteerTaskPage from "./pages/VolunteerTaskPage.jsx";
import VolunteerChosenTasks from "./pages/VolunteerChosenTasks.jsx";
import { getUserRole } from "./middleware/firestore/users/index.js";
import { getCurrentUser } from "./middleware/auth/index.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ClientProfile" element={<ClientProfile />} />
          <Route path="/VolunteerProfile" element={<VolunteerProfile />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/RequestsPage" element={<RequestsPage />} />
          <Route path="/VolunteerTaskPage" element={<VolunteerTaskPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

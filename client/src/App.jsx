import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/auth/LogIn.jsx";
import Signup from "./pages/auth/SignUp.jsx";
import PrivateRoute from "./routes/PrivateRouter.jsx";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Auth */}
          <Route path="/login" element={"LogIn"} />
          <Route path="/login" element={"SignUp"} />
          {/* Admin */}
          {/* <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={"AdminDashboard"} />
            <Route path="/admin/tasks" element={"AdminTasks"} />
            <Route path="/admin/create-tasks" element={"AdminCreateTask"} />
            <Route path="/admin/users" element={"ManageUsers"} />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

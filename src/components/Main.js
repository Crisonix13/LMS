import Header from "./Header";
import Home from "./Home";
import Topics from "./Topics";
import TeacherDetail from "./TeacherDetail";

//User
import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import MyTopics from "./User/MyTopics";
import Quizzes from "./User/Quizzes";
import Simulation from "./User/Simulation";
import Profile from "./User/Profile";
import ChangePassword from "./User/ChangePassword";
import About from "./About";

// Teacher
import TeacherLogin from "./Teacher/TeacherLogin";
import TeacherRegister from "./Teacher/TeacherRegister";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import TeacherMyTopics from "./Teacher/TeacherMyTopics";
import TeacherQuizzes from "./Teacher/TeacherQuizzes";
import TeacherProfile from "./Teacher/TeacherProfile";
import TeacherChangePassword from "./Teacher/TeacherChangePassword";
import TeacherSimulation from "./Teacher/TeacherSimulation";
import Userlist from "./Teacher/Userlist";

import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:topic_id" element={<Topics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Topics" element={<MyTopics />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/labsimulations" element={<Simulation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/teacherlogin" element={<TeacherLogin />} />
        <Route path="/teacherregister" element={<TeacherRegister />} />
        <Route path="/teacherquizzes" element={<TeacherQuizzes />} />
        <Route path="/teachertopics" element={<TeacherMyTopics />} />
        <Route path="/teacherdashboard" element={<TeacherDashboard />} />
        <Route path="/teacherlabsimulations" element={<TeacherSimulation />} />
        <Route path="/teacherstudents" element={<Userlist />} />
        <Route path="/teacherprofile" element={<TeacherProfile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route
          path="/teacherchangepassword"
          element={<TeacherChangePassword />}
        />
        <Route path="/teacherdetail/:teacher_id" element={<TeacherDetail />} />
      </Routes>
    </div>
  );
}

export default Main;

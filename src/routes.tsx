import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Logon } from "./pages/Logon";
import Landing from "./pages/Landing";
import { TeacherForm } from "./pages/TeacherForm";
import { TeacherList } from "./pages/TeacherList";
import { ForgotPassword } from "./pages/ForgotPassword";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logon" element={<Logon />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/TeacherForm" element={<TeacherForm />} />
        <Route path="/TeacherList" element={<TeacherList />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

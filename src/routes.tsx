import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { TeacherForm } from "./pages/TeacherForm";
import { LoginTeacher } from "./pages/LoginTeacher";
import { LoginStudy } from "./pages/LoginStudy";
import { Register } from "./pages/Register";
import { TeacherList } from "./pages/TeacherList";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/study" element={<LoginStudy />} />
        <Route path="/login" element={<LoginStudy />} />
        <Route path="/login" element={<LoginTeacher />} />
        <Route path="/give-classes" element={<LoginTeacher />} />
        <Route path="/login" element={<TeacherList />} />
        <Route path="/login" element={<TeacherForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

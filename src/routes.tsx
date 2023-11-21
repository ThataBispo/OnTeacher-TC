import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { TeacherForm } from "./pages/TeacherForm";
import { LoginTeacher } from "./pages/LoginTeacher";
import { LoginStudy } from "./pages/LoginStudy";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/study" element={<LoginStudy />} />
        <Route path="/give-classes" element={<LoginTeacher />} />
        <Route path="/Acessar" element={<TeacherForm />} />
      </Routes>
    </BrowserRouter>
  );
}

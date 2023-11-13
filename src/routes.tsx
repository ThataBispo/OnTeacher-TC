import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { TeacherForm } from "./pages/TeacherForm";
import { TeacherList } from "./pages/TeacherList";
import { LoginTeacher } from "./pages/LoginTeacher";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/study" element={<TeacherList />} />
        <Route path="/give-classes" element={<LoginTeacher />} />
        <Route path="/salvar" element={<TeacherForm />} />
      </Routes>
    </BrowserRouter>
  );
}

import { Route, Routes } from "react-router";

import Layout from "./components/Layout";

import UserPage from "./pages/UserPage";
import NotFound from "./pages/NotFound";
import AddUserPage from "./pages/AddUserPage";
import UserDetailPage from "./pages/UserDetailPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UserPage />} />
        <Route path="add-user" element={<AddUserPage />} />
        <Route path="user/:userId" element={<UserDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

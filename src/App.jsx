import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Pesanan from "./pages/pesanan";
import UserLayout from "./layout/userLayout";
import AdminLayout from "./layout/adminLayout";
import UserAdmin from "./pages/userAdmin";
import PesananAdmin from "./pages/pesananAdmin";
import PaketAdmin from "./pages/paketAdmin";
import ProtectedRoute from "./context/ProtectedRoute";
import Unauthorized from "./pages/unauthorized";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* user */}
        <Route
          path="/"
          element={
            <ProtectedRoute roles={[1]}>
              <UserLayout>
                <Dashboard />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pesanan"
          element={
            <ProtectedRoute roles={[1]}>
              <UserLayout>
                <Pesanan />
              </UserLayout>
            </ProtectedRoute>
          }
        />

        {/* admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={[3]}>
              <AdminLayout>
                <UserAdmin />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/pesanan"
          element={
            <ProtectedRoute roles={[3]}>
              <AdminLayout>
                <PesananAdmin />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/paket"
          element={
            <ProtectedRoute roles={[3]}>
              <AdminLayout>
                <PaketAdmin />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// src/app/App.tsx

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardPage from "../pages/Dashboard";
import PatientsPage from "../pages/Patients";
import RegistrationPage from "../pages/Registration";
import SearchPage from "../pages/Search";
import ReportsPage from "../pages/Reports";
import SettingsPage from "../pages/Settings";
import NotFoundPage from "../pages/NotFound";

import DashboardLayout from "../layouts/DashboardLayout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Application Layout */}
        <Route element={<DashboardLayout />}>
          <Route
            index
            element={<Navigate to="/dashboard" replace />}
          />

          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/patients"
            element={<PatientsPage />}
          />

          <Route
            path="/registration"
            element={<RegistrationPage />}
          />

          <Route
            path="/search"
            element={<SearchPage />}
          />

          <Route
            path="/reports"
            element={<ReportsPage />}
          />

          <Route
            path="/settings"
            element={<SettingsPage />}
          />
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

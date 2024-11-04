// src/layouts/AuthLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"; // Adjust the path as necessary
import Header from "../components/Header"; // Adjust the path as necessary

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4 bg-gray-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboardPages/dashboardPage.tsx";
import BlogDetailsPage from "../pages/blogsPages/blogPostDetails.tsx";
import BlogPage from "../pages/blogsPages/bolgsPage.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Navigate to='/dashboard' />}
      />
      <Route
        path='/dashboard'
        element={<Dashboard />}
      />
      <Route
        path='/blogs'
        element={<BlogPage  />}
      />
       <Route path="/posts/:id" element={<BlogDetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;

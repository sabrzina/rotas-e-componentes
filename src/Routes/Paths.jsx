import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import User from "../pages/User";

const LazyHome = lazy(() => import("../pages/Home"));
const LazyAbout = lazy(() => import("../pages/About"));
const LazyContact = lazy(() => import("../pages/Contact"));

const Paths = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<LazyHome />} />
          <Route path="/about" element={<LazyAbout />} />
          <Route path="/contact" element={<LazyContact />} />
          <Route path="user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Paths;

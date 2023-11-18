import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/auth/Login"
import { Register } from "./pages/auth/Register"

//pagelayout component contains the header and footer that apears on all pages of under / and its children
import PageLayout from "./components/PageLayout/PageLayout";

//import chidlren pages of /
import Membership from "./pages/Membership";
import BookTickets from "./pages/BookTickets";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";


export default function App() {

  return (
    <div className="overflow-hidden">
      <Routes>
        <Route>
          <Route path="/" element={<PageLayout><Home /></PageLayout>} />
          <Route path="/membership" element={<PageLayout><Membership /></PageLayout>} />
          <Route path="/book-tickets" element={<PageLayout><BookTickets /></PageLayout>} />
          <Route path="/contact-us" element={<PageLayout><ContactUs /></PageLayout>} />
          <Route path="/about-us" element={<PageLayout><AboutUs /></PageLayout>} />
          <Route path="/test" element={<PageLayout><Test /></PageLayout>} />
          <Route path="*" element={<PageLayout><NotFound /></PageLayout>} />
        </Route>
        <Route>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/Register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

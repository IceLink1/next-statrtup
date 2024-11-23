"use client"
import React from "react";
import Navbar from "./Navbar/Navbar";


export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

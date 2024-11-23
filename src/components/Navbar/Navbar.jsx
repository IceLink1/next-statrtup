"use client";
import React from "react";
import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {

  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link className="li" href="/">Home</Link>
        </li>
        <li>
          <Link className="li" href="/post">Posts</Link>{" "}
        </li>
        <li>
          <Link className="li" href="/about">About</Link>{" "}
        </li>
        <li>
          <Link className="li" href="/contact">Contact</Link>{" "}
        </li>
      </ul>
    </div>
  );
}

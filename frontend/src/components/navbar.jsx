import React, { useState }from "react";

import NavItem from "./navItem";

export default function NavBar() {

  return (
    <nav className="flex">
      <ul className="flex w-auto space-x-8">
        <h1 className="">Alpha Theater</h1>
        <NavItem content="See a Movie" href="/movies" />
        <NavItem content="Find a Theater" href="/contact" />
        <NavItem content="Membership" href="/membership" />
        <NavItem content="About" href="/about" />
        <NavItem content="Contact" href="/contact" />
        <a href="/signin">Sign In</a>
      </ul>
    </nav>
  );
}

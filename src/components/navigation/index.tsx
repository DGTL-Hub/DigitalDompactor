"use client";
import React from "react";
import { useState } from "react";
import Sidebar from "./sidebar";

const Navigation = () => {
    // toggle sidebar
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            {/* <Navbar toggle={toggle} /> */}
        </>
    );
};

export default Navigation;
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Logo = () => {
    // Update the size of the logo when the size of the screen changes
    const [width, setWidth] = useState(0);
  
    const updateWidth = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateWidth);
      updateWidth();
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }, []);
  
    // Change between the logo and the button when the user scrolls
    const [showButton, setShowButton] = useState(false);
    const changeNavButton = () => {
      if (window.scrollY >= 400 && window.innerWidth < 768) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeNavButton);  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", changeNavButton);
      };
    }, []);
  
    return (
      <>
        <Link href="/" style={{ display: showButton ? "none" : "block" }}>
          <Image
            src="/images/svyat.png"
            alt="Logo"
            width={width < 1024 ? 75 : 76}
            height={width < 1024 ? 22 : 37}
            className="thumbnail"
          />
        </Link>
        <div
          style={{
            display: showButton ? "block" : "none",
          }}
        >
          <Button />
        </div>
      </>
    );
  };
  
  export default Logo;
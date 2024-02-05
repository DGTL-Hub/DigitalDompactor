"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ["latin"],
   });

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >  
        <Link href="/" style={{ display: showButton ? "none" : "block" }}>
          <Image
            src="/images/svyat.png"
            alt="Logo"
            width={width < 1024 ? 75 : 76}
            height={width < 1024 ? 22 : 37}
            className="thumbnail"
          />
        </Link>
  <div className="glow">      
    <h1
       className={pressStart2P.className}
        style={{
          fontSize: "1.5rem",
          color: "#1d2422",
          outline: "white",
          textShadow: "2 2 0.5rem #1d2422",
        }}>Digital.</h1>
     </div>
        <div
          style={{
            display: showButton ? "block" : "none",
          }}
        >
          </div>
        </div>
      </>
    );
  };
  
  export default Logo;
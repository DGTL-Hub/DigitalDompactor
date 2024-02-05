import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { animate } from "popmotion"
import { Inter, Press_Start_2P } from "next/font/google";
// import SvgComponents, from "@/components/svgComponents";
import { CloseShape } from "@/components/svgComponents";
import Clock from '../clock/clock';
import "./DraggableResizableBox1.css";


const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ["latin"],
   });

const inter = Inter({
   subsets: ["latin"] });



animate({
  from: 0, 
  to: 100,
  onUpdate: latest => console.log(latest)
})

const EscapeShapeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <title>escape-shape</title>
      <circle fill="#970101" cx="10" cy="10" r="8.8"></circle>
      <rect fill="white" x="9.2" y="5.6" width="1.6" height="8.8"></rect>
      <rect fill="white" x="5.6" y="9.2" width="8.8" height="1.6"></rect>
  </svg>
);


const DraggableResizableBox1: React.FC<Props> = (props) => {
  const [size, setSize] = useState({ width: 650, height: 300 });

  const handleResize = (e, direction, ref, delta, position) => {
      setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
  };

  return (
      <Rnd
        default={{
          x: 50,
          y: 50,
          width: size.width,
          height: size.height,
        }}
        onResize={handleResize}
        bounds="window"
        style={{
          display: 'flex', // Set display to grid
          placeItems: 'center', // Center both horizontally and vertically
          border: "1px solid #ddd",
          backgroundColor: "gray",
          borderRadius: "10px",
        }}>

        {size.width > 300 && size.height > 150 && (
  <div className={pressStart2P.className}>
        <h1 className="glow text-5xl text-center">Digital</h1>
        <Clock />
        <div className="container">
           <div className="escapeShapeIcon">
                  <EscapeShapeIcon />
            </div>
        </div>
        </div>
        )}
      </Rnd>
  );
};




export { DraggableResizableBox1 };

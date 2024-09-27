import React, { useContext, useState } from "react";
import ColorComponents from "./ColorComponents";
import Button from "./Button";
import ColorContext from "./context/ColorContext";

const Body = () => {
  const [textColor, setTextColor] = useState("");
  const [Background, setBackground] = useState("");
  const [fontSize, setFontSize] = useState("");

  const {color,setColor} = useContext(ColorContext);

  console.log(color);

  const clearCanvas = () => {};

  const retreiveCanvas = () => {};

  const SaveAndDownload = () => {};

  return (
    <div className={`${color?"bg-black text-white":"bg-gray-300 text-black"} w-screen flex flex-col gap-20 h-full px-60`}>
      <div className="">
        <div className="flex justify-between items-center">
        <ColorComponents heading="Text Color Picker" />
        <ColorComponents heading="Background" />
        <div className="text-center ">
          <h2>Font Size</h2>
          <select className="text-black w-52 " name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">2</option>
          </select>
        </div>
        <Button property={`${color?'bg-blue-900 ':"bg-white "}  text-center font-bold`} onclick={setColor} name ={color?'Dark Mode':"Light Mode"}  />
        </div>
        
      </div>

      <div className="w-full content-center">
        <canvas  className="w-full bg-white h-[500px] border-2 border-black content-center"></canvas>
      </div>

      <div className="flex justify-between">
        <Button property="bg-red-600 text-white" name="Clear" />
        <Button property="bg-green-500 text-white" name="Save & Download " />
        <Button property="bg-yellow-500 text-white" name=" Retrieve Saved Signature" />
      </div>
    </div>
  );
};

export default Body;

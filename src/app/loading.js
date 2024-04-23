"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loading = () => {

  
  return (
    <motion.div className=" z-[50]  pointer-events-none  flex flex-col justify-center items-center absolute left-0 top-0  w-full bg-black  h-full ">
      <h1> Loading....</h1>
    </motion.div>
  );
};

export default Loading;


"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import comptw from "@/config/about.json"

const  a =comptw;
export function AnimatedTooltipPreview() {
  return (
    <>
    <div className="text-3xl text-center p-20 font-bold ">
      Meet the amazing🌟 team behind the website✨.
    </div>
    <div className="flex flex-row items-center justify-center mb-10 w-full scale-150">
      <AnimatedTooltip  items={a} />
    </div>
    </>
  );
}

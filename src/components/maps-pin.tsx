"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
 
export function AnimatedPinDemo() {
  return (
    
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <a href="https://solar-potential-sysvwjoziq-uc.a.run.app/">
      <PinContainer
        title="Solar Power Calculator(Click here)"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Check your Solar-Heat map
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Calacuate your total savings @your location.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-yellow-400 via-orange-300-500 to-orange-500" />
        </div>
      </PinContainer>
      </a>
    </div>
  );
}

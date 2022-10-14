import React from "react";
import Counter from "./Counter";
import { IntervalHookCounter } from "./IntervalCounter";
import { ClassMouse, HookMouse } from "./MouseLog";

const Index: React.FC = () => {

    return (
        <div className="w-96 flex items-center mx-auto">
          <div className="space-y-4">
            <Counter />
            <ClassMouse name="Hello" />
            <HookMouse />
            <IntervalHookCounter />
          </div>
        </div>
    )
}

export default Index;
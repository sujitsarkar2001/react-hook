import React from "react";
import ComponentA from "./ComponentA";
import { MainContext } from "./main";

const Index: React.FC = () => {

    return (
        <MainContext>
          <ComponentA />
        </MainContext>
    )
}

export default Index;
import React from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const ComponentA : React.FC = () => {

    return (
        <>
          {/* <ComponentB />   */}
          <ComponentC />  
        </>
    )
}

export default ComponentA;
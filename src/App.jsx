import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import DataFetching from './components/DataFetching'
import Effect from './components/effect/Index'
import Context from './components/context/Index'
import Reducer from './components/reducer/Index'
import Callback from './components/callback/Index'
import Memo from './components/memo/Index'
import Ref from './components/ref/Index'
import Custom from './components/custom/Index'
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto mt-5">
        <Routes>
            <Route path="/" element={<DataFetching />} />
            <Route path="/effect" element={<Effect />} />
            <Route path="/context" element={<Context />} />
            <Route path="/reducer" element={<Reducer />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/memo" element={<Memo />} />
            <Route path="/ref" element={<Ref />} />
            <Route path="/custom" element={<Custom />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

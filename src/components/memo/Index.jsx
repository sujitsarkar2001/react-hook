import { useMemo, useState } from "react";

const Index = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const isEvent = useMemo(() => {
    let i = 0;
    while(i < 200000000) i++
    return counterOne % 2 === 0;

  }, [counterOne])

  return (
    <div className="w-96 mx-auto text-center mt-3 space-x-2">
      <button
        onClick={() => setCounterOne((count) => count + 1)}
        className="bg-green-500 py-2 px-4 rounded-md"
      >
        Count One: {counterOne}
        <span className="ml-1">({ isEvent ? 'Even':'Odd' })</span>
      </button>
      <button
        onClick={() => setCounterTwo((count) => count + 1)}
        className="bg-green-500 py-2 px-4 rounded-md"
      >
        Count Two: {counterTwo}
      </button>
    </div>
  );
};

export default Index;

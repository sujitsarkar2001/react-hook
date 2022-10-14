import { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const Index = () => {

    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(0)

    const handleAge = useCallback(() => setAge(age => age + 1), [age])
    const handleSalary = useCallback(() => setSalary(salary => salary + 1000), [salary])

    return (
        <div>
            <Title />
            <div className="w-72 mx-auto text-center mt-3">
                <Count text="Age" count={age} />
                <Button text="Increment Age" handleClick={handleAge} />
                <Count text="Salary" count={salary} />
                <Button text="Increment Salary" handleClick={handleSalary} />
            </div>
        </div>
    )
}

export default Index;
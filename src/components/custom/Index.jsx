import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import DocTitleOne from "./DocTitleOne";
import DocTitleTwo from "./DocTitleTwo";
import Form from "./Form";

const Index = () => {

    return (
        <div className="w-96 mx-auto text-center">
            <DocTitleOne />
            <DocTitleTwo />
            <div className="mt-4 space-y-2">
                <CounterOne />
                <CounterTwo />
                <Form />
            </div>
        </div>
    )
}

export default Index;
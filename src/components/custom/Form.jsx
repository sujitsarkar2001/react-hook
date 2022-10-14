import useInput from "../../hooks/useInput";

const Form = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`first name: ${firstName} - last name: ${lastName}`);
    resetFirstName('');
    resetLastName('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-96 mt-2 bg-gray-100 rounded-md space-y-2"
    >
      <input
        type="text"
        className="bg-gray-200 p-2 w-full"
        placeholder="Enter first name"
        {...bindFirstName}
      />
      <input
        type="text"
        className="bg-gray-200 p-2 w-full"
        placeholder="Enter last name"
        {...bindLastName}
      />

      <button
        type="submit"
        className="bg-green-500 py-2 px-5 rounded-md text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

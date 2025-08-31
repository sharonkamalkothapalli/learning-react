const Contact = () => {
  return (
    <div>
      <h1 className=" text-3xl font-bold p-4 m-4">Contact us</h1>
      <form>
        <input
          type="text"
          className="border-black border p-2 m-2"
          placeholder="Name"
        ></input>
        <input
          type="text"
          className="border-black border p-2 m-2"
          placeholder="Message"
        ></input>
        <button className="rounded-lg p-2 m-2 bg-amber-100 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

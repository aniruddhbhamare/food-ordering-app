const Contact = () => {
  return (
    <div className="text-center p-2 m-2">
      <h1 className="font-bold text-2xl">Contact Us</h1>
      <div className="p-2 m-2">
        <form>
          <input
            className="p-2 m-2 border border-black"
            type="text"
            placeholder="name"
          />
          <input
            type="text"
            className="p-2 m-2 border border-black"
            placeholder="message"
          />
          <button className="m-2 p-2 bg-gray-50 rounded-lg border border-black ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

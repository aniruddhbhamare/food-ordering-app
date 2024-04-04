import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err.error.message);
  return (
    <div>
      <h2>{err.error.message}</h2>
      <h2>Oops !!!</h2>
      <h3>Something went wrong !!!</h3>

      <Link to="/">Home</Link>
    </div>
  );
};

export default Error;

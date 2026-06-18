import React from "react";
import {Link} from "react-router-dom";

function ErrorRoute() {
  return (
    <>
      <div className="text-red-500 font-medium p-4">
        <p>Oops! Something went wrong.</p>
        <br />
        <p>The requested page could not be found.</p>
        <p>Please return to the homepage and try again.</p>
      </div>
      <Link to="/">
        <button className="text-purple-600 font-medium ml-4 border border-purple-600 rounded-md p-2 shadow-lg shadow-purple-600 hover:scale-105 cursor-pointer">
          Go To Home
        </button>
      </Link>
    </>
  );
}

export default ErrorRoute;

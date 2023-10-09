import React from "react";
import { Link, useLocation } from "react-router-dom";
import LoadingPage from "../../assets/loading.gif";
import NullInfo from "../../assets/not-found.gif";
import PageNotFound from "../../assets/not-found.gif";
const LoadingHandler = ({ type }) => {
  const location = useLocation();
  return (
    <div className="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto  w-full">
        <img
          src={
            type === "Loading"
              ? LoadingPage
              : type === "NullInfo"
              ? NullInfo
              : PageNotFound
          }
          alt={type}
          className="max-w-xl w-full mx-auto"
        />
        <main className="sm:flex items-center justify-center text-center mt-10 mx-auto w-full">
          <div>
            {type !== "NotFound" ? (
              <div className="w-full">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-[40px]">
                  {type === "NullInfo"
                    ? `No Info Found For The ${location.pathname.replaceAll(
                        "/",
                        ""
                      )} Page`
                    : "Loading...."}
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
            ) : null}
            <div className="mt-10  flex space-x-3 sm:border-l sm:border-transparent mx-auto items-center justify-center">
              <Link
                to="/Home"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Go back home
              </Link>
              {/* <Link
                to="/Account"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Go To Account
              </Link> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoadingHandler;

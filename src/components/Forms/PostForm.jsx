import React from "react";
import { useNavigate } from "react-router-dom";

const PsotForm = ({ formHandler, type }) => {
  const navigate = useNavigate();
  return (
    <form className="space-y-4" onSubmit={formHandler.handleSubmit}>
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
          value={formHandler.values.title}
          onChange={formHandler.handleChange}
        />
        {formHandler.errors.title && formHandler.touched && (
          <p className="mt-2 text-sm text-red-600" id="titel">
            {formHandler.errors.title?.toString()}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
          value={formHandler.values.category}
          onChange={formHandler.handleChange}
        />
        {formHandler.errors.category && formHandler.touched && (
          <p className="mt-2 text-sm text-red-600" id="titel">
            {formHandler.errors.category?.toString()}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your Description
        </label>
        <textarea
          id="description"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 "
          placeholder="Post Anything..."
          value={formHandler.values.description}
          onChange={formHandler.handleChange}
        ></textarea>
        {formHandler.errors.description && formHandler.touched && (
          <p className="mt-2 text-sm text-red-600" id="titel">
            {formHandler.errors.description?.toString()}
          </p>
        )}
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            disabled={!(formHandler.dirty && formHandler.isValid)}
            type="submit"
            className="disabled:bg-gray-600 ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {type === "update" ? "Update" : "Add Post"}
          </button>
          {type === "update" ? (
            <button
              onClick={() => navigate("/")}
              className=" ml-3 inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </form>
  );
};

export default PsotForm;

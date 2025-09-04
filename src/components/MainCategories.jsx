import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function MainCategories() {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      <div className="flex-1 flex items-center justify-between">
        <Link
          to="/posts"
          className="bg-blue-800 px-4 py-2 rounded-full text-white"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 px-4 py-2 rounded-full text-black"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50 px-4 py-2 rounded-full text-black"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-blue-50 px-4 py-2 rounded-full text-black"
        >
          Database
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-blue-50 px-4 py-2 rounded-full text-black"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50 px-4 py-2 rounded-full text-black"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      <div
        className="flex items-center gap-2 bg-gray-300 px-4 py-2 rounded-full text-black
      w-1/4"
      >
        <CiSearch />
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent text-white placeholder:text-white"
        />
      </div>
    </div>
  );
}

export default MainCategories;

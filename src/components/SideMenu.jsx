import { Link } from "react-router-dom";
import Search from "../components/Search";

function SideMenu() {
  return (
    <div className="px-4 h-max top-8 sticky">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-4 text-sm mt-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-500 cursor-pointer rounded-sm bg-white checked:bg-blue-500"
          />
          Newest
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-500 cursor-pointer rounded-sm bg-white checked:bg-blue-500"
          />
          Most Popular
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-500 cursor-pointer rounded-sm bg-white checked:bg-blue-500"
          />
          Trending
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-500 cursor-pointer rounded-sm bg-white checked:bg-blue-500"
          />
          Oldest
        </label>
      </div>
      <h1 className="mt-4 mb-2 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-3">
        <Link className="underline" to="/posts">
          All
        </Link>
        <Link className="underline" to="/posts?cat=web-design">
          Web Design
        </Link>
        <Link className="underline" to="/posts?cat=development">
          Development
        </Link>
        <Link className="underline" to="/posts?cat=databases">
          Databases
        </Link>
        <Link className="underline" to="/posts?cat=seo">
          Search Engines
        </Link>
        <Link className="underline" to="/posts?cat=marketing">
          Marketing
        </Link>
      </div>
    </div>
  );
}

export default SideMenu;

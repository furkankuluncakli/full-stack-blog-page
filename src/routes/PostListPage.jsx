import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
function PostListPage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="text-2xl mb-8">Development Blog</h1>
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="bg-blue-500 py-2 px-4 rounded-xl text-white mb-5 md:hidden"
      >
        {open ? "Close" : "Filter Or Search"}
      </button>
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div>
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default PostListPage;

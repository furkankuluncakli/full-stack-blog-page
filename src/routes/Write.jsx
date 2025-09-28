import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

function Write() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>You should login!</div>;
  }
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md bg-slate-50 rounded-full text-gray-700">
          Add a Cover Image
        </button>
        <input
          type="text"
          placeholder="My Awesome Story"
          className="bg-transparent p-3 text-4xl font-semibold outline-none"
        />
        <div className="flex items-center gap-3">
          <label className="text-sm">Choose a Category</label>
          <select
            name="cat"
            className="p-2 rounded-full outline-none bg-white shadow-lg"
          >
            <option value="general" selected>
              General
            </option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="A Short Description"
          className="p-4 rounded-xl outline-none bg-white shadow-lg"
        />
        <ReactQuill theme="snow" className="h-[400px] rounded-lg outline-none bg-white shadow-lg" />
        <button className="bg-blue-500 text-white font-medium rounded-xl mt-4 mb-4 px-4 py-2 w-36">Send</button>
      </form>
    </div>
  );
}

export default Write;

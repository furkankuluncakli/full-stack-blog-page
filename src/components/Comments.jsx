import Comment from "./Comment";

function Comments() {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline ">Commments</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          placeholder="Write a comment"
          className="w-full p-4 rounded-xl outline-none"
        />

        <button className="px-4 py-2 bg-blue-500 text-white rounded-xl">
          Send
        </button>
      </div>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
  );
}

export default Comments;

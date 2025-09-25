import { Link } from "react-router-dom";
import Image from "./Image";
function PostListItem() {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div>
        <Image src={"postImg.jpeg"} className="rounded-2xl object-cover" />
      </div>

      <div>
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span className="text-gray-500">Written By</span>
          <Link className="text-blue-500">John Doe</Link>
          <span className="text-gray-500">on</span>
          <Link className="text-blue-500">Web Design</Link>
          <span className="text-gray-500">2 Days Ago</span>
        </div>
      </div>
    </div>
  );
}

export default PostListItem;

import React from "react";
import Image from "./Image";

function Comment() {
  return (
    <div className="flex flex-col gap-4 bg-slate-50 p-4 rounded-xl">
      <div className="flex items-center gap-4">
        <Image src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="40"/>
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 Days Ago</span>
      </div>
      <div className="mt-1">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique animi iste, esse dolores, illo rerum totam sapiente eaque ex sunt obcaecati repellendus cumque, nisi aliquid nobis. Dolorem esse perferendis eligendi maiores necessitatibus accusantium. Dolores nulla corrupti fuga sapiente quis fugiat recusandae dolore eligendi eius nesciunt voluptatem officiis, ad odit blanditiis nam quas? Asperiores quaerat sint modi sequi vel, placeat suscipit, maxime quasi laudantium repellendus iure facere culpa perspiciatis doloribus autem eaque dolor soluta ab explicabo quae odio et. Iure, perferendis!</p>
      </div>
    </div>
  );
}

export default Comment;

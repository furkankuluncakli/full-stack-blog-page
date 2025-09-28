import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

function SinglePostPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            minima?
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written By</span>
            <Link className="text-blue-500">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-500">Web Design</Link>
            <span>2 Days Ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius aut
            praesentium maiores cum harum architecto enim eveniet dolorum, vitae
            adipisci quidem reiciendis sed ad eos modi! Esse excepturi
            temporibus quia obcaecati, id asperiores quas est laborum, aut earum
            a fuga cum maiores inventore corporis fugit blanditiis facere
            quaerat aspernatur. Sequi!
          </p>
        </div>
        <div className="hidden lg:flex lg:w-2/3 lg:justify-end">
          <Image src={"postImg.jpeg"} w="600" className="rounded-xl" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo,
            doloremque voluptatum vero quaerat nemo voluptate nobis nulla nihil
            earum sint laboriosam pariatur modi cum. Eligendi facilis sint ullam
            sequi aliquid fuga maxime corrupti. Quisquam illo quaerat ducimus
            dignissimos sequi adipisci aliquam laboriosam ex. Corporis
            perferendis nemo aperiam qui autem labore? Reprehenderit recusandae
            praesentium corrupti minima incidunt veritatis rerum magnam animi
            quaerat adipisci dolorum cupiditate obcaecati et error, explicabo
            illo iure? Obcaecati asperiores ipsum, enim, quam accusamus error
            voluptatum accusantium nihil alias libero porro sint. Vero aperiam
            doloribus sequi nam cumque nemo magnam officiis culpa nihil numquam,
            inventore deserunt amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo,
            doloremque voluptatum vero quaerat nemo voluptate nobis nulla nihil
            earum sint laboriosam pariatur modi cum. Eligendi facilis sint ullam
            sequi aliquid fuga maxime corrupti. Quisquam illo quaerat ducimus
            dignissimos sequi adipisci aliquam laboriosam ex. Corporis
            perferendis nemo aperiam qui autem labore? Reprehenderit recusandae
            praesentium corrupti minima incidunt veritatis rerum magnam animi
            quaerat adipisci dolorum cupiditate obcaecati et error, explicabo
            illo iure? Obcaecati asperiores ipsum, enim, quam accusamus error
            voluptatum accusantium nihil alias libero porro sint. Vero aperiam
            doloribus sequi nam cumque nemo magnam officiis culpa nihil numquam,
            inventore deserunt amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo,
            doloremque voluptatum vero quaerat nemo voluptate nobis nulla nihil
            earum sint laboriosam pariatur modi cum. Eligendi facilis sint ullam
            sequi aliquid fuga maxime corrupti. Quisquam illo quaerat ducimus
            dignissimos sequi adipisci aliquam laboriosam ex. Corporis
            perferendis nemo aperiam qui autem labore? Reprehenderit recusandae
            praesentium corrupti minima incidunt veritatis rerum magnam animi
            quaerat adipisci dolorum cupiditate obcaecati et error, explicabo
            illo iure? Obcaecati asperiores ipsum, enim, quam accusamus error
            voluptatum accusantium nihil alias libero porro sint. Vero aperiam
            doloribus sequi nam cumque nemo magnam officiis culpa nihil numquam,
            inventore deserunt amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iure,
            ex aspernatur eligendi magni, dolore sequi excepturi minus rem
            praesentium in. Modi repellendus natus fugiat ipsa fuga doloremque
            atque cupiditate vitae reiciendis corporis culpa maxime non porro
            autem at et explicabo officia, earum, temporibus unde facere animi,
            totam dolor. Fugit, aliquam dolores autem optio laudantium sit
            labore fugiat aut! Asperiores, sequi. Dolorum, repellat et
            dignissimos deserunt eum velit repudiandae nihil.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            voluptatem accusamus dolorem odio maxime sapiente cum magnam. Aut
            animi harum a doloribus corporis, suscipit culpa deserunt tempore
            accusantium commodi repudiandae aliquid. Provident ab ad quo
            adipisci, numquam quibusdam iusto dolore dolorem quia quis neque
            tempore eum ex nisi atque odio cum. Soluta maiores deserunt
            voluptates quaerat dicta iusto explicabo eum, ullam sequi beatae ut
            facilis a placeat iure rem nihil odit quisquam id! Odio, vitae
            eveniet? Culpa accusamus aliquam possimus!
          </p>
        </div>
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex items-center gap-4">
            <Image
              src="userImg.jpeg"
              className="rounded-full h-12 w-12 object-cover"
              w="48"
              h="48"
            />
            <Link className="text-blue-500"> John Doe</Link>
          </div>
          <p className="text-sm text-gray-500 mt-5 mb-5">
            Lorem ipsum dolor sit.
          </p>
          <div className="flex items center gap-4">
            <Link>
              <Image src="facebook.svg" />
            </Link>
            <Link>
              <Image src="instagram.svg" />
            </Link>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-3 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
}

export default SinglePostPage;

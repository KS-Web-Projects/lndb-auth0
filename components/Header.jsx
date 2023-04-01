import Link from "next/link";

const Header = () => {
    return (
      <div className="w-full text-center">
        <h1>Light Novel Database</h1>
        <p>Using Astrax</p>
        <div className="w-full h-8 bg-blue-600 flex flex-row items-center justify-around">
          <Link href={"/"} className="text-white font-bold hover:text-gray-400">
            HOME
          </Link>
          <Link href={"/"} className="text-white font-bold hover:text-gray-400">
            FAVOURITE
          </Link>
          <Link href={"/Profile"} className="text-white font-bold hover:text-gray-400">
            PROFILE
          </Link>
        </div>
      </div>
    );
}

export default Header;
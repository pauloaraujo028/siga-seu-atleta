import Image from "next/image";
import Link from "next/link";
import About from "./about";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full p-4 mb-10">
      <Link href="/" className="text-lg font-semibold">
        <Image
          src="/logo.svg"
          alt="Logo Siga seu Atleta com bandeira do brasil"
          width={200}
          height={200}
        />
      </Link>
      <div className="flex items-center space-x-4">
        <About />
      </div>
    </nav>
  );
};

export default Navbar;

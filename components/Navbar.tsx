import Link from "next/link"
import { NAV_LINKS } from "../constants"
import Image from "next/image"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className=" flex justify-between max-container padding-container relative z-30 py-10 px-6">
    <Link href="/">
      <img src="/hilink-logo.svg" alt="logo" width={80} height={29}/>
    </Link>
    <ul className=" h-full mx-auto gap-14 lg:flex">
   {
    NAV_LINKS.map(link =>(
      <li className="regular-16 text-gray-800 cursor-pointer pb-2 transition-all hover:font-bold sm:flexCenter hidden">
        <Link
         href={link.href}>{link.label}
        </Link>
      </li>
    ))
   }
    </ul>

    <div className="lg:flexCenter hidden">
      <Button 
      type="button"
      title="Login"
      icon="/user.svg"
      varient="btn_dark_green"
      />
    </div>

    <img src="menu.svg" alt="menu" width={32} height={32}
    className="inline-block cursor-pointer lg:hidden" />
      
    </nav>
  ) 
}

export default Navbar;
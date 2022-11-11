import { user } from "../constants";
import { styles } from "../style";
import { BsFillCartFill } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";

const UserIcon = () => {
    if (user.image) {
        return <img src={user.image} alt="user" className="object-contain rounded-full w-10 h-10 cursor-pointer" />
    } else {
        return <HiUserCircle className="w-10 h-10 text-white cursor-pointer" />
    }
}

const Navbar = () => {
  return (
    <nav className={`${styles.paddingX} flex flex-row items-center w-full bg-primary min-h-[70px]`}>
        <h1 className="text-[26px] text-white font-bold tracking-wide py-2">Gazali Store</h1>
        <ul className="ml-auto flex flex-row items-center h-full gap-3">
            <li className={`flex-1 ${styles.flexCenter}`}>
                <button className='flex flex-row items-center justify-center h-full min-w-[70px] text-[18px] text-white border-2 rounded-lg gap-1 px-6 border-white hover:bg-white hover:text-primary transition-all duration-200'>
                    Cart <BsFillCartFill />
                </button>
            </li>
            <li className={`flex-1 ${styles.flexCenter}`}>
                <UserIcon />
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
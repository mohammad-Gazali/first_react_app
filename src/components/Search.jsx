import { styles } from "../style"

const Search = () => {
  return (
    <form action="/#" className={`${styles.flexCenter} w-full`}>
        <input type="text" placeholder="search about you want" className="w-[70%] h-12 px-2 rounded-l-lg text-primary-dark text-[20px] focus:outline-none focus:bg-primary-light focus:placeholder:text-primary-light transition-all duration-200" />
        <button type="submit" className="bg-primary rounded-r-lg text-white text-[20px] px-3 hover:bg-primary-dark transition-all duration-200 outline-none border-none">search</button>
    </form>
  )
}

export default Search
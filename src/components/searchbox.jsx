import "../index.css"
import { useContext, useState } from "react"
import SearchIcon from "../../src/assets/Search.svg"
const SearchBox = () => {
    const [searchValue, setSearchValue]=useState("")
    // const {setSearch}=useContext(MyContext)

    const handleChange = (e) => {
        e.preventDefault()
        setSearchValuee(e.target.value)
    }
    return (
        <div className="w-[70%] md:w-[45%] border-red bg-blue-100 border rounded-lg my-6  flex flex-row items-center justify-center md:relative">
            <input
                type="text"
                className=" outline-none p-1 md:p-1 text-white h-[100%]  rounded-lg md:rounded w-[95%] md:w-[95%] "
                placeholder="What Do You Want To Watch?"
               onChange={handleChange}

            />
            <div onClick={handleChange}>
              <img src={SearchIcon} alt="search icon" />
            </div>
        </div>
    )
}

export default SearchBox;
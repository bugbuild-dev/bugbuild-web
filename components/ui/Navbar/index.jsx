import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Brand from "../Brand"
import NavLink from "../NavLink"

const Navbar = () => {
  const router = useRouter()
  const [state, setState] = useState(false)

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/#services" },
    { title: "Features", path: "/#features" },
  ]

  const handleNavMenu = () => {
    setState(!state)
    document.body.classList.toggle("overflow-hidden")
  }

  const handleCloseMenu = (path) => {
    router.push(path)
    setState(false)
    document.body.classList.remove("overflow-hidden")
  }

  return (
    <header>
      <nav
        className={`sm:bg-transparent w-full md:static md:text-sm ${
          state ? "fixed z-10 inset-0" : ""
        }`}
      >
        <div className="custom-screen mx-auto flex items-center justify-between py-3 md:py-5">
          {/* Left - Brand */}
          {state ? null : <Brand />}

          {/* Center - Navigation */}
          <div
            className={`absolute top-0 left-0 w-full h-1/2 bg-green-200 flex items-center justify-center transition-transform transform ${
              state ? "translate-y-0" : "-translate-y-full"
            } duration-500 ease-in-out md:pb-0 md:mt-0 md:static md:block md:translate-y-0 md:bg-transparent`}
          >
            <ul className="text-black font-bold items-center space-y-6 md:flex md:space-x-6 md:space-y-0 justify-center">
              {navigation.map((item, idx) => (
                <li key={idx} className="duration-500 hover:text-gray-500">
                  <p
                    className="block cursor-pointer"
                    onClick={() => handleCloseMenu(item?.path)}
                  >
                    {item?.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Hamburger/Close button */}
          <div className="flex items-center md:hidden absolute top-3 right-5">
            <button
              role="button"
              aria-label="Open the menu"
              className="text-black hover:text-gray-400"
              onClick={handleNavMenu}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Right - Let's Work button */}
          <div className="hidden md:block">
            <NavLink
              href="/get-started"
              className="inline-block px-4 py-2 font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 whitespace-nowrap"
            >
              Let's build
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

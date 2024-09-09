import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Brand from '../Brand'
import NavLink from '../NavLink'

const Navbar = () => {

    const router = useRouter()
    const [state, setState] = useState(false)
    const { events } = useRouter();

    const navigation = [
        { title: "Home", path: "/" },
        { title: "Services", path: "/#services" },
        { title: "Features", path: "/#features" },
        // { title: "Our toolkit", path: "#toolkit" },
    ]

    // useEffect(() => {
    //     // Close the navbar menu when navigating
    //     const handleState = () => {
    //         document.body.classList.remove("overflow-hidden")
    //         setState(false)
    //     }
    //     events.on("routeChangeStart", () => handleState());
    //     events.on("hashChangeStart", () => handleState());
    // }, [])

    const handleNavMenu = () => {
        setState(!state)
        document.body.classList.toggle("overflow-hidden")
    }



    return (
        <header>
            <nav className={`bg-white sm:bg-transparent w-full md:static md:text-sm ${state ? "fixed z-10 h-full" : ""}`}>
                <div className="custom-screen mx-auto flex items-center justify-between py-3 md:py-5">
                    {/* Left - Brand */}
                    <Brand />

                    {/* Center - Navigation */}
                    <div className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 ${state ? "" : "hidden"} md:block`}>
                        <ul className="text-black font-bold items-center space-y-6 md:flex md:space-x-6 md:space-y-0 justify-center">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="duration-500 hover:text-gray-500">
                                          <p className='block' onClick={() => router.push(item?.path)}>
                                            {item?.title}
                                          </p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* Right - Let's Work button */}
                    <div className="flex items-center md:hidden">
                        <button role="button" aria-label="Open the menu" className="text-white hover:text-gray-400"
                            onClick={handleNavMenu}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>

                    <div className="hidden md:block">
                        <NavLink
                            href="/get-started"
                            className="block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline"
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

import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="min-h-screen text-gray-600 flex items-center">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    Build and scale your next business idea <span className="text-yellow-500 underline-offset-8 underline">FASTER</span>
                </h1>
                <p className="max-w-xl mx-auto">
                    Bug Builders making it simple for you to build and grow your SaaS applications, or any business idea.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/get-started"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
                    >
                        Start building
                    </NavLink>
                    {/* <NavLink
                        href="#cta"
                        className="text-gray-700 border hover:bg-gray-50"
                        scroll={false}
                    >
                        Learn more..
                    </NavLink> */}
                </div>
            </div>
        </div>
    </section>
)

export default Hero
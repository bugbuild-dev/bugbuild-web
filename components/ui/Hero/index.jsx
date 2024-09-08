import NavLink from "../NavLink"

const Hero = () => (
  <section className="relative overflow-hidden" >
    {/* Floating Bugs */}
    <div
      className="floating-bug"
      style={{ top: "20%", left: "10%", backgroundImage: "url('/bug.png')" }}
    ></div>
    <div
      className="floating-bug"
      style={{ top: "50%", left: "90%", backgroundImage: "url('/bug.png')" }}
    ></div>
    <div
      className="floating-bug "
      style={{ top: "80%", left: "40%", backgroundImage: "url('/bug.png')" }}
    ></div>
    <div
      className="floating-bug"
      style={{ top: "10%", left: "60%", backgroundImage: "url('/bug.png')" }}
    ></div>
    <div
      className="floating-bug sm:block hidden"
      style={{
        bottom: "20%",
        right: "90%",
        backgroundImage: "url('/bug.png')",
      }}
    ></div>
    <div
      className="floating-bug"
      style={{ top: "70%", left: "70%", backgroundImage: "url('/bug.png')" }}
    ></div>
    <div
      className="floating-bug sm:block hidden"
      style={{ top: "30%", right: "10%", backgroundImage: "url('/bug.png')" }}
    ></div>
    <div
      className="floating-bug sm:block hidden"
      style={{ top: "60%", left: "20%", backgroundImage: "url('/bug.png')" }}
    ></div>

    <div className="min-h-screen text-gray-600 flex items-center">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-gray-800 font-extrabold mx-auto text-6xl">
          Build and scale your next business idea{" "}
          <span className="text-green-500 underline-offset-8 underline">
            FASTER
          </span>
        </h1>
        {/* <h1 className="text-6xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
          Build and scale your next business idea
          <span className="relative inline-block">
            <span className="text-yellow-500">&nbsp;FASTER</span>

            <img
              src="/underline.svg"
              alt="Underline"
              className="absolute left-0 right-0 mx-auto " // Adjust width as needed
            />
          </span>
        </h1> */}
        <p className="max-w-xl mx-auto">
          Bug Builders making it simple for you to build and grow your SaaS
          applications, or any business idea.
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <NavLink
            href="/get-started"
            className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
          >
            Start building
          </NavLink>
        </div>
      </div>
    </div>
  </section>
)

export default Hero

import SectionWrapper from "../../SectionWrapper"

const Services = () => {
  const features = [
    {
      title: "Web Development",
      desc: "We create high-performance websites tailored to your business needs using modern technologies.",
    },
    {
      title: "Mobile app development",
      desc: "We build intuitive and feature-rich mobile apps for seamless user experiences on iOS and Android.",
    },
    {
      title: "E-commerce Services",
      desc: "We offer end-to-end e-commerce solutions to help you launch and grow your online store effectively.",
    },
  ]

  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      {/* First gradient element */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#34d399] to-[#10b981]"
        />
      </div>
      {/* Second gradient element */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#10b981] xl:ml-0 xl:mr-[calc(50%-12rem)]"
        />
      </div>
      
      <SectionWrapper>
        <div id="services" className="custom-screen text-gray-600">
          <div className="flex sm:mt-[10%] justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-12 ">
              <div className="w-full sm:w-1/2 flex items-center">
                <h1 className="text-gray-800 font-extrabold mx-auto text-4xl text-center leading-normal">
                  Problems? <br /> We Deliver the{" "}
                  <span className="text-green-500 underline-offset-8 underline">
                    Solutions.
                  </span>
                </h1>
              </div>
              <div className="w-full sm:w-1/2 px-10 text-center sm:text-left sm:px-0">
                <ul className="flex flex-col gap-10">
                  {features.map((item, idx) => (
                    <li key={idx} className="">
                      <h4 className="text-xl text-gray-800 font-semibold">
                        {item.title}
                      </h4>
                      <p>{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Services

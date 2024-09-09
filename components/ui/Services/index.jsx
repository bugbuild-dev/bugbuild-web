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
  )
}

export default Services

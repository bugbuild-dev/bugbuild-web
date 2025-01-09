import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/cta-image.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-12 sm:mt-[8%] flex justify-center items-center px-5 bg-gradient-to-b from-white to-gray-50">
            <div className="custom-screen">
                <div className="items-center gap-x-16 lg:flex">
                    <div className="flex-1 sm:hidden lg:block transform transition-transform duration-500 hover:scale-105">
                        <Image 
                            src={ctaImage} 
                            className="rounded-2xl shadow-2xl md:max-w-lg" 
                            alt="Create Successful Business Models with Our IT Solutions"
                            priority
                        />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl space-y-6">
                        <h2 className="text-gray-800 text-4xl font-bold sm:text-5xl leading-tight">
                            <span className="text-green-500 inline-block transform hover:scale-105 transition-transform duration-300">Create</span>{' '}
                            Successful Business Models with Our IT Solutions
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Bugbuilders, a software development company, helps to digitize businesses by focusing on client's business challenges, needs. We value close transparent cooperation and encourage our clients to participate actively in the project development life cycle.
                        </p>
                        <div className="pt-4">
                            <NavLink
                                href="/get-started"
                                className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                            >
                                Get in Touch
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA
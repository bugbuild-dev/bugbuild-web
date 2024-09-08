import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="min-h-screen flex justify-center items-center">
            <div className="max-w-2xl mx-auto text-center px-5 sm:px-0">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Get started with <span className="text-green-500 font-bold underline underline-offset-8">BugBuilders</span> today.
                </h2>
                <p className="mt-5 text-gray-600">
                    Hire experts to create your next idea, follow best practices, remove roadblocks, and delivery on schedule.
                </p>
                <NavLink
                    href="/get-started"
                    className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                >
                    Start building
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA
import Navbar from "../components/ui/Navbar"
import Link from "next/link"

const posts = [
  {
    id: 1,
    title: "How to Choose the Right Tech Stack for Your SaaS Application",
    href: "/blog/1",
    description:
      "Selecting the right technology stack is crucial for your SaaS success. Learn about modern tech stacks that can help you build scalable, secure, and high-performance applications. We break down the pros and cons of different technologies and help you make an informed decision.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
    date: "Mar 15, 2024",
    datetime: "2024-03-15",
    category: { title: "Development", href: "#" },
  },
  {
    id: 2,
    title: "Mobile App Development: Native vs Cross-Platform in 2024",
    href: "/blog/2",
    description:
      "Explore the pros and cons of native and cross-platform mobile development approaches. We analyze factors like performance, development speed, and cost to help you make the best choice for your mobile app project.",
    imageUrl:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "Mar 12, 2024",
    datetime: "2024-03-12",
    category: { title: "Mobile Development", href: "#" },
  },
  {
    id: 3,
    title: "E-commerce Security: Best Practices for Online Stores",
    href: "/blog/3",
    description:
      "Security is paramount in e-commerce. Learn about essential security measures, compliance requirements, and best practices to protect your online store and customer data from cyber threats.",
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "Mar 08, 2024",
    datetime: "2024-03-08",
    category: { title: "Security", href: "#" },
  },
]

export default function Blog() {
  return (
    <>
      <div className="py-2">
        <Navbar />
      </div>
      <div className="relative isolate bg-white py-24 sm:py-32">
        {/* First gradient element */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
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
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#10b981] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              BugBuilders Tech Insights
            </h1>
            <p className="mt-2 text-lg/8 text-gray-600">
              Expert insights on web development, mobile apps, and e-commerce solutions to help you build and scale your business.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between"
              >
                <Link href={post.href} className="w-full">
                  <div className="relative w-full">
                    <img
                      alt={post.title}
                      src={post.imageUrl}
                      className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </Link>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900">
                        BugBuilders
                      </p>
                      <p className="text-gray-600">Software Development Company</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

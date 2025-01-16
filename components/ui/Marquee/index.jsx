import Image from "next/image"
import React from "react"
import Marquee from "react-fast-marquee"

export default function FeaturedWorks() {
  const images = [
    {
      url: "/assets/marquee/image1.png",
      title:
        "An elegant clean website for an architecture firm including dashboard for seamless management",
    },
    {
      url: "/assets/marquee/image2.png",
      title: "A modern mobile app for a real estate agency",
    },
    {
      url: "/assets/marquee/image3.png",
      title: "Beautiful website for a education platform",
    },
    {
      url: "/assets/marquee/image4.png",
      title: "An eye catching website for a beauty salon",
    },
    {
      url: "/assets/marquee/image5.png",
      title:
        "Minimalist website for a church including a dashboard for managing events and other activities",
    },
  ]

  return (
    <div className="w-full overflow-hidden bg-green-50 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Featured Works
      </h2>

      {/* Marquee container */}
      <Marquee className="relative flex overflow-x-hidden">
        {/* First set of images */}
        <div className="flex animate-marquee whitespace-nowrap">
          {images.map((image, index) => (
            <div key={index} className="mx-6 flex flex-col items-center">
              <div className="group relative sm:w-[800px] w-[300px]">
                <Image
                  src={image.url}
                  alt={image.title || `Image ${index + 1}`}
                  width={1200}
                  height={600}
                  className="h-[300px] sm:h-[600px] w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 px-4">
                <p className="sm:text-lg text-sm text-center font-medium text-gray-800 line-clamp-2">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}

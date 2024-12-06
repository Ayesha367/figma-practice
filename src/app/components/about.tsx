"use client"; // Add this at the top of your file
import Image from "next/image";

export default function About() {
    const teamMembers = [
        {
            name: "Tom Cruise",
            title: "Founder & Chairman",
            image: "/employee-1.webp",
            alt: "Tom Cruise",
            social: {
                twitter: "#",
                instagram: "#",
                linkedin: "#"
            }
        },
        {
            name: "Emma Watson",
            title: "Managing Director",
            image: "/employee-2.webp",
            alt: "Emma Watson",
            social: {
                twitter: "#",
                instagram: "#",
                linkedin: "#"
            }
        },
        {
            name: "Will Smith",
            title: "Product Designer",
            image: "/employee-3.webp",
            alt: "Will Smith",
            social: {
                twitter: "#",
                instagram: "#",
                linkedin: "#"
            }
        }
    ];

    return (
        <div className="w-full flex justify-center items-start">
            <div className="sm:w-full md:w-[80%] my-11 flex sm:flex-col md:flex-row justify-center items-start gap-x-5 gap-y-6">
                {/* Left Section */}
                <div className="sm:w-full md:w-[60%] sm:p-8 md:p-0">
                    <h1 className="sm:text-xl md:text-3xl font-bold">Our Story</h1>
                    <p className="pt-6">
                        Launched in 2015, Exclusive is South Asia&apos;s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
                    </p>
                    <p className="mt-5">
                        Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer goods.
                    </p>
                </div>
                {/* Right Section */}
                <div className="sm:w-full md:w-[600px] cursor-pointer">
                    <Image 
                        src={"/images/signup/fashion.png"}
                        width={400}
                        height={500}
                        alt="Mobile"
                        className="w-full"
                    />
                </div>
            </div>

            {/* Team Members Section */}
            <div className="flex flex-col items-center">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Image 
                            src={member.image} 
                            alt={member.alt} 
                            width={200} 
                            height={200} 
                            className="rounded-full"
                        />
                        <h2 className="text-xl font-bold">{member.name}</h2>
                        <p>{member.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
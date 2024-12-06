"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faDollarSign, faShoppingBag, faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'; // Using Next.js Image component for optimization

const teamMembers = [
    {
        name: 'Tom Cruise',
        title: 'Co-Founder & Chairman',
        image: '/images/employee-1.png',
        social: {
            twitter: '#',
            instagram: '#',
            linkedin: '#',
        },
    },
    {
        name: 'Emma Watson',
        title: 'Managing Director',
        image: '/images/employee-2.png',
        social: {
            twitter: '#',
            instagram: '#',
            linkedin: '#',
        },
    },
    {
        name: 'Will Smith',
        title: 'Product Designer',
        image: '/images/employee-3.png',
        social: {
            twitter: '#',
            instagram: '#',
            linkedin: '#',
        },
    },
];

function Views() {
    return (
      <div className="w-full flex justify-center items-center mt-10 mb-1">
      
            {/* Container */}
            <div className="sm:w-full md:w-[80%] border-b-2 border-neutral-100 pb-10">
                
                {/* Add John Doe's image above the statistics section */}
                <div className="flex justify-center mb-4">
                    <Image 
                        src="/images/john-doe.png" // Update with the correct path to John Doe's image
                        alt="John Doe"
                        width={100}
                        height={100}
                        className="rounded-full" // Optional: Add styling
                    />
                </div>

                {/* Statistics Section */}
                <div className="flex sm:flex-row gap-x-5 gap-y-10 md:flex-row lg:flex-row sm:justify-center md:justify-between mt-5 mb-4 sm:flex-wrap lg:flex-nowrap">
                    {/* Box 1 */}
                    <div className="shadow-lg border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
                        <span className='bg-black rounded-full text-white p-3'><FontAwesomeIcon icon={faStore} size='2x' /></span>
                        <span className='text-xl font-bold'>10.5k</span>
                        <p className='sm:text-[8px] md:text-sm'>Sellers active on our site</p>
                    </div>

                    {/* Box 2 */}
                    <div className="border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
                        <span className='bg-black rounded-full text-white p-3'><FontAwesomeIcon icon={faDollarSign} size='2x' /></span>
                        <span className='text-xl font-bold'>33k</span>
                        <p className='sm:text-[8px] md:text-sm'>Monthly Product Sale</p>
                    </div>

                    {/* Box 3 */}
                    <div className="border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
                        <span className='bg-black rounded-full text-white p-3'><FontAwesomeIcon icon={faShoppingBag} size='2x' /></span>
                        <span className='text-xl font-bold'>45.5k</span>
                        <p className='sm:text-[8px] md:text-sm'>Customers active on our site</p>
                    </div>

                    {/* Box 4 */}
                    <div className="border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
                        <span className='bg-black rounded-full text-white p-3'><FontAwesomeIcon icon={faMoneyBill1Wave} size='2x' /></span>
                        <span className='text-xl font-bold'>25k</span>
                        <p className='sm:text-[8px] md:text-sm'>Annual gross sale on our site</p>
                    </div>
                </div>

                {/* Team Members Section */}
                <div className="flex flex-col items-center justify-center min-h-screen lg:mt-[50px]">
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white bg-opacity-50 p-4 rounded-md shadow-md">
                                    <Image 
                                        src={member.image} 
                                        alt={member.name} 
                                        width={300} 
                                        height={400} 
                                        className="mx-auto mb-4" 
                                    />
                                </div>
                                <h2 className="text-xl font-bold text-center">{member.name}</h2>
                                <p className="text-gray-600 text-center">{member.title}</p>
                                <div className="flex space-x-4 mt-4 justify-center">
                                    <a href={member.social.twitter} className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
                                    <a href={member.social.instagram} className="text-gray-600 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
                                    <a href={member.social.linkedin} className="text-gray-600 hover:text-gray-800"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center space-x-2 mt-8">
                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Views;
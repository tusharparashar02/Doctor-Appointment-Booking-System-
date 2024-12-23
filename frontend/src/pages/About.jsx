import React from 'react'

const About = () => {

  const logos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-aktZR88h8bDgvTDIDIIs0cfBeIvr6jQLg&s",
    "https://w7.pngwing.com/pngs/402/257/png-transparent-takeda-pharmaceutical-company-pharmaceutical-industry-ariad-pharmaceuticals-business-takeda-pharmaceuticals-u-s-a-inc-business-text-trademark-people-thumbnail.png",
    "https://w7.pngwing.com/pngs/631/987/png-transparent-kraft-heinz-h-j-heinz-company-nasdaq-khc-food-brand-kraft-heinz-logo-company-text-banner-thumbnail.png",
    "https://w7.pngwing.com/pngs/487/836/png-transparent-the-himalaya-drug-company-brand-ayurveda-nutrition-international-nomenclature-of-cosmetic-ingredients-blue-text-logo-thumbnail.png",
    "https://w7.pngwing.com/pngs/508/611/png-transparent-johnson-johnson-company-medical-device-organization-acuvue-johnson-johns-logo-text-business-industry-thumbnail.png",
  ];

  return (
	<>
     <div className="py-12  ">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://img.freepik.com/premium-photo/modern-equipment-operating-room-medical-devices-neurosurgery_179755-8370.jpg?w=996"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Why Choose us?
                        </h2>
                        <p className="mt-6 text-gray-600 font-bold">
                        Welcome to Healium Digital Healthcare, your trusted partner in health and wellness. 
                        We are dedicated to transforming healthcare by connecting patients with certified doctors, providing accessible and personalized medical solutions.
                        </p>
                        <p className="mt-4 text-gray-600 font-bold">
                        Our platform offers a wide range of services, including online consultations, appointment scheduling, symptom checkers powered by AI, and personalized health recommendations. 
                        Whether you need a specialist, mental health support, or preventive care, we’re here to ensure you receive the best guidance and treatment.
                        </p>
                    </div>
                </div>
            </div>
      </div>
      <div className="bg-white py-14 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index + 1}`}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          ))}
        </div>
      </div>
    </div>
  </>
  )
}

export default About

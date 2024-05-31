"use client"
import React, { useRef } from 'react';
import Image from 'next/image';


const Slider: React.FC = () => {

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      id: 1,
      company: "/zoomer.png",
      testimonial: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      author: {
        name: "Hellen Jummy",
        role: "Team Lead",
        photo: "/user1.png"
      }
    },
    {
      id: 2,
      company: "/kontrastr.png",
      testimonial: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      author: {
        name: "Hellena John",
        role: "Co-founder",
        photo: "/user3.png"
      }
    },
    {
      id: 3,
      company: "/artvenue.png",
      testimonial: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      author: {
        name: "David Oshodi",
        role: "Manager",
        photo: "/user1.png"
      }
    },
    {
        id: 4,
        company: "/zoomer.png",
        testimonial: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        author: {
          name: "Hellen Jummy",
          role: "Team Lead",
          photo: "/user2.png"
        }
      },
      {
        id: 5,
        company: "/sheels.png",
        testimonial: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        author: {
          name: "Hellena John",
          role: "Co-founder",
          photo: "/user3.png"
        }
      },
      
  ];


  return (
    <section className="bg-custom-light-yellow w-50 py-10 relative overflow-hidden ">
    <div className="absolute inset-0 pt-6">
      <img src="/Rectangle 28.png" className="w-full h-3/4 pt-20 mt-7 sm:px-10 px-0 object-cover z-0 top-12" alt="" />
    </div>
    <div className="relative z-10 mx-auto">
    <div className="sm:flex justify-between items-center container pb-4">
  <h2 className="text-6xl font-extrabold mb-8 text-center sm:text-start">Because they love us</h2>
  <div className="sm:flex hidden space-x-4">
    <button onClick={scrollLeft} className="">
      <Image src="/icons/Buttonleft.svg" width={48} height={48} alt="Scroll Left" />
    </button>
    <button onClick={scrollRight} className="">
      <Image src="/icons/Buttonright.svg" width={48} height={48} alt="Scroll Right" />
    </button>
  </div>
</div>

      <div className="relative">
        <div ref={sliderRef} className="flex overflow-x-scroll scrollbar-hide space-x-6 p-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-[370px] min-h-[380px] bg-white rounded-xl shadow-lg p-8">
              <Image alt='test' className='mt-2' width={300} height={300} src={testimonial.company} />
              <p className="mt-4 text-gray-600 text-2xl pb-2">{testimonial.testimonial}</p>
              <div className="flex items-center pt-12">
                <Image src={testimonial.author.photo} alt={testimonial.author.name} width={64} height={64} className="rounded-full" />
                <div className="ml-4">
                  <p className="text-gray-800 font-normal text-[18px]">{testimonial.author.name}</p>
                  <p className="text-gray-500 font-normal text-[16px]">{testimonial.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}

export default Slider;

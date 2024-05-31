import Image from 'next/image';
import React from 'react';

const WhyJoinUs: React.FC = () => {
  return (
    <section className="bg-custom-light-yellow mt-20 py-32 flex justify-center items-center">
      <div className="container mt-2 mx-auto flex flex-col lg:flex-row items-center lg:items-start  bg-white rounded-xl shadow-lg ">
        <div className="lg:w-1/2 flex flex-col mt-14 justify-center items-center lg:items-start lg:pl-20 lg:py-8">
          <h2 className="font-extrabold text-6xl mb-4 text-gray-800">Why join us</h2>
          <ul className="mt-4 ml-2 text-gray-600 space-y-4">
            <li className="flex items-center text-xl">
              <span className="text-green-500 mr-2">✔</span> Est et in pharetra magna adipiscing ornare aliquam.
            </li>
            <li className="flex items-center text-xl">
              <span className="text-green-500 mr-2">✔</span> Tellus arcu sed consequat ac velit ut eu blandit.
            </li>
            <li className="flex items-center text-xl">
              <span className="text-green-500 mr-2 text-xl">✔</span> Ullamcorper ornare in et egestas dolor orci.
            </li>
          </ul>
          <button className="mt-8 bg-transparent border-2 border-amber-900 text-amber-900 px-10 py-3 mb-8 rounded-lg text-[20px] font-medium">Sign up now</button>
        </div>
        <div className="lg:w-1/2 relative flex justify-center items-center">
        <Image src="/Deco-video.png" className='absolute z-0 bottom-0 -top-12 left-2  sm:-top-16 sm:left-2' alt='deco' width={800} height={600} />
        <div className="relative z-0">
        <Image src="/Desktop.png" className="relative z-30 sm:mt-10 mt-4 sm:w-[550px] sm:h-[350px] w-[380px] h-[200px] object-cover" alt="Why join us" width={650} height={300} />
</div>

</div>


      </div>
    </section>
  );
}

export default WhyJoinUs;

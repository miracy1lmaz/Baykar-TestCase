import Image from 'next/image';

const BestOfTheBest = () => {
  const sneakers = [
    { src: "/Picture3.png", title: "Title 1", description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." },
    { src: "/Picture4.png", title: "Title 2", description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." },
    { src: "/Picture5.png", title: "Title 3", description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." },
  ];

  return (
    <section className="relative bg-gray-900 pb-20">
      <div className="absolute inset-24 top-40 ml-14 pb-4 mx-auto">
        <Image
          src="/Backlights.png"
          alt="Background"
          width={1358}
          height={527}
          quality={100}
          className="opacity-90 object-cover hidden sm:block width-full"
        />
      </div>
      <div className="relative container mx-auto z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="sm:text-6xl text-3xl font-bold text-white py-4 md:mb-0 mt-14">The best of the best</p>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 px-12 mr-5 text-2xl font-bold sm:mt-14 mt-4 rounded-lg">Sign up now</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-14 justify-items-center mt-14">
          {sneakers.map((sneaker, index) => (
            <div key={index} className="relative bg-gray-900 rounded-lg overflow-hidden shadow-[0px_25px_50px_-12px_#FFFFFF40] col-span-4 w-[400px]">
              <Image src={sneaker.src} width={500} height={300} alt={`Sneaker ${index + 1}`} className="w-full" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mt-3">{sneaker.title}</h3>
                <p className="text-white my-6 text-lg">
                  {sneaker.description.split(' ').slice(0, 5).join(' ')} <span className='block'>{sneaker.description.split(' ').slice(5).join(' ')}</span>
                </p>
                <button className="bg-transparent border-2 border-white text-white w-full px-6 py-3 rounded-lg mt-4 text-xl flex items-center justify-center">
                  <Image src="/icons/shopping-cart.svg" width={24} height={24} alt="circle" className="relative z-10 mr-2" />
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestOfTheBest;

import Image from 'next/image';
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      iconSrc: "/icon1.svg",
      title: "Nibh viverra",
      description: "Sit bibendum donec dolor fames neque vulpuat non sit aliquam. Consequat turpis natoque leo, massa.",
      imageSrc: "/row.png",
      imageWidth: 60,
      imageHeight: 60,
      imageAlt: "row",
      imageClass: "absolute z-10 ml-8 mt-0"
    },
    {
      iconSrc: "/icon2.svg",
      title: "Cursus amet",
      description: "Sit bibendum donec dolor fames neque vulpuat non sit aliquam. Consequat turpis natoque leo, massa.",
      imageSrc: "/rowgreen.png",
      imageWidth: 40,
      imageHeight: 40,
      imageAlt: "row",
      imageClass: "absolute z-10 ml-7 mb-2"
    },
    {
      iconSrc: "/icon3.svg",
      title: "Ipsum fermentum",
      description: "Sit bibendum donec dolor fames neque vulpuat non sit aliquam. Consequat turpis natoque leo, massa.",
      imageSrc: "/rowpurple.png",
      imageWidth: 40,
      imageHeight: 40,
      imageAlt: "row",
      imageClass: "absolute z-10 ml-10 mb-1"
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto grid grid-cols-12 items-center gap-8">
        {features.map((feature, index) => (
          <div key={index} className="col-span-12 lg:col-span-4 p-4 flex flex-col items-center sm:flex sm:items-start">
            <Image
              src={feature.imageSrc}
              alt={feature.imageAlt}
              className={feature.imageClass}
              width={feature.imageWidth}
              height={feature.imageHeight}
            />
            <img src={feature.iconSrc} alt={`Feature ${index + 1}`} className="mb-4" />
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-lg text-gray-600 sm:text-left text-center">
              {feature.description.split(' ').slice(0, 5).join(' ')}
              <span className="block">{feature.description.split(' ').slice(5).join(' ')}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;

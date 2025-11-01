import Image from 'next/image';

const imgImage = "https://www.figma.com/api/mcp/asset/c9c1809e-a3f2-47cb-a8f8-e0087edf870c";
const imgImg1 = "https://www.figma.com/api/mcp/asset/1ddb4db5-0238-4ee6-a08c-e0d758e0cfda";

export default function Experience() {
  return (
    <section id="experience" className="bg-general-body text-white py-[120px] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-full max-w-[1170px] mx-auto flex justify-between items-center px-4">
        <div className="bg-[#2c2c2c] h-full w-px" />
        <div className="bg-[#2c2c2c] h-full w-px" />
        <div className="bg-[#2c2c2c] h-full w-px" />
        <div className="bg-[#2c2c2c] h-full w-px" />
        <div className="bg-[#2c2c2c] h-full w-px" />
      </div>

      <div className="w-full max-w-[1170px] mx-auto px-4">
        <h2 className="font-italiana text-5xl leading-[64px] w-[670px] mb-[120px]">
          Experience the Complex and <span className="text-primary-orange">Delicious</span> Tastes of Two Exceptional <span className="text-primary-orange">Arabica</span> Coffees
        </h2>

        <div className="flex items-center justify-between mb-[120px]">
          <div className="relative w-[400px] h-[589px]">
            <div className="absolute top-[39px] left-0 w-[370px] h-[520px] rounded-[32px]">
              <Image alt="Ethiopian Yirgacheffe" src={imgImage} fill={true} className="object-cover rounded-[32px]" />
            </div>
            <div className="absolute top-[69px] left-[30px] w-[370px] h-[520px] border-[6px] border-primary-orange rounded-[32px]" />
            <p className="absolute top-0 left-[185px] -translate-x-1/2 font-italiana text-sm">by Daniel Tafjord on Unsplash</p>
          </div>
          <div className="w-[670px] flex flex-col gap-[60px]">
            <p className="font-inter font-light text-base leading-8">
              Ethiopian Yirgacheffe is a type of Arabica coffee that is grown in the southern highlands of Ethiopia. It is considered one of the finest Arabica coffees in the world due to its unique flavor profile. The coffee is known for its bright acidity, medium body, and floral, citrusy notes with a hint of spice.
            </p>
            <p className="font-inter font-light text-base leading-8">
              The Yirgacheffe coffee plant grows in rich, fertile soil and in high-altitude regions. The beans are carefully hand-picked and sun-dried, resulting in a coffee with a distinct flavor that is hard to replicate. The beans are also processed using a wet method, which helps to enhance the coffee's floral and fruity notes.
            </p>
            <button className="bg-primary-orange border-2 border-primary-orange rounded-[32px] px-[30px] py-[10px] font-bold text-general-body text-[16px] leading-[24px] w-fit">
              Get Coffeener
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-[670px] flex flex-col gap-[60px]">
            <p className="font-inter font-light text-base leading-8">
              Colombian Supremo is a type of Arabica coffee that is grown in the high-altitude regions of Colombia. It is renowned for its rich, full-bodied taste, with a mild acidity and a smooth finish. The coffee beans are carefully hand-picked and sun-dried, resulting in a coffee with a well-balanced flavor profile.
            </p>
            <p className="font-inter font-light text-base leading-8">
              The Supremo coffee plant is known for producing large coffee beans, which contribute to the coffee's full-bodied taste. The beans are processed using a wet method, which helps to enhance the coffee's flavor and aroma. Colombian Supremo is often described as having a sweet and nutty taste, with hints of chocolate and caramel.
            </p>
            <button className="border-2 border-primary-orange rounded-[32px] px-[30px] py-[10px] font-bold text-white text-[16px] leading-[24px] w-fit">
              Check Figma
            </button>
          </div>
          <div className="relative w-[513px] h-[671px]">
            <div className="absolute top-[39px] left-[113px] w-[370px] h-[520px] rounded-[32px]">
              <Image alt="Colombian Supremo" src={imgImg1} fill={true} className="object-cover rounded-[32px]" />
            </div>
            <div className="absolute top-[69px] left-[143px] w-[370px] h-[520px] border-[6px] border-primary-orange rounded-[32px]" />
            <p className="absolute top-0 left-[298px] -translate-x-1/2 font-italiana text-sm">by Patrick Langwallner on Unsplash</p>
          </div>
        </div>
      </div>
    </section>
  );
}

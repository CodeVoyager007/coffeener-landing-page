import Image from 'next/image';

const img = "https://www.figma.com/api/mcp/asset/0a05180b-6a4b-4868-9f54-ab57f5c76348";

export default function About() {
  return (
    <section id="about" className="py-[120px] w-full max-w-[1170px] mx-auto">
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[30px]">
          <h2 className="font-italiana text-5xl leading-[64px] text-general-body w-[670px]">
            Positive Statistics Highlight Success of Our Company
          </h2>
          <div className="flex items-end justify-between">
            <p className="font-inter font-light text-2xl leading-[40px] text-general-body w-[770px]">
              Strong sales, positive feedback, and sustainability practices showcase our commitment to excellence and growth
            </p>
            <button className="flex items-center gap-[10px] text-general-body font-inter text-base underline">
              <Image alt="arrow right" src={img} width={20} height={20} unoptimized={true} />
              More details
            </button>
          </div>
        </div>
        <div className="flex gap-[60px]">
          <div className="flex-1 flex flex-col gap-[60px]">
            <div className="bg-general-separator h-px w-full" />
            <p className="font-inter font-light text-base leading-8 text-general-body">
              Customers reported high levels of satisfaction with our product, citing its quality and effectiveness.
            </p>
            <p className="font-italiana text-4xl leading-[48px] text-general-body">
              92 %
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-[60px]">
            <div className="bg-general-separator h-px w-full" />
            <p className="font-inter font-light text-base leading-8 text-general-body">
              Colombian Supremo is the most popular Arabica coffee, accounting for 30% of all Arabica coffee sales worldwide.
            </p>
            <p className="font-italiana text-4xl leading-[48px] text-general-body">
              30 %
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-[60px]">
            <div className="bg-general-separator h-px w-full" />
            <p className="font-inter font-light text-base leading-8 text-general-body">
              Our product has received a great rating on average across all online review platforms, indicating its quality and effectiveness.
            </p>
            <p className="font-italiana text-4xl leading-[48px] text-general-body">
              4.8-star
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

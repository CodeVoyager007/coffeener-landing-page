export default function Hero() {
  return (
    <section id="hero" className="bg-general-body h-[1004px] w-full overflow-clip relative">
      
      <div className="absolute bg-primary-orange blur-[250px] -bottom-[808px] left-1/2 opacity-20 rounded-full w-[1108px] h-[1108px] -translate-x-1/2" />
      <div className="absolute top-[160px] left-1/2 -translate-x-1/2 w-[970px] text-center">
        <h1 className="font-italiana text-[100px] leading-[130px] text-white tracking-[2px]">
          The best <span className="text-primary-orange">Coffee</span> in your stunning world
        </h1>
      </div>
      <div className="absolute top-[500px] left-1/2 -translate-x-1/2 flex gap-[60px]">
        <button className="bg-primary-orange border-2 border-primary-orange rounded-[32px] px-[30px] py-[10px] font-bold text-general-body text-[16px] leading-[24px]">
          Get Coffeener
        </button>
        <button className="border-2 border-primary-orange rounded-[32px] px-[30px] py-[10px] font-bold text-white text-[16px] leading-[24px]">
          My Twitter
        </button>
      </div>
    </section>
  );
}

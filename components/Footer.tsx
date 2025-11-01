import Image from 'next/image';

const img4 = "https://www.figma.com/api/mcp/asset/a0b6bf7e-e6bc-482f-a935-5aeeba002b84";
const img5 = "https://www.figma.com/api/mcp/asset/b7cb5f2f-49fc-4607-a970-be52b4791c99";
const img6 = "https://www.figma.com/api/mcp/asset/cc8d9954-9850-451e-afa5-166775db618d";
const img7 = "https://www.figma.com/api/mcp/asset/c06f99a1-d990-4756-a1c7-ed8bb51a85f5";
const img8 = "https://www.figma.com/api/mcp/asset/8732a4ef-5016-4649-937b-3526e59ee668";
const img9 = "https://www.figma.com/api/mcp/asset/d39d8692-627d-469d-a303-c32248af6926";
const img10 = "https://www.figma.com/api/mcp/asset/d45dcbc5-0807-41c5-a737-7c070bbf0ac4";
const img11 = "https://www.figma.com/api/mcp/asset/e512bff7-a06c-4972-a802-d6d691fbed15";
const img12 = "https://www.figma.com/api/mcp/asset/7b458c46-0b66-4652-b887-169c8ffb2e66";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full max-w-[1170px] mx-auto py-[60px] flex flex-col items-center gap-[60px]">
        <div className="bg-general-separator h-px w-full" />
        <div className="flex items-center justify-between w-full">
          <h2 className="font-italiana text-5xl leading-[64px] text-general-body w-[670px]">
            Subscribe on our updates
          </h2>
          <div className="relative w-[470px] h-[72px] border-4 border-general-body rounded-[56px]">
            <input type="email" placeholder="Your email here" className="w-full h-full rounded-[56px] pl-[30px] font-inter font-light text-base" />
            <button className="absolute top-0 right-0 h-full w-[170px] bg-general-body rounded-r-[56px] text-white font-bold text-2xl">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="bg-general-body text-white">
        <div className="w-full max-w-[1170px] mx-auto h-[208px] flex items-center justify-between">
          <div className="flex flex-col gap-[30px]">
            <div className="flex gap-[60px] font-inter text-xs uppercase">
              <a href="#" className="text-primary-orange">Homepage</a>
              <a href="#" className="text-white">Our coffee</a>
              <a href="#" className="text-white">Features</a>
            </div>
            <div className="flex gap-[60px] font-inter text-xs uppercase">
              <a href="#" className="text-white">Blog</a>
              <a href="#" className="text-white">Single post</a>
              <a href="#" className="text-white">Figma Demo</a>
            </div>
          </div>
          <div className="h-[88px] w-[122px] relative">
            <div className="absolute inset-[55px_1.57px_8.87px_1.72px]">
              <Image alt="coffeener logo" fill={true} className="object-contain" src={img4} unoptimized={true} />
            </div>
            <div className="absolute bottom-[40px] left-[37px] right-[37px] top-0">
              <div className="absolute bottom-0 left-[12px] right-[12px] top-0">
                <Image alt="logo icon" fill={true} className="object-contain" src={img5} unoptimized={true} />
              </div>
              <div className="absolute bottom-0 left-[12px] right-[12px] top-[16px]">
                <Image alt="logo icon" fill={true} className="object-contain" src={img6} unoptimized={true} />
              </div>
              <div className="absolute inset-[28px_20px_12px_20px]">
                <Image alt="logo icon" fill={true} className="object-contain" src={img7} unoptimized={true} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex gap-[30px]">
              <a href="#" className="bg-white p-[8px] rounded-full"><Image alt="medium" src={img8} width={16} height={16} unoptimized={true} /></a>
              <a href="#" className="bg-white p-[8px] rounded-full"><Image alt="dribbble" src={img9} width={16} height={16} unoptimized={true} /></a>
            </div>
            <div className="flex gap-[30px]">
              <a href="#" className="bg-white p-[8px] rounded-full"><Image alt="behance" src={img10} width={16} height={16} unoptimized={true} /></a>
              <a href="#" className="bg-white p-[8px] rounded-full"><Image alt="linkedin" src={img11} width={16} height={16} unoptimized={true} /></a>
              <a href="#" className="bg-white p-[8px] rounded-full"><Image alt="twitter" src={img12} width={16} height={16} unoptimized={true} /></a>
            </div>
          </div>
        </div>
        <div className="bg-neutral-800 border-t border-general-body">
          <div className="w-full max-w-[1170px] mx-auto h-[54px] flex items-center justify-between text-base text-white">
            <p>© 2023 Coffeener. Some rights reserved.</p>
            <p>Made with <span className="text-primary-orange">❤️</span> Viacheslav by #fr0st2o11.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

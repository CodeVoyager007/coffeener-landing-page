import Image from 'next/image';

const img4 = "https://www.figma.com/api/mcp/asset/a0b6bf7e-e6bc-482f-a935-5aeeba002b84";
const img5 = "https://www.figma.com/api/mcp/asset/b7cb5f2f-49fc-4607-a970-be52b4791c99";
const img6 = "https://www.figma.com/api/mcp/asset/cc8d9954-9850-451e-afa5-166775db618d";
const img7 = "https://www.figma.com/api/mcp/asset/c06f99a1-d990-4756-a1c7-ed8bb51a85f5";

export default function Header() {
  return (
    <header className="bg-general-body h-[148px] w-full overflow-clip">
      <div className="relative h-full w-full max-w-[1170px] mx-auto flex items-center justify-between px-4">
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[88px] w-[122px]">
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
        <div className="flex items-center gap-[60px] text-xs uppercase font-inter">
          <a href="#hero" className="text-primary-orange">Homepage</a>
          <a href="#experience" className="text-white">Our coffee</a>
          <a href="#about" className="text-white">Features</a>
        </div>
        <div className="flex items-center gap-[60px] text-xs uppercase font-inter">
          <a href="#news" className="text-white">Blog</a>
          <a href="#" className="text-white">Single post</a>
          <a href="#" className="text-white underline">Figma Demo</a>
        </div>
      </div>
    </header>
  );
}

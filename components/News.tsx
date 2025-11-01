import Image from 'next/image';

const imgImg = "https://www.figma.com/api/mcp/asset/7875c3e9-900b-47b1-9031-33eff32052ec";
const img2 = "https://www.figma.com/api/mcp/asset/56ed97e0-a91b-4d0f-a214-303c78fc3980";
const img3 = "https://www.figma.com/api/mcp/asset/e5aaf768-c6d8-4dfe-ad0d-0d3ce9819e2c";
const imgLayer2 = "https://www.figma.com/api/mcp/asset/2cecd542-732d-4a24-81c2-2a8bede60b80";

function BlogItemHome({ image, title, author }: { image: string, title: string, author: string }) {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="relative w-[370px] h-[320px] rounded-[32px]">
        <Image alt={title} src={image} fill={true} className="object-cover rounded-[32px]" />
      </div>
      <div className="font-inter font-light text-2xl leading-[40px] text-general-body">
        <p className="mb-0">{title}</p>
        <p>{author}</p>
      </div>
    </div>
  );
}

function IconsUpRightArrow() {
    return (
        <div className="w-[40px] h-[40px] relative">
            <Image alt="up right arrow" src={imgLayer2} fill={true} className="object-contain" unoptimized={true} />
        </div>
    )
}

export default function News() {
  return (
    <section id="news" className="py-[120px] w-full max-w-[1170px] mx-auto">
      <div className="flex items-end justify-between mb-[60px]">
        <h2 className="font-italiana text-5xl leading-[64px] text-general-body w-[670px]">
          Coffee Insights: Exploring the World of Specialty Coffee
        </h2>
        <button className="border-4 border-general-separator p-[30px] rounded-[24px]">
          <IconsUpRightArrow />
        </button>
      </div>
      <div className="flex gap-[30px]">
        <BlogItemHome image={imgImg} title="Hygge Vibes" author="By Rizky Subagja on Unsplash" />
        <BlogItemHome image={img2} title="By GC Libraries" author="Creative Tech Lab on Unsplash" />
        <BlogItemHome image={img3} title="Coffee" author="By Harry Brewer on Unsplash" />
      </div>
    </section>
  );
}

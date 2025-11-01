import Image from 'next/image';

const imgVideo = "/video-thumbnail.jpeg";
const imgPlay = "https://www.figma.com/api/mcp/asset/5259d582-0ce2-423e-b23d-fdd44c55c536";

export default function Video() {
  return (
    <section className="relative h-[600px] w-full max-w-[1170px] mx-auto rounded-4xl overflow-clip shadow-lg mt-[-100px]">
      <Image alt="video thumbnail" src={imgVideo} fill={true} className="object-cover" />
      <div className="absolute inset-0 bg-general-body bg-opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button>
          <Image alt="play button" src={imgPlay} width={88} height={88} unoptimized={true} />
        </button>
      </div>
      <p className="absolute bottom-4 right-4 font-italiana text-white text-sm">
        by Yanapi Senaud on Unsplash
      </p>
    </section>
  );
}

import AnimateUp from "@/components/animate-up";
import key1 from "@/public/key1.svg";
import key2 from "@/public/key2.svg";
import key3 from "@/public/key3.svg";
import Image from "next/image";

const keyTracksData = [
  {
    title: "Equitable Public Policies and Governance",
    icon: key2,
    description: [
      "AI for inclusive, data-driven policymaking.",
      "To address disparities in healthcare, education, and housing.",
    ],
  },
  {
    title: "Climate Impact and Sustainability",
    icon: key3,
    description: [
      "AI-driven solutions for climate change, resource optimization, and green energy.",
      "Smarter urban planning and responsible waste management powered by technology.",
    ],
  },
  {
    title: "Economic Growth and Workforce Transformation",
    icon: key1,
    description: [
      "Role of AI in enhancing efficiency and scalability.",
      "Preparing talent for the evolving job market through skill-based innovation.",
    ],
  },
];

export default function KeyTracks() {
  return (
    <div className="flex flex-col gap-8 my-6 w-5/6 mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold">
        Key <span className="text-primary">Tracks</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-content-center place-items-center">
        {keyTracksData.map((track, index) => (
          <AnimateUp key={index}>
            <div className="rounded-xl shadow-lg w-72 flex flex-col items-center gap-3 relative">
              <div className="w-full rounded-t-xl bg-primary text-white p-3 font-semibold text-center">
                {track.title}
              </div>
              <div className="absolute -top-8">
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <title>triangle-filled</title>
                  <g fill="currentColor">
                    <path d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z" />
                  </g>
                </svg>
              </div>
              <Image src={track.icon} alt="" className="size-10 mx-auto" />
              <p className="p-3 flex flex-col gap-3 text-center">
                {track.description.map((desc, idx) => (
                  <span key={idx}>{desc}</span>
                ))}
              </p>
            </div>
          </AnimateUp>
        ))}
      </div>
    </div>
  );
}

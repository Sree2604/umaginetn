import AnimateUp from "@/components/animate-up";
import key1 from "@/public/key1.svg";
import key2 from "@/public/key2.svg";
import key3 from "@/public/key3.svg";
import Image from "next/image";

export default function KeyTracks() {
  return (
    <div className="flex flex-col gap-5 my-6 w-5/6 mx-auto">
      <h2 className="text-2xl font-bold">
        Key <span className="text-primary">Tracks</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-content-center place-items-center">
        <AnimateUp>
          <div className="rounded-xl shadow-lg w-72 flex flex-col gap-3">
            <div className="w-full rounded-t-xl bg-primary text-white p-3 font-semibold">
              Equitable Public Policies and Governance
            </div>
            <Image src={key2} alt="" className="size-10 mx-auto" />
            <p className="p-3 flex flex-col gap-3">
              <span>Al for inclusive, data-driven policymaking.</span>
              <span>
                To address disparities in healthcare, education, and housing.
              </span>
            </p>
          </div>
        </AnimateUp>
        <AnimateUp>
          <div className="rounded-xl shadow-lg w-72 flex flex-col gap-3">
            <div className="w-full rounded-t-xl bg-primary text-white p-3 font-semibold">
              Climate Impact and Sustainability
            </div>
            <Image src={key3} alt="" className="size-10 mx-auto" />
            <p className="p-3 flex flex-col gap-3">
              <span>
                Al-driven solutions for climate change, resource optimization,
                and green energy,
              </span>
              <span>
                Smarter urban planning and responsible waste management powered
                by technology.
              </span>
            </p>
          </div>
        </AnimateUp>
        <AnimateUp>
          <div className="rounded-xl shadow-lg w-72 flex flex-col gap-3">
            <div className="w-full rounded-t-xl bg-primary text-white p-3 font-semibold">
              Economic Growth and Workforce Transformation
            </div>
            <Image src={key1} alt="" className="size-10 mx-auto" />
            <p className="p-3 flex flex-col gap-3">
              <span>Role of Al in enhancing efficiency and scalability.</span>
              <span>
                Preparing talent for the evolving job market through skill-based
                innovation.
              </span>
            </p>
          </div>
        </AnimateUp>
      </div>
    </div>
  );
}

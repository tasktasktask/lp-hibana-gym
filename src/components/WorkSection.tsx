/* eslint-disable @next/next/no-img-element -- pixel-perfect Figma recreation with cropped/masked images that don't fit next/image's layout model */
import { SectionTitle } from "./SectionTitle";

const WORK_ITEMS = [
  {
    icon: "/images/rectangle46.png",
    title: ["全店舗の利用が無料"],
    description: ["全国218店舗を自分のジムとして", "使えます。"],
  },
  {
    icon: "/images/rectangle47.png",
    title: ["資格取得の", "受験費用を負担"],
    description: ["JATI・NSCA等、取得希望の資格受験費用を全額負担します。"],
  },
  {
    icon: "/images/rectangle48.png",
    title: ["全社表彰制度", "HIBANA AWARD"],
    description: ["半年ごとに優秀なスタッフを全社で", "称える制度です。"],
  },
  {
    icon: "/images/rectangle49.png",
    title: ["年25〜30店舗の", "出店ペース"],
    description: ["出店に伴い、新しいポジションが", "毎年生まれます。"],
  },
];

function WorkCard({
  item,
  size = "desktop",
}: {
  item: (typeof WORK_ITEMS)[number];
  size?: "mobile" | "desktop";
}) {
  const isMobile = size === "mobile";
  return (
    <div
      className={
        isMobile
          ? "flex h-[300px] w-[240px] shrink-0 flex-col items-center gap-[17px] rounded-[6px] border-[3px] border-brand-orange bg-white px-[18px] pt-[34px]"
          : "flex h-[270px] w-[280px] flex-col items-center justify-center gap-[20px] rounded-[6px] border-[3px] border-brand-orange bg-white px-[18px] py-[20px]"
      }
    >
      <div className="relative h-[71px] w-[90px] overflow-hidden">
        <img
          src={item.icon}
          alt=""
          className="absolute left-[-92%] top-[-59%] h-[240%] w-[284%] max-w-none object-cover"
        />
      </div>
      <div className="text-center text-[24px] font-bold leading-[1.2] text-brand-orange">
        {item.title.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="w-[200px] text-center text-[14px] leading-[1.35] text-brand-ink lg:w-[240px]">
        {item.description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export function WorkSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f5f5] py-[80px] lg:py-[120px]">
      <img
        src="/images/section2-bg.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />

      <div className="relative flex flex-col items-start gap-[38px] px-[29px] lg:mx-auto lg:w-[1200px] lg:gap-0 lg:px-0">
        <div className="flex flex-col items-start gap-[17px] lg:gap-0">
          <SectionTitle number="05" label="WORK" />

          <h3 className="text-[24px] font-bold leading-[1.5] text-[#323232] lg:pt-[20px] lg:text-[44px] lg:leading-[1.3] lg:text-brand-ink">
            <span className="lg:hidden">
              挑戦を続けるための仕組み
              <br />
              があります
            </span>
            <span className="hidden lg:inline">挑戦を続けるための仕組みがあります</span>
          </h3>
        </div>

        {/* mobile: horizontal scroll */}
        <div className="-mx-[29px] flex w-[calc(100%+58px)] gap-[24px] overflow-x-auto px-[29px] pb-[6px] lg:hidden">
          {WORK_ITEMS.map((item) => (
            <WorkCard key={item.title.join()} item={item} size="mobile" />
          ))}
        </div>

        {/* desktop: static row */}
        <div className="hidden gap-[27px] pt-[40px] lg:flex">
          {WORK_ITEMS.map((item) => (
            <WorkCard key={item.title.join()} item={item} size="desktop" />
          ))}
        </div>
      </div>
    </section>
  );
}

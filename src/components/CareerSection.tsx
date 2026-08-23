/* eslint-disable @next/next/no-img-element -- pixel-perfect Figma recreation with cropped/masked images that don't fit next/image's layout model */
import { SectionTitle } from "./SectionTitle";

const CAREER_STEPS = [
  { number: "01", title: "トレーナー", description: "メンバーへの指導と接客対応" },
  { number: "02", title: "店長候補", description: "店舗マネジメントを学ぶ" },
  { number: "03", title: "店長", description: "スタッフと数字を預かる" },
  {
    number: "04",
    title: "エリアマネージャー/本社職",
    description: "複数店舗または本社機能",
  },
];

const POSITIONS = [
  "店舗職：パーソナルトレーナー",
  "店舗職：フロントスタッフ",
  "本社職：マーケティング",
  "本社職：人事・採用",
];

function CareerStepCard({
  step,
  size = "desktop",
}: {
  step: (typeof CAREER_STEPS)[number];
  size?: "mobile" | "desktop";
}) {
  const isMobile = size === "mobile";
  return (
    <div
      className={
        isMobile
          ? "relative h-[96px] w-[250px] shrink-0"
          : "relative h-[109px] w-[285px]"
      }
    >
      <img src="/images/career-pass.svg" alt="" className="absolute inset-0 h-full w-full" />
      <div
        className={
          isMobile
            ? "absolute left-[35px] right-[30px] top-[22px] flex flex-col items-start gap-[2px]"
            : "absolute left-[38px] right-[33px] top-[24px] flex flex-col items-start gap-[3px]"
        }
      >
        <span
          className={
            isMobile
              ? "absolute -left-[30px] -top-[41px] flex h-[41px] w-[41px] items-center justify-center rounded-full border-2 border-brand-ink bg-white"
              : "absolute -left-[34px] -top-[47px] flex h-[47px] w-[47px] items-center justify-center rounded-full border-2 border-brand-ink bg-white"
          }
        >
          <span className={`font-anton text-brand-ink ${isMobile ? "text-[21px]" : "text-[24px]"}`}>
            {step.number}
          </span>
        </span>
        <p className={`font-bold leading-[1.2] text-white ${isMobile ? "text-[18px]" : "text-[20px]"}`}>
          {step.title}
        </p>
        <p className={`leading-[1.3] text-white ${isMobile ? "text-[14px]" : "text-[16px]"}`}>
          {step.description}
        </p>
      </div>
    </div>
  );
}

export function CareerSection() {
  return (
    <section className="w-full bg-white px-[29px] py-[80px] lg:px-0 lg:py-[120px]">
      <div className="flex flex-col items-start lg:mx-auto lg:w-[1200px]">
        <SectionTitle number="04" label="CAREER" />

        <h3 className="pt-[16px] text-[24px] font-bold leading-[1.5] text-[#323232] lg:pt-[20px] lg:text-[44px] lg:leading-[1.3] lg:text-brand-ink">
          充実のキャリアパス
        </h3>

        <p className="pt-[16px] text-[16px] leading-[1.5] text-brand-ink lg:text-[18px] lg:leading-[1.9]">
          <span className="lg:hidden">店舗から本社まで、道はつながっています。</span>
          <span className="hidden lg:inline">
            本社社員の41%が、店舗から来た人です。制度としても、 実績としても、道はつながっています。
          </span>
        </p>

        {/* mobile: horizontal scroll career steps */}
        <div className="-mx-[29px] flex w-[calc(100%+58px)] gap-[18px] overflow-x-auto px-[29px] pt-[64px] pb-[6px] lg:hidden">
          {CAREER_STEPS.map((step) => (
            <CareerStepCard key={step.number} step={step} size="mobile" />
          ))}
        </div>

        {/* desktop: static row */}
        <div className="hidden gap-[18px] pt-[64px] lg:flex">
          {CAREER_STEPS.map((step) => (
            <CareerStepCard key={step.number} step={step} size="desktop" />
          ))}
        </div>

        <div className="w-full pt-[48px]">
          <div className="flex flex-col gap-[11px] border-l-[3px] border-brand-orange pl-[20px] lg:gap-[12px]">
            <h4 className="text-[20px] font-bold text-brand-ink lg:text-[26px]">社内公募制度</h4>
            <div className="text-[15px] leading-[1.7] text-brand-ink lg:text-[16px] lg:leading-[1.6]">
              <p className="lg:hidden text-justify">
                入社2年目以降、希望するポジションに自ら手を挙げられる制度です。店舗職から本社職へのキャリアチェンジも、この制度から生まれています。
              </p>
              <p className="hidden lg:block">入社2年目以降、希望するポジションに自ら手を挙げられる制度です。</p>
              <p className="hidden lg:block">店舗職から本社職へのキャリアチェンジも、この制度から生まれています。</p>
            </div>
          </div>
        </div>

        {/* mobile: tag + list */}
        <div className="flex w-full flex-col items-start gap-[11px] pt-[40px] lg:hidden">
          <span className="flex items-center justify-center bg-brand-orange px-[12px] py-[2px]">
            <span className="text-[11px] font-bold tracking-[2.75px] text-white">募集職種</span>
          </span>
          <div className="flex w-full flex-col items-start">
            {POSITIONS.map((position) => (
              <div key={position} className="flex w-full gap-[8px] border-b border-[#d8d8d8] py-[10px]">
                <span className="text-[18px] font-black text-brand-orange">•</span>
                <p className="text-[15px] text-brand-ink">{position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* desktop: label + 2-col grid */}
        <div className="hidden w-full pt-[40px] lg:block">
          <p className="text-[11px] font-anton tracking-[2.75px] text-[#999]">募集職種</p>
          <div className="grid grid-cols-2 border-t border-[#ebebeb]">
            {POSITIONS.map((position) => (
              <div
                key={position}
                className="flex items-center gap-[12px] border-b border-[#ebebeb] py-[14px]"
              >
                <span className="text-[18px] font-black text-brand-orange">•</span>
                <p className="text-[15px] text-brand-ink">{position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

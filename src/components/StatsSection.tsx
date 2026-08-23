/* eslint-disable @next/next/no-img-element -- pixel-perfect Figma recreation with cropped/masked images that don't fit next/image's layout model */
import { SectionTitle } from "./SectionTitle";

const STATS = [
  {
    value: "3",
    unit: "ヶ月",
    description: "研修を終えたら、自分の担当会員を持ちます",
  },
  {
    value: "41",
    unit: "%",
    description: "本社社員のうち、店舗から来た人の割合です",
  },
  {
    value: "2.8",
    unit: "年",
    description: "入社から店長になるまでの平均年数です",
  },
  {
    value: "218",
    unit: "店舗",
    description: "全国38都道府県。全店舗を無料で使えます",
  },
];

export function StatsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-[29px] py-[80px] lg:px-0 lg:py-[120px]">
      <img
        src="/images/section1-bg.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />

      <div className="relative flex flex-col items-start lg:mx-auto lg:w-[1200px]">
        <SectionTitle number="03" label="ABOUT" />

        <h3 className="pt-[17px] text-[24px] font-bold leading-[1.5] text-[#323232] lg:pt-[20px] lg:text-[44px] lg:leading-[1.3] lg:text-brand-ink">
          数字で見るHIBANA GYM 24
        </h3>

        <div className="pt-[16px] text-[16px] leading-[1.5] text-brand-ink lg:text-[18px] lg:leading-[1.9]">
          <p>HIBANA GYM 24には、入社してから成長していくまでの環境や実績が豊富です。</p>
          <p>条件の一覧には載らない部分を、先に出しておきます。</p>
        </div>

        <div className="grid grid-cols-2 gap-x-[15px] gap-y-[26px] pt-[26px] lg:flex lg:gap-[28px] lg:pt-[56px]">
          {STATS.map((stat) => (
            <div
              key={stat.description}
              className="flex h-[160px] w-[160px] flex-col items-center justify-center rounded-[10px] border-[1.6px] border-brand-orange bg-white lg:h-[280px] lg:w-[280px] lg:border-[3px]"
            >
              <div className="flex items-end gap-[1px] text-brand-orange">
                <span className="font-anton text-[53px] leading-[1.05] lg:text-[93px]">
                  {stat.value}
                </span>
                <span className="pb-[2px] text-[26px] font-black leading-[1.05] lg:pb-[4px] lg:text-[44px]">
                  {stat.unit}
                </span>
              </div>
              <p className="w-[135px] pt-[8px] text-center text-[11px] leading-[1.4] text-brand-ink lg:w-[237px] lg:pt-[14px] lg:text-[20px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

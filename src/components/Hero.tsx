/* eslint-disable @next/next/no-img-element -- pixel-perfect Figma recreation with cropped/masked images that don't fit next/image's layout model */
export function Hero() {
  return (
    <>
      {/* mobile hero */}
      <section className="relative h-[540px] w-full overflow-hidden bg-white lg:hidden">
        <img
          src="/images/bg-fv.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />

        <img
          src="/images/kv-woman1.png"
          alt="トレーナーの女性スタッフ"
          className="absolute left-[10px] top-[184px] h-[390px] w-[325px] object-cover object-top"
        />

        <div className="absolute left-[-1px] top-[9px] h-[59px] w-[148px]">
          <div className="h-full w-full -rotate-[9.63deg]">
            <img
              src="/images/font-tegaki.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="absolute left-[21px] top-[54px] h-[56px] w-[115px] bg-gradient-to-r from-[#ff2b1c] to-[#ff5c1c]">
          <img
            src="/images/text-chosen.svg"
            alt="挑戦は"
            className="absolute -left-[1px] top-[1px] h-[55px] w-[112px]"
          />
        </div>

        <img
          src="/images/text-saikou.svg"
          alt="最高"
          className="absolute left-[23px] top-[115px] h-[58px] w-[112px]"
        />

        <img
          src="/images/text-ni.svg"
          alt="に"
          className="absolute left-[142px] top-[119px] h-[51px] w-[50px]"
        />

        <div className="absolute left-[199px] top-[110px] h-[63px] w-[172px] bg-gradient-to-r from-[#ff2b1c] to-[#ff5c1c]">
          <img
            src="/images/text-tanoshii.svg"
            alt="楽しい"
            className="absolute left-[2px] top-[1px] h-[60px] w-[167px]"
          />
        </div>

        <img
          src="/images/vector.svg"
          alt=""
          className="absolute left-[141px] top-[58px] h-[49px] w-[51px]"
        />

        <a
          href="#people"
          className="absolute left-1/2 top-[494px] flex h-[33px] w-[240px] -translate-x-1/2 items-center gap-[6px] whitespace-nowrap rounded-full border-[1px] border-white bg-[#202020] pl-[8px] pr-[12px] transition-opacity hover:opacity-80"
        >
          <img src="/images/group81.svg" alt="" className="h-[16px] w-[16px] shrink-0" />
          <p className="whitespace-nowrap text-[10px] font-bold tracking-[-0.3px] text-white">
            <span className="text-[13px]">2025年入社 佐伯澪</span>
            <span className="text-[10px]">さん </span>
            <span className="text-[13px]">インタビュー</span>
          </p>
        </a>
      </section>

      {/* desktop hero */}
      <section className="relative hidden w-full bg-white lg:block">
        <div className="relative mx-auto aspect-[1440/667] w-full max-w-[1440px] overflow-hidden [container-type:inline-size]">
        <div
          className="absolute left-0 top-0 h-[667px] w-[1440px] origin-top-left"
          style={{ transform: "scale(min(1, calc(100cqw / 1440px)))" }}
        >
        {/* background photo */}
        <img
          src="/images/bg-fv.png"
          alt=""
          className="absolute left-1/2 top-[calc(50%+69.5px)] h-[810px] w-[1440px] -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
        />

        {/* handwritten rotated headline */}
        <div className="absolute left-[123px] top-[19px] h-[185px] w-[366px]">
          <div className="h-full w-full -rotate-[16.62deg]">
            <img
              src="/images/font-tegaki.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* gradient collage: 挑戦は */}
        <div className="absolute left-[254px] top-[130px] h-[130px] w-[266px] bg-gradient-to-r from-[#ff2b1c] to-[#ff5c1c]">
          <img
            src="/images/text-chosen.svg"
            alt="挑戦は"
            className="absolute -left-[3px] top-[2px] h-[126px] w-[260px]"
          />
        </div>

        {/* 最高 */}
        <img
          src="/images/text-saikou.svg"
          alt="最高"
          className="absolute left-[259px] top-[271px] h-[133px] w-[258px]"
        />

        {/* に */}
        <img
          src="/images/text-ni.svg"
          alt="に"
          className="absolute left-[531px] top-[281px] h-[117px] w-[115px]"
        />

        {/* gradient collage: 楽しい */}
        <div className="absolute left-[253px] top-[419px] h-[144px] w-[396px] bg-gradient-to-r from-[#ff2b1c] to-[#ff5c1c]">
          <img
            src="/images/text-tanoshii.svg"
            alt="楽しい"
            className="absolute left-[5px] top-[3px] h-[138px] w-[386px]"
          />
        </div>

        {/* sparkle vector */}
        <img
          src="/images/vector.svg"
          alt=""
          className="absolute left-[531px] top-[140px] h-[112px] w-[118px]"
        />

        {/* kv woman photo */}
        <img
          src="/images/kv-woman1.png"
          alt="トレーナーの女性スタッフ"
          className="absolute left-[577px] top-[5px] h-[819px] w-[683px] object-cover"
        />

        {/* interview pill CTA */}
        <a
          href="#people"
          className="absolute left-[928px] top-[581px] flex h-[33px] w-[360px] items-center gap-[8px] whitespace-nowrap rounded-full border-[1px] border-white bg-[#202020] pl-[10px] pr-[14px] transition-opacity hover:opacity-80"
        >
          <img src="/images/group81.svg" alt="" className="h-[23px] w-[22px] shrink-0" />
          <p className="whitespace-nowrap text-[14px] font-bold tracking-[-0.4px] text-white">
            <span className="text-[17px]">2025年入社 佐伯澪</span>
            <span className="text-[13px]">さん </span>
            <span className="text-[17px]">インタビュー</span>
          </p>
        </a>
        </div>
        </div>
      </section>
    </>
  );
}

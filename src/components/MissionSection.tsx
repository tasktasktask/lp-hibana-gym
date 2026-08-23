/* eslint-disable @next/next/no-img-element -- pixel-perfect Figma recreation with cropped/masked images that don't fit next/image's layout model */
export function MissionSection() {
  return (
    <section className="relative w-full bg-[#ff5b1c]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/images/section-bg.png')] bg-cover bg-bottom opacity-30 mix-blend-overlay"
      />

      {/* mobile */}
      <div className="relative flex flex-col gap-[19px] px-[20px] py-[93px] lg:hidden">
        <h2 className="text-[32px] font-black leading-[1.38] text-white">
          人が変わる瞬間に、
          <br />
          伴走する会社。
        </h2>

        <div className="text-[14px] leading-[1.8] text-white">
          <p>
            1年目の自分は、誰に対して何をしているのか。 店舗に立った、その先には何があるのか。
            ここで働いているのは、どんな人たちなのか。 会社を選ぶときに知りたいのは、たぶんこのあたりです。
          </p>
          <p>条件の一覧では、ここが埋まりません。</p>
          <p>HIBANA GYM 24の仕事は、人が変わる瞬間に立ち会う仕事です。</p>
        </div>

        <div className="flex gap-[15px]">
          <img
            src="/images/work04.png"
            alt="オフィスで書類を確認するスタッフ"
            className="h-[106px] w-[160px] rounded-[4px] object-cover"
          />
          <img
            src="/images/work02.png"
            alt="トレーナーが会員を指導している様子"
            className="h-[106px] w-[160px] rounded-[4px] object-cover"
          />
        </div>
      </div>

      {/* desktop */}
      <div className="hidden w-full flex-col items-center py-[120px] lg:flex">
        <div className="relative flex w-[1200px] flex-col gap-[30px]">
          <h2
            className="-skew-x-5 bg-gradient-to-br from-[#f5f5f5] to-white bg-clip-text font-black text-transparent"
            style={{ fontSize: "61px", lineHeight: 1.38 }}
          >
            人が変わる瞬間に、
            <br />
            伴走する会社。
          </h2>

          <div className="w-[640px] text-[18px] leading-[34px] text-white">
            <p>1年目の自分は、誰に対して何をしているのか。</p>
            <p>店舗に立った、その先には何があるのか。</p>
            <p>ここで働いているのは、どんな人たちなのか。</p>
            <p>会社を選ぶときに知りたいのは、たぶんこのあたりです。</p>
            <p>条件の一覧では、ここが埋まりません。</p>
            <p>HIBANA GYM 24の仕事は、人が変わる瞬間に立ち会う仕事です。</p>
          </div>

          <img
            src="/images/work04.png"
            alt="オフィスで書類を確認するスタッフ"
            className="absolute right-[158px] -top-[52px] h-[246px] w-[361px] rounded-[4px] object-cover object-bottom shadow-lg"
          />
          <img
            src="/images/work02.png"
            alt="トレーナーが会員を指導している様子"
            className="absolute right-[46px] top-[219px] h-[246px] w-[369px] rounded-[4px] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

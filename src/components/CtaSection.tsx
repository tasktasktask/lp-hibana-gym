import { EntryButton } from "./EntryButton";

export function CtaSection() {
  return (
    <section
      id="entry"
      className="w-full bg-brand-ink px-[29px] py-[72px] lg:px-0 lg:py-[90px]"
    >
      <div className="mx-auto flex w-full max-w-[700px] flex-col items-center gap-[20px] lg:gap-[8px]">
        <h2 className="text-center text-[28px] font-bold leading-[1.25] text-white lg:text-[53px] lg:font-black lg:leading-[1.17]">
          エントリーフォーム
        </h2>
        <p className="text-center text-[15px] leading-[1.5] text-white/60 lg:pt-[16px] lg:text-[16px] lg:leading-[1.78]">
          説明会・面談は、応募を決めていない段階でも
          <br className="lg:hidden" />
          参加できます。
        </p>

        <div className="flex flex-col items-center gap-[14px] pt-[19px] lg:gap-[20px] lg:pt-[39px]">
          <EntryButton />
          <p className="text-center text-[12px] leading-[18px] text-white/60 lg:text-white/35">
            職種の選択は次のフォームで行います。
          </p>
        </div>
      </div>
    </section>
  );
}

/* eslint-disable @next/next/no-img-element -- pixel-perfect Figma recreation with cropped/masked images that don't fit next/image's layout model */
import { EntryButton } from "./EntryButton";
import { PeopleCarousel } from "./PeopleCarousel";
import { SectionTitle } from "./SectionTitle";

const VOICES = [
  {
    photo: "/images/kv29.png",
    name: "佐伯 澪",
    role: "トレーナー ／ 入社1年目・23歳",
    heading: "入社3ヶ月で、会員さんの人生が変わる瞬間に立ち会った。",
    body: "HIBANA ACADEMYの3ヶ月で、解剖学から接客まで基礎を徹底的に学びました。最初は知識ゼロでしたが、先輩の丁寧なサポートのおかげで乗り越えられました。会員さんが目標を達成した瞬間に立ち会えることが、この仕事の一番の醍醐味です。未経験でも、やる気があればしっかりスタートできる環境だと実感しています。",
  },
  {
    photo: "/images/kv18.png",
    name: "長谷部 陸",
    role: "渋谷店 店長 ／ 入社3年目・25歳",
    heading: "25歳、部下18人。数字も人も預かる店長という仕事。",
    body: "入社2年半で渋谷店の店長に昇格し、現在18名のスタッフと働いています。売上管理とスタッフ育成を同時に進める難しさは、やりがいにも直結しています。若くして大きな責任を持てるこの環境が、自分を一番成長させてくれています。店長になって改めて、現場で培った経験の価値に気づかされます。",
  },
  {
    photo: "/images/kv36.png",
    name: "宮田 千夏",
    role: "エリアマネージャー ／ 入社5年目・27歳",
    heading: "7店舗、130人。私のキャリアは、現場の1年目から地続きです。",
    body: "店舗トレーナーを経て店長になり、3年前からエリアマネージャーを担当しています。現在は7店舗・130名のスタッフをサポートする立場で仕事をしています。現場出身だからこそ、数字の裏にあるスタッフの動きが見えると感じています。この会社で働く限り、キャリアの可能性が途切れることはないと確信しています。",
  },
];

export function PeopleSection() {
  return (
    <section id="people" className="w-full bg-white py-[70px] lg:py-[140px]">
      <div className="flex flex-col items-start gap-[26px] lg:mx-auto lg:w-[1200px] lg:gap-0">
        <div className="flex flex-col items-start gap-[16px] px-[29px] lg:gap-0 lg:px-0">
          <SectionTitle number="06" label="PEOPLE" />

          <h3 className="text-[24px] font-bold leading-[1.5] text-[#323232] lg:pt-[20px] lg:text-[44px] lg:leading-[1.3] lg:text-brand-ink">
            変化の隣に、立つ人たち。
          </h3>

          <p className="text-[16px] leading-[1.5] text-brand-ink lg:pt-[16px] lg:text-[18px] lg:leading-[1.9]">
            1年目も、3年目も、5年目も。キャリアのどの地点にも、火花のそばで働く先輩がいます。
          </p>
        </div>

        {/* mobile: carousel */}
        <div className="w-full lg:hidden">
          <PeopleCarousel />
        </div>

        {/* desktop: static row */}
        <div className="hidden justify-center gap-[60px] py-[40px] lg:flex">
          {VOICES.map((voice) => (
            <div key={voice.name} className="flex w-[335px] flex-col gap-[13px]">
              <div className="h-[450px] w-[335px] overflow-hidden rounded-[4px]">
                <img
                  src={voice.photo}
                  alt={voice.name}
                  className="h-full w-full object-cover object-bottom"
                />
              </div>
              <div className="flex flex-col gap-[25px] pt-[20px] text-brand-ink">
                <div className="flex flex-col gap-[11px]">
                  <p className="text-[32px] font-black leading-none">{voice.name}</p>
                  <p className="text-[16px] tracking-[0.88px]">{voice.role}</p>
                </div>
                <p className="text-[20px] font-bold leading-[1.5]">{voice.heading}</p>
                <p className="text-justify text-[16px] leading-[1.8]">{voice.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-center pt-[10px] lg:pt-[39px]">
          <EntryButton />
        </div>
      </div>
    </section>
  );
}

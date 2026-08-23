/* eslint-disable @next/next/no-img-element -- pixel-perfect Figma recreation with cropped/masked images that don't fit next/image's layout model */
"use client";

import { useState } from "react";

const VOICES = [
  {
    photo: "/images/kv36.png",
    name: "宮田 千夏",
    role: "エリアマネージャー ／ 入社5年目・27歳",
    heading: "7店舗、130人。私のキャリアは、現場の1年目から地続きです。",
    body: "店舗トレーナーを経て店長になり、3年前からエリアマネージャーを担当しています。現在は7店舗・130名のスタッフをサポートする立場で仕事をしています。現場出身だからこそ、数字の裏にあるスタッフの動きが見えると感じています。この会社で働く限り、キャリアの可能性が途切れることはないと確信しています。",
  },
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
];

const CARD_WIDTH = 280;
const GAP = 22;
const CONTAINER_WIDTH = 393;

export function PeopleCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const offset =
    (CONTAINER_WIDTH - CARD_WIDTH) / 2 - activeIndex * (CARD_WIDTH + GAP);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex items-end gap-[22px] pb-[6px] transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {VOICES.map((voice, index) => (
          <div
            key={voice.name}
            className={`flex w-[280px] shrink-0 flex-col gap-[11px] transition-opacity duration-300 ${
              index === activeIndex ? "opacity-100" : "opacity-50"
            }`}
          >
            <div className="h-[376px] w-[280px] overflow-hidden rounded-[4px]">
              <img
                src={voice.photo}
                alt={voice.name}
                className="h-full w-full object-cover object-bottom"
              />
            </div>
            <div className="flex flex-col gap-[17px] pt-[17px] text-brand-ink">
              <div className="flex flex-col gap-[9px]">
                <p className="text-[27px] font-black leading-none">{voice.name}</p>
                <p className="text-[13px] tracking-[0.7px]">{voice.role}</p>
              </div>
              <p className="text-[17px] font-bold leading-[1.5]">{voice.heading}</p>
              <p className="text-justify text-[13px] leading-[1.8]">{voice.body}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="前の社員の声"
        onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
        disabled={activeIndex === 0}
        className="absolute left-[13px] top-[214px] h-[50px] w-[50px] rotate-180 disabled:opacity-40"
      >
        <img src="/images/carousel-arrow-prev.svg" alt="" className="h-full w-full" />
      </button>
      <button
        type="button"
        aria-label="次の社員の声"
        onClick={() => setActiveIndex((i) => Math.min(VOICES.length - 1, i + 1))}
        disabled={activeIndex === VOICES.length - 1}
        className="absolute right-[13px] top-[214px] h-[50px] w-[50px] disabled:opacity-40"
      >
        <img src="/images/carousel-arrow-next.svg" alt="" className="h-full w-full" />
      </button>
    </div>
  );
}

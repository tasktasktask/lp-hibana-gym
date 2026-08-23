"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };
type FaqCategory = { category: string; items: FaqItem[] };

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    category: "選考について",
    items: [
      {
        question: "選考のフローとスケジュールを教えてください。",
        answer:
          "エントリー後、まずは書類選考を行い、通過者の方には面接（2回を予定）と適性検査を受けていただきます。最初のエントリーから内定までは、通常3週間から1ヶ月程度を予定しております。",
      },
      {
        question: "初任給はいくらですか。",
        answer:
          "新卒採用および未経験者採用の場合、基本給は月給23万円からとなります（各種諸手当は別途支給）。中途採用で同業界での実務経験がある方は、前職の給与やスキルを考慮の上優遇いたします。",
      },
      {
        question: "応募にあたって、事前に準備するものはありますか。",
        answer:
          "履歴書（写真貼付）と職務経歴書をご用意ください。トレーナー職を志望される方で、フィットネス関連の資格を保有している場合や大会実績がある場合は、その証明書や実績資料のコピーもご提出ください。",
      },
    ],
  },
  {
    category: "勤務地について",
    items: [
      {
        question: "希望の勤務地を選ぶことはできますか？",
        answer:
          "選考時に希望の店舗や勤務エリアについてヒアリングを行い、最大限考慮した上で配属先を決定します。ただし、店舗ごとの採用状況や人員配置により、第2希望以降の配属となる場合もございます。",
      },
      {
        question: "入社後に転勤はありますか？",
        answer:
          "地域限定の「エリア職」として入社された場合は、原則として転居を伴う転勤はありません。一方、キャリアアップや管理職を目指す「総合職」の場合は、新店オープン等に伴い転勤が発生する場合がございます。",
      },
      {
        question: "勤務地の希望は面接で確認できますか？",
        answer:
          "はい、一次面接および最終面接の際に、ご希望の勤務エリアや通勤可能時間について詳しくお伺いします。不安な点やご家族の事情なども含め、お気軽に面接官までご相談ください。",
      },
    ],
  },
  {
    category: "資格について",
    items: [
      {
        question: "入社後に資格取得のサポートはありますか？",
        answer:
          "はい、ございます。NSCAやNESTAなどのパーソナルトレーナー資格、健康運動指導士などの資格取得に向けて、受験費用の全額補助や専門講師による社内特別研修プログラムを用意しています。",
      },
      {
        question: "取得できる資格の種類を教えてください。",
        answer:
          "NSCA-CPT、NESTA-PFT、JATI-ATIをはじめとする主要なトレーナー資格のほか、応急手当や救急救命関連の資格取得も推奨・サポートしており、幅広い専門スキルを身につけることが可能です。",
      },
      {
        question: "資格手当は給与に反映されますか？",
        answer:
          "反映されます。当社指定の対象資格を保有、または入社後に取得された場合は、資格の難易度や業務貢献度に応じて毎月5,000円〜20,000円の「資格手当」を基本給にプラスして支給いたします。",
      },
    ],
  },
  {
    category: "キャリアについて",
    items: [
      {
        question: "店舗以外のポジションへの異動は可能ですか？",
        answer:
          "可能です。店舗でのトレーナーや店長として実績と経験を積んだ後、店舗開発、マーケティング、スクール講師、人事採用、管理部門など、本社機能の各専門ポジションへ異動するキャリアパスが整備されています。",
      },
      {
        question: "昇格・昇給の基準を教えてください。",
        answer:
          "年2回実施される人事評価制度に基づき、個人の売上やレッスン貢献度などの「数値目標」と、チームワークや後輩指導などの「行動評価」の双方から客観的に評価され、クリアな基準で昇格・昇給が決定します。",
      },
      {
        question: "社内公募制度はいつから利用できますか？",
        answer:
          "入社後1年を経過した正社員であれば、役職や職種に関わらず、社内公募制度を利用して新規事業や空きポジションへのチャレンジが可能です。年に数回、新しい人材の発掘と適才適所の実現のために実施しています。",
      },
    ],
  },
];

function FaqAccordionItem({
  item,
  itemKey,
  openKey,
  onToggle,
}: {
  item: FaqItem;
  itemKey: string;
  openKey: string | null;
  onToggle: (key: string) => void;
}) {
  const isOpen = openKey === itemKey;

  return (
    <div className="flex flex-col items-start gap-[8px] border-b border-black/10 py-[16px] lg:gap-[12px] lg:py-[20px]">
      <button
        type="button"
        onClick={() => onToggle(itemKey)}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-[16px] text-left lg:items-center"
      >
        <p className="max-w-[310px] flex-1 text-[14px] font-bold leading-[1.6] text-brand-ink lg:max-w-[500px] lg:text-[16px]">
          {item.question}
        </p>
        <span className="pt-[2px] font-anton text-[18px] text-brand-orange lg:pt-0 lg:text-[24px]">
          {isOpen ? "−" : "＋"}
        </span>
      </button>
      {isOpen && (
        <div className="w-full pr-[8px] pt-[4px] lg:pr-[24px] lg:pt-0">
          <p className="text-[13px] leading-[1.6] text-[#555] lg:text-[14px] lg:leading-[1.6]">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

function FaqCategoryBlock({
  category,
  categoryIndex,
  openKey,
  onToggle,
}: {
  category: FaqCategory;
  categoryIndex: number;
  openKey: string | null;
  onToggle: (key: string) => void;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-[12px] lg:gap-[8px]">
      <h4 className="w-full border-b-2 border-brand-ink pb-[8px] text-[16px] font-bold text-brand-ink lg:text-[18px]">
        {category.category}
      </h4>
      <div className="flex w-full flex-col items-start">
        {category.items.map((item, itemIndex) => (
          <FaqAccordionItem
            key={item.question}
            item={item}
            itemKey={`${categoryIndex}-${itemIndex}`}
            openKey={openKey}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const onToggle = (key: string) => {
    setOpenKey((current) => (current === key ? null : key));
  };

  return (
    <section className="w-full bg-[#f5f5f5] px-[20px] py-[56px] lg:px-0 lg:py-[120px]">
      <div className="flex flex-col items-start gap-[40px] lg:mx-auto lg:w-[1200px] lg:gap-[64px]">
        <div className="flex flex-col items-start gap-[12px] lg:gap-[16px]">
          <div className="flex items-center gap-[20px]">
            <span className="font-anton text-[68px] leading-none tracking-[0.5px] text-brand-orange">
              07
            </span>
            <span className="h-[68px] w-[3px] bg-brand-ink" />
            <span className="font-anton text-[68px] leading-none text-brand-ink">
              FAQ
            </span>
          </div>
          <h3 className="pt-[4px] text-[28px] font-bold leading-[1.3] text-brand-ink lg:pt-[8px] lg:text-[44px]">
            よくある質問
          </h3>
        </div>

        {/* mobile: single column */}
        <div className="flex w-full flex-col items-start gap-[48px] lg:hidden">
          {FAQ_CATEGORIES.map((category, categoryIndex) => (
            <FaqCategoryBlock
              key={category.category}
              category={category}
              categoryIndex={categoryIndex}
              openKey={openKey}
              onToggle={onToggle}
            />
          ))}
        </div>

        {/* desktop: two columns (選考+勤務地 / 資格+キャリア) */}
        <div className="hidden w-full gap-[48px] lg:flex">
          <div className="flex flex-1 flex-col items-start gap-[56px]">
            {FAQ_CATEGORIES.slice(0, 2).map((category, i) => (
              <FaqCategoryBlock
                key={category.category}
                category={category}
                categoryIndex={i}
                openKey={openKey}
                onToggle={onToggle}
              />
            ))}
          </div>
          <div className="flex flex-1 flex-col items-start gap-[56px]">
            {FAQ_CATEGORIES.slice(2, 4).map((category, i) => (
              <FaqCategoryBlock
                key={category.category}
                category={category}
                categoryIndex={i + 2}
                openKey={openKey}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

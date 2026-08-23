/* eslint-disable @next/next/no-img-element -- pixel-perfect Figma recreation with cropped/masked images that don't fit next/image's layout model */
import { MobileNav } from "./MobileNav";

const NAV_ITEMS = [
  "メッセージ",
  "HIBANA GYM 24 について",
  "キャリアパス",
  "働く環境",
  "人を知る",
  "よくある質問",
];

function Logo() {
  return (
    <div className="flex items-center gap-[4px]">
      <img src="/images/group1171277558.svg" alt="" className="h-5 w-5" />
      <img
        src="/images/logo.svg"
        alt="HIBANA GYM 24 RECRUIT"
        className="h-[16.5px] w-auto"
      />
    </div>
  );
}

export function Header() {
  return (
    <>
      {/* mobile sticky header */}
      <header className="sticky top-0 z-50 flex h-[60px] w-full items-center justify-between border-b border-brand-ink bg-white px-[20px] lg:hidden">
        <Logo />
        <MobileNav />
      </header>

      {/* desktop header */}
      <header className="hidden h-[90px] w-full items-center justify-between border-b border-brand-ink bg-white px-[100px] lg:flex">
        <Logo />

        <nav className="flex items-center gap-[28px]">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[12px] font-bold tracking-[1.2px] text-brand-ink transition-opacity hover:opacity-60"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#entry"
          className="flex h-[52px] w-[240px] items-center justify-center rounded-full border-2 border-white bg-brand-orange font-anton text-[28px] tracking-[1.12px] text-white shadow-[0px_2px_4px_rgba(0,0,0,0.14)] transition-transform hover:scale-[1.03]"
        >
          ENTRY
        </a>
      </header>
    </>
  );
}

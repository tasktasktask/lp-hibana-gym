/* eslint-disable @next/next/no-img-element -- pixel-perfect Figma recreation with cropped/masked images that don't fit next/image's layout model */
const FOOTER_LINKS = ["会社概要", "採用情報", "プライバシーポリシー"];

export function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] px-[20px] py-[39px] pb-[110px] lg:px-0 lg:py-[40px] lg:pb-[40px]">
      <div className="flex flex-col lg:mx-auto lg:w-[1200px]">
        <div className="flex flex-col items-start gap-[20px] lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <img
            src="/images/logo-white.svg"
            alt="HIBANA GYM 24 RECRUIT"
            className="h-[13px] w-auto lg:h-[15px]"
          />

          <nav className="flex gap-[16px] lg:gap-[24px]">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] text-white/45 transition-colors hover:text-white/80 lg:text-[12px]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-[20px] border-t border-white/[0.08] pt-[16px]">
          <p className="font-anton text-[10px] tracking-[1px] text-white/25 lg:text-[11px] lg:tracking-[1.1px]">
            © 2026 HIBANA GYM 24. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

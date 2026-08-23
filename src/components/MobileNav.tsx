"use client";

import { useState } from "react";
import { EntryButton } from "./EntryButton";

const NAV_ITEMS = [
  "メッセージ",
  "HIBANA GYM 24 について",
  "キャリアパス",
  "働く環境",
  "人を知る",
  "よくある質問",
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex shrink-0 flex-col items-start gap-[5px] p-[4px]"
      >
        <span
          className={`h-[2px] w-[24px] bg-brand-ink transition-transform ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-[2px] w-[24px] bg-brand-ink transition-opacity ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-[2px] w-[24px] bg-brand-ink transition-transform ${
            open ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div className="fixed inset-x-0 top-[60px] bottom-0 z-30 flex flex-col items-center gap-[28px] overflow-y-auto bg-white px-[29px] py-[40px]">
          <nav className="flex flex-col items-center gap-[24px]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className="text-[15px] font-bold tracking-[1.2px] text-brand-ink"
              >
                {item}
              </a>
            ))}
          </nav>
          <EntryButton />
        </div>
      )}
    </>
  );
}

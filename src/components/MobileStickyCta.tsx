import { EntryButton } from "./EntryButton";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center bg-white/92 px-[10px] py-[18px] backdrop-blur-sm lg:hidden">
      <EntryButton className="w-full max-w-[335px]" />
    </div>
  );
}

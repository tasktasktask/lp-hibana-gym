export function EntryButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#entry"
      className={`flex h-[68px] w-[335px] items-center justify-center rounded-full border-2 border-white bg-brand-orange font-anton text-[26px] tracking-[1.04px] text-white shadow-[0px_3px_2.75px_rgba(0,0,0,0.15)] transition-transform hover:scale-[1.02] lg:w-[420px] lg:text-[28px] lg:tracking-[1.12px] ${className}`}
    >
      ENTRY
    </a>
  );
}

export function SectionTitle({
  number,
  label,
  dark = false,
}: {
  number: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-[13px] lg:gap-[20px]">
      <span className="font-anton text-[45.5px] leading-none tracking-[0.5px] text-brand-orange lg:text-[68px]">
        {number}
      </span>
      <span className="h-[45.5px] w-[2px] bg-brand-ink lg:h-[68px] lg:w-[3px]" />
      <span
        className={`font-anton text-[45.5px] leading-none lg:text-[68px] ${
          dark ? "text-white" : "text-brand-ink"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

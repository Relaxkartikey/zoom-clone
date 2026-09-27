import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-md border-2 border-ink bg-white px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-ink shadow-[3px_3px_0_rgba(23,21,18,0.9)] transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0_rgba(23,21,18,0.9)]",
        className
      )}
    >
      {children}
    </span>
  );
}

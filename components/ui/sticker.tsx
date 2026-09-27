import { cn } from "@/lib/utils";

const colorMap = {
  yellow: "bg-accent-yellow",
  pink: "bg-accent-pink text-white",
  green: "bg-accent-green text-white",
  blue: "bg-accent-blue text-white",
  paper: "bg-paper",
} as const;

export function Sticker({
  children,
  color = "paper",
  rotate = "-2deg",
  className,
}: {
  children: React.ReactNode;
  color?: keyof typeof colorMap;
  rotate?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border-2 border-ink px-3 py-1 font-hand text-lg font-semibold leading-none shadow-paper",
        colorMap[color],
        className
      )}
      style={{ transform: `rotate(${rotate})` }}
    >
      {children}
    </span>
  );
}

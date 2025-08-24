import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        {/* Flag of India */}
        <svg
          className="absolute top-0 -left-px h-8 sm:h-9"
          viewBox="0 0 30 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Saffron stripe */}
          <rect width="30" height="6.67" fill="#FF9933" />
          {/* White stripe */}
          <rect width="30" height="6.67" y="6.67" fill="#FFFFFF" />
          {/* Green stripe */}
          <rect width="30" height="6.67" y="13.33" fill="#138808" />

          {/* Ashoka Chakra - Detailed 24-spoke wheel */}
          <g transform="translate(15, 10)">
            {/* Outer circle */}
            <circle r="2" fill="#000080" />
            {/* Inner circle */}
            <circle r="1.5" fill="#FFFFFF" />
            {/* Center circle */}
            <circle r="0.8" fill="#000080" />

            {/* 24 spokes */}
            {Array.from({ length: 24 }, (_, i) => {
              const angle = i * 15 * (Math.PI / 180);
              const x1 = Math.cos(angle) * 0.8;
              const y1 = Math.sin(angle) * 0.8;
              const x2 = Math.cos(angle) * 1.5;
              const y2 = Math.sin(angle) * 1.5;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#000080"
                  strokeWidth="0.15"
                  strokeLinecap="round"
                />
              );
            })}
          </g>
        </svg>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        />

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}

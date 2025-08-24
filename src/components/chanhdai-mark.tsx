export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 7"
      shapeRendering="crispEdges"
      aria-label="SK pixel logo"
      {...props}
    >
      {/* SK Pixel Logo */}
      <g fill="currentColor">
        {/* S (5x7), offset x=0 */}
        {/* Row 0 */}
        <rect x="1" y="0" width="1" height="1" />
        <rect x="2" y="0" width="1" height="1" />
        <rect x="3" y="0" width="1" height="1" />
        {/* Row 1 */}
        <rect x="0" y="1" width="1" height="1" />
        <rect x="4" y="1" width="1" height="1" />
        {/* Row 2 */}
        <rect x="0" y="2" width="1" height="1" />
        {/* Row 3 */}
        <rect x="1" y="3" width="1" height="1" />
        <rect x="2" y="3" width="1" height="1" />
        <rect x="3" y="3" width="1" height="1" />
        {/* Row 4 */}
        <rect x="4" y="4" width="1" height="1" />
        {/* Row 5 */}
        <rect x="0" y="5" width="1" height="1" />
        <rect x="4" y="5" width="1" height="1" />
        {/* Row 6 */}
        <rect x="1" y="6" width="1" height="1" />
        <rect x="2" y="6" width="1" height="1" />
        <rect x="3" y="6" width="1" height="1" />

        {/* K (5x7), offset x=7 (2-col spacer between letters) */}
        {/* Row 0 */}
        <rect x="7" y="0" width="1" height="1" />
        <rect x="11" y="0" width="1" height="1" />
        {/* Row 1 */}
        <rect x="7" y="1" width="1" height="1" />
        <rect x="10" y="1" width="1" height="1" />
        {/* Row 2 */}
        <rect x="7" y="2" width="1" height="1" />
        <rect x="9" y="2" width="1" height="1" />
        {/* Row 3 */}
        <rect x="7" y="3" width="1" height="1" />
        <rect x="8" y="3" width="1" height="1" />
        {/* Row 4 */}
        <rect x="7" y="4" width="1" height="1" />
        <rect x="9" y="4" width="1" height="1" />
        {/* Row 5 */}
        <rect x="7" y="5" width="1" height="1" />
        <rect x="10" y="5" width="1" height="1" />
        {/* Row 6 */}
        <rect x="7" y="6" width="1" height="1" />
        <rect x="11" y="6" width="1" height="1" />
      </g>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}

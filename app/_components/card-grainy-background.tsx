import { getRandomHexColor } from "@/app/_lib/utils";

function CardGrainyBackground() {
  return (
    <div
      className="absolute inset-0 border-2 border-dashed border-black"
      style={{ background: getRandomHexColor() }}
    >
      <div className="size-full" />
    </div>
  );
}

export default CardGrainyBackground;

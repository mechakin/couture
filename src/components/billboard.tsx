import { Billboard as BillboardType } from "@/types";

type BillboardProps = {
  data: BillboardType;
};

export default function Billboard({ data }: BillboardProps) {
  return (
    <div className="h-auto overflow-hidden rounded-xl p-8">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="relative h-auto overflow-hidden rounded-xl bg-cover bg-center"
      >
        <div className="flex h-[42rem] w-full flex-col items-center justify-center gap-y-8 text-center">
          <div className="max-w-min rounded-xl bg-neutral-200 p-4  text-3xl font-bold tracking-tight sm:max-w-xl sm:text-5xl lg:text-6xl">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
}

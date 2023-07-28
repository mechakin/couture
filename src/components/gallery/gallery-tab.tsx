import Image from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

interface GalleryTabProps {
  image: ImageType;
}

export default function GalleryTab({ image }: GalleryTabProps) {
  return (
    <Tab className="relative flex aspect-[69/100] cursor-pointer items-center justify-center rounded-xl">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 aspect-[69/100] h-full w-full overflow-hidden rounded-xl">
            <Image
              fill
              src={image.url}
              alt={image.url}
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-xl ring-2 ring-offset-neutral-800",
              selected ? "ring-neutral-400" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
}

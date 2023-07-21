"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/types";

import GalleryTab from "./gallery-tab";

type GalleryProps = {
  images: ImageType[];
};

export default function Gallery({ images = [] }: GalleryProps) {
  return (
    <Tab.Group as="div" className="flex">
      <div className="mr-12 md:max-w-none">
        <Tab.List className="grid grid-rows-4 gap-6 w-16">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-[69/100] w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="relative aspect-[69/100] h-full w-full overflow-hidden rounded-xl">
              <Image
                fill
                src={image.url}
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

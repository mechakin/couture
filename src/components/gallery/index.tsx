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
    <Tab.Group as="div" className="flex flex-col-reverse lg:flex-row">
      <div className="mt-4 w-full max-w-2xl lg:mr-12 lg:mt-0 lg:w-fit lg:max-w-none">
        <Tab.List className="grid lg:w-16 lg:grid-rows-4 lg:grid-cols-1 grid-cols-4 gap-6">
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

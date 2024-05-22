"use client";

import Image from "next/image";
import loadingGif from "@/assets/ux-looping.gif";
import { Suspense } from "react";

export default function loading() {
  return (
    <section className="h-screen w-full bg-black flex items-center justify-center">
      <Suspense>
        <Image
          className="w-2/5 "
          src={loadingGif.src}
          alt="Gif log UX Group"
          width={100}
          height={100}
        />
      </Suspense>
    </section>
  );
}

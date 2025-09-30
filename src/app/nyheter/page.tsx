"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/client";
import {
  allNewsQuery,
  galleryQuery,
  type News,
  type GalleryImage,
} from "@/sanity/lib/queries";

export default function NyheterPage() {
  const [news, setNews] = useState<News[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);

  useEffect(() => {
    async function fetchData() {
      const newsData = await client.fetch<News[]>(allNewsQuery);
      const galleryData = await client.fetch<GalleryImage[]>(galleryQuery);
      setNews(newsData);
      setGallery(galleryData);
    }
    fetchData();
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Nyheter</h1>
      <section className="mb-16 space-y-4">
        {news.length === 0 && (
          <p className="text-gray-300 text-center">
            Inga nyheter publicerade än.
          </p>
        )}
        {news.map((n) => (
          <article
            key={n._id}
            className="flex flex-col gap-1 rounded-lg border border-white/20 bg-white/5 px-4 py-3 backdrop-blur-sm"
          >
            <h2 className="text-lg font-semibold text-white">{n.title}</h2>
            <p className="text-xs text-gray-200">
              {new Date(n.date).toLocaleDateString("sv-SE")}
            </p>
            <p className="text-sm text-gray-100">{n.body}</p>
          </article>
        ))}
      </section>

      <h2 className="text-3xl font-bold mb-6 text-center">Bildgalleri</h2>
      {gallery.length === 0 && (
        <p className="text-gray-300 text-center">Inga bilder uppladdade än.</p>
      )}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {gallery.map((img) => (
          <div key={img._id} className="overflow-hidden rounded-xl">
            <img
              src={img.imageUrl}
              alt={img.title}
              className="w-full h-36 object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </section>
    </main>
  );
}

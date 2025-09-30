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
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* Nyheter */}
      <h1 className="text-4xl font-bold mb-8">Nyheter</h1>
      <section className="mb-16 space-y-6">
        {news.length === 0 && (
          <p className="text-gray-400">Inga nyheter publicerade än.</p>
        )}
        {news.map((n) => (
          <article
            key={n._id}
            className="rounded-xl bg-white/10 p-6 backdrop-blur-md border border-white/20"
          >
            <h2 className="text-2xl font-semibold">{n.title}</h2>
            <p className="text-gray-400 text-sm">
              {new Date(n.date).toLocaleDateString("sv-SE")}
            </p>
            <p className="mt-2">{n.body}</p>
          </article>
        ))}
      </section>

      {/* Bildgalleri */}
      <h2 className="text-3xl font-bold mb-6">Bildgalleri</h2>
      {gallery.length === 0 && (
        <p className="text-gray-400">Inga bilder uppladdade än.</p>
      )}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {gallery.map((img) => (
          <div key={img._id} className="overflow-hidden rounded-xl">
            <img
              src={img.imageUrl}
              alt={img.title}
              className="w-full h-48 object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </section>
    </main>
  );
}

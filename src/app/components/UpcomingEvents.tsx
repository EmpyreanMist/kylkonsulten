"use client";

import { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import {
  utbildningstillfallenQuery,
  type Utbildningstillfalle,
} from "../../sanity/lib/queries";

export default function UpcomingEvents() {
  const [events, setEvents] = useState<Utbildningstillfalle[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    client
      .fetch<Utbildningstillfalle[]>(utbildningstillfallenQuery)
      .then(setEvents);
  }, []);

  if (!events.length) {
    return (
      <section
        className="mx-auto max-w-6xl px-4 py-12 text-center text-gray-100"
        id="UpcomingEvents"
      >
        <h2 className="text-2xl font-bold mb-4">Kommande utbildningar</h2>
        <p>Inga kommande utbildningstillfällen just nu.</p>
      </section>
    );
  }

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-12" id="UpcomingEvents">
      <h2 className="text-2xl font-bold text-white text-center mb-8">
        Kommande utbildningar
      </h2>

      <ul className="divide-y divide-gray-700 border border-gray-700 rounded-lg bg-white/5 backdrop-blur-md shadow-lg">
        {events.map((event, index) => (
          <li key={event._id} className="p-3">
            <button
              onClick={() => toggle(index)}
              className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center text-left"
            >
              <span className="font-semibold text-base text-white">
                {event.title}
              </span>

              <span className="mt-1 sm:mt-0 text-sm flex gap-4 sm:gap-6 font-medium">
                <span className="text-white">
                  {" "}
                  {new Date(event.date).toLocaleDateString("sv-SE", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span className="text-white"> {event.price}</span>
              </span>
            </button>

            {openIndex === index && (
              <p className="mt-2 text-gray-300 text-sm">{event.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

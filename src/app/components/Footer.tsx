export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold">Kylakademin i Norr</div>
          <div className="text-gray-600">Midgårdsvägen 13, Luleå</div>
        </div>
        <div>
          <div className="font-semibold">Kontakt</div>
          <div className="text-gray-600">Tel: 070-474 51 02</div>
          <a
            href="mailto:kylakademininorr@gmail.com"
            className="text-blue-600 underline"
          >
            kylakademininorr@gmail.com
          </a>
          <div className="text-gray-600">CC: WSutbildningar@gmail.com</div>
        </div>
        <div>
          <div className="font-semibold">Instruktörer</div>
          <div className="text-gray-600">Antero Ala-Kojola</div>
          <div className="text-gray-600">William Stålnacke</div>
        </div>
      </div>
    </footer>
  );
}

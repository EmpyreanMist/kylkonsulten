export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-white/10 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-3 gap-6 text-white">
        <div>
          <div className="font-semibold">Kylakademin i Norr</div>
          <div className="text-gray-300">Midgårdsvägen 13, Luleå</div>
        </div>
        <div>
          <div className="font-semibold">Kontakt</div>
          <div className="text-gray-300">Tel: 070-474 51 02</div>
          <a
            href="mailto:kylakademininorr@gmail.com"
            className="text-blue-400 underline hover:text-blue-300 transition"
          >
            kylakademininorr@gmail.com
          </a>
          <div className="text-gray-300">CC: WSutbildningar@gmail.com</div>
        </div>
        <div>
          <div className="font-semibold">Examinatörer och utbildare</div>
          <div className="text-gray-300">Antero Ala-Kojola</div>
          <div className="text-gray-300">William Stålnacke</div>
        </div>
      </div>
    </footer>
  );
}

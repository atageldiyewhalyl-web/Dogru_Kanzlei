import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export function NotFound() {
  useEffect(() => {
    document.title = "404 - Seite nicht gefunden | Doğru Kanzlei";
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#F7F5F0]"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#B8963E] uppercase mb-6">
        404
      </span>
      <h1
        className="text-[#1C3829] mb-4 text-center"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 500 }}
      >
        Seite nicht gefunden
      </h1>
      <p className="text-[#6a6a6a] font-light text-center max-w-md mb-4">
        Die angeforderte Seite existiert nicht oder wurde verschoben.
      </p>
      <p className="text-[#6a6a6a] font-light text-center max-w-md mb-10">
        Aradığınız sayfa bulunamadı veya taşınmış olabilir.
      </p>
      <div className="flex gap-4">
        <Link
          to="/de"
          className="inline-flex items-center gap-2 bg-[#1C3829] text-white font-sans text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#2a5240] transition-colors"
        >
          <ArrowLeft size={14} /> Startseite (DE)
        </Link>
        <Link
          to="/tr"
          className="inline-flex items-center gap-2 bg-[#B8963E] text-white font-sans text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#a68635] transition-colors"
        >
          <ArrowLeft size={14} /> Ana Sayfa (TR)
        </Link>
      </div>
    </div>
  );
}

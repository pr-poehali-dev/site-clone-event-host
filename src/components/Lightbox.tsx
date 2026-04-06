import Icon from "@/components/ui/icon";
import { PORTFOLIO } from "@/components/data";

interface LightboxProps {
  lightbox: number | null;
  setLightbox: (i: number | null) => void;
}

const Lightbox = ({ lightbox, setLightbox }: LightboxProps) => {
  if (lightbox === null) return null;

  const closeLightbox = () => setLightbox(null);
  const prevPhoto = () => setLightbox((lightbox - 1 + PORTFOLIO.length) % PORTFOLIO.length);
  const nextPhoto = () => setLightbox((lightbox + 1) % PORTFOLIO.length);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={closeLightbox}
    >
      <button
        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
        onClick={closeLightbox}
      >
        <Icon name="X" size={28} />
      </button>
      <button
        className="absolute left-4 md:left-10 text-white/60 hover:text-white transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
      >
        <Icon name="ChevronLeft" size={36} />
      </button>
      <img
        src={PORTFOLIO[lightbox].img}
        alt={PORTFOLIO[lightbox].label}
        className="max-h-[90vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute right-4 md:right-10 text-white/60 hover:text-white transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
      >
        <Icon name="ChevronRight" size={36} />
      </button>
      <div className="absolute bottom-6 flex gap-2">
        {PORTFOLIO.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
            className={`w-2 h-2 rounded-full transition-all ${i === lightbox ? "bg-gold scale-125" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Lightbox;

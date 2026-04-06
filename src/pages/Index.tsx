import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import TopSections from "@/components/TopSections";
import BottomSections from "@/components/BottomSections";

const Index = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);

  return (
    <div className="font-montserrat text-white overflow-x-hidden" style={{ backgroundColor: "#0f0e0b" }}>
      <Lightbox lightbox={lightbox} setLightbox={setLightbox} />
      <TopSections openLightbox={openLightbox} />
      <BottomSections />
    </div>
  );
};

export default Index;
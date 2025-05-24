import Session from "../../components/banner/Banner";
import imageHome from "../../assets/IMG.svg";
import Gallery from "../../components/gallery/Gallery";

export default function Home() {
  return (
    <main>
      <Session image={imageHome} text="Chez vous, partout et ailleurs" />
      <Gallery />
    </main>
  );
}

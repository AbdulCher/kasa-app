import Banner from "../../components/banner/Banner";
import imageHome from "../../assets/IMG.svg";
import Gallery from "../../components/gallery/Gallery";

export default function Home() {
  return (
    <main>
      <Banner image={imageHome} text="Chez vous, partout et ailleurs" />
      <Gallery />
    </main>
  );
}

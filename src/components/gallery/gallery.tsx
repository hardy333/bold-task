import Styles from "./styles.module.css";
import Img1 from "@/assets/gallery/gallery-img (1).jpg";
import Img2 from "@/assets/gallery/gallery-img (2).jpg";
import Img3 from "@/assets/gallery/gallery-img (3).jpg";
import Img4 from "@/assets/gallery/img.jpg";
// import Img2 from "@/assets/g2.png";
// import Img3 from "@/assets/g3.png";
// import Img4 from "@/assets/g4.png";

const Gallery = () => {
  return (
    <section className={Styles.gallery}>
      <h2>
        Our teams are continuously developing innovative strategies, building
        new technologies, and conducting ongoing research.
      </h2>
      <div className={Styles.imgsContainer}>
        <div className={Styles.imgBox}>
          <img src={Img1} alt="" />
        </div>
        <div className={Styles.imgBox}>
          <img src={Img2} alt="" />
        </div>
        <div className={Styles.imgBox}>
          <img src={Img3} alt="" />
        </div>
        <div className={Styles.imgBox}>
          <img src={Img4} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;

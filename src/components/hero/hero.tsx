import Divider from "@/ui/divider/divider";
import Button from "../../ui/button/button";
import Styles from "./styles.module.css";
import HeroImg from "@/assets/hero.png";
import GoogleImg from "@/assets/google.svg";
import AppleImg from "@/assets/apple.svg";
import MicrosoftImg from "@/assets/microsoft.svg";
import AnimatedWords from "../animated-words/animated-words";
import { words } from "./data";
import Blob1 from "@/assets/blob1.svg";
import Blob2 from "@/assets/blob2.svg";

const Hero = () => {
  return (
    <section className={Styles.hero}>
      <div className={`${Styles.heroContainer}  container`}>
        {/* <div className={Styles.wordParent}>
          <div className={Styles.word1}>Hello</div>
          <div className={Styles.word2}>Param</div>
        </div> */}

        <img src={Blob1} alt="animated white blob" className={Styles.blob1} />
        <img src={Blob2} alt="animated white blob" className={Styles.blob2} />

        <div className={Styles.left}>
          <h1>
            Closen the technology of the future to help you
            <span className={Styles.textDecor}>
              <AnimatedWords items={words} />
            </span>
          </h1>

          <img
            src={HeroImg}
            alt="decorative hero image"
            className={Styles.heroImgMobile}
          />

          <div className={Styles.middle}>
            <p className={Styles.mainP}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
              arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus
              quam a sollicitudin convallis purus. Sed sed quam risus laoreet
              viverra id ut amet feugiat. Sed nec id id sed ut nulla aliquet
              neque. Sed est malesuada lobortis aliquam dolor eget donec
            </p>
            <Button
              variant="bold"
              style={{
                minWidth: 150,
              }}
            >
              Get Started
            </Button>
          </div>

          <section className={Styles.clients}>
            <p>Some of our clients</p>
            <div className={Styles.clientImgs}>
              <img
                src={AppleImg}
                className={Styles.appleImg}
                alt="Apple logo"
              />
              <img src={GoogleImg} alt="Google logo" />
              <img src={MicrosoftImg} alt="Microsoft logo" />
            </div>
          </section>
          <Divider />
        </div>

        <div className={Styles.right}>
          <img src={HeroImg} alt="" className={Styles.heroImgDesktop} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

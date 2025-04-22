import { showcases } from "./data";
import ShowcaseItem from "./showcase-item/showcase-item";
import Styles from "./styles.module.css";

const Showcase = () => {
  return (
    <section className={Styles.showcase}>
      <div className={Styles.h2Container}>
        <h2>
          Simple Solutions for Complex Connections. We are Pushing Limits.
        </h2>
      </div>
      {showcases.map((item, index) => {
        return (
          <ShowcaseItem
            key={item.title}
            showTopBorder={true}
            item={item}
            showBottomBorder={index === showcases.length - 1}
          />
        );
      })}

      {/* <ShowcaseItem showTopBorder={true} /> */}
      {/* <ShowcaseItem showTopBorder={true} /> */}
      {/* <ShowcaseItem showTopBorder={true} showBottomBorder={true} /> */}
    </section>
  );
};

export default Showcase;

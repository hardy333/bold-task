import Button from "@/ui/button/button";
import Styles from "./style.module.css";

const Cta = () => {
  return (
    <section className={Styles.cta}>
      <div className={`container ${Styles.ctaContainer}`}>
        <h2>You’ve got questions, we’ve got answers... Let’s Chat!</h2>
        <Button
          style={{
            minWidth: 180,
          }}
        >
          Contact the Team
        </Button>
      </div>
    </section>
  );
};

export default Cta;

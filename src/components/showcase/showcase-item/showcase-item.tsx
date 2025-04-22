import Arrow from "@/components/svgs/arrow";
import Styles from "./styes.module.css";
import Divider from "@/ui/divider/divider";

export type ShowcaseItem = {
  title: string;
  description: string;
};

type Props = {
  showTopBorder?: boolean;
  showBottomBorder?: boolean;
  showBorders?: boolean;
  item: ShowcaseItem;
};

const ShowcaseItem = ({
  showBottomBorder = false,
  showTopBorder = false,
  showBorders = false,
  item,
}: Props) => {
  return (
    <div className={Styles.item}>
      <div className={Styles.itemContainer}>
        {(showTopBorder || showBorders) && (
          <Divider className={Styles.dividerTop} />
        )}
        <a href="">
          {item?.title}
          {/* <img src={Arrow} alt="" /> */}
          <Arrow />
        </a>
        <p>{item.description}</p>
        {(showBottomBorder || showBorders) && (
          <Divider className={Styles.dividerBottom} />
        )}
      </div>
    </div>
  );
};

export default ShowcaseItem;

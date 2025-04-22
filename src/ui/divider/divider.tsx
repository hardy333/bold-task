import Styles from "./styles.module.css";

type Props = {
  className?: string;
};

const Divider = ({ className }: Props) => {
  return <div className={`${Styles.divider} ${className}`}></div>;
};

export default Divider;

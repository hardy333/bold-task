import Styles from "./styles.module.css";

export type ResultBoxItem = {
  count: number | string;
  title: string;
  description: string;
};

type Props = {
  data: ResultBoxItem;
};

const ResultBox = ({ data }: Props) => {
  return (
    <article className={Styles.box}>
      <div className={Styles.numberBox}>{data?.count}</div>
      <h4 className={Styles.heading}>{data.title}</h4>
      <p>{data?.description}</p>
    </article>
  );
};

export default ResultBox;

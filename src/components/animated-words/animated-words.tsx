import Styles from "./styles.module.css";

export type WordItem = {
  word: string;
  color: string;
};

type Props = {
  items: WordItem[];
};

const AnimatedWords = ({ items }: Props) => {
  const lastWordItem = items[0];

  return (
    <p className={Styles.rotatingText}>
      <span className={Styles.nowrap}>
        <span className={Styles.window}>
          <span className={Styles.windowInner}>
            {items.map((item) => {
              return (
                <span
                  key={item.word}
                  style={{
                    color: item.color,
                  }}
                >
                  {item.word}
                  <br />
                </span>
              );
            })}

            <span
              key={lastWordItem.word}
              style={{
                color: lastWordItem.color,
              }}
            >
              {lastWordItem.word}
              <br />
            </span>

            {/* <span>
              Innovate
              <br />
            </span>
            <span>
              Connect
              <br />
            </span>
            <span>
              Inspire
              <br />
            </span>
            <span>
              Innovate
              <br />
            </span> */}
          </span>
        </span>
      </span>
    </p>
  );
};

export default AnimatedWords;

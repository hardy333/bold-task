import { results } from "./data";
import ResultBox from "./result-box/result-box";
import Styles from "./styles.module.css";
import Img from "@/assets/results-img.png";

const Results = () => {
  return (
    <section className={Styles.results}>
      <div className={`${Styles.resultsContainer}`}>
        <img src={Img} className={Styles.img} />

        <section className={Styles.mainContent}>
          <h2>
            Empowered by Innovation, Commited by Intellect and Driven by Values
          </h2>
          <div className={Styles.boxContainer}>
            {/* <ResultBox />
            
            <ResultBox /> */}

            {results.map((result) => {
              return (
                <ResultBox key={result.title + result.count} data={result} />
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Results;

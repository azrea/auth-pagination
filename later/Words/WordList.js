import { useCallback, useRef } from "react";
import useFetch from "./FetchWords";

const WordList = ({ page, changeNumber }) => {
  const { loading, number } = useFetch();

  const observer = useRef();
  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log("visible", node, entries[0], number);
          changeNumber();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );
  return (
    <main>
      {page.map((word, index) => {
        if (page.length === index + 1) {
          return (
            <div ref={lastElement} key={index} className="wordContainer">
              <h2 className="word">{word}</h2>
            </div>
          );
        } else {
          return (
            <div key={index} className="wordContainer">
              <h2 className="word">{word}</h2>
            </div>
          );
        }
      })}
    </main>
  );
};

export default WordList;

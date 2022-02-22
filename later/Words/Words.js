import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import useFetch from "./FetchWords";
import { Container, MainContainer } from "./StyledWords";
import WordList from "./WordList";

const Words = () => {
  const { loading, words, number, changeNumber } = useFetch();

  const [isDark, setIsDark] = useState(true);

  const [previousList, setPreviousList] = useState([]);

  const theme = {
    bgColour: `${isDark ? "#333533" : "#F3EFF5"}`,
    colour: `${isDark ? "#F3EFF5" : "#333533"}`,
    obgColour: `${isDark ? "#76E5AC" : "#177846"}`,
    ocolour: `${isDark ? "#333533" : "#F3EFF5"}`,
  };

  function toggleTheme() {
    setIsDark(!isDark);
  }

  useEffect(() => {
    setPreviousList((prevState) => {
      return [...new Set([...prevState, ...words])];
    });
  }, [number, words]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainContainer>
          <header>
            <h1>Words</h1>
            <button onClick={() => toggleTheme()}>Toggle</button>
          </header>

          {!loading ? (
            <WordList page={previousList} changeNumber={changeNumber} />
          ) : (
            <>
              <WordList page={previousList} />
              <h2>Loading....</h2>
            </>
          )}
        </MainContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Words;

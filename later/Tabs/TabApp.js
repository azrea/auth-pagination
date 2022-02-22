import { useState, React, useEffect } from "react";
import {
  MainContainer,
  StyledTitle,
  StyledJobContainer,
  StyledButton,
  StyledButtonContainer,
} from "./StyledTabs";
import Tab from "./Tab";
import data from "./data";

const TabApp = () => {
  const [jobs, setJobs] = useState(data);
  const [value, setValue] = useState(0);

  const { company, dates, duties, title } = jobs[value];

  return (
    <MainContainer>
      <StyledTitle>Experience</StyledTitle>

      <StyledButtonContainer>
        {jobs.map((job, index) => {
          return (
            <StyledButton key={job.id} onClick={() => setValue(index)}>
              {job.company}
            </StyledButton>
          );
        })}
      </StyledButtonContainer>

      <StyledJobContainer>
        <Tab company={company} dates={dates} duties={duties} title={title} />
      </StyledJobContainer>
    </MainContainer>
  );
};

export default TabApp;

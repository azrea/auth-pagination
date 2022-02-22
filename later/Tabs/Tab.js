import React from "react";
import { Styledesc, Styledates, StyledCompany, StyledJob } from "./StyledTabs";

const Tab = ({ company, id, title, dates, duties, order }) => {
  return (
    <>
      <StyledJob key={id}>{title}</StyledJob>
      <StyledCompany>{company}</StyledCompany>
      <Styledates>{dates}</Styledates>

      {duties.map((duty) => {
        return <Styledesc key={order}>{duty}</Styledesc>;
      })}
    </>
  );
};

export default Tab;

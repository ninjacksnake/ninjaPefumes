import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PerfumeCard from "../components/PerfumeCard";
import axios from "axios";

const Perfumes = ({ perf }) => {
  return (
    <PerfumesContainer>
      {perf.map((perf, index) => {
        return <PerfumeCard perfume={perf} key={perf._id} />;
      })}
    </PerfumesContainer>
  );
};
const PerfumesContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: auto;
  /* justify-content: space-between; */
  gap: 0.5rem 0.5rem;
`;
export default Perfumes;

import React, { useState, createContext } from "react";

export const CandidateContext = createContext();

export const CandidateContextProvider = (props) => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const addCandidates = (candidate) => {
    setCandidates([...candidates, candidate]);
  };
  return (
    <CandidateContext.Provider
      value={{
        candidates,
        setCandidates,
        addCandidates,
        selectedCandidate,
        setSelectedCandidate,
      }}
    >
      {props.children}
    </CandidateContext.Provider>
  );
};

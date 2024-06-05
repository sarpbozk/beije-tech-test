import { useState } from "react";

const usePadState = (initialStandard, initialSuper, initialSuperPlus) => {
  const [standardPad, setStandardPad] = useState(initialStandard);
  const [superPad, setSuperPad] = useState(initialSuper);
  const [superPlusPad, setSuperPlusPad] = useState(initialSuperPlus);

  return {
    standardPad,
    setStandardPad,
    superPad,
    setSuperPad,
    superPlusPad,
    setSuperPlusPad,
  };
};

export default usePadState;

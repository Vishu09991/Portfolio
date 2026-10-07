import React, { useEffect, useState } from "react";

import { useReducedMotion } from "../hooks/useReducedMotion";

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const reducedMotion = useReducedMotion();
  const [Lottie, setLottie] = useState<any>(null);

  useEffect(() => {
    import("react-lottie").then(mod => {
      setLottie(() => mod.default);
    });
  }, []);

  const defaultOptions = {
    loop: false,
    autoplay: !reducedMotion,
    path: animationPath,
  };

  if (!Lottie) {
    return null; // Or return a loader/placeholder if needed
  }

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} isPaused={reducedMotion} isClickToPauseDisabled={reducedMotion} />
    </div>
  );
};

export default GreetingLottie;

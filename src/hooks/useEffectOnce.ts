import React from "react";

const useEffectOnce = (effect: React.EffectCallback): void => {
  React.useEffect(effect, [effect]);
};
export default useEffectOnce;

import { useEffect, useState } from "react";

export const Observer = ({ RefProp }) => {
  const [showDetials, setShowDetials] = useState(false);

  const revelSection = function (entries, observer) {
    const [entry] = entries;
    // console.log(entries[0].isIntersecting)
    if (entry.isIntersecting) {
      setShowDetials(true);
    }
  };

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(revelSection, {
      root: null,
      threshold: 0.15,
    });
    if (RefProp) {
      sectionObserver.observe(RefProp.current);
    }
  }, [RefProp]);

  return {
    RefProp: RefProp,
    showDetials: showDetials,
  };
};

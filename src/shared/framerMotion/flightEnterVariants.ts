export const flightEnterInitial = {
  opacity: 0,
  x: -50,
};

export const flightEnterAnimate = (index: number) => {
  return {
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.5,
      ease: "easeInOut",
    },
  };
};

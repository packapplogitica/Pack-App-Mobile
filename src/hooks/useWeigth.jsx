export const useWeigth = () => {
  const weightFormatter = (weight) => {
    if (weight > 999) {
      return `${weight / 1000}kg`;
    } else if (weight <= 999) {
      return `${weight}gr`;
    }
  };

  return { weightFormatter };
};

export const formatingNumber = (num: number) => {
  const stringNum = num.toLocaleString();
  const resultNumber = stringNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return `${resultNumber}원`;
};

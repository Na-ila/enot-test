export const getRandomColor = () => {
  const colors = ['#366EFF', '#FF0000', '#FFEB33'];

  return colors[Math.floor(Math.random() * 3)];
};

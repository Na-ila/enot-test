export const getRandomColor = () => {
  const colors = ['#366EFF', '#FF0000', '#FFEB33'];

  return colors[Math.floor(Math.random() * 3)];
};

export const newsDefaultText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet augue in blandit pretium. Donec purus ipsum, vehicula ac faucibus in, blandit vitae sem. Cras euismod tincidunt tellus non faucibus. Donec aliquam, libero eget scelerisque laoreet, lorem ligula accumsan nulla, in pharetra nulla ligula non ligula. Nam quis orci ante. Cras at quam malesuada, malesuada massa ut, vestibulum nisi. Pellentesque hendrerit justo mi, sed bibendum dui hendrerit nec. Nulla facilisi. Nulla commodo condimentum nisi nec gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';

export const dates = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);

  return [today, tomorrow, afterTomorrow].map((item) =>
    item.toISOString().slice(0, 10)
  );
};

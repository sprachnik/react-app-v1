const getYears = (params = { from: 1920 }) => {
  const years = [];
  for (var i = params.from; i <= new Date().getFullYear(); i++) {
    years.push(i);
  }
  return years;
};

const helpers = { getYears };
export default helpers;

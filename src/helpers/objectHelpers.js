const matches = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

const objectHelpers = {
  matches,
};

export default objectHelpers;

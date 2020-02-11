const displayMyName = function(user) {
  return `ton nom est ${user.name}`;
};

const displayMyAge = function(user) {
  return `ton age est ${user.age}`;
};

const displayMyNameAndAge = function(user) {
  return `${displayMyName(user)} et ${displayMyAge(user)}`;
};

export default displayMyNameAndAge;
export { displayMyName, displayMyAge };

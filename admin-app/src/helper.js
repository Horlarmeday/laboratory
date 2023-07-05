export function arrayRemove(arr, value) {
  return arr.filter(function(element) {
    return element !== value;
  });
}

export function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (error) {
    throw new Error(error);
  }
}

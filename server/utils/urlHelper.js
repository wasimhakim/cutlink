export const isValidUrl = (url) => {
  const urlRegex = new RegExp(
    "^(https?:\\/\\/)?" +
    "(([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}" +
    "(\\:\\d+)?(\\/.*)?$",
    "i"
  );
  return urlRegex.test(url);
};

export const isUrlMissing = (url) => {
  return url == "" || url == undefined;
};
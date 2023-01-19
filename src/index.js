module.exports = function check(str, bracketsConfig) {
  while (
    str.indexOf("()") !== -1 ||
    str.indexOf("[]") !== -1 ||
    str.indexOf("{}") !== -1 ||
    str.indexOf("||") !== -1 ||
    str.indexOf("12") !== -1 ||
    str.indexOf("34") !== -1 ||
    str.indexOf("56") !== -1 ||
    str.indexOf("77") !== -1 ||
    str.indexOf("88") !== -1
  ) {
    if (str.indexOf("()") !== -1) {
      str =
        str.substring(0, str.indexOf("()")) +
        str.substring(str.indexOf("()") + 2, str.length);
    }
    if (str.indexOf("[]") !== -1) {
      str =
        str.substring(0, str.indexOf("[]")) +
        str.substring(str.indexOf("[]") + 2, str.length);
    }
    if (str.indexOf("{}") !== -1) {
      str =
        str.substring(0, str.indexOf("{}")) +
        str.substring(str.indexOf("{}") + 2, str.length);
    }
    if (str.indexOf("||") !== -1) {
      str =
        str.substring(0, str.indexOf("||")) +
        str.substring(str.indexOf("||") + 2, str.length);
    }
    if (str.indexOf("12") !== -1) {
      str =
        str.substring(0, str.indexOf("12")) +
        str.substring(str.indexOf("12") + 2, str.length);
    }
    if (str.indexOf("34") !== -1) {
      str =
        str.substring(0, str.indexOf("34")) +
        str.substring(str.indexOf("34") + 2, str.length);
    }
    if (str.indexOf("56") !== -1) {
      str =
        str.substring(0, str.indexOf("56")) +
        str.substring(str.indexOf("56") + 2, str.length);
    }
    if (str.indexOf("77") !== -1) {
      str =
        str.substring(0, str.indexOf("77")) +
        str.substring(str.indexOf("77") + 2, str.length);
    }
    if (str.indexOf("88") !== -1) {
      str =
        str.substring(0, str.indexOf("88")) +
        str.substring(str.indexOf("88") + 2, str.length);
    }
  }
  if (str) {
    return false;
  } else {
    return true;
  }
};

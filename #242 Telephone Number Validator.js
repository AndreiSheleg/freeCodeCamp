 function telephoneCheck(str) {
  const regexStr = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regexStr.test(str);
}

telephoneCheck("555-555-5555");

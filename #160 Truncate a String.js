function truncateString(str, num) {
  if (num >= str.length) {
    return str
  }
  
  return str.slice(0, num) + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

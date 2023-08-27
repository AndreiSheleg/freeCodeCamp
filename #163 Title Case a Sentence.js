function titleCase(str) {
  let newArr = str.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  } );

  return newArr.join(' ');
};

titleCase("I'm a little tea pot");

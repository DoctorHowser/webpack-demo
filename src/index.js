function message() {
    var message = "";
  // Lodash, currently included via a script, is required for this line to work
  message = _.join(['Hello', 'webpack', ''], ' ');

  return message;
}

alert(message());
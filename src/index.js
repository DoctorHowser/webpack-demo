function message() {
    var message = "";
  // Lodash, currently included via a script, is required for this line to work
  message = _.join(['Hello', 'webpack', ''], ' ');

  return message;
}

function component() {
  var element = document.createElement('div');
  element.className = "my-cool-style"

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'Canopus'], ' ');

  return element;
}

document.body.appendChild(component());

alert(message());
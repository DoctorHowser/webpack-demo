function message() {
    var message = "";
  message = _.join(['Hello', 'webpack', ''], ' ');

  return message;
}

function component() {
  var element = document.createElement('div');
  element.className = "my-cool-style"

  element.innerHTML = _.join(['Hello', 'Canopus'], ' ');

  return element;
}

document.body.appendChild(component());

alert(message());
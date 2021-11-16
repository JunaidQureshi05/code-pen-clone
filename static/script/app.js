window.onload = function () {
  // Make html editor
  var htmlEditor = ace.edit('html');
  htmlEditor.session.setMode('ace/mode/html');
  htmlEditor.setTheme('ace/theme/monokai');

  //   Make css editor
  var cssEditor = ace.edit('css');
  cssEditor.session.setMode('ace/mode/css');
  cssEditor.setTheme('ace/theme/monokai');

  //  make js editor
  var jsEditor = ace.edit('javascript');
  jsEditor.session.setMode('ace/mode/javascript');
  jsEditor.setTheme('ace/theme/monokai');
};

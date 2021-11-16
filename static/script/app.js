window.onload = function () {
  // Make html editor
  var htmlEditor = ace.edit('html');
  htmlEditor.session.setMode('ace/mode/html');
  htmlEditor.setTheme('ace/theme/nord_dark');
  htmlEditor.session.setValue(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
`);
  htmlEditor.session.setUseWrapMode(true);
  htmlEditor.setShowPrintMargin(false);
  htmlEditor.session.on('change', function (delta) {
    console.log('html changed');
    update();
  });
  htmlEditor.setHighlightActiveLine(false);

  //   Make css editor
  var cssEditor = ace.edit('css');
  cssEditor.session.setMode('ace/mode/css');
  cssEditor.setTheme('ace/theme/nord_dark');
  cssEditor.session.setValue('/*css goes here*/');
  cssEditor.session.setUseWrapMode(true);
  cssEditor.setShowPrintMargin(false);
  cssEditor.session.on('change', function (delta) {
    console.log('css changed');
    update();
  });
  cssEditor.setHighlightActiveLine(false);

  //  make js editor
  var jsEditor = ace.edit('javascript');
  jsEditor.session.setMode('ace/mode/javascript');
  jsEditor.setTheme('ace/theme/nord_dark');
  jsEditor.session.setValue('//js goes here');
  jsEditor.session.setUseWrapMode(true);
  jsEditor.setShowPrintMargin(false);
  jsEditor.session.on('change', function (delta) {
    console.log('js changed');
    update();
  });
  jsEditor.setHighlightActiveLine(false);

  function update() {
    let output =
      document.querySelector('.virtual-iframe').contentWindow.document;
    output.open();
    output.write(
      '<style>' +
        cssEditor.getValue() +
        '</style>' +
        htmlEditor.getValue() +
        '<script>' +
        jsEditor.getValue() +
        '</script>'
    );
    output.close();
  }
};

window.addEventListener('resize', (e) => {
  for (var i = 0; i < document.getElementsByClassName('code').length; i++)
    document.getElementsByClassName('code')[i].style.height =
      document.querySelector('.code-editor').clientHeight - 40 + 'px';
});

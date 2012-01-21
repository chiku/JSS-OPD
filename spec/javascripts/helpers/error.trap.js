jQuery(window).error(function(e) {
  "use strict";

  var event = e.originalEvent,
      msg   = event.message,
      file  = event.filename,
      line  = event.lineno,
      text  = "<h2>Syntax error detected in javascript!</h2>" +
              "<h3>Message:<i>" + msg + "</i></h3>" +
              "<h3>In <i>" + file + "</i> at line: <i>" + line + "</i></h3>";

  jQuery(function() {
    jQuery("#syntax-errors").append(text);
  })
});

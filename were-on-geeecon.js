// Generated by CoffeeScript 1.3.1
(function() {
  var geecon_overlay_html, style;

  style = '.wereongeecon {\n  display: none;\n}\n\n#geecon_overlay {\n  display: table;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url(http://ktoso.github.com/were-on-geecon/overlay.png);\n}\n\n#overlay #window {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n#overlay #inner {\n  width: 50%;\n  margin: 0 auto;\n  padding: 15px;\n  max-height: 700px;\n  overflow: auto;\n  background-color: #fff;\n  padding-top: 75px\n  z-index: 999999;\n}\n\n#geecon_close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 3em;\n  font-weight: bold;\n}';

  geecon_overlay_html = '<div style="text-align: center; padding-top: 100px;">\n  <a href="http://www.geecon.org"><img src="http://ktoso.github.com/were-on-geecon/geecon_logo.gif"></a>\n</div>\n\n<div id="geecon_close">\n  <a href="#" onclick="hide_gc()">[X]</a>\n</div>';

  window.add_gc = function() {
    var body, css, gc, head, overlay, win;
    head = window.document.head;
    body = window.document.body;
    css = document.createElement("style");
    css.type = 'text/css';
    if (css.styleSheet) {
      css.styleSheet.cssText = style;
    } else {
      css.appendChild(document.createTextNode(style));
    }
    head.appendChild(css);
    overlay = document.createElement('div');
    overlay.id = 'geecon_overlay';
    overlay.className = 'wereongeecon';
    win = document.createElement('div');
    win.id = "window";
    gc = document.createElement("div");
    gc.innerHTML = geecon_overlay_html;
    gc.className = "inner";
    win.appendChild(gc);
    overlay.appendChild(win);
    body.appendChild(overlay);
    return $(overlay);
  };

  window.show_gc = function() {
    var gc;
    gc = add_gc();
    gc.fadeIn('slow');
    return setTimeout('hide_gc()', 10000);
  };

  window.hide_gc = function() {
    var gc;
    gc = $('.wereongeecon');
    return gc.fadeOut('fast', function() {
      return gc.detach();
    });
  };

}).call(this);

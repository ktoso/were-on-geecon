style = '''
#d2, #d3 { display: none; }

html, body {
  overflow: hidden;
  overflow-x: auto;
  overflow-y: hidden;
}

.wereongeecon {
  display: none;
}

#geecon_overlay {
  display: table;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(overlay.png);
}

#overlay #window {
  display: table-cell;
  vertical-align: middle;
}

#overlay #inner {
  width: 50%;
  margin: 0 auto;
  padding: 15px;
  max-height: 350px;
  overflow: auto;
  background-color: #fff;
}'''

geecon_overlay_html = '''
<div style="background: url(geecon_logo.png)">
</div>
'''

window.add_gc = () ->
  head = window.document.head
  body = window.document.body

  css = document.createElement("style")
  css.type = 'text/css'
  if css.styleSheet
    css.styleSheet.cssText = style
  else
    css.appendChild document.createTextNode(style)
  head.appendChild(css)

  overlay = document.createElement('div')
  overlay.id = 'geecon_overlay'
  overlay.className = 'wereongeecon'

  win = document.createElement('div')
  win.id = "window"

  gc = document.createElement("div")
  gc.innerHTML = geecon_overlay_html
  gc.className = "inner"

  win.appendChild(gc)
  overlay.appendChild(win)
  body.appendChild(overlay)

  $(overlay)

window.show_gc = () ->
  gc = add_gc()

  gc.fadeIn 'slow'

  setTimeout('hide_gc()', 3000)

window.hide_gc = () ->
  gc = $('.wereongeecon')
  gc.fadeOut 'slow', -> gc.detach()


let widget = createWidget()
Script.setWidget(widget)
Script.complete()

function createWidget() {
	let w = new ListWidget()
  	w.backgroundColor = new Color("#4a6da7")
  	w.centerAlignContent()

  	let article = w.addText('Hello World')
  	article.applyBodyTextStyling()
  	article.textColor = Color.white()
  	article.textOpacity = 0.8
  	article.textSize = 12

  return w
}
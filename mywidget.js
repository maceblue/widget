class MyWidget
{
	run()
	{
		let widget = createWidget()
		if (!config.runsInWidget) {
			widget.presentsSmall();
		}
		Script.setWidget(widget)
		Script.complete()

		function createWidget() {
			let w = new ListWidget()
		  	w.backgroundColor = new Color("#4a6da7")

		  	let article = w.addText('Hello World')
		  	article.textColor = Color.white()
		  	article.textOpacity = 0.8
		  	article.textSize = 12

		  return w
		}
	}
}

new MyWidget().run();

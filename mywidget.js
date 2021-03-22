const apiUrl = "http://pi.hole/widget/fritzbox_hosts_test.php"
let text = await textFromSoap()
let widget = await createWidget(text)

if (!config.runsInWidget) {
	widget.presentSmall();
}
Script.setWidget(widget)
Script.complete()

function createWidget(text) {
	let w = new ListWidget()
  	w.backgroundColor = new Color("#4a6da7")


  	let article = w.addText(text)
  	article.textColor = Color.white()
  	article.textOpacity = 0.8
  	article.textSize = 12

  return w
}

async function textFromSoap() {
	let r = new Request(apiUrl)
  let response = await r.loadString()

  return response 
}
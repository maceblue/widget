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
    let gradient = new LinearGradient();
    gradient.locations = [0, 1]
    gradient.colors = [
      new Color("#141E30"),
      new Color("28416F")
    ]
    w.backgroundGradient = gradient
  	//w.backgroundColor = new Color("#4a6da7")


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
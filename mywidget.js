
let widget = createWidget()
let text = await textFromSoap()

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
	return 'text aus soap';
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.open('POST', 'http://192.168.178.1:49000/upnp/control/hosts', true);

    // // build SOAP request
    // var sr =
    //     '<?xml version="1.0" encoding="utf-8"?>' +
    //     '<soapenv:Envelope ' + 
    //         'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
    //         'xmlns:api="urn:dslforum-org:service:Hosts:1" ' +
    //         'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
    //         'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
    //         '<soapenv:Body>' +
    //             '<api:GetHostNumberOfEntries></api:GetHostNumberOfEntries>' +
    //         '</soapenv:Body>' +
    //     '</soapenv:Envelope>';

    // xmlhttp.onreadystatechange = function () {
    //     if (xmlhttp.readyState == 4) {
    //         if (xmlhttp.status == 200) {
    //             return xmlhttp.responseText;
    //             // alert('done. use firebug/console to see network response');
    //         } else {
    //             return 'error';
    //         }
    //     }
    // }
    // // Send the POST request
    // xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    // xmlhttp.send(sr);
}
var window1 = Titanium.UI.createWindow({
	backgroundColor:'#ccc',
	modal: true,
	navBarHidden: true,
	exitOnClose: true,
	});
	
var htmltext = '<iframe src="https://docs.google.com/spreadsheet/embeddedform?formkey=dFZVbVNSSkE1cDVLREVzT0RNMHBGN0E6MQ" width="760" height="626" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>'

var timewebview = Titanium.UI.createWebView({
	html: htmltext,
	height: '100%',
	width: '100%',
	});

window1.add(timewebview);
window1.open();
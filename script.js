
function openUp() {
	// TODO: Write code to open the envelope	
}

// here's we're creating a new image object that we can use in Javascript.
// we point the source to the pumpkin gif in our filesystem.
const pumpkin = new Image();
pumpkin.src = "pumpkin.gif";

// this array is our tile of pumpkins
const imgList = [
	pumpkin,
	pumpkin,
	pumpkin,
	pumpkin,
	pumpkin,
	pumpkin,
	pumpkin,
	pumpkin,
	pumpkin,
	pumpkin,
	pumpkin,
	pumpkin,
];

// this function tagets the ticker HTML element on our page.
// it then merges all our individual pumpkin images into one long tile,
// injects it into the ticker HTML element, and loops it.
function imgTicker() {
	const ticker = document.getElementById("img-ticker");
	const tickerItems = imgList.map(news => `<img src="pumpkin.gif" class="pumpkin" width="70">`).join("");

	// Duplicate content to ensure smooth looping
	ticker.innerHTML = tickerItems + tickerItems ;
}

// we then call that function down here:
imgTicker();
const puppeteer = require('puppeteer')
async function main(count){
	let browser = await puppeteer.launch({headless: false});
	let page = await browser.newPage();
	await page.goto(``);
    let eh = await page.$("div#i3");
    let img = await eh.$eval('a>img',function(el){
        return el.getAttribute('src');
    })
	console.log(img);
};
for(count = 1; count <5; count++){
    main(count);
}


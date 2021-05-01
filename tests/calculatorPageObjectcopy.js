let page= function ()
{
    this.start=browser.get('https://juliemr.github.io/protractor-demo/');
this.finput = element(by.model('first')).sendKeys('6');
this.sinput = element(by.model('second')).sendKeys('6');
this.go = element(by.id('gobutton')).click();

}
module.exports = new page();
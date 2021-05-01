describe('Demo Calculator', function() {
    it('Addition', function() {
        //browser.get("https://qaclickacademy.github.io/protocommerce/");
        //sbrowser.sleep(5000);
      browser.get('https://juliemr.github.io/protractor-demo');
  
      element(by.model('first')).sendKeys('12');  
  var allOptions = element.all(by.options('value for (key, value) in operators'));
 allOptions.first().click();
 element(by.model('second')).sendKeys('8');

 let result=element(by.binding('latest'));
 element(by.css('[ng-click="doAddition()"]')).click();
 element(by.model('first')).sendKeys('12');
 element(by.model('second')).sendKeys('18');
 element(by.css('[ng-click="doAddition()"]')).click();
 expect(result.getText()).toEqual('30');
     // browser.sleep(25000);
      

   
    });
});
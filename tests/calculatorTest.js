describe('Demo Calculator', function() {
    var Obj=require("./calculatorPageObject.js");
    it('Addition', function() {
       
      browser.get('https://juliemr.github.io/protractor-demo/');
      browser.sleep(5000);
  
    Obj.finput.sendKeys('12');  
    Obj.siput.sendKeys('8');
    obj.go.click();
/* 
 let result=element(by.binding('latest'));
 element(by.css('[ng-click="doAddition()"]')).click();
 element(by.model('first')).sendKeys('12');
 element(by.model('second')).sendKeys('18');
 element(by.css('[ng-click="doAddition()"]')).click();
 expect(result.getText()).toEqual('30'); */
      browser.sleep(5000);
      

   
    });
});
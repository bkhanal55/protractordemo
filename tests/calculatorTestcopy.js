
describe('Demo Calculator', function() {
  
    it('Addition', function() {
      let page= require('./calculatorPageObjectcopy.js'); 
      page.start;
      page.finput;
      page.sinput;
      page.go;
      browser.sleep(5000);
  
    /* Obj.finput;  
    Obj.siput;
    obj.go; */
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
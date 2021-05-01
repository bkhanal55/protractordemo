describe('Demo Calculator', function() {
  function Calc(a, b, c){
    element(by.model('first')).sendKeys(a);  
      element(by.model('second')).sendKeys(b); 
      element.all(by.tagName('option')).each(function(option){
        option.getText().then(function(values) //or getAttribute('value')
        {
          if (c==values){
            option.click();
          }
        })
      })
      // 

  }
    it('Addition', function() {
      browser.get('https://juliemr.github.io/protractor-demo');
      Calc(3,9,'%');
      element(by.id('gobutton')).click();  
      Calc(3,9,'*');
      element(by.id('gobutton')).click(); 
      
       
        browser.sleep(9000);
    });
    
});
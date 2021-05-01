console.log("Hello World")
describe('angularjs homepage', function() {
    it('should have a title', function() {
	
        
        
        browser.driver.manage().window().maximize();
        
       // browser.driver.get('http://angularjs.org/');    
        
        browser.sleep(7000);
      });

    it('should greet the named user', function() {
      browser.get("https://qaclickacademy.github.io/protocommerce/");
        browser.sleep(5000);
        //browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        
      browser.get('https://www.facebook.com/');
     //browser.driver.get("https://www.facebook.com/");
     // browser.sleep(7000);
      //browser.waitForAngularEnabled(false);
  
      element(by.id("email")).sendKeys("571354500");
     // browser.sleep(7000);
     element(by.id("pass")).sendKeys("Julie");
     //browser.sleep(7000);
        element(by.xpath("//button[@name='login']")).click();
        browser.sleep(7000);
      //var greeting = element(by.binding('yourName'));
      
  
     // expect(greeting.getText()).toEqual('Hello Julie!');
    });
});
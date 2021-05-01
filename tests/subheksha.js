describe('Demo Calculator', function() {
    
    it('Addition', function() {
        //browser.waitForAngularEnabled(false);
        browser.get("https://qaclickacademy.github.io/protocommerce/");
        /* browser.sleep(5000);
        element(by.name('name')).sendKeys("B");
        

element(by.css('[type="submit"]')).click();
browser.sleep(5000);


        element(by.css('[class="alert alert-danger"]')).getText().then(function(text){
            console.log(text);
            
        });  
        element(by.name('name')).sendKeys("Bhupen");
        element(by.name('email')).sendKeys("Bhupen@gmail.com");
        element(by.id('exampleInputPassword1')).sendKeys('pass');
        $('.btn.btn-success').click();
        

        expect(element(by.css('.alert.alert-success.alert-dismissible')).getText()).toContain("Success");
         */
        //class="alert alert-success alert-dismissible"
        $$('a.nav-link').get(1).click();
        
        element.all(by.xpath("//button[text()='Add ']")).each(function(item){
            item.click();
        });

        $('a.nav-link.btn.btn-primary').click();
        $('button.btn.btn-success').click();
$('#country').sendKeys('IUSA');
$("input[type='submit']").click();
        browser.sleep(5000);

    //expect(result.getText()).toEqual('30');
     //browser.sleep(25000);//<div class="alert alert-danger">Name is required</div>
    });
});


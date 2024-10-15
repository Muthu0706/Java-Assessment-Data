package com.test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
public class MySeleniumTestRunner {
private WebDriver driver;
    
    @BeforeTest
    public void initializer() {
        System.setProperty("webdriver.Chrome.driver", "driver/Chromedriver.exe");
        driver = new ChromeDriver();
    }

    @Test
    public void site() {
        driver.navigate().to("http://localhost:4200/");
    }
    @Test
    public void testdoctorFormSubmission() {
  
        WebElement doctorIdField = driver.findElement(By.name("id"));
        doctorIdField.sendKeys("6");

        WebElement doctorNameField = driver.findElement(By.name("name"));
        doctorNameField.sendKeys("kan");
        
        WebElement doctorAgeField = driver.findElement(By.name("age"));
        doctorNameField.sendKeys("40");
        

        WebElement doctorEmailField = driver.findElement(By.name("email"));
        doctorEmailField.sendKeys("karthik@example.com");

        WebElement doctorSpecializationField = driver.findElement(By.name("spl"));
        doctorSpecializationField.sendKeys("orthopedics");

        WebElement doctorPhnoField = driver.findElement(By.name("phn"));
        doctorPhnoField.sendKeys("78965354");
        
        WebElement doctorLocationField = driver.findElement(By.name("loc"));
        doctorLocationField.sendKeys("Chennai");
        
        WebElement insertButton = driver.findElement(By.xpath("//button[@value='Insert']"));
        insertButton.click();

       }


}



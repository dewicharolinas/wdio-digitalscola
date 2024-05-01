
 
describe('Test Case', () => {
    it('Test Case 1 - Succes Login', async () => {

        await browser.url('https://www.saucedemo.com/')

        const username = await browser.$('#user-name')
        const  password = await browser.$('#password')
        const loginButton = await browser.$('#login-button')


        await username.setValue('standard_user')
        await password.setValue('secret_sauce')
        console.log (`Value dari button ${ await loginButton.getValue()}`)
        await loginButton.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')  
        await browser.pause(5000)

        // const backpakCartButton = await $('#add-to-cart-sauce-labs-backpack')
        // await expect(backpakCartButton).toBeDisplayed()
        // await backpakCartButton.click()
        
        const lightbikeCartButton = await $('#add-to-cart-sauce-labs-bike-light')
        await expect(lightbikeCartButton).toBeDisplayed()
        await lightbikeCartButton.click()
        
        const cartBadge = await $('//*[@id="shopping_cart_container"]/a/span')
       
        
        await expect(cartBadge).toBeDisplayed()
        await expect(cartBadge).toHaveText('1')
        
        await browser.pause(10000)
       

    })

    
})

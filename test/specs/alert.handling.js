import { expect, $, $$ } from '@wdio/globals'

const successfulMessage = 'You successfully clicked an alert';

describe('Alert Handling test', () => {
    it('successful message should be displayed after alert handling', async () => {
        await $('[href="/javascript_alerts"]').click()
        await $('[onclick="jsAlert()"]').click()
        
        //accept alert
        await browser.acceptAlert(); 

        //expect that successfulMessage is displayed
        const messageElement = await $('div#flash-messages');
        const messageText = await messageElement.getText();
        expect(messageText).to.equal(successfulMessage);
        
    })
})


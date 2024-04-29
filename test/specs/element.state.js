import { expect, $ } from '@wdio/globals'

const randomString = crypto.randomUUID();

describe('Dynamic Controls test', () => {
    it('populated text should be displayed in dynamic control', async () => {
        await $('//*[@href="/dynamic_controls"]').click()

        await $('//button[text() = "Enable"]').click()
        
        let inputField = await $('#input-example input')
        //expect that inputField is enabled
        
         expect(await inputField.isEnabled()).toBe(true);

        //input randomString into inputField
        await inputField.setValue(randomString);

        //expect that randomString is displayed
        const inputValue = await inputField.getValue();
        expect(inputValue).toEqual(randomString);
    })
})


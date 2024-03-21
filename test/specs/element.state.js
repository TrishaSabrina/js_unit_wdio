import { expect, $ } from '@wdio/globals'

const randomString = crypto.randomUUID();

describe('Dynamic Controls test', () => {
    it('populated text should be displayed in dynamic control', async () => {
        await $('//*[@href="/dynamic_controls"]').click()

        await $('//button[text() = "Enable"]').click()
        
        var inputField = await $('#input-example input')
        //expect that inputField is enabled

        //input randomString into inputField

        //expect that randomString is displayed
    })
})


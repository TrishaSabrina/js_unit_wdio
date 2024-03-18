import { expect, $, $$ } from '@wdio/globals'

const expectedSum = 251;
const currencySign = '$';

describe('Data Table test', () => {
    it('sum of Due values should be correct', async () => {
        await $('[href="/tables"]').click()

        var dueItems = await $$('//*[@id="table1"]//td[4]')
        var actualSum = 0

        for await (var item of dueItems) {
            //get value in the column
            //increase actualSum with value without currencySign
        }

        expect(actualSum).toEqual(expectedSum)
    })
})


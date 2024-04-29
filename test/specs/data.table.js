import { expect, $, $$ } from '@wdio/globals'

const expectedSum = 251;
const currencySign = '$';

describe('Data Table test', () => {
    it('sum of Due values should be correct', async () => {
        await $('[href="/tables"]').click()

        //get Due column elements
        const dueItems = await $$('.dues');
        let actualSum = 0

        for await (let item of dueItems) {
            //get value in the column

            const text = await item.getText();
            console.log("Text:", text);

            //removing currency sign and converting number 
            const value = parseFloat(text.replace(currencySign, '').trim());
            console.log("Value:", value);

            //if value is NaN
             if (isNaN(value)) {
                console.log("Invalid value detected, skipping...");
                continue;
            }
            
            //increase actualSum with value without currencySign
            
           actualSum += value;
        }

        expect(actualSum).toEqual(expectedSum)
    })
})


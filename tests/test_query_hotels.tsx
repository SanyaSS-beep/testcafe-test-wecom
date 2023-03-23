import { Selector } from 'testcafe';
import HomePage from '../pages/home_page';

fixture`book hotels`
    .page`https://phptravels.net/`;

const homePage = new HomePage();

test('query hotels with default option', async t => {
    await t.click(homePage.cityName)
        .typeText(homePage.cityName, 'New York')
        .click(homePage.submit)
        .takeScreenshot();
});
import { Selector } from 'testcafe';
import { getRandomContact } from '../utils/data_utils';

fixture `Add a contact`
    .page `https://work.weixin.qq.com/wework_admin/frame#contacts`;

test('Submit a form', async t => {
    let contact = getRandomContact();
    console.log(contact);
});
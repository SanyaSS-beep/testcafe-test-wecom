import { Selector } from "testcafe";

class HomePage {
    cityName: Selector;
    submit: Selector;
    constructor(){
        this.cityName = Selector('#select2-hotels_city-container');
        this.submit = Selector('#submit')
    }
}

export default HomePage;
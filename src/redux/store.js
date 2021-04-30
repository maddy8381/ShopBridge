import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import siteReducer from "./site/siteReducer";

export const initialStore = {
    counter: 5,
    shoppingItems: {
        loading: false,
        error: '',
        items: [
            {
                id: 0,
                name: 'Steam Vaporizer',
                description: '3 In 1 Steam Vaporizer Nose Steamer Cough Steamer Nozzle Inhaler & Nose vaporizer machine for cold and cough (Blue)',
                price: '100',
                dateModified: '23 Apr 2021'
            },
            {
                id: 1,
                name: 'Think Like a Monk',
                description: 'Think Like a Monk: The secret of how to harness the power of positivity and be happy now Paperback – 8 September 2020',
                price: '300',
                dateModified: '12 Apr 2021'
            },
            {
                id: 2,
                name: 'Ikigai Book',
                description: 'Ikigai: The Japanese secret to a long and happy life Hardcover – 27 September 2017',
                price: '200',
                dateModified: '25 Jun 2020'
            },
            {
                id: 3,
                name: 'Robot Car',
                description: 'Brand Conquer Plastic Robot Races Car Toys Friction Family Toy Racing Car - Automatic Convert from CAR to Robot with 4D Light, Pack of 1, Blue',
                price: '500',
                dateModified: '30 Apr 2021'
            },
            {
                id: 4,
                name: 'Cadbury Dairy Milk',
                description: 'Cadbury Dairy Milk Silk Roast Almond Chocolate Bar, 55 g',
                price: '10',
                dateModified: '19 Jan 2021'
            }
        ]
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    siteReducer,
    initialStore,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import siteReducer from "./site/siteReducer";

export const initialStore = {
    counter: 10,
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
            },
            {
                id: 5,
                name: 'USB Type-C',
                description: 'Mistique USB Type-C to 3.5 mm Stereo Audio Jack Adapter for OnePlus One Plus 6T/5/5T /Mi A2 and All USB Type-C Devices (Red & White)',
                price: '20',
                dateModified: '11 Jan 2021'
            },
            {
                id: 6,
                name: 'OnePlus 7T',
                description: 'OnePlus 7T (Frosted Silver, 8GB RAM, Fluid AMOLED Display, 128GB Storage, 3800mAH Battery)',
                price: '700',
                dateModified: '19 Aug 2021'
            },
            {
                id: 7,
                name: 'Gym Brand',
                description: 'Xtrim Leather Gym Workout Gloves For Men- Black ( M / L / XL )',
                price: '20',
                dateModified: '09 Jan 2021'
            },
            {
                id: 8,
                name: 'MI Power Bank',
                description: 'Mi 10000mAH Li-Polymer Power Bank 2i (Black) with 18W Fast Charging',
                price: '10',
                dateModified: '22 Aug 2021'
            },
            {
                id: 9,
                name: 'Samsung Washing Machine',
                description: 'Samsung 6.2 kg Fully-Automatic Top load Washing Machine (WA62M4100HY/TL, Imperial Silver)',
                price: '100',
                dateModified: '19 Apr 2021'
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
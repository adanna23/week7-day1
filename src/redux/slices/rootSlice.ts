import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'BMW IV',
        price: "140000.00",
        description: "You dont drive, you float",
        miles: 0,
        fuel_capacity: 10,
        max_speed: '100 kph',
        dimensions: '255 x 312 x 127mm',
        weight: 'Approx 900g',
        cost_of_prod: 45000.00,
        series: 'BMW IV Series' 
    },
    reducers: {
        chooseName: (state, action) => {state.name = action.payload},
        choosePrice: (state,action) => {state.price = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const {chooseName, choosePrice,} = rootSlice.actions;





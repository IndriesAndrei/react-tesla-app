import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    // functions to manipulate the state
    reducers: {}
})

// car -> name of the slice, cars from the initialState array
export const selectCars = state => state.car.cars;
export default carSlice.reducer;
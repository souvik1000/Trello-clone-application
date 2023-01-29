<!-- First we have imported our createSlice from toolkit to configure store by -->

import { createSlice } from "@reduxjs/toolkit";

<!-- After that we have added interface for them to define their types. which is similar as below  -->

export interface interface_name = {
if_object_name : {
variable1_name : variable1_type,
variable2_name : variable2_type,
}
}

<!-- then take initial state value into initialState variable as -->

export const initialState = {
data : data_initial_value
};

<!-- Now we will create our slice as below -->

export const mySlice = createSlice({
name : "name_for_defineing_your_slice",
initialState,
reducer : {
function_name_1 : (state = initialState, action) => {
<!-- do work for function_name_1 whare action is present inside the action.payload -->
}
function_name_2 : (state = initialState, action) => {
<!-- do work for function_name_2 whare action is present inside the action.payload -->
}
}
})

<!-- Now we have to export our reducer actions by -->

export const { function_name_1, function_name_2 } = mySlice.actions;

<!-- Now we have to export our Slice component reducer as -->

export default mySlice.reducer;

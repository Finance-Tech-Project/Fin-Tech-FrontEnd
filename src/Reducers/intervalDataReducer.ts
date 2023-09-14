import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialInterval: string | null | undefined = "1D";

const intervalDataSlice = createSlice({
    name: "intervalData",
    initialState: initialInterval,
    reducers: {
        putDataInterval(state, action: PayloadAction<string | null | undefined>) {
            state = action.payload!;
            return state;
        }
    }
});

export const { putDataInterval } = intervalDataSlice.actions;
export const intervalDataReducer = intervalDataSlice.reducer;
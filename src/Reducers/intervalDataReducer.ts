import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IntervalsAbbreviation } from "../Enums/Enums";

const initialInterval: string | null | undefined = IntervalsAbbreviation.Dayily;

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
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { alarmsMock } from "../mock/alarms";
import { Alarm } from "../types/AlarmType";

export interface AlarmState {
  value: number;
  status: "idle" | "loading" | "failed";
  alarms: {
    [id: string]: Alarm;
  };
}

const initialState: AlarmState = {
  value: 0,
  status: "idle",
  alarms: alarmsMock,
};

export const alarmSlice = createSlice({
  name: "alarm",
  initialState,
  reducers: {
    deleteAlarm: (state) => {
      state.value += 1;
    },
    addAlarm: (state) => {
      state.value -= 1;
    },
    editAlarm: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setAlarmActive: (
      state,
      action: PayloadAction<{ value: boolean; id: string }>
    ) => {
      state.alarms[action.payload.id].active = action.payload.value;
    },
  },
});

export const { setAlarmActive, addAlarm, deleteAlarm, editAlarm } =
  alarmSlice.actions;

export const alarmReducer = alarmSlice.reducer;

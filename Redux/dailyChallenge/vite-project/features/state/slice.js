import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        add: (state, action)=>{
            state.tasks.push({
                id:nanoid(),
                task:action.payload,
                active: true,
                datetime: Date.now, 
            });
        },
        remove: (state, action) => {
            state.tasks = state.tasks.filter(task => task.i !== action.payload)
        },
        clear:(state) => {
            state.tasks = [];
        },
        active: (state, action) => {
            const task = state.tasks.find(task => task.id ===action.payload)
            if (task) {
                task.active = !task.active;
            }
        }
    },

});

export const { add, clear, remove, active, edit} = tasksSlice.actions
export default tasksSlice.reducer;
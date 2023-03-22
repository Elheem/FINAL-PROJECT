import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";


export const commandeget = createAsyncThunk("commande/get", async (req, res) => {
    try {
        let result = await axios.get("http://localhost:5001/commande/");
        return result;
    } catch (error) {
        console.log(error);
    }
});
export const commandeadd = createAsyncThunk("commande/add", async (newcommande) => {
    try {
        let result = axios.post("http://localhost:5001/commande/add", newcommande);
        return result;
    } catch (error) {
        console.log(error);
    }
});
export const commandedelete = createAsyncThunk("commande/delete", async (id) => {
    try {
        let result = axios.delete(`http://localhost:5001/commande/${id}`);
        return result;
    } catch (error) {
        console.log(error);
    }
});
export const commandeedit = createAsyncThunk("commande/edit", async (id, edit) => {
    try {
        let result = axios.put(`http://localhost:5001/commande/${id}`, edit);
        return result;
    } catch (error) {
        console.log(error);
    }
});
const initialState = {
    commandeList: null,
    status: null,
}

export const commandeSlice = createSlice({
    name: 'commande',
    initialState,
    reducers: {},
    extraReducers: {
        [commandeget.pending]: (state) => {
            state.status = "pending";
        },
        [commandeget.fulfilled]: (state, action) => {
            state.status = "success";
            state.commandeList = action.payload.data.commandes;
        },
        [commandeget.rejected]: (state) => {
            state.status = "fail";
        },
        [commandeadd.pending]: (state) => {
            state.status = "pending";
        },
        [commandeadd.fulfilled]: (state, action) => {
            state.status = "success";
        },
        [commandeadd.rejected]: (state) => {
            state.status = "fail";
        },
        [commandedelete.pending]: (state) => {
            state.status = "pending";
        },
        [commandedelete.fulfilled]: (state, action) => {
            state.status = "success";
        },
        [commandedelete.rejected]: (state) => {
            state.status = "fail";
        },
        [commandeedit.pending]: (state) => {
            state.status = "pending";
        },
        [commandeedit.fulfilled]: (state, action) => {
            state.status = "success";
        },
        [commandeedit.rejected]: (state) => {
            state.status = "fail";
        },
    },
    });

// Action creators are generated for each case reducer function
export const { logout } = commandeSlice.actions

export default commandeSlice.reducer
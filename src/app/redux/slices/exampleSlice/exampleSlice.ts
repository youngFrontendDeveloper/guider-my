/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: IExampleSlice = {};

/* Types */

interface IExampleSlice {}

export const exampleSlice = createSlice({
	name: 'example',
	initialState,
	reducers: {},
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import movieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk('/movies/fetchAsyncMovies', async (searchTerm) =>{
    const response = await movieApi.get(`?apikey=${APIKey}&s=${searchTerm}&type=movie`)
        return response.data
})

export const fetchAsyncShows = createAsyncThunk('/movies/fetchAsyncShows', async (searchTerm) =>{
    const response = await movieApi.get(`?apikey=${APIKey}&s=${searchTerm}&type=series`)
        return response.data
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('/movies/fetchAsyncMovieOrShowDetail', async (id) =>{
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`)
        return response.data
})

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) =>{
            state.selectedMovieOrShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () =>{
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) =>{
            console.log("Fetched successfully")
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () =>{
            console.log("Rejected")
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) =>{
            console.log("Fetched successfully")
            return {...state, shows: payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) =>{
            console.log("Fetched successfully")
            return {...state, selectedMovieOrShow: payload}
        }
    },
})

export const {removeSelectedMovieOrShow} = movieSlice.actions
export const getAllMovies = (state) =>state.movies.movies
export const getAllShows = (state) =>state.movies.shows
export const getSelectedMovieOrShow = (state) =>state.movies.selectedMovieOrShow
export default movieSlice.reducer
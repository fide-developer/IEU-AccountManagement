import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthTypes, LoginDataTypes } from "./type";
import { initializeApp } from "@firebase/app"
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { RootState } from "../../app/store";

const firebaseConfiguration = {
        apiKey: "AIzaSyADJ5fZBpmlXH47BkMpyYEsq0RxU-Ft_14 ",
        authDomain: "salesmanager-54a41.firebaseapp.com",
        // The value of `databaseURL` depends on the location of the database
        // databaseURL: "https://DATABASE_NAME.firebaseio.com",
        projectId: "PROJECT_ID",
        // storageBucket: "PROJECT_ID.appspot.com",
        // messagingSenderId: "SENDER_ID",
        // appId: "APP_ID",
        // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
        // measurementId: "G-MEASUREMENT_ID",

}

const app = initializeApp(firebaseConfiguration)

const initialState: AuthTypes = {
    loading: false
}


//get user status with async
export const getUsers = createAsyncThunk(
    "auth/getUsers",
    async () => {
        let auth = await getAuth(app)

        return auth.currentUser
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (data: LoginDataTypes, {rejectWithValue}) => {
        const auth = await getAuth(app)
        
        const loginFirebase = await signInWithEmailAndPassword(auth, data.username, data.password)
            .then((userCredential) => {
                return userCredential.user
            })
            .catch((error) => {
                return rejectWithValue(error.code)
            })
            
        return loginFirebase
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        let auth = getAuth(app)

        let trySignOUt = await signOut(auth).then(()=>{
            return 'success'
        }).catch(error => {
            return error
        })
        
        return trySignOUt
    }
)
export const authSlice = createSlice(
    {
        name: "auth",
        initialState,
        reducers: {
            
        },
        extraReducers: (builder) => {
            builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(login.pending, (state) => {
                state.loading = true
                state.errorMessage = undefined
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                switch(action.payload){
                    case "auth/network-request-failed" : 
                        state.errorMessage = "No internet connection!"
                        break;
                    default:
                        state.errorMessage = "Login failed! please check your email and password!"
                        break;
                }
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false
                state.user=undefined
            })
            .addCase(logout.pending, (state) => {
                state.loading = true
                state.errorMessage = undefined
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false
                state.errorMessage = "Failed to logout!"
            })
        }
    }
)

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthTypes, LoginDataTypes, UserTypes } from "./type";
import { AppThunk, RootState } from "../../app/store";
import { getRole, getUser, loginFirebase, logoutFirebase } from "../../api/firebase/auth.firebase";

const initialState: AuthTypes = {
    loading: true
}


//get user status with async
export const getUsers = createAsyncThunk(
    "auth/getUsers",
    async () => {
        let auth = await getUser()

        return auth
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (data: LoginDataTypes,_thunkAPI) => {
        const tryLogin = await loginFirebase(data,_thunkAPI.rejectWithValue)
        if(tryLogin.uid) _thunkAPI.dispatch(loginRoles(tryLogin.uid))
        
        return tryLogin
    }
)

//thunk process to get user role from firestore (firebase)
const loginRoles = createAsyncThunk(
    "auth/role",
    async (id: string, {rejectWithValue}) => {
        const roles =  await getRole(id, rejectWithValue)
        return roles
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        let trySignOUt = await logoutFirebase()
        
        return trySignOUt
    }
)
export const authSlice = createSlice(
    {
        name: "auth",
        initialState,
        reducers: {
            changeUserState: (state, action : PayloadAction<UserTypes>) => {
                state.user = action.payload
            },
            setLoading: (state,action: PayloadAction<boolean>) =>{
                state.loading = action.payload
            }
        },
        extraReducers: (builder) => {
            builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(getUsers.fulfilled, (state, action : PayloadAction<any>) => {
                state.loading = false
                state.user = {uid: action.payload.uid, email: action.payload.email}
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = {uid: action.payload.uid, email: action.payload.email}
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
            .addCase(loginRoles.fulfilled, (state, action) => {
                state.loading = false
                state.user = {...state.user, role: action.payload.role, name: action.payload.name}
            })
            .addCase(loginRoles.rejected, (state, action) => {
                state.loading = false
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

const {changeUserState} = authSlice.actions 
export const {setLoading} = authSlice.actions 

export const checkLogin = (user : UserTypes): AppThunk => (dispatch) => {
    dispatch(changeUserState(user))
    dispatch(loginRoles(user.uid))
}
export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer
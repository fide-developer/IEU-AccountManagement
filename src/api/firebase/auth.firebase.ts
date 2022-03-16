import { async } from "@firebase/util"
import { browserLocalPersistence, browserSessionPersistence, getAuth, setPersistence, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { collection, doc, getDoc, query } from "firebase/firestore"
import { LoginDataTypes } from "../../features/Auth/type"
import { app, auth, fireStore } from "./initialize.firebase"

//check if there a user login or not (not subsc)
export const getUser = async () => {
    const userauth = await auth

    return auth.currentUser?.toJSON()
}


//subscribe the change on the auth status
export const subsribeAuth = () => {

}

//login to the firebase server
export const loginFirebase =  async (data: LoginDataTypes, callback: any) => {
    const userauth = await auth
    await setPersistence(auth, browserLocalPersistence).then(()=>{
    })
    
    const loginFirebase = await signInWithEmailAndPassword(userauth, data.username, data.password)
    .then((userCredential) => {
        return userCredential.user.toJSON()
    })
    .catch((error) => {
        return callback(error.code)
    })
    
    return loginFirebase
}


// getting role to determine which page should be re-direct
export const getRole = async (id: string, callback: any) => {
    const userCollection = collection(fireStore,"users")
    const userDoc = await getDoc(doc(userCollection,id))

    if(!userDoc.exists())
        return callback("Unfortunately this user has been removed by the system admin!")

    return userDoc.data()
}

// logout from firebase server
export const logoutFirebase = async () => {
    const logout = await signOut(auth).then(()=>{
        return true
    }).catch(() => {
        return false
    })

    return logout
}
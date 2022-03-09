import { FirebaseApp } from "@firebase/app"

export enum RoleTypes {
    demo, sales, operation, support, scheduling
} 

export type AuthTypes = {
    user?: {
        userName : string,
        name: string,
        role: RoleTypes
    } | any,
    roles?: [],
    loading: boolean,
    errorMessage?: string
}

export type LoginDataTypes = {
    username: string,
    password: string
}
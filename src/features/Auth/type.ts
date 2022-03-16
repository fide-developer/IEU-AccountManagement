export enum RoleTypes {
    demo, sales, operation, support, scheduling
} 

export type UserTypes = {
    uid : string,
    email ?: string | null,
    name ?: string,
    role ?: RoleTypes
}
export type AuthTypes = {
    user?:  UserTypes | any,
    loading: boolean,
    errorMessage?: string
}

export type LoginDataTypes = {
    username: string,
    password: string
}
export interface User{
                 id:number,
                email:string,
                username:string,
                password:string,
                name:{
                    firstname:string,
                    lastname:string
                }
}


export interface initialUserState{
    users:User[],
    isLoading:boolean,
    isError:boolean
}
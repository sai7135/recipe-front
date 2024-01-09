
export interface LoginModel {
    email: string;
    password: string;
}

export interface RegistrationModel {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface AuthorizationResponse{
    jwtToken:string;
    expiration:string;
}

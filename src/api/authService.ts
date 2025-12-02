import apiClient from "./axiosConfig";
import type { RegistrationRequest } from "../models/UserDetailDto";

export interface AuthResponse {
    access_token: string;
    refresh_token: string;
    expires_in: number;
}

export interface RegistrationResponse {
    message: string;
}
const registerEndpoint = '/auth/register';
const loginEndpoint = '/auth/login';

export interface LoginRequest {
    username: string;
    password: string;
}

export const loginUser = async (cred:LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(loginEndpoint, cred);
    return response.data;
}

export const registerUser = async (userDetails: RegistrationRequest): Promise<RegistrationResponse> => {
    const response = await apiClient.post<RegistrationResponse>(registerEndpoint, userDetails);
    return response.data;
}

export const sampleTest = async (): Promise<string> => {
    const response = await apiClient.get<string>('/auth/sample');
    return response.data;
}



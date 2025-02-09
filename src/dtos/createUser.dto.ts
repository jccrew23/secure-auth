import { z } from 'zod';

export interface CreateUserDto {
    name: string;
    email: string;
    username:string;
    password: string;
}
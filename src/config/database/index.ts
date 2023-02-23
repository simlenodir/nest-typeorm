import { registerAs } from "@nestjs/config"
import * as dotenv from 'dotenv';
dotenv.config();

interface DatabaseConfig {
    readonly host: string,
    readonly port: number
    readonly username: string
    readonly password: string
    readonly database: string
}

export const DatabaseConfig = registerAs('database', (): DatabaseConfig => ({
    host: process.env.DB_HOST ? String(process.env.DB_HOST): undefined,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT): undefined,
    username: process.env.DB_USERNAME ? String(process.env.DB_USERNAME): undefined,
    password: process.env.DB_PASSWORD? String(process.env.DB_PASSWORD): undefined,
    database: process.env.DB_DATABASE ? String(process.env.DB_DATABASE): undefined,
}))
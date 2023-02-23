import { registerAs } from "@nestjs/config"
import dotenv from "dotenv"
// dotenv.config()

interface AppConfig {
    readonly host: string,
    readonly port: number
}

export const AppConfig = registerAs('app', (): AppConfig => ({
    port: process.env.APP_PORT ? Number(process.env.APP_PORT): undefined,
    host: process.env.APP_HOST ? String(process.env.APP_HOST): undefined
}))
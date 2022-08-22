const WEATHER_API_KEY: string = process.env.WEATHER_API_KEY || '';
const WEATHER_API_URL: string = process.env.WEATHER_API_URL || '';
const PG_PORT: string = process.env.PG_PORT || '';
const PG_DATABASE: string = process.env.PG_DATABASE || '';
const PG_HOST: string = process.env.PG_HOST || '';
const PG_USER: string = process.env.PG_USER || '';
const PG_PASS: string = process.env.PG_PASS || '';
const NODE_ENV: string = process.env.NODE_ENV || '';

export {
    WEATHER_API_KEY,
    WEATHER_API_URL,
    PG_PORT,
    PG_DATABASE,
    PG_HOST,
    PG_USER,
    PG_PASS,
    NODE_ENV
}
export interface Weather {
    latitude: number,
    longitude: number,
    currently: string
}

export interface WeatherResponse {
    timezone: number;
    temperature: number [];
    currently: {summary};
    latitude: number;
    longitude: number;
}
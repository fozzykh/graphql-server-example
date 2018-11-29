import axios from 'axios';

export const mockBaseUrl = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});


export const apiBaseUrl = axios.create({
    baseURL: 'https://api-int.p7s1.io',
    headers: {
        'X-API-Key': 'ccb58ccf6c993353dd000d3aa251e982',
        accept: 'application/json',
    },
});

export const ottApiMiddlewareBaseUrl = axios.create({
    baseURL: 'https://middleware-preprod.7tv.de',
    headers: {
        key: '490639c577318b11c9041bc2cec59c9e',
        accept: 'application/json',
    },
});

export const ottApiBaseUrl = axios.create({
    baseURL: 'https://api-int.p7s1.io',
    headers: {
        'X-API-key': '490639c577318b11c9041bc2cec59c9e',
        accept: 'application/json',
    },
});

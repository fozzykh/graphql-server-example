import { ottApiMiddlewareBaseUrl } from '../axiosClient';

export default async () => ottApiMiddlewareBaseUrl
    .get('/7tv-ott/v1/videos?selection=%7Bdata%7Bid%2Ctype%2Cdescriptions%7Bdefault%7D%2Cduration%2Ctitles%7Bdefault%7D%2Cimages(subType%3A%22Teaser%2CCover%20Big%22)%7Burl%2CsubType%7D%7D%7D')
    .then(response => response.data.response.data.map(video => ({
        id: video.id,
        title: video.titles.default,
        image: video.images[0].url,
        duration: video.duration,
        description: video.descriptions.default,
})));

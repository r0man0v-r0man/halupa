import { environment } from 'src/environments/environment';
const api = environment.webApi;
export const URLs = {
    addAdvertURL: api + 'adverts/add',
    getAdvertURL: api + 'adverts/getAdvert',
    addImageURL: api + 'images',
    deleteImageURL: api + 'images'
}
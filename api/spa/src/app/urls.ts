import { environment } from 'src/environments/environment';
const api = environment.webApi;
export const URLs = {
    addAdvertURL: api + 'adverts/add',
    addImageURL: api + 'images',
    deleteImageURL: api + 'images'
}
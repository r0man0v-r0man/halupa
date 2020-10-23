import { environment } from 'src/environments/environment';
const api = environment.webApi;
export const URLs = {
    addAdvertURL: api + 'adverts/add',
    getAdvertURL: api + 'adverts/getAdvert',
    getAnyAdvertsURL: api + 'adverts/getAnyAdverts',
    addImageURL: api + 'images',
    deleteImageURL: api + 'images',

    // user
    isUserNameExistURL: api + 'accounts/isUserNameExist',
    registerURL: api + 'accounts/register',
    loginURL: api + 'accounts/login'
}
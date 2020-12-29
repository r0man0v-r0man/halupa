import { environment } from 'src/environments/environment';
const api = environment.webApi;
export const URLs = {
    addAdvertURL: api + 'adverts/add', // todo добавить в advert
    getAdvertURL: api + 'adverts/getAdvert',
    getAnyAdvertsURL: api + 'adverts/getAnyAdverts',
    addImageURL: api + 'images',
    deleteImageURL: api + 'images',
    advert: {
      getUserAdverts: api + 'adverts/userAdverts',
      deleteAdvert: api + 'adverts/'
    },
    // user
    isUserNameExistURL: api + 'accounts/isUserNameExist',
    registerURL: api + 'accounts/register',
    loginURL: api + 'accounts/login',
    
    search: {
        searchByLocality: api + 'adverts/search'
    }
}
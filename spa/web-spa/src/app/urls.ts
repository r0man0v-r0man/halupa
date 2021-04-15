import { environment } from 'src/environments/environment';
const api = environment.webApi;
export const URLs = {
    addAdvertURL: api + 'adverts/create', // todo добавить в advert
    getAdvertURL: api + 'adverts/getAdvert',
    fetchAdvertsURL: api + 'adverts/fetchAdverts',
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
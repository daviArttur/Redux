import store from '../store/configureStore'
import loading from '../store/loading'

async function getPhotos(countPagePhotos: number) {
  store.dispatch(loading.actions.initLoading())
  const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/?_page=${countPagePhotos}&_total=3&_user=0`, {
    method: 'GET',
    cache: 'no-store',
  })
  const json = await response.json() 
  store.dispatch(loading.actions.endLoading())
  return json
}
export default getPhotos
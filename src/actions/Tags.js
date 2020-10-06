import { FETCH_CATEGORIES, FETCH_TAGS } from '../actions'

export const fetchTags = () => dispatch => {
  const limit=12,offset=0;
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  fetch(`${proxyurl}https://yourstory.com/api/v2/tag/stories?brand=yourstory&slug=fintech-startup&limit=${limit}&offset=${offset}`)
    .then(res => res.json())
    .then(
      (result) => {
        console.log("fetchTags",result)
        dispatch({
          type: FETCH_TAGS,
          payload: result
        })
      }
    )
}

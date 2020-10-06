import { FETCH_CATEGORIES, FETCH_TAGS } from '../actions'

export const fetchCategories = () => dispatch => {
    const limit=12,offset=0;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(`${proxyurl}https://yourstory.com/api/v2/category/stories?brand=yourstory&slug=ys-startup&limit=${limit}&offset=${offset}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result",result)
          dispatch({
            type: FETCH_CATEGORIES,
            payload: result
          })
        }
      )
}

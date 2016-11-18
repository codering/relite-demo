import 'fetch-detector'
import 'fetch-ie8'
import {message} from 'antd'
import {setToCookie} from './storage'

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function checkError(json){
	if(json.errCode){
		throw json;
	}else{
		return json;
	}
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const opts = { ...options };
  opts.headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    ...opts.headers,
    //authorization: cookie.get('authorization') || '',
  };
  return fetch(url, opts)
    .then(checkStatus)
    .then(parseJSON)
	.then(checkError)
    .then((data) => ({ data }))
   //.catch((err) => ({ err }));
}
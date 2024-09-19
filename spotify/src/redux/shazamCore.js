import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/artists/get-latest-release',
  headers: {'x-rapidapi-key': '87023029e9mshcbe196bef0499d2p1245a9jsnb8996949dcad'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
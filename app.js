const options = {
  method: 'GET',
  url: 'https://rapidapi.p.rapidapi.com/search',
  params: {
    to: 'LHE',
    'depart-date': '2015-03-31',
    from: 'DXB',
    'return-date': '2015-04-07'
  },
  headers: {
    'x-rapidapi-host': 'insert',
    'x-rapidapi-key': 'insert'
  }
};


axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});;

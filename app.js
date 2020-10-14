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
    'x-rapidapi-host': 'siddiq-such-flight-v1.p.rapidapi.com',
    'x-rapidapi-key': '00b9396063msh63112912396a267p11359cjsne4006f385c31'
  }
};


axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});;
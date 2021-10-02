import * as http from 'https';
import express from 'express';
const app = express();
const PORT = 4000;
const ticker: string = 'AAPL';

class ESGQuery {
  getESGByTicker(ticker: string) {
		const options:http.RequestOptions = {
			"method": "GET",
			"hostname": "esg-environmental-social-governance-data.p.rapidapi.com",
			"port": 443,
			"path": `/search?q=${ticker}`,
			"headers": {
				"X-Rapidapi-Host": "esg-environmental-social-governance-data.p.rapidapi.com",
				"X-Rapidapi-Key": "a5a4fd4b99msh511dd9f83d2666cp16b54cjsna5cae80ba822",
				
				//@ts-ignore
				"useQueryString": true,
				"X-Rapidapi-Ua": "RapidAPI-Playground"
			}
		};
		const req = http.request(options, function (res) {
			res.addListener('data', (data) => {
				console.log(data.toString('utf8'));
			})
		});
		

  }
}
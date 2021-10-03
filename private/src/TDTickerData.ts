import fs from 'fs';
import https from 'https';
import { join } from 'path';
const absPathOfAuth = join(__dirname, '..', 'authCode.txt');

export default class TDTickerData {
  public static AUTH = '';
  public static updateAuth() {
    TDTickerData.AUTH = fs.readFileSync(absPathOfAuth, 'utf-8');
  }
  public static setToken() {
    const https = require('https');
    const data = JSON.stringify({
      grant_type: 'refresh_token',
      ///ignore
      refresh_token:
        '6HardAudIivTwgG+JsBejjIAxFx1sslsGvs5eGuWLLWBV9yn+3nkO6Lh8FOz8c2hFNT3iA+uakL8Djp/B9o+99qSVdhImmYp0vQ5FaFVm//7WHrBSzPVFlP7jjV1ceiKEZre1A50M/AJJgXJLnU8+C8aVIjADeH6wzfC/xvoIRluhmSDoCgN2hS3jvXNVcTVVbAsUtZ+yQFjoaUOMIu/P6PuKU8UGL6JaVny08Nxs3My17C/QTR3HoXPobxGqjT913SH8XHM4NQXmR0jyxUxWa8WfIXd/OMdgqDVqLavdNI2W5zbLUg7nzKtr/VDPziVXjW+c5JJnGsQltk/B6NKWvyOZ/lQSrH25yVB1eKbc/wtN+KJ4jjMlVOFmLK7w0bhJcd1rniNHuEJGBAKifmCIqf7vKBWXMk1f+LaS0BWl7BKmOsayOxdp9idibr100MQuG4LYrgoVi/JHHvlovFKO9MSJ3DgUwLFg0ZBzdliM7V2P/fey2MALeL5cjy8giVnc7sEY5n8aEFqdccGgX/QS7SS4CUskQ0kXDsKqdG6Nr6jE/dJSHpDNeMc1UcM+ZqcgpIt8902bNeLzV658MR0dJurg3gCcNV+sixe5uDEdr5dPx6GWbF+Baj6LlKGnBABO8GnfVM2XTqpq5Vy8AZrqI/UeDhz1LxXEDvF+xZ+DeGKqHq/MnuDC+yGZ7Anesv3vtiemfKbH3aWThICQaoEDAU1cUsYfyHuva5L5tCuBvXhezGooMiYXer4fV3YbYWBxl965V7IWefg4Hn1aMMvN5Qoi7YSNXAg1U1JNWQHKkmhlM7AQcKqoi5Vso5DSqsSpOhM20WXYfwBe7VnIDONH39we6RX6pUzGHBLnauiuSxj8MkEA/xhaqntrvmqM/OiqdVjxGPmqms=212FD3x19z9sWBHDJACbC00B75E',
      client_id: 'ZBXVDPZCFVDFDQG0ZKLARUMC1WW7S2Y8',
    });

    const options = {
      hostname: 'api.tdameritrade.com',
      port: 443,
      path: '/v1/oauth2/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
      },
    };

    const req = https.request(options, (res: any) => {
      console.log(`statusCode: ${res.statusCode}`);

      res.on('data', (d: any) => {
        process.stdout.write('HERE' + d);
      });
    });

    req.on('error', (error: any) => {
      console.error(error);
    });

    req.write(data);
    req.end();
  }

  private static parseData(jsonStr: string) {
    const parsedObject: object = JSON.parse(jsonStr);

    if (Object.entries(parsedObject).length > 0)
      return parsedObject as STOCK_DATA_RETURN;

    throw new Error(`Cannot parse data.`);
  }

  public static get(ticker: string): Promise<STOCK_DATA_RETURN> {
    const options = {
      hostname: 'api.tdameritrade.com',
      port: 443,
      path: '/v1/marketdata/' + ticker + '/quotes',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TDTickerData.AUTH}`,
      },
    };

    const returningPromise = new Promise<STOCK_DATA_RETURN>((resolve, rej) => {
      const req = https.request(options, (res) => {
        res.on('data', (d: Buffer) => {
          console.log('d',d.toString());
          
          try {
            const dataAsJSONString = d.toString();
            const parsedData = TDTickerData.parseData(dataAsJSONString);
            
            resolve(parsedData);
          } catch (e) {
            rej(e);
          }
          req.end();
        });

      });
    });

    return returningPromise;
  }
}

// keep AUTH code updated
TDTickerData.updateAuth();
fs.watchFile(
  absPathOfAuth,
  {
    interval: 60000,
  },
  TDTickerData.updateAuth
);

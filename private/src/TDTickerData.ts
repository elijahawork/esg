const ticker: string = 'AAPL';

import https from 'https';
export default class TDTickerData {
  private static readonly AUTH =
    'JApycCmgkKIqtGmhUNoNnzclaAILZzzhJLlOHq1FvNO9rRCbDtc/n6XlpuE1HonmrsUfOuiIo1vOmUO0FWCccCNSncVYEzjaor3Dzz8a9Yhh/M0LdCS/A2KjUTsZvzSeWboe+eSxy8CEHpJsUnAVJGM2qi5/8FFqy6VXR1LuQulMehMq2+UXZykIn4HzoOsGVNteOROjJgICLnkUuYqEFXG6llQHfcgbVgGRByvsHQoChWUnizIoEWsSApIS7El8cqou/ncVrhGNYd0zZO4mchcZ2EHb/ff7vCSGTfvGt5t4yRC/O6mXSD602+1+9vBksJzn/lQ49nyObggVxY+oiphkgLaLNCFVMdhnWCQ2v0nx/Ksw+m9Ffkb2Dj3aktAz5HX1CAicfnwMUWXpKaDev+2PzgyHjaBMK8ii9c4euKujOpQXb6VJimAQJ+OqNDXjzDvWaUr0hKJQpavmq4D9jIcKH94KahiTO5UI1Xn+L4GwXZ0wXAN9h5QenEIA9B0H4gOuYU54vByOjBRqD0Bsp6n8Z4QltPJRXHZ2XA3wcAJ8STRTVwlwZBuBbrpQrfq28K9bDcQzW54FOqO1M93Vk/MKuguBtwVNXvnocM3MrFtCL0OtF100MQuG4LYrgoVi/JHHvlB1mJgXATazsyQ4feVfV+KlMmX5ShErJtxeJjotOLzV1W2wt3tBTwsfLO2M7hXAHvZ/JaISCixM+KKdxhgq+NICIgCKEx1cGeFja2tEvxSDZ3Y/DIR3q6JZdA63urspSYryQCgJ2xpqEwqBKCYkYVv2GYlDGceEB9wH23bK3sZ6sBNtNOJrq8Kt3q5AlUvkghKbYrYz1ORaqWwVlLrrMriInqQ5IfAMt17w3Hk6AGEHeUbsnWr5NEU0D8Y281C1h0jesxAuqa1/oHNfhxKuVLST3ozQHLzejDqapj1fcawDhytvY1KvHnNeIkJT1V8Mdq/L7Ib5LMEgdyMv5MWcBWcdUdEXBjRqFo5kb3MFupgtVtLwklYWcZgiZp/FlaMJqHKNAcoBss16eAJ3W/Wco6Pfr9K98gpistA7jEWrdkegCWHZnc1kqH8JcIvA7jKgbNFjbTIv+LqC9kLIBaM4R/3Q1C5J8wns7Mi5sTmVtdl3zATj7TlJNvslxT1ym1M2rwhDML/033zDh5b1gVsOji2Mpze7lnSEKgzYbi45LRU8TqA25DgxzPRNO7YKCb9fnGkzBxAmUfHVIyNXo7MAyD4xpYS8zf87jV5n5rqBN1u+sbTWOg==212FD3x19z9sWBHDJACbC00B75E';
    
  public static get(ticker: string) {
    const options = {
      hostname: 'api.tdameritrade.com',
      port: 443,
      path: '/v1/marketdata/' + ticker + '/quotes',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TDTickerData.AUTH}`,
      },
    };

    const req = https.request(options, (res) => {
      res.on('data', (d: Buffer) => {
        console.log(d.toString());
      });
    });

    req.on('error', (error) => {
      console.error(error);
    });

    req.end();
  }
}

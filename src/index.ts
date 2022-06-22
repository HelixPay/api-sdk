class HelixPay {
  apiBaseUrl:string = 'https://api-sandbox.helixpay.ph/v2';
  bearerToken: string | null = null;

  initializeApp(token: string): void  {
    this.bearerToken = token;
  }
}

const helixpay = new HelixPay();

export default helixpay;
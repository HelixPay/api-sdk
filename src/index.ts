class HelixPay {
  bearerToken: string | null = null;

  initializeApp(token: string): void  {
    this.bearerToken = token;
  }
}

const helixpay = new HelixPay();

export default helixpay;
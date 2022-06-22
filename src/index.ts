class HelixPay {
  bearerToken: string | null | undefined;

  initializeApp(token: string): void {
    this.bearerToken = token;
  }
}

export default new HelixPay();
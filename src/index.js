function HelixPay() {
  this.bearerToken = null;

  this.initializeApp = (token) => {
    this.bearerToken = token;
  }
}

export default new HelixPay();
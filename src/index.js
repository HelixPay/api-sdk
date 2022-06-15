function helixpay() {
  this.bearerToken = null;

  this.initializeApp = (token) => {
    this.bearerToken = token;
  }
}

export default new helixpay();
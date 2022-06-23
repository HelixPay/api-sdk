import axios from 'axios';

class HelixPay {
  #isInitialized: boolean = false;
  apiBaseUrl: string = 'https://api-sandbox.helixpay.ph/v2';
  bearerToken: string | null = null;

  /**
   * Initialize SDK
   *
   * Used to initialize and setup the SDK. All other SDK methods must be called after this one.
   */
  init(bearerToken: string): void {
    if (!bearerToken) {
      throw new Error('bearerToken parameter is required');
    }
    this.#isInitialized = true;
    this.bearerToken = bearerToken;
  }

  checkInitialization() {
    if (!this.#isInitialized) {
      throw new Error('SDK is not initilialized');
    }
  }

  getOrders() {
    this.checkInitialization();
  }

  getProductById(productId: number, included: string): Promise<any> {
    this.checkInitialization();

    return axios.get(`${this.apiBaseUrl}/v1/products/${productId}`, {
      params: {
        include: included,
      },
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${this.bearerToken}`,
      },
    });
  }
}

const helixpay = new HelixPay();

export default helixpay;

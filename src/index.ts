import axios from 'axios';

type CheckoutData = {
  customer: {
    name: String;
    mobile_number: String;
    address: String;
    barangay: String;
    city: String;
    province: String;
    zip_code: String;
    email: String;
  };
  products: [
    {
      payment_schedule: {
        frequency: String;
        day: Number;
      };
      price: Number;
      quantity: Number;
      are_multiple_orders_allowed: Boolean;
      is_shippable: Boolean;
      product_id: Number;
      title: String;
      description: String;
    }
  ];
  payment_type_id: Number;
  payor: String;
  billing_address: String;
  billing_barangay: String;
  billing_city: String;
  billing_province: String;
  billing_country: String;
  billing_zip_code: String;
  recipient: String;
  shipping_address: String;
  shipping_barangay: String;
  shipping_city: String;
  shipping_province: String;
  shipping_country: String;
  shipping_zip_code: String;
};
class HelixPay {
  #isInitialized: boolean = false;
  apiBaseUrl: string = 'https://api-sandbox.helixpay.ph/v2';
  bearerToken: string | null = null;
  checkoutURL: string | null = null;

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

  #checkInitialization() {
    if (!this.#isInitialized) {
      throw new Error('SDK is not initilialized');
    }
  }

  getOrders() {
    this.#checkInitialization();
  }

  requestCheckoutURL(data: CheckoutData): Promise<any> {
    return axios.post(`${this.apiBaseUrl}/v2/checkouts`, data, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${this.bearerToken}`,
        'Content-Type': 'application/json',
      },
    });
  }
}

const helixpay = new HelixPay();

export default helixpay;

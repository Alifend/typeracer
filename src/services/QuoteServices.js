import axios from "axios";
class QuoteServices {
  getQuote() {
    return axios.get("https://api.api-ninjas.com/v1/quotes", {
      headers: { "X-Api-Key": "Ky+4uH6IcQQ7Xl3NO8O1IA==lmS6ITzprHCEkIF2" },
    });
  }
}

export default new QuoteServices();

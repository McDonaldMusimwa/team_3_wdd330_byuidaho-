const baseURL = "https://server-nodejs.cit.byui.edu:3000/";
async function convertToJson(res) {
  const response = await res;
  response.json();
  if (response.ok) {
    return response
  } else {
    throw{name:'servicesError',message:response};
  }
}

export default class ExternalServices {
  // constructor(category) {
  //   // this.category = category;
  //   // this.path = `../json/${this.category}.json`;
  // }
  async getData(category) {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + "checkout/", options).then(convertToJson);
  }
}

import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getBooks: function(book) {
    return axios.get("https://dog.ceo/api/book/" + book + "/images");
  },
  getBaseBooksList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};

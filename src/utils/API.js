import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=50&nat=us";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function() {
    return axios.get(BASEURL);
  }
};

import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username,email,phone,address,name,password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      phone,
      address,
      name,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  getUserById(user_id) {
    return axios.post("http://localhost:8080/api/v1/change-user"+"/"+ user_id);;
  }
}

export default new AuthService();

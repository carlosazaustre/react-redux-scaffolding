import fetch from 'isomorphic-fetch';

const BASE_URL = 'http://jsonplaceholder.typicode.com';

const API = {
  todos: {
    async getList (page = 1) {
      const response = await fetch(`${BASE_URL}/todos?_page=${page}`);
      const data = await response.json();
      return data;
    },
    async getSingle (id = 1) {
      const response = await fetch(`${BASE_URL}/todos/${id}`);
      const data = await response.json();
      return data;
    }
  },
  users: {
    async getSingle (id = 1) {
      const response = await fetch(`${BASE_URL}/todos/${id}`);
      const data = await response.json();
      return data;
    },
    async getTodos (id = 1) {
      const response = await fetch(`${BASE_URL}/todos?userId=${id}`);
      const data = await response.json();
      return data;
    }
  }
}

export default API;

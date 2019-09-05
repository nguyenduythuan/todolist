import axios from 'axios';

class AxiosService {
  constructor() {
    const instance = axios.create();
    axios.interceptors.request.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  put(url, body) {
    return this.instance.put(url, body);
  }

  delete(url, id) {
    return this.instance.delete(url, {
      tasks: { id },
    });
  }
}

export default new AxiosService();

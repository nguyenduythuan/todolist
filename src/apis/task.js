import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'tasks';

const getList = () => axiosService.get(`${API_ENDPOINT}${url}`);

export { getList };

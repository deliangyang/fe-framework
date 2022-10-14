import { get, post } from '../utils/request';

export const test = () => get(`/api/test`);

export const testPost = (data: any) => post(`/api/test`, data);
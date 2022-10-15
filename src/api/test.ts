import { LoginWithEmail } from '@/domains/login_with_email';
import { get, post } from '../utils/request';

export const test = () => get(`/api/test`);

export const testPost = (data: any) => post(`/api/test`, data);

export const login = (data: LoginWithEmail) => post(`/api/login`, data);
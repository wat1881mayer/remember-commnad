import axios from 'axios';
import { domain } from '../src/config/keys';

const buildClient = ({ req }: any) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://www.remember-cli.com/',
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
};

export default buildClient;

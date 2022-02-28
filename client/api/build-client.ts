import axios, { AxiosRequestConfig } from 'axios';
import { NextPageContext } from 'next';

const buildClient = ({ req }: any) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: 'http://www.remember-cli.com',
    });
  }
};

export default buildClient;

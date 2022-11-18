import fetch from 'node-fetch';
import { IClientInitOptions } from '../models/index.js';

/**
 * This is the Base Service used by all other services (except Auth)
 * @param clientOptions Client initialization options
 * @returns BaseService
 */
export const BaseService = (clientOptions: IClientInitOptions) => {
  const Fetch = async (method: string, path: string, body: object | null | undefined) => {
    if (!clientOptions.region) {
      throw 'You did not provide a valid region when you initialized the client';
    }

    if (!clientOptions.accessToken) {
      throw 'You must run the auth command first to initialize the CLI';
    }

    let data = body !== null && body !== undefined ? JSON.stringify(body) : null;

    return await fetch(`https://${clientOptions.region}/${path}`, {
      method,
      body: data,
      headers: {
        Authorization: `Bearer ${clientOptions.accessToken}`,
        'Content-Type': 'application/json',
      },
    });
  };

  const Get = async (path: string) => {
    return await Fetch('get', path, null);
  };

  const Post = async (path: string, body: object | null | undefined) => {
    return await Fetch('post', path, body);
  };

  const Put = async (path: string, body: object | null | undefined) => {
    return await Fetch('put', path, body);
  };

  const Delete = async (path: string, body: object | null | undefined) => {
    return await Fetch('delete', path, body);
  };

  return { Fetch, Get, Post, Put, Delete };
};

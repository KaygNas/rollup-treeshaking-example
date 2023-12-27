import { client } from './client';
export default function request(payload, options = {}) {
    return client.http(Object.assign({ url: payload.path, method: payload.method, data: payload.allData }, options));
}

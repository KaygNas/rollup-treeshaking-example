import { assert } from '@daip-calligraphy/frontend-shared/lib/utils/assert';
const uninittedHttp = () => {
    assert(false, 'http must be initted.');
};
export const client = {
    http: uninittedHttp,
    init: (_http) => {
        assert(!!_http, 'http must be initted.');
        client.http = _http;
    },
};

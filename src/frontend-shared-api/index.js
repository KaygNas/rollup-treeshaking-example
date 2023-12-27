export * from './interface';
export * from './type-utils';
export * from './api';
import { client } from './client';
export function initSharedAPI({ http, overrideConfig }) {
    client.init(overrideConfig ? overrideDefaultConfig(http, overrideConfig) : http);
}
function overrideDefaultConfig(http, overrideConfig) {
    return (config) => http(Object.assign(Object.assign({}, config), overrideConfig));
}

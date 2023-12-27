/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
const request = () => {};
const mockUrl_0_0_0_0 = 'http://yapi.dm-ai.cn:3000/mock/1396';
const devUrl_0_0_0_0 = '';
const prodUrl_0_0_0_0 = '';
const dataKey_0_0_0_0 = 'data';
/**
 * 接口 [导出数据-作业↗](http://yapi.dm-ai.cn:3000/project/1396/interface/api/32645) 的 **请求配置**
 *
 * @分类 [作业模块【v3.4.2】↗](http://yapi.dm-ai.cn:3000/project/1396/interface/api/cat_10102)
 * @请求头 `GET /api/v2/backend/jobs/export/file`
 * @更新时间 `2023-06-21 18:07:01`
 */
const getApiV2BackendJobsExportFileRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/api/v2/backend/jobs/export/file',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: ['schedule_id', 'job_type', 'classroom_id'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiV2BackendJobsExportFile',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [导出数据-作业↗](http://yapi.dm-ai.cn:3000/project/1396/interface/api/32645) 的 **请求函数**
 *
 * @分类 [作业模块【v3.4.2】↗](http://yapi.dm-ai.cn:3000/project/1396/interface/api/cat_10102)
 * @请求头 `GET /api/v2/backend/jobs/export/file`
 * @更新时间 `2023-06-21 18:07:01`
 */
export const getApiV2BackendJobsExportFile = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getApiV2BackendJobsExportFileRequestConfig, requestData), ...args);
};
getApiV2BackendJobsExportFile.requestConfig = getApiV2BackendJobsExportFileRequestConfig;
const mockUrl_0_0_0_1 = 'http://yapi.dm-ai.cn:3000/mock/1396';
const devUrl_0_0_0_1 = '';
const prodUrl_0_0_0_1 = '';
const dataKey_0_0_0_1 = 'data';
/**
 * 接口 [登陆↗](http://yapi.dm-ai.cn:3000/project/1396/interface/api/32900) 的 **请求配置**
 *
 * @分类 [南沙12校↗](http://yapi.dm-ai.cn:3000/project/1396/interface/api/cat_10672)
 * @请求头 `POST /api/v2/backend/ns/login`
 * @更新时间 `2023-08-02 16:56:12`
 */
const postApiV2BackendNsLoginRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/api/v2/backend/ns/login',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postApiV2BackendNsLogin',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [登陆↗](http://yapi.dm-ai.cn:3000/project/1396/interface/api/32900) 的 **请求函数**
 *
 * @分类 [南沙12校↗](http://yapi.dm-ai.cn:3000/project/1396/interface/api/cat_10672)
 * @请求头 `POST /api/v2/backend/ns/login`
 * @更新时间 `2023-08-02 16:56:12`
 */
export const postApiV2BackendNsLogin = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(postApiV2BackendNsLoginRequestConfig, requestData), ...args);
};
postApiV2BackendNsLogin.requestConfig = postApiV2BackendNsLoginRequestConfig;
/**
 * 接口 [课程信息↗](http://yapi.dm-ai.cn:3000/project/1396/interface/api/32905) 的 **请求配置**
 *
 * @分类 [南沙12校↗](http://yapi.dm-ai.cn:3000/project/1396/interface/api/cat_10672)
 * @请求头 `GET /api/v2/backend/ns/course`
 * @更新时间 `2023-08-04 11:15:13`
 */
const getApiV2BackendNsCourseRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/api/v2/backend/ns/course',
    method: Method.GET,
    requestHeaders: { Authorization: 'token' },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiV2BackendNsCourse',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [课程信息↗](http://yapi.dm-ai.cn:3000/project/1396/interface/api/32905) 的 **请求函数**
 *
 * @分类 [南沙12校↗](http://yapi.dm-ai.cn:3000/project/1396/interface/api/cat_10672)
 * @请求头 `GET /api/v2/backend/ns/course`
 * @更新时间 `2023-08-04 11:15:13`
 */
export const getApiV2BackendNsCourse = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getApiV2BackendNsCourseRequestConfig, requestData), ...args);
};
getApiV2BackendNsCourse.requestConfig = getApiV2BackendNsCourseRequestConfig;
/* prettier-ignore-end */

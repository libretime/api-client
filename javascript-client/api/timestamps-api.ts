/* tslint:disable */
/* eslint-disable */
/**
 * LibreTime API
 * Radio Broadcast & Automation Platform
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { PatchedTimestamp } from '../model';
// @ts-ignore
import { Timestamp } from '../model';
/**
 * TimestampsApi - axios parameter creator
 * @export
 */
export const TimestampsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Timestamp} timestamp 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        timestampsCreate: async (timestamp: Timestamp, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'timestamp' is not null or undefined
            assertParamExists('timestampsCreate', 'timestamp', timestamp)
            const localVarPath = `/api/v2/timestamps`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication cookieAuth required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(timestamp, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this timestamp.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        timestampsDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('timestampsDestroy', 'id', id)
            const localVarPath = `/api/v2/timestamps/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication cookieAuth required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        timestampsList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/timestamps`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication cookieAuth required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this timestamp.
         * @param {PatchedTimestamp} [patchedTimestamp] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        timestampsPartialUpdate: async (id: number, patchedTimestamp?: PatchedTimestamp, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('timestampsPartialUpdate', 'id', id)
            const localVarPath = `/api/v2/timestamps/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication cookieAuth required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchedTimestamp, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this timestamp.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        timestampsRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('timestampsRetrieve', 'id', id)
            const localVarPath = `/api/v2/timestamps/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication cookieAuth required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this timestamp.
         * @param {Timestamp} timestamp 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        timestampsUpdate: async (id: number, timestamp: Timestamp, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('timestampsUpdate', 'id', id)
            // verify required parameter 'timestamp' is not null or undefined
            assertParamExists('timestampsUpdate', 'timestamp', timestamp)
            const localVarPath = `/api/v2/timestamps/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication cookieAuth required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(timestamp, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TimestampsApi - functional programming interface
 * @export
 */
export const TimestampsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TimestampsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {Timestamp} timestamp 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async timestampsCreate(timestamp: Timestamp, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Timestamp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.timestampsCreate(timestamp, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this timestamp.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async timestampsDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.timestampsDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async timestampsList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Timestamp>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.timestampsList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this timestamp.
         * @param {PatchedTimestamp} [patchedTimestamp] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async timestampsPartialUpdate(id: number, patchedTimestamp?: PatchedTimestamp, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Timestamp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.timestampsPartialUpdate(id, patchedTimestamp, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this timestamp.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async timestampsRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Timestamp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.timestampsRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this timestamp.
         * @param {Timestamp} timestamp 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async timestampsUpdate(id: number, timestamp: Timestamp, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Timestamp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.timestampsUpdate(id, timestamp, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TimestampsApi - factory interface
 * @export
 */
export const TimestampsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TimestampsApiFp(configuration)
    return {
        /**
         * 
         * @param {Timestamp} timestamp 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        timestampsCreate(timestamp: Timestamp, options?: any): AxiosPromise<Timestamp> {
            return localVarFp.timestampsCreate(timestamp, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this timestamp.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        timestampsDestroy(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.timestampsDestroy(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        timestampsList(options?: any): AxiosPromise<Array<Timestamp>> {
            return localVarFp.timestampsList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this timestamp.
         * @param {PatchedTimestamp} [patchedTimestamp] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        timestampsPartialUpdate(id: number, patchedTimestamp?: PatchedTimestamp, options?: any): AxiosPromise<Timestamp> {
            return localVarFp.timestampsPartialUpdate(id, patchedTimestamp, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this timestamp.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        timestampsRetrieve(id: number, options?: any): AxiosPromise<Timestamp> {
            return localVarFp.timestampsRetrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this timestamp.
         * @param {Timestamp} timestamp 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        timestampsUpdate(id: number, timestamp: Timestamp, options?: any): AxiosPromise<Timestamp> {
            return localVarFp.timestampsUpdate(id, timestamp, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TimestampsApi - object-oriented interface
 * @export
 * @class TimestampsApi
 * @extends {BaseAPI}
 */
export class TimestampsApi extends BaseAPI {
    /**
     * 
     * @param {Timestamp} timestamp 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimestampsApi
     */
    public timestampsCreate(timestamp: Timestamp, options?: AxiosRequestConfig) {
        return TimestampsApiFp(this.configuration).timestampsCreate(timestamp, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this timestamp.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimestampsApi
     */
    public timestampsDestroy(id: number, options?: AxiosRequestConfig) {
        return TimestampsApiFp(this.configuration).timestampsDestroy(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimestampsApi
     */
    public timestampsList(options?: AxiosRequestConfig) {
        return TimestampsApiFp(this.configuration).timestampsList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this timestamp.
     * @param {PatchedTimestamp} [patchedTimestamp] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimestampsApi
     */
    public timestampsPartialUpdate(id: number, patchedTimestamp?: PatchedTimestamp, options?: AxiosRequestConfig) {
        return TimestampsApiFp(this.configuration).timestampsPartialUpdate(id, patchedTimestamp, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this timestamp.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimestampsApi
     */
    public timestampsRetrieve(id: number, options?: AxiosRequestConfig) {
        return TimestampsApiFp(this.configuration).timestampsRetrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this timestamp.
     * @param {Timestamp} timestamp 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimestampsApi
     */
    public timestampsUpdate(id: number, timestamp: Timestamp, options?: AxiosRequestConfig) {
        return TimestampsApiFp(this.configuration).timestampsUpdate(id, timestamp, options).then((request) => request(this.axios, this.basePath));
    }
}

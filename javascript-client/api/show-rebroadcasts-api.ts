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
import { PatchedShowRebroadcast } from '../model';
// @ts-ignore
import { ShowRebroadcast } from '../model';
/**
 * ShowRebroadcastsApi - axios parameter creator
 * @export
 */
export const ShowRebroadcastsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ShowRebroadcast} showRebroadcast 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showRebroadcastsCreate: async (showRebroadcast: ShowRebroadcast, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'showRebroadcast' is not null or undefined
            assertParamExists('showRebroadcastsCreate', 'showRebroadcast', showRebroadcast)
            const localVarPath = `/api/v2/show-rebroadcasts`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(showRebroadcast, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show rebroadcast.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showRebroadcastsDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showRebroadcastsDestroy', 'id', id)
            const localVarPath = `/api/v2/show-rebroadcasts/{id}`
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
        showRebroadcastsList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/show-rebroadcasts`;
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
         * @param {number} id A unique integer value identifying this show rebroadcast.
         * @param {PatchedShowRebroadcast} [patchedShowRebroadcast] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showRebroadcastsPartialUpdate: async (id: number, patchedShowRebroadcast?: PatchedShowRebroadcast, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showRebroadcastsPartialUpdate', 'id', id)
            const localVarPath = `/api/v2/show-rebroadcasts/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedShowRebroadcast, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show rebroadcast.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showRebroadcastsRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showRebroadcastsRetrieve', 'id', id)
            const localVarPath = `/api/v2/show-rebroadcasts/{id}`
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
         * @param {number} id A unique integer value identifying this show rebroadcast.
         * @param {ShowRebroadcast} showRebroadcast 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showRebroadcastsUpdate: async (id: number, showRebroadcast: ShowRebroadcast, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showRebroadcastsUpdate', 'id', id)
            // verify required parameter 'showRebroadcast' is not null or undefined
            assertParamExists('showRebroadcastsUpdate', 'showRebroadcast', showRebroadcast)
            const localVarPath = `/api/v2/show-rebroadcasts/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(showRebroadcast, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ShowRebroadcastsApi - functional programming interface
 * @export
 */
export const ShowRebroadcastsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShowRebroadcastsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {ShowRebroadcast} showRebroadcast 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showRebroadcastsCreate(showRebroadcast: ShowRebroadcast, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowRebroadcast>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showRebroadcastsCreate(showRebroadcast, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show rebroadcast.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showRebroadcastsDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showRebroadcastsDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showRebroadcastsList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ShowRebroadcast>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showRebroadcastsList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show rebroadcast.
         * @param {PatchedShowRebroadcast} [patchedShowRebroadcast] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showRebroadcastsPartialUpdate(id: number, patchedShowRebroadcast?: PatchedShowRebroadcast, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowRebroadcast>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showRebroadcastsPartialUpdate(id, patchedShowRebroadcast, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show rebroadcast.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showRebroadcastsRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowRebroadcast>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showRebroadcastsRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show rebroadcast.
         * @param {ShowRebroadcast} showRebroadcast 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showRebroadcastsUpdate(id: number, showRebroadcast: ShowRebroadcast, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowRebroadcast>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showRebroadcastsUpdate(id, showRebroadcast, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ShowRebroadcastsApi - factory interface
 * @export
 */
export const ShowRebroadcastsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShowRebroadcastsApiFp(configuration)
    return {
        /**
         * 
         * @param {ShowRebroadcast} showRebroadcast 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showRebroadcastsCreate(showRebroadcast: ShowRebroadcast, options?: any): AxiosPromise<ShowRebroadcast> {
            return localVarFp.showRebroadcastsCreate(showRebroadcast, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show rebroadcast.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showRebroadcastsDestroy(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.showRebroadcastsDestroy(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showRebroadcastsList(options?: any): AxiosPromise<Array<ShowRebroadcast>> {
            return localVarFp.showRebroadcastsList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show rebroadcast.
         * @param {PatchedShowRebroadcast} [patchedShowRebroadcast] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showRebroadcastsPartialUpdate(id: number, patchedShowRebroadcast?: PatchedShowRebroadcast, options?: any): AxiosPromise<ShowRebroadcast> {
            return localVarFp.showRebroadcastsPartialUpdate(id, patchedShowRebroadcast, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show rebroadcast.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showRebroadcastsRetrieve(id: number, options?: any): AxiosPromise<ShowRebroadcast> {
            return localVarFp.showRebroadcastsRetrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show rebroadcast.
         * @param {ShowRebroadcast} showRebroadcast 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showRebroadcastsUpdate(id: number, showRebroadcast: ShowRebroadcast, options?: any): AxiosPromise<ShowRebroadcast> {
            return localVarFp.showRebroadcastsUpdate(id, showRebroadcast, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ShowRebroadcastsApi - object-oriented interface
 * @export
 * @class ShowRebroadcastsApi
 * @extends {BaseAPI}
 */
export class ShowRebroadcastsApi extends BaseAPI {
    /**
     * 
     * @param {ShowRebroadcast} showRebroadcast 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowRebroadcastsApi
     */
    public showRebroadcastsCreate(showRebroadcast: ShowRebroadcast, options?: AxiosRequestConfig) {
        return ShowRebroadcastsApiFp(this.configuration).showRebroadcastsCreate(showRebroadcast, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show rebroadcast.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowRebroadcastsApi
     */
    public showRebroadcastsDestroy(id: number, options?: AxiosRequestConfig) {
        return ShowRebroadcastsApiFp(this.configuration).showRebroadcastsDestroy(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowRebroadcastsApi
     */
    public showRebroadcastsList(options?: AxiosRequestConfig) {
        return ShowRebroadcastsApiFp(this.configuration).showRebroadcastsList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show rebroadcast.
     * @param {PatchedShowRebroadcast} [patchedShowRebroadcast] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowRebroadcastsApi
     */
    public showRebroadcastsPartialUpdate(id: number, patchedShowRebroadcast?: PatchedShowRebroadcast, options?: AxiosRequestConfig) {
        return ShowRebroadcastsApiFp(this.configuration).showRebroadcastsPartialUpdate(id, patchedShowRebroadcast, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show rebroadcast.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowRebroadcastsApi
     */
    public showRebroadcastsRetrieve(id: number, options?: AxiosRequestConfig) {
        return ShowRebroadcastsApiFp(this.configuration).showRebroadcastsRetrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show rebroadcast.
     * @param {ShowRebroadcast} showRebroadcast 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowRebroadcastsApi
     */
    public showRebroadcastsUpdate(id: number, showRebroadcast: ShowRebroadcast, options?: AxiosRequestConfig) {
        return ShowRebroadcastsApiFp(this.configuration).showRebroadcastsUpdate(id, showRebroadcast, options).then((request) => request(this.axios, this.basePath));
    }
}

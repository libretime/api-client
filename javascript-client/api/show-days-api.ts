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
import { PatchedShowDays } from '../model';
// @ts-ignore
import { ShowDays } from '../model';
/**
 * ShowDaysApi - axios parameter creator
 * @export
 */
export const ShowDaysApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ShowDays} showDays 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDaysCreate: async (showDays: ShowDays, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'showDays' is not null or undefined
            assertParamExists('showDaysCreate', 'showDays', showDays)
            const localVarPath = `/api/v2/show-days`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(showDays, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show days.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDaysDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showDaysDestroy', 'id', id)
            const localVarPath = `/api/v2/show-days/{id}`
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
        showDaysList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/show-days`;
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
         * @param {number} id A unique integer value identifying this show days.
         * @param {PatchedShowDays} [patchedShowDays] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDaysPartialUpdate: async (id: number, patchedShowDays?: PatchedShowDays, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showDaysPartialUpdate', 'id', id)
            const localVarPath = `/api/v2/show-days/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedShowDays, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show days.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDaysRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showDaysRetrieve', 'id', id)
            const localVarPath = `/api/v2/show-days/{id}`
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
         * @param {number} id A unique integer value identifying this show days.
         * @param {ShowDays} showDays 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDaysUpdate: async (id: number, showDays: ShowDays, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showDaysUpdate', 'id', id)
            // verify required parameter 'showDays' is not null or undefined
            assertParamExists('showDaysUpdate', 'showDays', showDays)
            const localVarPath = `/api/v2/show-days/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(showDays, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ShowDaysApi - functional programming interface
 * @export
 */
export const ShowDaysApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShowDaysApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {ShowDays} showDays 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showDaysCreate(showDays: ShowDays, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowDays>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showDaysCreate(showDays, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show days.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showDaysDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showDaysDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showDaysList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ShowDays>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showDaysList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show days.
         * @param {PatchedShowDays} [patchedShowDays] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showDaysPartialUpdate(id: number, patchedShowDays?: PatchedShowDays, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowDays>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showDaysPartialUpdate(id, patchedShowDays, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show days.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showDaysRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowDays>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showDaysRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show days.
         * @param {ShowDays} showDays 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showDaysUpdate(id: number, showDays: ShowDays, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShowDays>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showDaysUpdate(id, showDays, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ShowDaysApi - factory interface
 * @export
 */
export const ShowDaysApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShowDaysApiFp(configuration)
    return {
        /**
         * 
         * @param {ShowDays} showDays 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDaysCreate(showDays: ShowDays, options?: any): AxiosPromise<ShowDays> {
            return localVarFp.showDaysCreate(showDays, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show days.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDaysDestroy(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.showDaysDestroy(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDaysList(options?: any): AxiosPromise<Array<ShowDays>> {
            return localVarFp.showDaysList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show days.
         * @param {PatchedShowDays} [patchedShowDays] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDaysPartialUpdate(id: number, patchedShowDays?: PatchedShowDays, options?: any): AxiosPromise<ShowDays> {
            return localVarFp.showDaysPartialUpdate(id, patchedShowDays, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show days.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDaysRetrieve(id: number, options?: any): AxiosPromise<ShowDays> {
            return localVarFp.showDaysRetrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this show days.
         * @param {ShowDays} showDays 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDaysUpdate(id: number, showDays: ShowDays, options?: any): AxiosPromise<ShowDays> {
            return localVarFp.showDaysUpdate(id, showDays, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ShowDaysApi - object-oriented interface
 * @export
 * @class ShowDaysApi
 * @extends {BaseAPI}
 */
export class ShowDaysApi extends BaseAPI {
    /**
     * 
     * @param {ShowDays} showDays 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowDaysApi
     */
    public showDaysCreate(showDays: ShowDays, options?: AxiosRequestConfig) {
        return ShowDaysApiFp(this.configuration).showDaysCreate(showDays, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show days.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowDaysApi
     */
    public showDaysDestroy(id: number, options?: AxiosRequestConfig) {
        return ShowDaysApiFp(this.configuration).showDaysDestroy(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowDaysApi
     */
    public showDaysList(options?: AxiosRequestConfig) {
        return ShowDaysApiFp(this.configuration).showDaysList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show days.
     * @param {PatchedShowDays} [patchedShowDays] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowDaysApi
     */
    public showDaysPartialUpdate(id: number, patchedShowDays?: PatchedShowDays, options?: AxiosRequestConfig) {
        return ShowDaysApiFp(this.configuration).showDaysPartialUpdate(id, patchedShowDays, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show days.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowDaysApi
     */
    public showDaysRetrieve(id: number, options?: AxiosRequestConfig) {
        return ShowDaysApiFp(this.configuration).showDaysRetrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this show days.
     * @param {ShowDays} showDays 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowDaysApi
     */
    public showDaysUpdate(id: number, showDays: ShowDays, options?: AxiosRequestConfig) {
        return ShowDaysApiFp(this.configuration).showDaysUpdate(id, showDays, options).then((request) => request(this.axios, this.basePath));
    }
}

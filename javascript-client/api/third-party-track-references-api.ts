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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { PatchedThirdPartyTrackReference } from '../model';
// @ts-ignore
import type { ThirdPartyTrackReference } from '../model';
/**
 * ThirdPartyTrackReferencesApi - axios parameter creator
 * @export
 */
export const ThirdPartyTrackReferencesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ThirdPartyTrackReference} thirdPartyTrackReference 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        thirdPartyTrackReferencesCreate: async (thirdPartyTrackReference: ThirdPartyTrackReference, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'thirdPartyTrackReference' is not null or undefined
            assertParamExists('thirdPartyTrackReferencesCreate', 'thirdPartyTrackReference', thirdPartyTrackReference)
            const localVarPath = `/api/v2/third-party-track-references`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(thirdPartyTrackReference, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this third party track reference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        thirdPartyTrackReferencesDestroy: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('thirdPartyTrackReferencesDestroy', 'id', id)
            const localVarPath = `/api/v2/third-party-track-references/{id}`
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
        thirdPartyTrackReferencesList: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/third-party-track-references`;
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
         * @param {number} id A unique integer value identifying this third party track reference.
         * @param {PatchedThirdPartyTrackReference} [patchedThirdPartyTrackReference] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        thirdPartyTrackReferencesPartialUpdate: async (id: number, patchedThirdPartyTrackReference?: PatchedThirdPartyTrackReference, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('thirdPartyTrackReferencesPartialUpdate', 'id', id)
            const localVarPath = `/api/v2/third-party-track-references/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedThirdPartyTrackReference, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this third party track reference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        thirdPartyTrackReferencesRetrieve: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('thirdPartyTrackReferencesRetrieve', 'id', id)
            const localVarPath = `/api/v2/third-party-track-references/{id}`
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
         * @param {number} id A unique integer value identifying this third party track reference.
         * @param {ThirdPartyTrackReference} thirdPartyTrackReference 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        thirdPartyTrackReferencesUpdate: async (id: number, thirdPartyTrackReference: ThirdPartyTrackReference, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('thirdPartyTrackReferencesUpdate', 'id', id)
            // verify required parameter 'thirdPartyTrackReference' is not null or undefined
            assertParamExists('thirdPartyTrackReferencesUpdate', 'thirdPartyTrackReference', thirdPartyTrackReference)
            const localVarPath = `/api/v2/third-party-track-references/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(thirdPartyTrackReference, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ThirdPartyTrackReferencesApi - functional programming interface
 * @export
 */
export const ThirdPartyTrackReferencesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ThirdPartyTrackReferencesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {ThirdPartyTrackReference} thirdPartyTrackReference 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async thirdPartyTrackReferencesCreate(thirdPartyTrackReference: ThirdPartyTrackReference, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThirdPartyTrackReference>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.thirdPartyTrackReferencesCreate(thirdPartyTrackReference, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyTrackReferencesApi.thirdPartyTrackReferencesCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this third party track reference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async thirdPartyTrackReferencesDestroy(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.thirdPartyTrackReferencesDestroy(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyTrackReferencesApi.thirdPartyTrackReferencesDestroy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async thirdPartyTrackReferencesList(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ThirdPartyTrackReference>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.thirdPartyTrackReferencesList(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyTrackReferencesApi.thirdPartyTrackReferencesList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this third party track reference.
         * @param {PatchedThirdPartyTrackReference} [patchedThirdPartyTrackReference] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async thirdPartyTrackReferencesPartialUpdate(id: number, patchedThirdPartyTrackReference?: PatchedThirdPartyTrackReference, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThirdPartyTrackReference>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.thirdPartyTrackReferencesPartialUpdate(id, patchedThirdPartyTrackReference, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyTrackReferencesApi.thirdPartyTrackReferencesPartialUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this third party track reference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async thirdPartyTrackReferencesRetrieve(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThirdPartyTrackReference>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.thirdPartyTrackReferencesRetrieve(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyTrackReferencesApi.thirdPartyTrackReferencesRetrieve']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this third party track reference.
         * @param {ThirdPartyTrackReference} thirdPartyTrackReference 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async thirdPartyTrackReferencesUpdate(id: number, thirdPartyTrackReference: ThirdPartyTrackReference, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThirdPartyTrackReference>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.thirdPartyTrackReferencesUpdate(id, thirdPartyTrackReference, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyTrackReferencesApi.thirdPartyTrackReferencesUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ThirdPartyTrackReferencesApi - factory interface
 * @export
 */
export const ThirdPartyTrackReferencesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ThirdPartyTrackReferencesApiFp(configuration)
    return {
        /**
         * 
         * @param {ThirdPartyTrackReference} thirdPartyTrackReference 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        thirdPartyTrackReferencesCreate(thirdPartyTrackReference: ThirdPartyTrackReference, options?: any): AxiosPromise<ThirdPartyTrackReference> {
            return localVarFp.thirdPartyTrackReferencesCreate(thirdPartyTrackReference, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this third party track reference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        thirdPartyTrackReferencesDestroy(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.thirdPartyTrackReferencesDestroy(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        thirdPartyTrackReferencesList(options?: any): AxiosPromise<Array<ThirdPartyTrackReference>> {
            return localVarFp.thirdPartyTrackReferencesList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this third party track reference.
         * @param {PatchedThirdPartyTrackReference} [patchedThirdPartyTrackReference] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        thirdPartyTrackReferencesPartialUpdate(id: number, patchedThirdPartyTrackReference?: PatchedThirdPartyTrackReference, options?: any): AxiosPromise<ThirdPartyTrackReference> {
            return localVarFp.thirdPartyTrackReferencesPartialUpdate(id, patchedThirdPartyTrackReference, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this third party track reference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        thirdPartyTrackReferencesRetrieve(id: number, options?: any): AxiosPromise<ThirdPartyTrackReference> {
            return localVarFp.thirdPartyTrackReferencesRetrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this third party track reference.
         * @param {ThirdPartyTrackReference} thirdPartyTrackReference 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        thirdPartyTrackReferencesUpdate(id: number, thirdPartyTrackReference: ThirdPartyTrackReference, options?: any): AxiosPromise<ThirdPartyTrackReference> {
            return localVarFp.thirdPartyTrackReferencesUpdate(id, thirdPartyTrackReference, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ThirdPartyTrackReferencesApi - object-oriented interface
 * @export
 * @class ThirdPartyTrackReferencesApi
 * @extends {BaseAPI}
 */
export class ThirdPartyTrackReferencesApi extends BaseAPI {
    /**
     * 
     * @param {ThirdPartyTrackReference} thirdPartyTrackReference 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyTrackReferencesApi
     */
    public thirdPartyTrackReferencesCreate(thirdPartyTrackReference: ThirdPartyTrackReference, options?: RawAxiosRequestConfig) {
        return ThirdPartyTrackReferencesApiFp(this.configuration).thirdPartyTrackReferencesCreate(thirdPartyTrackReference, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this third party track reference.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyTrackReferencesApi
     */
    public thirdPartyTrackReferencesDestroy(id: number, options?: RawAxiosRequestConfig) {
        return ThirdPartyTrackReferencesApiFp(this.configuration).thirdPartyTrackReferencesDestroy(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyTrackReferencesApi
     */
    public thirdPartyTrackReferencesList(options?: RawAxiosRequestConfig) {
        return ThirdPartyTrackReferencesApiFp(this.configuration).thirdPartyTrackReferencesList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this third party track reference.
     * @param {PatchedThirdPartyTrackReference} [patchedThirdPartyTrackReference] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyTrackReferencesApi
     */
    public thirdPartyTrackReferencesPartialUpdate(id: number, patchedThirdPartyTrackReference?: PatchedThirdPartyTrackReference, options?: RawAxiosRequestConfig) {
        return ThirdPartyTrackReferencesApiFp(this.configuration).thirdPartyTrackReferencesPartialUpdate(id, patchedThirdPartyTrackReference, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this third party track reference.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyTrackReferencesApi
     */
    public thirdPartyTrackReferencesRetrieve(id: number, options?: RawAxiosRequestConfig) {
        return ThirdPartyTrackReferencesApiFp(this.configuration).thirdPartyTrackReferencesRetrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this third party track reference.
     * @param {ThirdPartyTrackReference} thirdPartyTrackReference 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyTrackReferencesApi
     */
    public thirdPartyTrackReferencesUpdate(id: number, thirdPartyTrackReference: ThirdPartyTrackReference, options?: RawAxiosRequestConfig) {
        return ThirdPartyTrackReferencesApiFp(this.configuration).thirdPartyTrackReferencesUpdate(id, thirdPartyTrackReference, options).then((request) => request(this.axios, this.basePath));
    }
}


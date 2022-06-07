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
import { CloudFile } from '../model';
// @ts-ignore
import { PatchedCloudFile } from '../model';
/**
 * CloudFilesApi - axios parameter creator
 * @export
 */
export const CloudFilesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CloudFile} cloudFile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudFilesCreate: async (cloudFile: CloudFile, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cloudFile' is not null or undefined
            assertParamExists('cloudFilesCreate', 'cloudFile', cloudFile)
            const localVarPath = `/api/v2/cloud-files/`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(cloudFile, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this cloud file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudFilesDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('cloudFilesDestroy', 'id', id)
            const localVarPath = `/api/v2/cloud-files/{id}/`
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
        cloudFilesList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/cloud-files/`;
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
         * @param {number} id A unique integer value identifying this cloud file.
         * @param {PatchedCloudFile} [patchedCloudFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudFilesPartialUpdate: async (id: number, patchedCloudFile?: PatchedCloudFile, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('cloudFilesPartialUpdate', 'id', id)
            const localVarPath = `/api/v2/cloud-files/{id}/`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedCloudFile, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this cloud file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudFilesRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('cloudFilesRetrieve', 'id', id)
            const localVarPath = `/api/v2/cloud-files/{id}/`
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
         * @param {number} id A unique integer value identifying this cloud file.
         * @param {CloudFile} cloudFile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudFilesUpdate: async (id: number, cloudFile: CloudFile, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('cloudFilesUpdate', 'id', id)
            // verify required parameter 'cloudFile' is not null or undefined
            assertParamExists('cloudFilesUpdate', 'cloudFile', cloudFile)
            const localVarPath = `/api/v2/cloud-files/{id}/`
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
            localVarRequestOptions.data = serializeDataIfNeeded(cloudFile, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CloudFilesApi - functional programming interface
 * @export
 */
export const CloudFilesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CloudFilesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CloudFile} cloudFile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudFilesCreate(cloudFile: CloudFile, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CloudFile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cloudFilesCreate(cloudFile, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this cloud file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudFilesDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cloudFilesDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudFilesList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CloudFile>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cloudFilesList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this cloud file.
         * @param {PatchedCloudFile} [patchedCloudFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudFilesPartialUpdate(id: number, patchedCloudFile?: PatchedCloudFile, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CloudFile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cloudFilesPartialUpdate(id, patchedCloudFile, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this cloud file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudFilesRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CloudFile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cloudFilesRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this cloud file.
         * @param {CloudFile} cloudFile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudFilesUpdate(id: number, cloudFile: CloudFile, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CloudFile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cloudFilesUpdate(id, cloudFile, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CloudFilesApi - factory interface
 * @export
 */
export const CloudFilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CloudFilesApiFp(configuration)
    return {
        /**
         * 
         * @param {CloudFile} cloudFile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudFilesCreate(cloudFile: CloudFile, options?: any): AxiosPromise<CloudFile> {
            return localVarFp.cloudFilesCreate(cloudFile, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this cloud file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudFilesDestroy(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.cloudFilesDestroy(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudFilesList(options?: any): AxiosPromise<Array<CloudFile>> {
            return localVarFp.cloudFilesList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this cloud file.
         * @param {PatchedCloudFile} [patchedCloudFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudFilesPartialUpdate(id: number, patchedCloudFile?: PatchedCloudFile, options?: any): AxiosPromise<CloudFile> {
            return localVarFp.cloudFilesPartialUpdate(id, patchedCloudFile, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this cloud file.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudFilesRetrieve(id: number, options?: any): AxiosPromise<CloudFile> {
            return localVarFp.cloudFilesRetrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this cloud file.
         * @param {CloudFile} cloudFile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudFilesUpdate(id: number, cloudFile: CloudFile, options?: any): AxiosPromise<CloudFile> {
            return localVarFp.cloudFilesUpdate(id, cloudFile, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CloudFilesApi - object-oriented interface
 * @export
 * @class CloudFilesApi
 * @extends {BaseAPI}
 */
export class CloudFilesApi extends BaseAPI {
    /**
     * 
     * @param {CloudFile} cloudFile 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFilesApi
     */
    public cloudFilesCreate(cloudFile: CloudFile, options?: AxiosRequestConfig) {
        return CloudFilesApiFp(this.configuration).cloudFilesCreate(cloudFile, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this cloud file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFilesApi
     */
    public cloudFilesDestroy(id: number, options?: AxiosRequestConfig) {
        return CloudFilesApiFp(this.configuration).cloudFilesDestroy(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFilesApi
     */
    public cloudFilesList(options?: AxiosRequestConfig) {
        return CloudFilesApiFp(this.configuration).cloudFilesList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this cloud file.
     * @param {PatchedCloudFile} [patchedCloudFile] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFilesApi
     */
    public cloudFilesPartialUpdate(id: number, patchedCloudFile?: PatchedCloudFile, options?: AxiosRequestConfig) {
        return CloudFilesApiFp(this.configuration).cloudFilesPartialUpdate(id, patchedCloudFile, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this cloud file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFilesApi
     */
    public cloudFilesRetrieve(id: number, options?: AxiosRequestConfig) {
        return CloudFilesApiFp(this.configuration).cloudFilesRetrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this cloud file.
     * @param {CloudFile} cloudFile 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFilesApi
     */
    public cloudFilesUpdate(id: number, cloudFile: CloudFile, options?: AxiosRequestConfig) {
        return CloudFilesApiFp(this.configuration).cloudFilesUpdate(id, cloudFile, options).then((request) => request(this.axios, this.basePath));
    }
}
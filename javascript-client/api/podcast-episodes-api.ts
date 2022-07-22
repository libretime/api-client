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
import { PatchedPodcastEpisode } from '../model';
// @ts-ignore
import { PodcastEpisode } from '../model';
/**
 * PodcastEpisodesApi - axios parameter creator
 * @export
 */
export const PodcastEpisodesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {PodcastEpisode} podcastEpisode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        podcastEpisodesCreate: async (podcastEpisode: PodcastEpisode, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'podcastEpisode' is not null or undefined
            assertParamExists('podcastEpisodesCreate', 'podcastEpisode', podcastEpisode)
            const localVarPath = `/api/v2/podcast-episodes`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(podcastEpisode, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this podcast episode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        podcastEpisodesDestroy: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('podcastEpisodesDestroy', 'id', id)
            const localVarPath = `/api/v2/podcast-episodes/{id}`
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
        podcastEpisodesList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/podcast-episodes`;
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
         * @param {number} id A unique integer value identifying this podcast episode.
         * @param {PatchedPodcastEpisode} [patchedPodcastEpisode] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        podcastEpisodesPartialUpdate: async (id: number, patchedPodcastEpisode?: PatchedPodcastEpisode, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('podcastEpisodesPartialUpdate', 'id', id)
            const localVarPath = `/api/v2/podcast-episodes/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(patchedPodcastEpisode, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this podcast episode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        podcastEpisodesRetrieve: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('podcastEpisodesRetrieve', 'id', id)
            const localVarPath = `/api/v2/podcast-episodes/{id}`
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
         * @param {number} id A unique integer value identifying this podcast episode.
         * @param {PodcastEpisode} podcastEpisode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        podcastEpisodesUpdate: async (id: number, podcastEpisode: PodcastEpisode, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('podcastEpisodesUpdate', 'id', id)
            // verify required parameter 'podcastEpisode' is not null or undefined
            assertParamExists('podcastEpisodesUpdate', 'podcastEpisode', podcastEpisode)
            const localVarPath = `/api/v2/podcast-episodes/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(podcastEpisode, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PodcastEpisodesApi - functional programming interface
 * @export
 */
export const PodcastEpisodesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PodcastEpisodesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {PodcastEpisode} podcastEpisode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async podcastEpisodesCreate(podcastEpisode: PodcastEpisode, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PodcastEpisode>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.podcastEpisodesCreate(podcastEpisode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this podcast episode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async podcastEpisodesDestroy(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.podcastEpisodesDestroy(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async podcastEpisodesList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PodcastEpisode>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.podcastEpisodesList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this podcast episode.
         * @param {PatchedPodcastEpisode} [patchedPodcastEpisode] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async podcastEpisodesPartialUpdate(id: number, patchedPodcastEpisode?: PatchedPodcastEpisode, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PodcastEpisode>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.podcastEpisodesPartialUpdate(id, patchedPodcastEpisode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this podcast episode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async podcastEpisodesRetrieve(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PodcastEpisode>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.podcastEpisodesRetrieve(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this podcast episode.
         * @param {PodcastEpisode} podcastEpisode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async podcastEpisodesUpdate(id: number, podcastEpisode: PodcastEpisode, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PodcastEpisode>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.podcastEpisodesUpdate(id, podcastEpisode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PodcastEpisodesApi - factory interface
 * @export
 */
export const PodcastEpisodesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PodcastEpisodesApiFp(configuration)
    return {
        /**
         * 
         * @param {PodcastEpisode} podcastEpisode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        podcastEpisodesCreate(podcastEpisode: PodcastEpisode, options?: any): AxiosPromise<PodcastEpisode> {
            return localVarFp.podcastEpisodesCreate(podcastEpisode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this podcast episode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        podcastEpisodesDestroy(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.podcastEpisodesDestroy(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        podcastEpisodesList(options?: any): AxiosPromise<Array<PodcastEpisode>> {
            return localVarFp.podcastEpisodesList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this podcast episode.
         * @param {PatchedPodcastEpisode} [patchedPodcastEpisode] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        podcastEpisodesPartialUpdate(id: number, patchedPodcastEpisode?: PatchedPodcastEpisode, options?: any): AxiosPromise<PodcastEpisode> {
            return localVarFp.podcastEpisodesPartialUpdate(id, patchedPodcastEpisode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this podcast episode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        podcastEpisodesRetrieve(id: number, options?: any): AxiosPromise<PodcastEpisode> {
            return localVarFp.podcastEpisodesRetrieve(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id A unique integer value identifying this podcast episode.
         * @param {PodcastEpisode} podcastEpisode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        podcastEpisodesUpdate(id: number, podcastEpisode: PodcastEpisode, options?: any): AxiosPromise<PodcastEpisode> {
            return localVarFp.podcastEpisodesUpdate(id, podcastEpisode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PodcastEpisodesApi - object-oriented interface
 * @export
 * @class PodcastEpisodesApi
 * @extends {BaseAPI}
 */
export class PodcastEpisodesApi extends BaseAPI {
    /**
     * 
     * @param {PodcastEpisode} podcastEpisode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PodcastEpisodesApi
     */
    public podcastEpisodesCreate(podcastEpisode: PodcastEpisode, options?: AxiosRequestConfig) {
        return PodcastEpisodesApiFp(this.configuration).podcastEpisodesCreate(podcastEpisode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this podcast episode.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PodcastEpisodesApi
     */
    public podcastEpisodesDestroy(id: number, options?: AxiosRequestConfig) {
        return PodcastEpisodesApiFp(this.configuration).podcastEpisodesDestroy(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PodcastEpisodesApi
     */
    public podcastEpisodesList(options?: AxiosRequestConfig) {
        return PodcastEpisodesApiFp(this.configuration).podcastEpisodesList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this podcast episode.
     * @param {PatchedPodcastEpisode} [patchedPodcastEpisode] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PodcastEpisodesApi
     */
    public podcastEpisodesPartialUpdate(id: number, patchedPodcastEpisode?: PatchedPodcastEpisode, options?: AxiosRequestConfig) {
        return PodcastEpisodesApiFp(this.configuration).podcastEpisodesPartialUpdate(id, patchedPodcastEpisode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this podcast episode.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PodcastEpisodesApi
     */
    public podcastEpisodesRetrieve(id: number, options?: AxiosRequestConfig) {
        return PodcastEpisodesApiFp(this.configuration).podcastEpisodesRetrieve(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id A unique integer value identifying this podcast episode.
     * @param {PodcastEpisode} podcastEpisode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PodcastEpisodesApi
     */
    public podcastEpisodesUpdate(id: number, podcastEpisode: PodcastEpisode, options?: AxiosRequestConfig) {
        return PodcastEpisodesApiFp(this.configuration).podcastEpisodesUpdate(id, podcastEpisode, options).then((request) => request(this.axios, this.basePath));
    }
}

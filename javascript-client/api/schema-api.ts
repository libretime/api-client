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
/**
 * SchemaApi - axios parameter creator
 * @export
 */
export const SchemaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
         * @param {SchemaRetrieveFormatEnum} [format] 
         * @param {SchemaRetrieveLangEnum} [lang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schemaRetrieve: async (format?: SchemaRetrieveFormatEnum, lang?: SchemaRetrieveLangEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/schema`;
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

            if (format !== undefined) {
                localVarQueryParameter['format'] = format;
            }

            if (lang !== undefined) {
                localVarQueryParameter['lang'] = lang;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SchemaApi - functional programming interface
 * @export
 */
export const SchemaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SchemaApiAxiosParamCreator(configuration)
    return {
        /**
         * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
         * @param {SchemaRetrieveFormatEnum} [format] 
         * @param {SchemaRetrieveLangEnum} [lang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async schemaRetrieve(format?: SchemaRetrieveFormatEnum, lang?: SchemaRetrieveLangEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: any; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.schemaRetrieve(format, lang, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SchemaApi.schemaRetrieve']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SchemaApi - factory interface
 * @export
 */
export const SchemaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SchemaApiFp(configuration)
    return {
        /**
         * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
         * @param {SchemaRetrieveFormatEnum} [format] 
         * @param {SchemaRetrieveLangEnum} [lang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schemaRetrieve(format?: SchemaRetrieveFormatEnum, lang?: SchemaRetrieveLangEnum, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: any; }> {
            return localVarFp.schemaRetrieve(format, lang, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SchemaApi - object-oriented interface
 * @export
 * @class SchemaApi
 * @extends {BaseAPI}
 */
export class SchemaApi extends BaseAPI {
    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     * @param {SchemaRetrieveFormatEnum} [format] 
     * @param {SchemaRetrieveLangEnum} [lang] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchemaApi
     */
    public schemaRetrieve(format?: SchemaRetrieveFormatEnum, lang?: SchemaRetrieveLangEnum, options?: RawAxiosRequestConfig) {
        return SchemaApiFp(this.configuration).schemaRetrieve(format, lang, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const SchemaRetrieveFormatEnum = {
    Json: 'json',
    Yaml: 'yaml'
} as const;
export type SchemaRetrieveFormatEnum = typeof SchemaRetrieveFormatEnum[keyof typeof SchemaRetrieveFormatEnum];
/**
 * @export
 */
export const SchemaRetrieveLangEnum = {
    Af: 'af',
    Ar: 'ar',
    ArDz: 'ar-dz',
    Ast: 'ast',
    Az: 'az',
    Be: 'be',
    Bg: 'bg',
    Bn: 'bn',
    Br: 'br',
    Bs: 'bs',
    Ca: 'ca',
    Ckb: 'ckb',
    Cs: 'cs',
    Cy: 'cy',
    Da: 'da',
    De: 'de',
    Dsb: 'dsb',
    El: 'el',
    En: 'en',
    EnAu: 'en-au',
    EnGb: 'en-gb',
    Eo: 'eo',
    Es: 'es',
    EsAr: 'es-ar',
    EsCo: 'es-co',
    EsMx: 'es-mx',
    EsNi: 'es-ni',
    EsVe: 'es-ve',
    Et: 'et',
    Eu: 'eu',
    Fa: 'fa',
    Fi: 'fi',
    Fr: 'fr',
    Fy: 'fy',
    Ga: 'ga',
    Gd: 'gd',
    Gl: 'gl',
    He: 'he',
    Hi: 'hi',
    Hr: 'hr',
    Hsb: 'hsb',
    Hu: 'hu',
    Hy: 'hy',
    Ia: 'ia',
    Id: 'id',
    Ig: 'ig',
    Io: 'io',
    Is: 'is',
    It: 'it',
    Ja: 'ja',
    Ka: 'ka',
    Kab: 'kab',
    Kk: 'kk',
    Km: 'km',
    Kn: 'kn',
    Ko: 'ko',
    Ky: 'ky',
    Lb: 'lb',
    Lt: 'lt',
    Lv: 'lv',
    Mk: 'mk',
    Ml: 'ml',
    Mn: 'mn',
    Mr: 'mr',
    Ms: 'ms',
    My: 'my',
    Nb: 'nb',
    Ne: 'ne',
    Nl: 'nl',
    Nn: 'nn',
    Os: 'os',
    Pa: 'pa',
    Pl: 'pl',
    Pt: 'pt',
    PtBr: 'pt-br',
    Ro: 'ro',
    Ru: 'ru',
    Sk: 'sk',
    Sl: 'sl',
    Sq: 'sq',
    Sr: 'sr',
    SrLatn: 'sr-latn',
    Sv: 'sv',
    Sw: 'sw',
    Ta: 'ta',
    Te: 'te',
    Tg: 'tg',
    Th: 'th',
    Tk: 'tk',
    Tr: 'tr',
    Tt: 'tt',
    Udm: 'udm',
    Uk: 'uk',
    Ur: 'ur',
    Uz: 'uz',
    Vi: 'vi',
    ZhHans: 'zh-hans',
    ZhHant: 'zh-hant'
} as const;
export type SchemaRetrieveLangEnum = typeof SchemaRetrieveLangEnum[keyof typeof SchemaRetrieveLangEnum];

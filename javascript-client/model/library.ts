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



/**
 * 
 * @export
 * @interface Library
 */
export interface Library {
    /**
     * 
     * @type {number}
     * @memberof Library
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Library
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Library
     */
    'code': string;
    /**
     * 
     * @type {string}
     * @memberof Library
     */
    'description'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Library
     */
    'enabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Library
     */
    'analyze_cue_points'?: boolean;
}


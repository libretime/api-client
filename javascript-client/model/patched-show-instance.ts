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


// May contain unused imports in some cases
// @ts-ignore
import type { RecordEnabledEnum } from './record-enabled-enum';

/**
 * 
 * @export
 * @interface PatchedShowInstance
 */
export interface PatchedShowInstance {
    /**
     * 
     * @type {number}
     * @memberof PatchedShowInstance
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedShowInstance
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedShowInstance
     */
    'starts_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedShowInstance
     */
    'ends_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedShowInstance
     */
    'filled_time'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedShowInstance
     */
    'last_scheduled_at'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedShowInstance
     */
    'description'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedShowInstance
     */
    'modified'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PatchedShowInstance
     */
    'rebroadcast'?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedShowInstance
     */
    'auto_playlist_built'?: boolean;
    /**
     * 
     * @type {RecordEnabledEnum}
     * @memberof PatchedShowInstance
     */
    'record_enabled'?: RecordEnabledEnum | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedShowInstance
     */
    'show'?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedShowInstance
     */
    'instance'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedShowInstance
     */
    'record_file'?: number | null;
}




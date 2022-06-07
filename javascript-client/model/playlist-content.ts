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
 * @interface PlaylistContent
 */
export interface PlaylistContent {
    /**
     * 
     * @type {string}
     * @memberof PlaylistContent
     */
    'item_url': string;
    /**
     * 
     * @type {number}
     * @memberof PlaylistContent
     */
    'stream_id'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PlaylistContent
     */
    'type': number;
    /**
     * 
     * @type {number}
     * @memberof PlaylistContent
     */
    'position'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PlaylistContent
     */
    'trackoffset': number;
    /**
     * 
     * @type {string}
     * @memberof PlaylistContent
     */
    'cliplength'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlaylistContent
     */
    'cuein'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlaylistContent
     */
    'cueout'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlaylistContent
     */
    'fadein'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlaylistContent
     */
    'fadeout'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlaylistContent
     */
    'playlist'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlaylistContent
     */
    'file'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlaylistContent
     */
    'block'?: string | null;
}

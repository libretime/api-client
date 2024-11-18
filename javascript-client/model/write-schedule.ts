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
import type { PositionStatusEnum } from './position-status-enum';

/**
 * 
 * @export
 * @interface WriteSchedule
 */
export interface WriteSchedule {
    /**
     * 
     * @type {number}
     * @memberof WriteSchedule
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof WriteSchedule
     */
    'starts_at': string;
    /**
     * 
     * @type {string}
     * @memberof WriteSchedule
     */
    'ends_at': string;
    /**
     * 
     * @type {string}
     * @memberof WriteSchedule
     */
    'length'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof WriteSchedule
     */
    'fade_in'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof WriteSchedule
     */
    'fade_out'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof WriteSchedule
     */
    'cue_in': string;
    /**
     * 
     * @type {string}
     * @memberof WriteSchedule
     */
    'cue_out': string;
    /**
     * 
     * @type {number}
     * @memberof WriteSchedule
     */
    'position': number;
    /**
     * 
     * @type {PositionStatusEnum}
     * @memberof WriteSchedule
     */
    'position_status'?: PositionStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof WriteSchedule
     */
    'broadcasted': number;
    /**
     * 
     * @type {boolean}
     * @memberof WriteSchedule
     */
    'played'?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof WriteSchedule
     */
    'instance': number;
    /**
     * 
     * @type {number}
     * @memberof WriteSchedule
     */
    'file'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WriteSchedule
     */
    'stream'?: number | null;
}




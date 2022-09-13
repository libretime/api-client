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
import { RoleEnum } from './role-enum';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'id': number;
    /**
     * 
     * @type {RoleEnum}
     * @memberof User
     */
    'role': RoleEnum;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'first_name': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'last_name': string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'login_attempts'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'last_login'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'last_failed_login'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'skype'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'jabber'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'phone'?: string | null;
}


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
import type { PlaylistContentKindEnum } from './playlist-content-kind-enum';

/**
 * 
 * @export
 * @interface PatchedPlaylistContent
 */
export interface PatchedPlaylistContent {
    /**
     * 
     * @type {number}
     * @memberof PatchedPlaylistContent
     */
    'id'?: number;
    /**
     * 
     * @type {PlaylistContentKindEnum}
     * @memberof PatchedPlaylistContent
     */
    'kind'?: PlaylistContentKindEnum;
    /**
     * 
     * @type {number}
     * @memberof PatchedPlaylistContent
     */
    'position'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedPlaylistContent
     */
    'offset'?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedPlaylistContent
     */
    'length'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedPlaylistContent
     */
    'cue_in'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedPlaylistContent
     */
    'cue_out'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedPlaylistContent
     */
    'fade_in'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedPlaylistContent
     */
    'fade_out'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedPlaylistContent
     */
    'playlist'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedPlaylistContent
     */
    'file'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedPlaylistContent
     */
    'stream'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedPlaylistContent
     */
    'block'?: number | null;
}




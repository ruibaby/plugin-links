/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.17.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface LinkGroupSpec
 */
export interface LinkGroupSpec {
    /**
     * 
     * @type {string}
     * @memberof LinkGroupSpec
     */
    'displayName': string;
    /**
     * Names of links below this group.
     * @type {Array<string>}
     * @memberof LinkGroupSpec
     * @deprecated
     */
    'links'?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof LinkGroupSpec
     */
    'priority'?: number;
}

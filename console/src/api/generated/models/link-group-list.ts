/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.17.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { LinkGroup } from './link-group';

/**
 * 
 * @export
 * @interface LinkGroupList
 */
export interface LinkGroupList {
    /**
     * Indicates whether current page is the first page.
     * @type {boolean}
     * @memberof LinkGroupList
     */
    'first': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof LinkGroupList
     */
    'hasNext': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof LinkGroupList
     */
    'hasPrevious': boolean;
    /**
     * A chunk of items.
     * @type {Array<LinkGroup>}
     * @memberof LinkGroupList
     */
    'items': Array<LinkGroup>;
    /**
     * Indicates whether current page is the last page.
     * @type {boolean}
     * @memberof LinkGroupList
     */
    'last': boolean;
    /**
     * Page number, starts from 1. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof LinkGroupList
     */
    'page': number;
    /**
     * Size of each page. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof LinkGroupList
     */
    'size': number;
    /**
     * Total elements.
     * @type {number}
     * @memberof LinkGroupList
     */
    'total': number;
    /**
     * Indicates total pages.
     * @type {number}
     * @memberof LinkGroupList
     */
    'totalPages': number;
}


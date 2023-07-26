// tslint:disable
/**
 * Api documentation
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ArticleSerializerPut
 */
export interface ArticleSerializerPut  {
    /**
     * 
     * @type {string}
     * @memberof ArticleSerializerPut
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticleSerializerPut
     */
    content?: string;
    /**
     * 
     * @type {number}
     * @memberof ArticleSerializerPut
     */
    tagId?: number;
    /**
     * 
     * @type {number}
     * @memberof ArticleSerializerPut
     */
    userId?: number;
}

export function ArticleSerializerPutFromJSON(json: any): ArticleSerializerPut {
    return {
        'name': !exists(json, 'name') ? undefined : json['name'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'tagId': !exists(json, 'tag_id') ? undefined : json['tag_id'],
        'userId': !exists(json, 'user_id') ? undefined : json['user_id'],
    };
}

export function ArticleSerializerPutToJSON(value?: ArticleSerializerPut): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'name': value.name,
        'content': value.content,
        'tag_id': value.tagId,
        'user_id': value.userId,
    };
}



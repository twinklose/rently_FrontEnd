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

import { exists, mapValues } from '../runtime'
/**
 *
 * @export
 * @interface MessageSerializerRead
 */
export interface MessageSerializerRead {
  /**
   *
   * @type {number}
   * @memberof MessageSerializerRead
   */
  messageId?: number
  /**
   *
   * @type {string}
   * @memberof MessageSerializerRead
   */
  content?: string
  /**
   *
   * @type {number}
   * @memberof MessageSerializerRead
   */
  userId1?: number
  /**
   *
   * @type {number}
   * @memberof MessageSerializerRead
   */
  userId2?: number
}

export function MessageSerializerReadFromJSON(
  json: any,
): MessageSerializerRead {
  return {
    messageId: !exists(json, 'message_id') ? undefined : json['message_id'],
    content: !exists(json, 'content') ? undefined : json['content'],
    userId1: !exists(json, 'user_id_1') ? undefined : json['user_id_1'],
    userId2: !exists(json, 'user_id_2') ? undefined : json['user_id_2'],
  }
}

export function MessageSerializerReadToJSON(
  value?: MessageSerializerRead,
): any {
  if (value === undefined) {
    return undefined
  }
  return {
    message_id: value.messageId,
    content: value.content,
    user_id_1: value.userId1,
    user_id_2: value.userId2,
  }
}

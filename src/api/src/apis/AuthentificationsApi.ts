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

import {
  HttpMethods,
  QueryConfig,
  ResponseBody,
  ResponseText,
} from 'redux-query'
import * as runtime from '../runtime'
import {
  AuthentificationsLoginRequest,
  AuthentificationsLoginRequestFromJSON,
  AuthentificationsLoginRequestToJSON,
  UserAuth,
  UserAuthFromJSON,
  UserAuthToJSON,
} from '../models'

export interface AuthentificationsLoginRequest {
  authentificationsLoginRequest?: AuthentificationsLoginRequest
}

/**
 * Login an user and return a token
 */
function authentificationsLoginRaw<T>(
  requestParameters: AuthentificationsLoginRequest,
  requestConfig: runtime.TypedQueryConfig<T, UserAuth> = {},
): QueryConfig<T> {
  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  headerParameters['Content-Type'] = 'application/json'

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/authentifications`,
    meta,
    update: requestConfig.update,
    queryKey: requestConfig.queryKey,
    optimisticUpdate: requestConfig.optimisticUpdate,
    force: requestConfig.force,
    rollback: requestConfig.rollback,
    options: {
      method: 'POST',
      headers: headerParameters,
    },
    body:
      queryParameters ||
      AuthentificationsLoginRequestToJSON(
        requestParameters.authentificationsLoginRequest,
      ),
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
    config.transform = (body: ResponseBody, text: ResponseBody) =>
      requestTransform(UserAuthFromJSON(body), text)
  }

  return config
}

/**
 * Login an user and return a token
 */
export function authentificationsLogin<T>(
  requestParameters: AuthentificationsLoginRequest,
  requestConfig?: runtime.TypedQueryConfig<T, UserAuth>,
): QueryConfig<T> {
  return authentificationsLoginRaw(requestParameters, requestConfig)
}

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

import { QueryConfig } from 'redux-query'
import * as runtime from '../runtime'
import {
  AuthentificationsLogin,
  AuthentificationsLoginRequestToJSON,
} from '../models'

export interface AuthentificationsLoginRequest {
  authentificationsLoginRequest?: AuthentificationsLogin
}

/**
 * Login an user and return a token
 */
function authentificationsLoginRaw<T>(
  requestParameters: AuthentificationsLoginRequest,
  requestConfig: runtime.TypedQueryConfig<T, object> = {},
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
  }

  return config
}

/**
 * Login an user and return a token
 */
export function authentificationsLogin<T>(
  requestParameters: AuthentificationsLoginRequest,
  requestConfig?: runtime.TypedQueryConfig<T, object>,
): QueryConfig<T> {
  return authentificationsLoginRaw(requestParameters, requestConfig)
}

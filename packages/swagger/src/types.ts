import type { PluginFactoryOptions, KubbConfig, Path } from '@kubb/core'

import type { OpenAPIV3 } from 'openapi-types'
import type Oas from 'oas'
import type { OasOptions } from './parsers/oasParser'

export type Api = {
  getOas: (config: KubbConfig, options?: OasOptions) => Promise<Oas>
}

export type Options = {
  /**
   * Validate your input(see kubb.config) based on @apidevtools/swagger-parser
   * @default true
   */
  validate?: boolean
  /**
   * Relative path to save the JSON models.
   * False will not generate the schema JSON's.
   * @default 'schemas'
   */
  output?: string | false
}

export type PluginOptions = PluginFactoryOptions<Options, false, Api>

export type { default as Oas } from 'oas'

export type { Operation } from 'oas'

export type { OpenAPIV3 } from 'openapi-types'
export type { HttpMethods as HttpMethod } from 'oas/dist/rmoas.types'

export type Resolver = {
  name: string
  fileName: string
  filePath: Path
}

export type OperationSchema = {
  name: string
  description?: string
  schema: OpenAPIV3.SchemaObject
  statusCode?: number
}

export type OperationSchemas = {
  pathParams?: OperationSchema
  queryParams?: OperationSchema
  request?: OperationSchema
  response: OperationSchema
  errors?: OperationSchema[]
}

import useSWRMutation from 'swr/mutation'

import client from '../../../../client'

import type { SWRMutationConfiguration } from 'swr/mutation'
import type { UpdatePetMutationRequest, UpdatePetMutationResponse, UpdatePet400, UpdatePet404, UpdatePet405 } from '../../../models/ts/petController/UpdatePet'

/**
 * @description Update an existing pet by Id
 * @summary Update an existing pet
 * @link /pet
 */
export function useUpdatePet<
  TData = UpdatePetMutationResponse,
  TError = UpdatePet400 | UpdatePet404 | UpdatePet405,
  TVariables = UpdatePetMutationRequest
>(options?: { mutation?: SWRMutationConfiguration<TData, TError, TVariables, string> }) {
  const { mutation: mutationOptions } = options ?? {}

  return useSWRMutation<TData, TError, string, TVariables>(
    `/pet`,
    (url, { arg: data }) => {
      return client<TData, TError, TVariables>({
        method: 'put',
        url,
        data,
      })
    },
    mutationOptions
  )
}

import { useMutation } from '@tanstack/react-query'

import client from '../../../../client'

import type { UseMutationOptions } from '@tanstack/react-query'
import type { UpdateUserMutationRequest, UpdateUserMutationResponse, UpdateUserPathParams } from '../../../models/ts/userController/UpdateUser'

/**
 * @description This can only be done by the logged in user.
 * @summary Update user
 * @link /user/:username
 */
export function useUpdateUser<TData = UpdateUserMutationResponse, TError = unknown, TVariables = UpdateUserMutationRequest>(
  username: UpdateUserPathParams['username'],
  options?: {
    mutation?: UseMutationOptions<TData, TError, TVariables>
  }
) {
  const { mutation: mutationOptions } = options ?? {}

  return useMutation<TData, TError, TVariables>({
    mutationFn: (data) => {
      return client<TData, TError, TVariables>({
        method: 'put',
        url: `/user/${username}`,
        data,
      })
    },
    ...mutationOptions,
  })
}

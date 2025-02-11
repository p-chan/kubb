import useSWRMutation from 'swr/mutation'

import client from '../../../../client'

import type { SWRMutationConfiguration } from 'swr/mutation'
import type { DeleteUserMutationResponse, DeleteUserPathParams, DeleteUser400, DeleteUser404 } from '../../../models/ts/userController/DeleteUser'

/**
 * @description This can only be done by the logged in user.
 * @summary Delete user
 * @link /user/:username
 */
export function useDeleteUser<TData = DeleteUserMutationResponse, TError = DeleteUser400 | DeleteUser404>(
  username: DeleteUserPathParams['username'],
  options?: {
    mutation?: SWRMutationConfiguration<TData, TError, string>
  }
) {
  const { mutation: mutationOptions } = options ?? {}

  return useSWRMutation<TData, TError, string>(
    `/user/${username}`,
    (url) => {
      return client<TData, TError>({
        method: 'delete',
        url,
      })
    },
    mutationOptions
  )
}

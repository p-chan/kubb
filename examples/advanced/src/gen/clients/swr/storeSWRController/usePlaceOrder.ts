import useSWRMutation from 'swr/mutation'

import client from '../../../../client'

import type { SWRMutationConfiguration } from 'swr/mutation'
import type { PlaceOrderMutationRequest, PlaceOrderMutationResponse, PlaceOrder405 } from '../../../models/ts/storeController/PlaceOrder'

/**
 * @description Place a new order in the store
 * @summary Place an order for a pet
 * @link /store/order
 */
export function usePlaceOrder<TData = PlaceOrderMutationResponse, TError = PlaceOrder405, TVariables = PlaceOrderMutationRequest>(options?: {
  mutation?: SWRMutationConfiguration<TData, TError, TVariables, string>
}) {
  const { mutation: mutationOptions } = options ?? {}

  return useSWRMutation<TData, TError, string, TVariables>(
    `/store/order`,
    (url, { arg: data }) => {
      return client<TData, TError, TVariables>({
        method: 'post',
        url,
        data,
      })
    },
    mutationOptions
  )
}

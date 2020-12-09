import { useFetchOneEntity } from 'src/rtk/app/hooksCommon'
import { AccountId } from 'src/types'
import { fetchMySpaceIdsByAccount, _selectMySpaceIdsByAccount } from './mySpaceIdsSlice'

export const useFetchMySpaceIds = (myAccount: AccountId) => {
  return useFetchOneEntity(_selectMySpaceIdsByAccount, fetchMySpaceIdsByAccount, { id: myAccount })
}

export const useFetchFollowedSpaceIds = (follower: AccountId) => {
  return useFetchOneEntity(_selectMySpaceIdsByAccount, fetchMySpaceIdsByAccount, { id: follower })
}
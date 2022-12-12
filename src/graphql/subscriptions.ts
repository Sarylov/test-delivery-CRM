import { gql } from '@apollo/client'

export const COURIERS_LOCATIONS = gql`
  subscription {
    locationAdded {
      sessionId
      longitude
      latitude
      courierId
    }
  }
`

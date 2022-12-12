import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($login: String!, $password: String!) {
    login(loginUserInput: { username: $login, password: $password }) {
      access_token
    }
  }
`

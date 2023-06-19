"use strict"
import { useQuery, gql } from '@apollo/client';

function getUsers(){
  return gql`
  query {
    users{
      first_name
      last_name
      username
    }
  }
`
}

function getUserMsg(username){

  return gql`
  query {
    user(username: ${username}){
      messages{
        id
        body
      }
  }
  `
}

function addUser(username, firstName, lastName){
  return gql`
  mutation{
    createUser(username: ${username}, first_name: ${firstName}, last_name: ${lastName}){
      username
      first_name
      last_name
    }
  }

  `

}

function addMsg(username, msg){
  return gql`
  mutation{
    createMessage(username: ${username}, body: ${msg}){
      user{
        username
      }
      body
    }
    }`

}

export {getUsers,getUserMsg,addUser,addMsg}
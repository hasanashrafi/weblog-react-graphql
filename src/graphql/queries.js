import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
query MyQuery {
  posts {
    author {
      ... on Author {
        name
        avatar {
          url
        }
      }
    }
    coverPhoto {
      url
    }
    title
    slug
    id
  }
}
            
`


export {GET_BLOGS_INFO}
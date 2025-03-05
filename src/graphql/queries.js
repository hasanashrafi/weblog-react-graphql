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

const GET_AUTHORS_INFO = gql `
query MyQuery {
  authors {
    id
    name
    slug
    avatar {
      url
    }
  }
}
`

export {GET_BLOGS_INFO,GET_AUTHORS_INFO}
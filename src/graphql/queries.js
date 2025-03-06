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

const GET_AUTHORS_INFO = gql`
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
const GET_AUTHOR_INFO = gql`
query getAuthorInfo($slug:String!) {
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    name
    posts {
      id
      title
      slug
      author {
        ... on Author {
          id
          name
          avatar {
            url
          }
        }
      }
      coverPhoto {
        url
        id
      }
    }
    field
    description {
      text
    }
  }
}
`

const GET_POST_INFO = gql`
query getPostInfo($slug:String!) {
  post(where: {slug: $slug}) {
    author {
      ... on Author {
        id
        name
        slug
        avatar {
          url
        }
      }
    }
    content {
      text
    }
    coverPhoto {
      url
    }
    datePublished
    id
    publishedAt
    slug
    title
    updatedAt
  }
}
`

export { GET_BLOGS_INFO, GET_AUTHORS_INFO,GET_AUTHOR_INFO, GET_POST_INFO }
import { useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import { GET_AUTHORS_INFO } from '../../graphql/queries'
import { Grid } from '@mui/material'
import AuthorEl from '../../shared/AuthorEl'

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO)
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    if (data) {
      setAuthors(data.authors)
    }
  }, [data])

  if (loading) return <div className='min-h-screen flex items-center justify-center'>Loading...</div>
  if (error) return <div className='min-h-screen flex items-center justify-center'>Error: {error.message}</div>

  console.log(data)
  return (
    <Grid container
      sx={{
        borderRadius: "15px",
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px"
      }}>

      {authors.map((author) => (
        <Grid item xs={12} padding={2}>
          <AuthorEl key={author.id} author={author} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Authors
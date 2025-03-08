import { useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import { GET_AUTHORS_INFO } from '../../graphql/queries'
import { Grid } from '@mui/material'
import AuthorEl from '../../shared/AuthorEl'
import Loader from '../../templates/Loader'


function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO)
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    if (data) {
      setAuthors(data.authors)
    }
  }, [data])

  if (loading) return <Loader />
  if (error) return <div className='min-h-screen flex items-start justify-start'>مشکلی پیش آمده است {error.message}</div>


  return (
    <Grid container maxWidth="lg" mx="auto"
      sx={{

        borderRadius: "15px",
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px"
      }}>

      
        {authors.map((author, index) => (
          <Grid item xs={12} padding={1} key={author.id}>
            <AuthorEl author={author} index={index} authors={authors} />
          </Grid>
        ))}
      
    </Grid>

  )
}

export default Authors
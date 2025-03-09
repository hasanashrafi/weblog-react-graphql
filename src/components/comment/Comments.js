import { useQuery } from '@apollo/client'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { GET_COMMENT_INFO } from '../../graphql/queries'

function Comments({ slug }) {
    const { loading, data, error } = useQuery(GET_COMMENT_INFO, {
        variables: { slug },
    })
console.log(data)
    if (loading) return <Typography>Loading...</Typography>
    if (error) return <Typography>Error: {error.message}</Typography>

    return (
        <Grid container>
            <Grid item xs={12}>
                {data && data.comments && (
                    <ul>
                        {data.comments.map((comment) => (
                            <>

                                <li key={comment.id}>{comment.text}</li>
                                <li >{comment.name}</li>
                            </>
                        ))}
                    </ul>
                )}
            </Grid>
        </Grid>
    )
}

export default Comments
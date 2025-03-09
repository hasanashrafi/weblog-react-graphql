import { useMutation } from '@apollo/client'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { SEND_COMMENT } from '../../graphql/mutations'

import { ToastContainer, toast } from 'react-toastify';

function CommentForm({ slug }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [sendComment, { loading}] = useMutation(SEND_COMMENT, {
        variables: {
            slug,
            name,
            email,
            text
        },
        onCompleted: () => {
            toast.success('کامنت شما با موفقیت ارسال شد');
            setName('');
            setEmail('');
            setText('');
        },
        onError: () => {
            toast.error('خطایی در ارسال کامنت رخ داد');
        }
    })

    const sendHandler = (e) => {
        e.preventDefault()
        if (!name || !email || !text) {
            toast.warn('لطفا تمام فیلدها را پر کنید')
            return
        }
        sendComment()
    }

    return (
        <Grid container sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4, py: 1, mt: 5 }}>
            <ToastContainer />
            <Grid item xs={12} m={2}>
                <Typography component="p" variant='h6' fontWeight={700} color='primary'>
                    فرم ارسال کامنت
                </Typography>
            </Grid>
            <Grid item xs={12} m={2} >
                <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    label="نام کاربری"
                    variant='outlined'
                    sx={{ width: "100%", }}
                    required
                />
            </Grid>

            <Grid item xs={12} m={2} >
                <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    label="ایمیل "
                    variant='outlined'
                    sx={{ width: "100%", }}
                    type="email"
                    required
                />

            </Grid>
            <Grid item xs={12} m={2} >
                <TextField
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    label="متن کامنت"
                    variant='outlined'
                    sx={{ width: "100%", }}
                    multiline
                    required
                />
            </Grid>

            <Grid item xs={12} m={2} sx={{ width: "100%", textAlign: "center" }} >
                <Button
                    variant='contained'
                    mx="auto"
                    sx={{ width: "30%" }}
                    onClick={sendHandler}
                    disabled={loading}>
                    {loading ? 'در حال ارسال...' : 'ارسال'}
                </Button>
            </Grid>
        </Grid>
    )
}

export default CommentForm
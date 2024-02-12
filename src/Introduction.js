import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import TextareaAutosize from 'react-textarea-autosize';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PendingIcon from '@mui/icons-material/Pending';
import React, { useState, useRef, useEffect } from 'react';

export default function Introduction() {
    return (
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
            <Typography
                component="h1"
                variant="h2"
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignSelf: 'center',
                    textAlign: 'center',
                }}
            >
                M&S&nbsp;
                <Typography
                    component="span"
                    variant="h2"
                    sx={{
                        color: (theme) =>
                            theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                    }}
                >
                    AI Assistant
                </Typography>
            </Typography>
            <Typography variant="body1" textAlign="center" color="text.secondary">
                Explore this cutting-edge chatbot, delivering high-quality answers
                tailored to your needs. <br />
                Type your question below.
            </Typography>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                alignSelf="center"
                spacing={1}
                useFlexGap
                sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
            >

            </Stack>
            {/* <LoadingButton
            ref={buttonRef}
            onClick={handleSubmit}
            loading={isSubmitting}

        >
            Send
        </LoadingButton> */}



            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%', // Full width
                    p: 1, // Padding for the outer Box, adjust as needed
                }}
            >
                <Box
                    sx={{
                        backgroundColor: '#f5f5f5', // Use a theme background color
                        p: 2, // Padding around the text, adjust as needed
                        borderRadius: '4px', // Optional: adds rounded corners
                    }}
                >
                    <Typography variant="body1" textAlign="center" color="text.secondary">
                        {"This website is still under development, please report any unexpected behavior to Ihab"}
                    </Typography>
                </Box>
            </Box>
        </Stack>
    )
}
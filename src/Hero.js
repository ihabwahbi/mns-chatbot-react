import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState, useRef } from 'react';

export default function Hero() {
    const [question, setQuestion] = useState(''); // State to store the input value
    const [response, setResponse] = useState('');
    const buttonRef = useRef(null);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            buttonRef.current.click(); // Programmatically click the button
        }
    };

    const handleInputChange = (event) => {
        setQuestion(event.target.value); // Update state with input value
    };

    const handleSubmit = async () => {
        const url = 'https://mns-chatbot-backend.azurewebsites.net/api/mns_chatbot_function?code=4qM80F22ntJtNsbyiHHcwianGVNgpwBFh2KofOQsMebiAzFuBhLvnA=='; // Adjust as needed
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: question }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Success:', data);
            setResponse(data.message); // Update the response state with data from backend
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: '100%',
                backgroundImage:
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : 'linear-gradient(#02294F, #090E10)',
                backgroundSize: '100% 20%',
                backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
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
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField onKeyDown={handleKeyDown}
                                fullWidth
                                label="Ask me anything..."
                                id="fullWidth"
                                value={question}
                                onChange={handleInputChange}
                            />
                        </Box>
                    </Stack>
                    <Button onClick={handleSubmit}>Send</Button>
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
                                {response || "The answer will appear here"}
                            </Typography>
                        </Box>
                    </Box>
                </Stack>

            </Container>
        </Box>
    );
}

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import TextareaAutosize from 'react-textarea-autosize';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PendingIcon from '@mui/icons-material/Pending';
import React, { useState, useEffect, useRef } from 'react';
import Introduction from './Introduction';

export default function Hero() {
    const [question, setQuestion] = useState(''); // State to store the input value
    const messagesEndRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [firstQuestionSubmitted, setFirstQuestionSubmitted] = useState(false);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevent the default action (inserting a new line)
            handleSubmit(); // Call your submit function
        }
    };

    const handleInputChange = (event) => {
        setQuestion(event.target.value); // Update state with input value
    };

    const handleSubmit = async () => {
        setIsLoading(true); // Start loading
        setFirstQuestionSubmitted(true);
        setQuestion('');
        setMessages(prevMessages => [
            ...prevMessages,
            { type: 'question', content: question, sender: 'You' }
        ]);
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

            setMessages(prevMessages => [
                ...prevMessages,
                { type: 'response', content: data.message, sender: 'AI Assistant' }
            ]);

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false); // Stop loading regardless of success or error
        }

    };
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    return (
        <Box
            id="hero"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start', // Distribute space between items
                alignItems: 'center',
                paddingBottom: 'env(safe-area-inset-bottom)',

                overflow: 'hidden', // Prevents the outer box from scrolling

                p: 1,
                backgroundImage: (theme) =>
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : 'linear-gradient(#02294F, #090E10)',
                backgroundSize: '100% 20%',
                backgroundRepeat: 'no-repeat',

            }}
        >
            {
                firstQuestionSubmitted && <Box
                    sx={{
                        width: '80%', // Consistent with your styling
                        maxHeight: '70vh', // Adjust based on your needs
                        overflowY: 'auto', // Enables scrolling for overflow
                        flexGrow: 1, // Allows box to expand, filling available space above the input
                        mb: 2, // Margin bottom to separate from input field
                        mt: 4,
                        maxWidth: 'lg',
                    }}
                >

                    {messages.map((message, index) => (
                        <Box key={index} sx={{ mb: 2 /* Adjusted for clearer separation between messages */ }}>
                            <Typography
                                variant="subtitle2"
                                component="div"
                                sx={{ fontWeight: 'bold', color: '#333', fontFamily: 'Roboto, Arial, sans-serif', }}>
                                {message.sender} {/* Displays the sender name */}
                            </Typography>
                            <Typography
                                variant="body1"

                                sx={{ color: '#333', fontFamily: 'Roboto, Arial, sans-serif',/* Indent message content for visual hierarchy */ }}>
                                {message.content} {/* Displays the message content */}
                            </Typography>
                            {index === messages.length - 1 && (
                                <div ref={messagesEndRef} /> // Invisible element attached at the end of the message list
                            )}
                        </Box>
                    ))}
                </Box>}
            {!firstQuestionSubmitted && <Box
                sx={{
                    width: '90%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >

                <Introduction />

            </Box>
            }


            <Box
                sx={{
                    mt: 'auto', // This pushes the Box to the bottom
                    width: '90%',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingBottom: 'env(safe-area-inset-bottom)',
                }}
            >
                <TextField maxwidth='lg'
                    onKeyDown={handleKeyDown}
                    fullWidth
                    label="Ask me anything..."
                    id="fullWidth"
                    value={question}
                    onChange={handleInputChange}
                    multiline
                    disabled={isLoading} // Disable TextField while loading
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleSubmit}
                                    edge="end"
                                    aria-label="submit"
                                    disabled={isLoading} // Disable IconButton while loading
                                >
                                    {isLoading ? (
                                        <PendingIcon fontSize="large" /> // Show loading icon when isLoading is true
                                    ) : (
                                        <ArrowUpwardIcon color="primary" fontSize="large" /> // Default icon
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                        // If you're using TextareaAutosize and want it to be disabled as well, consider managing its enabled state similarly.
                        inputComponent: TextareaAutosize,
                        inputProps: {
                            minRows: 1,
                            maxRows: 5,
                        },
                    }}
                    sx={{
                        maxWidth: 'lg', // This sets the maximum width. For specific values, use a valid CSS value, e.g., maxWidth: 500 (for 500px).
                    }}
                />
            </Box>
        </Box>

    );
}

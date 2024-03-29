import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

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
                        color: '#0014db',
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
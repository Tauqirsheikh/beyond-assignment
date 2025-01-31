import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import ReactConfetti from 'react-confetti';

const ChatbotIntegration = ({ onNext, onBack }) => {
    const [integrationStatus, setIntegrationStatus] = useState(null);
    const [showIntegrationModal, setShowIntegrationModal] = useState(false);

    const handleTestIntegration = () => {
        setIntegrationStatus("success");
    };



    return (
        <>
            <Container maxWidth="md" sx={{ mb: 2 }}>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    onClick={onBack}
                    startIcon={<ArrowBackIcon />}
                    sx={{
                        border: '1px solid #fff',
                        "&:hover": {
                            background: "#12372A",
                            color: "#ffffff"
                        }
                    }}
                >
                    Back
                </Button>
            </Container>

            <Container maxWidth="md" sx={{
                background: "#FCFCFC", borderRadius: '40px', padding: 4, mb: 2,
                '&.MuiContainer-root': {
                    paddingLeft: {
                        xs: 4,
                        md: 6
                    },
                    paddingRight: {
                        xs: 4,
                        md: 6
                    },
                }
            }}>
                <Typography color='#000' fontSize={24} paddingBottom={3} fontWeight={700}>
                    Chatbot Integration & Testing
                </Typography>
                <Stack direction={{ md: "row", xs: "column" }} spacing={1.5} mb={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            "&:hover": {
                                background: "#12372A",
                                color: "#ffffff"
                            }
                        }}
                        onClick={() => window.open("https://example.com", "_blank")}
                    >
                        Test Chatbot
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={() => setShowIntegrationModal(true)}
                        sx={{
                            "&:hover": {
                                background: "#12372A",
                                color: "#ffffff"
                            }
                        }}
                    >
                        Integrate on your Website
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{
                            "&:hover": {
                                background: "#12372A",
                                color: "#ffffff"
                            }
                        }}
                        onClick={handleTestIntegration}>Test Integration</Button>
                </Stack>

                <Dialog open={showIntegrationModal} onClose={() => setShowIntegrationModal(false)}>
                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        Integrate Chatbot
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={() => setShowIntegrationModal(false)}
                        sx={(theme) => ({
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: theme.palette.grey[500],
                        })}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent>
                        <Typography>Copy the following code and paste it into the <code>&lt;head&gt;</code> of your website:</Typography>
                        <Box bgcolor="grey.100" p={2} mt={1}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                value={`<script src="https://example.com/chatbot.js"></script>`}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Box>
                        <Button variant="contained" style={{ marginTop: "1rem" }}>Mail instructions</Button>
                    </DialogContent>
                </Dialog>

                <Typography variant="body2" color="textSecondary" style={{ marginTop: "0.5rem" }}>
                    Chatbot not working as intended? <a href="#">Share feedback</a>
                </Typography>

                {integrationStatus === "success" && (
                    <Dialog fullWidth maxWidth="lg" open
                        onClose={() => setIntegrationStatus(null)}
                        PaperProps={{
                            sx: {
                                overflow: "hidden", // Prevents scrolling issue
                            },
                        }}
                    >
                        <ReactConfetti numberOfPieces={500} />

                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                            Integration Successful
                        </DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={() => setIntegrationStatus(false)}
                            sx={(theme) => ({
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: theme.palette.grey[500],
                            })}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            <Typography>Integration is successful! 🎉</Typography>
                            <Typography>Explore the admin panel or start chatting with your chatbot.</Typography>
                        </DialogContent>
                        <DialogActions sx={{ justifyContent: "left" }}>
                            <Stack direction={{ lg: "row", md: "row", sm: 'row', xs: "column" }} spacing={1.5} mb={2}>
                                <Button variant="contained" color="primary">Explore Admin Panel</Button>
                                <Button variant="outlined" color="primary">Start Talking to Your Chatbot</Button>
                                <Button variant="contained" color="secondary">Share on Social Media</Button>
                            </Stack>
                        </DialogActions>
                    </Dialog>
                )}
            </Container>
        </>
    )
}

export default ChatbotIntegration
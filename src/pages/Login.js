import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Link, Alert } from '@mui/material';
import { useRedirect } from '../navigation/RedirectHandlers';
import { useUser } from '../context/UserContext';

export default function Login() {
    const { loginUser } = useUser();
    const handleRedirectToRegister = useRedirect('/register');
    const handleRedirectToProfile = useRedirect('/profile');

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.email || !formData.password) {
            setError('Both email and password are required.');
            return;
        }

        try {
            // TODO: Replace with login endpoint when it's made on backend
            const response = await fetch('http://localhost:1111/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                setError('Invalid credentials. Please try again.');
                return;
            }

            const userData = await response.json();
            loginUser(userData);
            handleRedirectToProfile();
        } catch (err) {
            console.error('Login error:', err);
            setError('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    padding: 4,
                    backgroundColor: 'background.paper',
                    boxShadow: 3,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Login
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: '#6D4C41',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#5C4033',
                            },
                        }}
                        disabled={!formData.email || !formData.password} // Disable button when fields are empty
                    >
                        Login
                    </Button>
                    <Box textAlign="center">
                        <Link component="button" variant="body2" onClick={handleRedirectToRegister}>
                            Don't have an account? Register
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

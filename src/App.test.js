// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OracleForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OracleForge/i);
    expect(titleElement).toBeInTheDocument();
});

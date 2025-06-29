import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import App from './App';

// Mock the transaction service
jest.mock('./services/transactionService', () => ({
  getAllTransactions: jest.fn(() => Promise.resolve([])),
  createTransaction: jest.fn(() => Promise.resolve({})),
  updateTransaction: jest.fn(() => Promise.resolve({})),
  deleteTransaction: jest.fn(() => Promise.resolve({})),
}));

test('renders bank transaction management system title', () => {
  render(
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
  
  const titleElement = screen.getByText(/Bank Transaction Management System/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders add transaction button', () => {
  render(
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
  
  const addButton = screen.getByText(/Add Transaction/i);
  expect(addButton).toBeInTheDocument();
});

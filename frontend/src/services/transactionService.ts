import axios from 'axios';
import { Transaction, TransactionFormData, PageResponse, BatchDeleteResponse } from '../types/Transaction';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

const transactionService = {
  // Get all transactions
  getAllTransactions: async (): Promise<Transaction[]> => {
    const response = await axios.get(`${API_BASE_URL}/transactions`);
    return response.data as Transaction[];
  },

  // Get transactions with pagination - now returns Page object
  getTransactions: async (page: number = 0, size: number = 10, type?: string): Promise<PageResponse<Transaction>> => {
    const params = new URLSearchParams();
    params.append('page', page.toString());
    params.append('size', size.toString());
    if (type) {
      params.append('type', type);
    }
    const response = await axios.get(`${API_BASE_URL}/transactions/list?${params}`);
    return response.data as PageResponse<Transaction>;
  },

  // Get transaction by ID
  getTransactionById: async (id: number): Promise<Transaction> => {
    const response = await axios.get(`${API_BASE_URL}/transactions/${id}`);
    return response.data as Transaction;
  },

  // Create new transaction
  createTransaction: async (transaction: TransactionFormData): Promise<Transaction> => {
    const response = await axios.post(`${API_BASE_URL}/transactions`, transaction);
    return response.data as Transaction;
  },

  // Update transaction
  updateTransaction: async (id: number, transaction: Partial<Transaction>): Promise<Transaction> => {
    const response = await axios.put(`${API_BASE_URL}/transactions/${id}`, transaction);
    return response.data as Transaction;
  },

  // Delete transaction
  deleteTransaction: async (id: number): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/transactions/${id}`);
  },

  // Delete multiple transactions
  deleteMultipleTransactions: async (ids: number[]): Promise<BatchDeleteResponse> => {
    const params = new URLSearchParams();
    ids.forEach(id => params.append('ids', id.toString()));
    const response = await axios.delete(`${API_BASE_URL}/transactions/batch?${params}`);
    return response.data as BatchDeleteResponse;
  }
};

export default transactionService; 
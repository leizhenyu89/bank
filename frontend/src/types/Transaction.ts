export interface Transaction {
  id?: number;
  description?: string;
  amount: string;
  type: 'INCOME' | 'EXPENSE';
  createUser?: string;
  updateUser?: string;
  createTime?: string;
  updateTime?: string;
  version?: number;
}

export interface TransactionFormData {
  description?: string;
  amount: string;
  type: 'INCOME' | 'EXPENSE';
  createUser: string;
  updateUser?: string;
  version?: number;
}

// Page response type
export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number; // current page number
  size: number;   // page size
  first: boolean; // is first page
  last: boolean;  // is last page
  numberOfElements: number; // current page element count
  empty: boolean; // is empty
}

// Batch delete response type
export interface BatchDeleteResponse {
  success: boolean;
  message: string;
  deletedIds?: number[];
} 
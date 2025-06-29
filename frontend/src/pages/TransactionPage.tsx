import React, { useState, useEffect } from 'react';
import TransactionList from '../components/TransactionList';
import TransactionForm from '../components/TransactionForm';
import { Transaction, TransactionFormData, PageResponse } from '../types/Transaction';
import transactionService from '../services/transactionService';
import { Button, Card, Space, message, Select, Typography, Row, Col } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Text, Title } = Typography;

const TransactionPage: React.FC = () => {
  const [pageData, setPageData] = useState<PageResponse<Transaction>>({
    content: [],
    number: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0,
    first: true,
    last: true,
    numberOfElements: 0,
    empty: true
  });
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [selectedType, setSelectedType] = useState<string>('');
  const [queryParams, setQueryParams] = useState({ page: 0, size: 10, type: '' });

  const handleQuery = () => {
    setQueryParams({ page: currentPage, size: pageSize, type: selectedType });
  };

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        setLoading(true);
        const data = await transactionService.getTransactions(queryParams.page, queryParams.size, queryParams.type);
        setPageData(data);
      } catch (error) {
        console.error('Failed to load transactions:', error);
        message.error('Failed to load transactions');
      } finally {
        setLoading(false);
      }
    };
    loadTransactions();
  }, [queryParams]);

  const handleCreateTransaction = async (transactionData: TransactionFormData) => {
    try {
      await transactionService.createTransaction(transactionData);
      message.success('Transaction created successfully!');
      setShowForm(false);
      setQueryParams({ ...queryParams });
    } catch (error) {
      console.error('Failed to create transaction:', error);
      message.error('Failed to create transaction');
    }
  };

  const handleUpdateTransaction = async (transactionData: TransactionFormData) => {
    if (!editingTransaction?.id) return;
    try {
      await transactionService.updateTransaction(editingTransaction.id, transactionData);
      message.success('Transaction updated successfully!');
      setShowForm(false);
      setEditingTransaction(null);
      setQueryParams({ ...queryParams });
    } catch (error) {
      console.error('Failed to update transaction:', error);
      message.error('Failed to update transaction');
    }
  };

  const handleDeleteTransaction = async (id: number) => {
    try {
      await transactionService.deleteTransaction(id);
      message.success('Transaction deleted successfully!');
      setQueryParams({ ...queryParams });
    } catch (error) {
      console.error('Failed to delete transaction:', error);
      message.error('Failed to delete transaction');
    }
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingTransaction(null);
  };

  const handleFormSubmit = (transactionData: TransactionFormData) => {
    if (editingTransaction) {
      handleUpdateTransaction(transactionData);
    } else {
      handleCreateTransaction(transactionData);
    }
  };

  const handlePageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
    setQueryParams({ page, size, type: selectedType });
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setCurrentPage(0);
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header Section */}
        <Card style={{ marginBottom: '16px', borderRadius: '8px' }}>
          <Row justify="space-between" align="middle">
            <Col>
              <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                Transaction Management
              </Title>
            </Col>
            <Col>
              <Button 
                type="primary" 
                icon={<PlusOutlined />}
                size="large"
                onClick={() => setShowForm(true)}
                style={{ borderRadius: '6px' }}
              >
                Add Transaction
              </Button>
            </Col>
          </Row>
        </Card>

        {/* Form Section */}
        {showForm && (
          <Card 
            style={{ marginBottom: '16px', borderRadius: '8px' }}
            title={
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                {editingTransaction ? 'Edit Transaction' : 'Add New Transaction'}
              </span>
            }
          >
            <TransactionForm
              onSubmit={handleFormSubmit}
              onCancel={handleCancelForm}
              initialData={editingTransaction || undefined}
              isEditing={!!editingTransaction}
            />
          </Card>
        )}
        
        {/* Search and List Section - Same Level */}
        <Card style={{ borderRadius: '8px' }}>
          <Row gutter={[16, 16]} align="middle" style={{ marginBottom: '16px' }}>
            <Col xs={24} sm={8} md={6}>
              <Space align="center" style={{ width: '100%' }}>
                <Text strong style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Type Filter:</Text>
                <Select
                  placeholder="Select type"
                  style={{ minWidth: '120px' }}
                  allowClear
                  value={selectedType}
                  onChange={handleTypeChange}
                  size="large"
                >
                  <Option value="INCOME">Income</Option>
                  <Option value="EXPENSE">Expense</Option>
                </Select>
              </Space>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <Button 
                type="primary" 
                icon={<SearchOutlined />}
                size="large"
                onClick={handleQuery}
                style={{ width: '100%', borderRadius: '6px' }}
              >
                Search
              </Button>
            </Col>
            <Col xs={24} sm={8} md={12}>
              <div style={{ textAlign: 'right' }}>
                <Title level={4} style={{ margin: 0, color: '#1890ff' }}>
                  Transaction List
                </Title>
                <Text type="secondary">
                  Total: {pageData.totalElements} transactions
                </Text>
              </div>
            </Col>
          </Row>
          
          <TransactionList
            pageData={pageData}
            onEdit={handleEditTransaction}
            onDelete={handleDeleteTransaction}
            onPageChange={handlePageChange}
            loading={loading}
          />
        </Card>
      </div>
    </div>
  );
};

export default TransactionPage; 
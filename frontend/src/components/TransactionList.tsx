import React, { useState } from 'react';
import { Table, Button, Space, Tag, Popconfirm, Typography, Empty, message, Alert, TableColumnsType } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Transaction, PageResponse, BatchDeleteResponse } from '../types/Transaction';
import transactionService from '../services/transactionService';

const { Text } = Typography;

interface TransactionListProps {
  pageData: PageResponse<Transaction>;
  onEdit: (transaction: Transaction) => void;
  onDelete: (id: number) => void;
  onPageChange: (page: number, pageSize: number) => void;
  loading?: boolean;
}

const TransactionList: React.FC<TransactionListProps> = ({
  pageData,
  onEdit,
  onDelete,
  onPageChange,
  loading = false,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [batchDeleting, setBatchDeleting] = useState(false);

  const handleBatchDelete = async () => {
    if (selectedRowKeys.length === 0) {
      message.warning('Please select transactions to delete');
      return;
    }

    try {
      setBatchDeleting(true);
      const response: BatchDeleteResponse = await transactionService.deleteMultipleTransactions(
        selectedRowKeys.map(key => Number(key))
      );

      message.success(response.message);
      setSelectedRowKeys([]);
      // Refresh data
      onPageChange(pageData.number, pageData.size);
    } catch (error) {
      message.error('Failed to delete transactions');
      console.error('Batch delete error:', error);
    } finally {
      setBatchDeleting(false);
    }
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  const columns: TableColumnsType<Transaction> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
      render: (id: number) => <Text code>{id}</Text>
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      width: 120,
      render: (amount: string, record: Transaction) => (
        <Text strong type={record.type === 'INCOME' ? 'success' : 'danger'}>
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(amount))}
        </Text>
      )
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 100,
      filters: [...new Set(pageData.content.map(ele => ele.type))].map(type => ({ text: type, value: type })),
      render: (type: string) => (
        type === 'INCOME' ?
          <Tag color="green" style={{ margin: 0 }}>INCOME</Tag> :
          <Tag color="red" style={{ margin: 0 }}>EXPENSE</Tag>
      )
    },
    {
      title: 'Create User',
      dataIndex: 'createUser',
      key: 'createUser',
      width: 120,
      render: (user: string) => <Text>{user || 'N/A'}</Text>
    },
    {
      title: 'Update User',
      dataIndex: 'updateUser',
      key: 'updateUser',
      width: 120,
      render: (user: string) => <Text>{user || 'N/A'}</Text>
    },
    {
      title: 'Created Time',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 150,
      render: (value: string) => (
        value ?
          <Text>{value}</Text> :
          <Text type="secondary">N/A</Text>
      )
    },
    {
      title: 'Updated Time',
      dataIndex: 'updateTime',
      key: 'updateTime',
      width: 150,
      render: (value: string) => (
        value ?
          <Text>{value}</Text> :
          <Text type="secondary">N/A</Text>
      )
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      render: (description: string) => (
        <Text style={{ maxWidth: '200px' }} ellipsis={{ tooltip: description }}>
          {description || 'N/A'}
        </Text>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 150,
      fixed: 'right' as const,
      render: (_: any, record: Transaction) => (
        <Space size="small">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => record && onEdit(record)}
            size="small"
            style={{ color: '#1890ff' }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete Transaction"
            description="Are you sure you want to delete this transaction?"
            onConfirm={() => record.id && onDelete(record.id)}
            okText="Yes"
            cancelText="No"
            placement="topRight"
            icon={<ExclamationCircleOutlined style={{ color: 'red' }} />}
          >
            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
              size="small"
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      )
    }
  ];

  return (
    <div>
      {selectedRowKeys.length > 0 && (
        <Alert
          message={`${selectedRowKeys.length} transaction(s) selected`}
          description={
            <Space>
              <Popconfirm
                title={`Delete ${selectedRowKeys.length} transactions`}
                description="Are you sure you want to delete the selected transactions? This action cannot be undone."
                onConfirm={handleBatchDelete}
                okText="Yes, Delete"
                cancelText="Cancel"
                icon={<ExclamationCircleOutlined style={{ color: 'red' }} />}
              >
                <Button
                  type="primary"
                  danger
                  loading={batchDeleting}
                  icon={<DeleteOutlined />}
                  size="small"
                >
                  Delete Selected ({selectedRowKeys.length})
                </Button>
              </Popconfirm>
              <Button
                size="small"
                onClick={() => setSelectedRowKeys([])}
              >
                Clear Selection
              </Button>
            </Space>
          }
          type="info"
          showIcon
          style={{ marginBottom: 16, borderRadius: '6px' }}
        />
      )}

      <Table
        columns={columns}
        dataSource={pageData.content}
        rowKey="id"
        loading={loading}
        rowSelection={rowSelection}
        scroll={{ x: 1000 }}
        pagination={{
          current: pageData.number + 1,
          pageSize: pageData.size,
          total: pageData.totalElements,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} transactions`,
          onChange: (page, pageSize) => onPageChange(page - 1, pageSize),
          pageSizeOptions: ['10', '20', '50', '100'],
          size: 'default',
        }}
        locale={{
          emptyText: (
            <Empty
              description="No transactions found"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          ),
        }}
        style={{ borderRadius: '6px' }}
      />
    </div>
  );
};

export default TransactionList; 
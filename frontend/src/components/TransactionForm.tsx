import React from 'react';
import { Form, Input, Select, Button, Space, Row, Col } from 'antd';
import { TransactionFormData } from '../types/Transaction';

const { Option } = Select;

interface TransactionFormProps {
  onSubmit: (transaction: TransactionFormData) => void;
  onCancel: () => void;
  initialData?: Partial<TransactionFormData>;
  isEditing?: boolean;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  onSubmit,
  onCancel,
  initialData,
  isEditing = false
}) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: TransactionFormData) => {
    onSubmit(values);
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  // Amount validation function
  const validateAmount = (_: any, value: string) => {
    if (!value) {
      return Promise.reject(new Error('Please enter amount'));
    }
    
    const amountRegex = /^\d+(\.\d{1,2})?$/;
    if (!amountRegex.test(value)) {
      return Promise.reject(new Error('Please enter a valid amount (e.g., 100.50)'));
    }
    
    const numValue = parseFloat(value);
    if (numValue <= 0) {
      return Promise.reject(new Error('Amount must be greater than 0'));
    }
    
    return Promise.resolve();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialData}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              { min: 3, message: 'Description must be at least 3 characters' }
            ]}
          >
            <Input placeholder="Enter transaction description (optional)" />
          </Form.Item>
        </Col>
        
        <Col span={12}>
          <Form.Item
            label="Amount"
            name="amount"
            rules={[
              { validator: validateAmount }
            ]}
          >
            <Input
              placeholder="Enter amount (e.g., 100.50)"
              addonBefore="$"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Type"
            name="type"
            rules={[{ required: true, message: 'Please select transaction type' }]}
          >
            <Select placeholder="Select transaction type">
              <Option value="INCOME">Income</Option>
              <Option value="EXPENSE">Expense</Option>
            </Select>
          </Form.Item>
        </Col>
        
        <Col span={12}>
          <Form.Item
            label="User"
            name="createUser"
            rules={[
              { required: true, message: 'Please enter user name' },
              { min: 2, message: 'User name must be at least 2 characters' }
            ]}
          >
            <Input placeholder="Enter user name" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            {isEditing ? 'Update' : 'Create'}
          </Button>
          <Button onClick={handleCancel}>
            Cancel
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default TransactionForm; 
import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const WelcomePage: React.FC = () => (
  <div style={{ padding: 32, textAlign: 'center' }}>
    <Title level={2}>Welcome to the Bank Transaction System</Title>
    <Paragraph>
      This is a minimal, clean interface for managing your bank transactions.<br/>
      Use the sidebar to navigate to the transaction management page.
    </Paragraph>
  </div>
);

export default WelcomePage; 
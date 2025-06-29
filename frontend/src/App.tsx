import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, TransactionOutlined } from '@ant-design/icons';
import WelcomePage from './pages/WelcomePage';
import TransactionPage from './pages/TransactionPage';
import './App.css';

const { Header, Sider, Content } = Layout;

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Welcome',
    },
    {
      key: '/transactions',
      icon: <TransactionOutlined />,
      label: 'Transactions',
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
  };

  return (
    <Layout style={layoutStyle}>
      <Sider width={200} theme="light">
        <div style={{ height: 32, margin: 16, background: '#f0f0f0' }} />
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          style={{ height: '100%', borderRight: 0 }}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0, borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ padding: '0 24px', fontSize: 18, fontWeight: 500,  textAlign: "center"}}>
            Bank Transaction System
          </div>
        </Header>
        <Content style={{ margin: 0, background: '#fff' }}>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/transactions" element={<TransactionPage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

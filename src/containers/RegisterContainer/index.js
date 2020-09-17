import React, { useEffect } from 'react';
import './index.css';
import { Form, Input, Button, Typography, Alert } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { clearError } from "../../actions/errorActions"
import { login } from "../../actions/authActions"
import { Redirect } from "react-router-dom"

export default function RegisterContainer() {
  const dispatch = useDispatch();
  const { Link, Title } = Typography;

  const { loading, authenticated } = useSelector((state) => state.auth);

  useEffect(() => {
  })


  const errors = useSelector((state) => state.errors);

  const handleLogin = (userName, password) => {
    console.log(userName, password);
  };

  const renderErrors = (errors) => {
    return Object.entries(errors).map(([key, value]) => (
      <Alert message={`${key} ${value}`} type="error" showIcon="true" closable="true" />
    ));
  };

  const onFinish = (values) => {
    dispatch(login({ user: values }));
  }

  return (
    <div className="login-container">
      <Title level={2}>Login</Title>

      {errors && renderErrors(errors)}

      <Form
        name="login-form"
        layout="vertical"
        onFinish={onFinish}
        colon={false}
        hideRequiredMark
        style={{ marginTop: '14px' }}
      >
        <Form.Item
          name="email"
          rules={[
            { type: 'email', message: 'Email is not valid' },
            { required: true, message: 'Email is required' },
          ]}
          hasFeedback
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Password is required' }]} hasFeedback>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Password is required' }]} hasFeedback>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Login
          </Button>
        </Form.Item>
      </Form>
      <Link to="/">Home</Link>
    </div>
  );
}

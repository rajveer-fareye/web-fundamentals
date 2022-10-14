import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './Drawer.css';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row,  Space } from 'antd';

// const { Option } = Select;
const AppDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add Student
      </Button>
      <Drawer
        title="Add Student"
        width={720}
        placement = 'right'
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //     <Button onClick={onClose} type="primary">Submit</Button>
        //   </Space>
        // }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="standard"
                label="Standard"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your Standard',
                  },
                ]}
              >
                <Input placeholder="Please enter Stadard" />
              </Form.Item>
            </Col>
            
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="mobile"
                label="Mobile Number"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Mobile Number',
                  },
                ]}
              >
                <Input placeholder="Please enter Mobile Number" />
              </Form.Item>
            </Col>
            
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="blood"
                label="Blood Group"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your blood group',
                  },
                ]}
              >
                <Input placeholder="Please enter Blood Group" />
              </Form.Item>
            </Col>
            
          </Row>
          
          
        </Form>

        <Space >
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">Submit</Button>
          </Space>
      </Drawer>
    </>
  );
};
export default AppDrawer;
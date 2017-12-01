import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'antd/dist/antd.css';  
import { DatePicker } from 'antd';
import { Row, Col, Slider,Layout, Menu, Icon,Input ,Dropdown,Button,message,Modal } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    const menu1 = (
      <Menu>
        <Menu.Item key="0">
          <a href="">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );
    function handleButtonClick(e) {
      message.info('Click on left button.');
      console.log('click left button', e);
    }
    
    function handleMenuClick(e) {
      message.info('Click on menu item.');
      console.log('click', e);
    }
    
    const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );
    var name = ""
    // name = Number(name)
    return (
      <div>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="logo" >
                  LOGO
              </div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>
                    nav 1
                  </span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>
                    nav 2
                  </span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>
                    nav 3
                  </span>
                </Menu.Item>
              </Menu>
            </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              <div>
              <Row className="row-space">
                <Col span={24} >
                  <div className="search-bar">
                    <div className="field-form">
                      <span>input1:</span>
                      <Input placeholder="default size" className="text-input"/>
                    </div>
                    <div className="field-form">
                      <span>input2:</span>
                      <div>
                        <Dropdown overlay={menu}>
                          <Button style={{ marginLeft: 8 }}>
                            Button <Icon type="down" />
                          </Button>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="button-group">
                      <Button>button1</Button>
                      <Button>button2</Button>
                      <Dropdown overlay={menu1} trigger={['click']}>
                        <a className="ant-dropdown-link" href="#">
                          dropdown <Icon type="down" />
                        </a>
                      </Dropdown>
                    </div>
                  </div>
                </Col>
                <Col span={24} >
                  <div>
                    <Button type="primary" onClick={this.showModal}>Open</Button>
                    <Modal
                      title="Basic Modal"
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                    >
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </Modal>
                  </div>
                </Col>
                <Col span={24} >
                  <div className="data-table">
                    <div>col1</div>
                    <div>col2</div>
                    <div>col3</div>
                    <div>col4</div>
                    <div>col5</div>
                    <div>col6</div>
                  </div>
                  <div className="data-table">
                    <div>col1</div>
                    <div>col2</div>
                    <div>col3</div>
                    <div>col4</div>
                    <div>col5</div>
                    <div>col6</div>
                  </div>
                  <div className="data-table">
                    <div>col1</div>
                    <div>col2</div>
                    <div>col3</div>
                    <div>col4</div>
                    <div>col5</div>
                    <div>col6</div>
                  </div>
                  <div className="data-table">
                    <div>col1</div>
                    <div>col2</div>
                    <div>col3</div>
                    <div>col4</div>
                    <div>col5</div>
                    <div>col6</div>
                  </div>
                </Col>
                <Col span={24} >4</Col>
              </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>

    );
  }
}

export default App;

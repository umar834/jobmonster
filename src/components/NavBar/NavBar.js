import { useState, useEffect } from 'react';
import { Menu, Button, Row, Col, Modal, Form, Input, Checkbox } from 'antd';
import { HomeOutlined, UserOutlined, MenuOutlined, LockOutlined } from '@ant-design/icons';
import JobMonsterLogo from '../../Images/job_monster_180.png'
import LoginModal from '../../Images/login_modal.jpg'
import styles from './NavBar.module.css'
import $ from 'jquery'
import 'antd/dist/antd.css';

const { SubMenu } = Menu;


const NavBar = props => {
    const [state, setState] = useState('mail');
    const [offset, setOffset] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
      };

    const { current } = state;
    const handleClick = e => {
        console.log('click ', e);
        setState({ current: e.key });
    };

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    $(".ant-menu-submenu-popup").parent().css({ "position": "fixed" });
    $(".ant-menu-submenu-popup ul").css({ "width": "94vw", "padding": "15px", "margin-left": "3vw" });
    return (
        <Row className={(offset >= 100 ? styles.container : styles.container1)} align="middle" justify="center">
            <Col xs={{ span: 12 }} lg={{ span: 3 }} sm={{ span: 4 }}>
                <img src={JobMonsterLogo} />
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 21 }} sm={{ span: 20 }}>
                <Menu className={styles.mainmenu} onClick={handleClick} selectedKeys={[current]} mode="horizontal" overflowedIndicator={<MenuOutlined className={styles.hamburger} />}>
                    <Menu.Item key="mail" icon={<HomeOutlined />}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="app">
                        JobMonster Blog
                    </Menu.Item>
                    <Menu.Item>
                        <Button onClick={showModal} icon={<UserOutlined />} type="primary">Login</Button>
                    </Menu.Item>
                </Menu>
            </Col>
            <Modal className={styles.login_modal} title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <Row align="middle" justify="center">
                    <Col xs={{ span: 0 }} lg={{ span: 12 }} sm={{ span: 12 }}>
                        <img src={LoginModal} />
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }} sm={{ span: 12 }} className={styles.login_div}>
                        <h3 className={styles.title}>Log In</h3>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            className={styles.form}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} 
                                placeholder="Username"
                                size='large' 
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    size='large'
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className={styles.login_form_forgot} href="">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                               <p className={styles.register_now}>Or <a href="">register now!</a></p>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Modal>
        </Row>
    );
}

export default NavBar
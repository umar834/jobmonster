import { useState,useEffect } from 'react';
import { Menu, Button, Row, Col } from 'antd';
import { HomeOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import JobMonsterLogo from '../../Images/job_monster_180.png'
import styles from './NavBar.module.css'
import $ from 'jquery'
import 'antd/dist/antd.css';

const { SubMenu } = Menu;


const NavBar = props => {
    const [state, setState] = useState('mail');
    const [offset, setOffset] = useState(0);

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

    $(".ant-menu-submenu-popup").parent().css({"position": "fixed"});
    $(".ant-menu-submenu-popup ul").css({"width": "94vw", "padding": "15px", "margin-left": "3vw"});
    return (
        <Row className={( offset >= 100? styles.container : styles.container1 )} align="middle" justify="center">
            <Col xs={{span: 12}} lg={{span: 3}} sm={{span: 4}}>
                <img src={JobMonsterLogo} />
            </Col>
            <Col xs={{span: 12}} lg={{span: 21}} sm={{span: 20}}>
                <Menu className={styles.mainmenu} onClick={handleClick} selectedKeys={[current]} mode="horizontal" overflowedIndicator={<MenuOutlined className={styles.hamburger} />}>
                    <Menu.Item key="mail" icon={<HomeOutlined  />}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="app">
                        JobMonster Blog
                    </Menu.Item>
                    <Menu.Item>
                        <Button icon={<UserOutlined />} type="primary">Login</Button>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    );
}

export default NavBar
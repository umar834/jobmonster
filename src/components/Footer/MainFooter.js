import {Row, Col} from 'antd'
import JobMonsterLogo from '../../Images/job_monster_180.png'
import styles from './MainFooter.module.css'

const MainFooter = props =>
{
    return (
    <footer className={styles.container}>
        <Row>
            <Col xs={{span: 12}} md={{span: 7}}>
            <img src={JobMonsterLogo} />
                <p>Find your dream job on your own terms.</p>
                <h6>Privacy Policy</h6>
                <h6>Terms of Use</h6>
            </Col>
            <Col xs={{span: 12}} md={{span: 7}}>
                <h4>Contact Us</h4>
            </Col>
        </Row>
        <div className={styles.copyright}>
            <p>© JobMonster 2022 - All rights reserved</p>
        </div>
    </footer>
    );
}

export default MainFooter;
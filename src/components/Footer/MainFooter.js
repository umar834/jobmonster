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
            </Col>
        </Row>
    </footer>
    );
}

export default MainFooter;
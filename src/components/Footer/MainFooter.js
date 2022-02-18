import {Row, Col} from 'antd'
import JobMonsterLogo from '../../Images/job_monster_180.png'
import styles from './MainFooter.module.css'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaPinterestSquare } from 'react-icons/fa';

const MainFooter = props =>
{
    return (
    <footer className={styles.container}>
        <Row>
            <Col xs={{span: 18}} md={{span: 6}}>
            <img src={JobMonsterLogo} />
                <p>Find your dream job on your own terms.</p>
                <h6>Privacy Policy</h6>
                <h6>Terms of Use</h6>
            </Col>
            <Col xs={{span: 18}} md={{span: 6}}>
                <h4>Contact Us</h4>
                <p>Contact Page</p>
                <p>+92 306 0058050</p>
                <p>contact@jobmonster.pk</p>
            </Col>
            <Col xs={{span: 18}} md={{span: 6}}>
                <h4>Quick Links</h4>
                <p>Home</p>
                <p>Search Jobs</p>
                <p>Post Jobs</p>
                <p>About Us</p>
                <p>Blog</p>
            </Col>
            <Col xs={{span: 18}} md={{span: 6}}>
                <h4>Find Us</h4>
                <FaFacebookSquare />
                <FaTwitterSquare /><br />
                <FaInstagramSquare />
                <FaPinterestSquare />
            </Col>
        </Row>
        <div className={styles.copyright}>
            <p>© JobMonster 2022 - All rights reserved</p>
        </div>
    </footer>
    );
}

export default MainFooter;
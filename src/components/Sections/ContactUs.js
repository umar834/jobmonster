import {Row, Col} from 'antd'

import styles from './ContactUs.module.css'

const ContactUs = props =>
{
    return (
        <section>
            <Row className={styles.row} justify="start" align="middle">
                <Col className={styles.column} xs={{span: 24}} md={{span: 16}}>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </Col>
                <Col className={styles.column} xs={{span: 24}} md={{span: 8}}>
                    <button>{props.button_title}</button>
                </Col>
            </Row>
        </section>
    );
}

export default ContactUs;
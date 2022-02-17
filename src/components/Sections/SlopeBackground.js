import { Row, Col } from 'antd'
import IconWithText from '../Singles/IconWithText';

import styles from './SlopeBackground.module.css'

const SlopeBackground = props =>
{
    return (
        <section className={styles.section}>
            <p className={styles.titletop}>{props.titletop}</p>
            <h2 className={styles.title}>{props.title}</h2>
            <Row className={styles.row} justify="space-around">
                <Col className={styles.column} xs={{span: 24}} md={{span: 10}}>
                    <IconWithText icon={props.icon1} title={props.title1} description={props.description1} />
                </Col>
                <Col className={styles.column} xs={{span: 24}} md={{span: 10}}>
                    <IconWithText icon={props.icon2} title={props.title2} description={props.description2} />
                </Col>
            </Row>
        </section>
    );
}

export default SlopeBackground;
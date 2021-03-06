import { Row, Col } from 'antd'
import IconWithText from '../Singles/IconWithText';

import styles from './TripleColumns.module.css'

const TripleColumn = props => {
    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>{props.heading}</h2>
            <hr className={styles.hr} />
            <h4 className={styles.subheading}>{props.subheading}</h4>
            <Row className={styles.row} justify="space-around">
                <Col className={styles.column} xs={{span: 24}} md={{span: 7}}>
                    <IconWithText icon={props.icon1} title={props.title1} description={props.description1} />
                </Col>
                <Col className={styles.column} xs={{span: 24}} md={{span: 7}}>
                    <IconWithText icon={props.icon2} title={props.title2} description={props.description2} />
                </Col>
                <Col className={styles.column} xs={{span: 24}} md={{span: 7}}>
                    <IconWithText icon={props.icon3} title={props.title3} description={props.description3} />
                </Col>
            </Row>
        </section>
    );    
}

export default TripleColumn
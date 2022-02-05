import { Row, Col } from 'antd'

import styles from './TripleColumns.module.css'

const TripleColumn = props => {
    return (
        <section className={styles.container}>
            <h2>{props.heading}</h2>
            <h4 className={styles.subheading}>{props.subheading}</h4>
            <Row className={styles.row}>
                <Col className={styles.column} xs={{span: 24}} md={{span: 7, offset: 1}}>
                    {props.icon1 && 
                    <props.icon1 />
                    }
                    <h4>{props.title1}</h4>
                    <p>{props.description1}</p>
                </Col>
                <Col className={styles.column} xs={{span: 24}} md={{span: 7, offset: 1}}>
                    { props.icon2 && 
                     <props.icon2 />
                    }
                     <h4>{props.title2}</h4>
                    <p>{props.description2}</p>
                </Col>
                <Col className={styles.column} xs={{span: 24}} md={{span: 7, offset: 1}}>
                    {   props.icon3 && 
                        <props.icon3 />
                    }
                     <h4>{props.title3}</h4>
                    <p>{props.description3}</p>
                </Col>
            </Row>
        </section>
    );    
}

export default TripleColumn
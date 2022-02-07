import { Row, Col } from 'antd'
import styles from './ImageWithContent1.module.css'

const ImageWithContent1 = props =>
{
    return (
        <section className={styles.container}>
            <Row>
                <Col xs={{span: 24}} md={{span: 12}}>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </Col>
                <Col xs={{span: 24}} md={{span: 12}}>
                    <img src={props.image} />
                </Col>
            </Row>
        </section>
    )
}

export default ImageWithContent1
import { Row, Col } from 'antd'
import styles from './ImageWithContent1.module.css'

const ImageWithContent1 = props =>
{
    return (
        <section className={styles.container}>
            <Row>
                <Col xs={{span: 24}} md={{span: 12}}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.description}>{props.description}</p>
                </Col>
                <Col xs={{span: 24}} md={{span: 12}}>
                    <img className={styles.img} src={props.image} />
                </Col>
            </Row>
        </section>
    )
}

export default ImageWithContent1
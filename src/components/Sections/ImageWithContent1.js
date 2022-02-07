import { Row, Col } from 'antd'
import styles from './ImageWithContent1.module.css'

const ImageWithContent1 = props =>
{
    return (
        <section>
            <Row>
                <Col xs={{span: 24}} md={{span: 12}}>
                </Col>
                <Col xs={{span: 24}} md={{span: 12}}>
                </Col>
            </Row>
        </section>
    )
}

export default ImageWithContent1
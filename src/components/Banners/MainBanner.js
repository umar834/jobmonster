import { Button } from 'antd'
import styles from './MainBanner.module.css'

const MainBanner = props =>
{
    return (
        <section className={styles.banner} style={{backgroundImage: `url(${props.background})`}}>
            <h1>{props.title}</h1>
            {(props.button && 
            <Button className={styles.button} type="primary" icon={props.icon ? <props.icon /> : false} size='large'>{props.button_text}</Button>
            )}
        </section>
    );
}

export default MainBanner
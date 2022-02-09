import styles from './SlopeBackground.module.css'

const SlopeBackground = props =>
{
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.description}>{props.description}</p>
        </section>
    );
}

export default SlopeBackground;
import styles from './IconWithText.module.css'

const IconWithText = props =>
{
    return (
        <div className={styles.column}>
            {props.icon && 
            <props.icon />
            }
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    );
}

export default IconWithText
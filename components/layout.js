import styles from './layout.module.css'

export default function Layout({ children }) {
    // creating unique class name, like "layout_container__2t4v2"
    return <div className={styles.container}>{children}</div>
}
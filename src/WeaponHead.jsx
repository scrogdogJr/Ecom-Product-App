import styles from './WeaponHead.module.css'; // Just to practice using modules

function WeaponHead() {
    return (
        <tr className={styles.border}>
            <th className={`${styles.border} ${styles.headerCells}`}>Name</th>
            <th className={`${styles.border} ${styles.headerCells}`}>Type</th>
            <th className={`${styles.border} ${styles.headerCells}`}>Damage</th>
            <th className={`${styles.border} ${styles.headerCells}`}>Special Ability</th>
            <th className={`${styles.border} ${styles.headerCells}`}>Price (in runes)</th>
        </tr>
    );
}

export default WeaponHead;

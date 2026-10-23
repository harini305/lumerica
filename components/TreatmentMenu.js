import styles from './TreatmentMenu.module.css';

// Spa-menu style list: name and prices on one line with a leader, description below.
export default function TreatmentMenu({ menu, showGroups = true }) {
  return (
    <div className={styles.menu}>
      {menu.map((g) => (
        <section key={g.group} className={styles.group} aria-labelledby={`menu-${g.group.replace(/\W+/g, '-')}`}>
          <h2 id={`menu-${g.group.replace(/\W+/g, '-')}`} className={showGroups ? styles.groupTitle : 'visually-hidden'}>
            {g.group}
          </h2>
          <ul>
            {g.items.map((item) => (
              <li key={item.name} className={styles.item}>
                <div className={styles.line}>
                  <h3>{item.name}</h3>
                  <span className={styles.leader} aria-hidden="true" />
                  <p className={styles.prices}>
                    {item.prices.map((p, i) => (
                      <span key={p}>
                        {i > 0 && <span aria-hidden="true"> · </span>}
                        {p}
                      </span>
                    ))}
                  </p>
                </div>
                {item.text && <p className={styles.text}>{item.text}</p>}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

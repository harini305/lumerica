import HeroMedia from './HeroMedia';
import Img from './Img';
import styles from './PageHero.module.css';

// variant="split": text beside an arch-framed photo (the arch echoes the bamboo shala)
// variant="band":  full-bleed photo with the title set on a cream panel below it
// variant="plain": text only, for utility pages
export default function PageHero({ variant = 'band', title, subtitle, children, image, imageAlt = '', position, actions }) {
  if (variant === 'plain') {
    return (
      <header className={`${styles.plain} container`}>
        <h1>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children && <div className={`${styles.intro} lead`}>{children}</div>}
        {actions && <div className={`btn-row ${styles.actions}`}>{actions}</div>}
      </header>
    );
  }

  if (variant === 'split') {
    return (
      <header className={`${styles.split} container`}>
        <div className={styles.splitText}>
          <h1>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {children && <div className={`${styles.intro} lead`}>{children}</div>}
          {actions && <div className={`btn-row ${styles.actions}`}>{actions}</div>}
        </div>
        <HeroMedia className={`${styles.splitMedia} arch`} parallax={false}>
          <Img src={image} alt={imageAlt} priority sizes="(min-width: 900px) 42vw, 92vw" className="cover" position={position} />
        </HeroMedia>
      </header>
    );
  }

  return (
    <header className={styles.band}>
      <HeroMedia className={styles.bandMedia}>
        <Img src={image} alt={imageAlt} priority sizes="100vw" className="cover" position={position} />
      </HeroMedia>
      <div className={`container ${styles.bandPanelWrap}`}>
        <div className={styles.bandPanel}>
          <h1>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {children && <div className={`${styles.intro} lead`}>{children}</div>}
          {actions && <div className={`btn-row ${styles.actions}`}>{actions}</div>}
        </div>
      </div>
    </header>
  );
}

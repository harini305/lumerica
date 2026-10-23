import { External } from './icons';
import styles from './PriceCell.module.css';

// A price with its real purchase route: an external Momence page, an in-page
// anchor, or a plain note when it can only be bought at reception.
export default function PriceCell({ price, url, href, note }) {
  return (
    <span className={styles.cell}>
      {price && <span className={styles.price}>{price}</span>}
      {url ? (
        <a href={url} rel="noopener" target="_blank" className={styles.action}>
          Buy online <External width={14} height={14} />
          <span className="visually-hidden">{price ? ` ${price}` : ''} (Momence, opens in a new tab)</span>
        </a>
      ) : href ? (
        <a href={href} className={styles.action}>
          {note}
        </a>
      ) : (
        note && <span className={styles.note}>{note}</span>
      )}
    </span>
  );
}

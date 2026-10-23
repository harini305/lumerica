'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import useClientNow from '@/lib/useClientNow';
import { nav } from '@/data/site';
import { ChevronDown, Close, Menu } from './icons';
import styles from './Header.module.css';

// eventLinks come from the server ({ label, href, until? }). `until` is re-checked
// here so a cached page never lists an event that has already started.
function useLiveEvents(eventLinks) {
  const now = useClientNow();
  const live = now ? eventLinks.filter((e) => !e.until || Date.parse(e.until) > now) : eventLinks;
  return [...live, { label: 'All events', href: '/events/' }];
}

function isActive(pathname, item) {
  if (pathname === item.href) return true;
  return (item.children || []).some((c) => pathname === c.href) || (item.href !== '/' && pathname.startsWith(item.href));
}

export default function Header({ eventLinks }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const [mobileSub, setMobileSub] = useState(null);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const uid = useId();
  const events = useLiveEvents(eventLinks);
  const items = nav.map((item) => (item.events ? { ...item, children: events } : item));

  // Close menus when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setOpenSub(null);
    setMobileSub(null);
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
      setOpenSub(null);
    };
    const onPointer = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenSub(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [menuOpen]);

  useEffect(() => {
    // The drawer starts below the header, wherever the header currently sits
    // (it moves down while the announcement bar is showing).
    if (menuOpen) {
      const top = headerRef.current.getBoundingClientRect().bottom;
      headerRef.current.style.setProperty('--drawer-top', `${Math.max(0, top)}px`);
    }
    document.documentElement.classList.toggle('menu-open', menuOpen);
    return () => document.documentElement.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <header className={styles.header} data-open={menuOpen || undefined} ref={headerRef}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.logo} aria-label="Lumeria home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="" width="248" height="146" />
        </Link>

        <nav className={styles.nav} aria-label="Main" ref={navRef}>
          <ul className={styles.list}>
            {items.map((item, i) => {
              const subId = `${uid}-sub-${i}`;
              const active = isActive(pathname, item);
              return (
                <li
                  key={item.href}
                  className={styles.item}
                  data-has-sub={item.children ? '' : undefined}
                  data-sub-open={openSub === i || undefined}
                >
                  <Link
                    href={item.href}
                    className={styles.link}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    data-active={active || undefined}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <>
                      <button
                        type="button"
                        className={styles.subToggle}
                        aria-expanded={openSub === i}
                        aria-controls={subId}
                        onClick={() => setOpenSub(openSub === i ? null : i)}
                      >
                        <span className="visually-hidden">{item.label} pages</span>
                        <ChevronDown width={16} height={16} />
                      </button>
                      <ul className={styles.sub} id={subId}>
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} aria-current={pathname === c.href ? 'page' : undefined}>
                              {c.label}
                              {c.note && <span className={styles.note}>{c.note}</span>}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href="/contact/" className={styles.contact} aria-current={pathname === '/contact/' ? 'page' : undefined}>
            Contact
          </Link>
          <Link href="/yoga/#timetable" className={`btn ${styles.cta}`}>
            Class timetable
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls={`${uid}-drawer`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <Close /> : <Menu />}
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>

      <div className={styles.drawer} id={`${uid}-drawer`} hidden={!menuOpen}>
        <nav aria-label="Main" className={`container ${styles.drawerInner}`}>
          <ul>
            {items.map((item, i) => {
              const subId = `${uid}-msub-${i}`;
              const expanded = mobileSub === i;
              return (
                <li key={item.href} className={styles.mItem}>
                  <div className={styles.mRow}>
                    <Link href={item.href} aria-current={pathname === item.href ? 'page' : undefined}>
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={subId}
                        onClick={() => setMobileSub(expanded ? null : i)}
                      >
                        <span className="visually-hidden">{item.label} pages</span>
                        <ChevronDown />
                      </button>
                    )}
                  </div>
                  {item.children && (
                    <ul id={subId} className={styles.mSub} hidden={!expanded}>
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} aria-current={pathname === c.href ? 'page' : undefined}>
                            {c.label}
                            {c.note && <span className={styles.note}>{c.note}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
            <li className={styles.mItem}>
              <div className={styles.mRow}>
                <Link href="/contact/">Contact</Link>
              </div>
            </li>
          </ul>
          <Link href="/yoga/#timetable" className={`btn ${styles.mCta}`}>
            Class timetable
          </Link>
        </nav>
      </div>
    </header>
  );
}

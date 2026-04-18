// Delcube Website UI Kit — core components.
// All global so they can be used across screens.jsx files.

const Icon = ({ name, size = 18 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    search: <><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></>,
    user:   <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></>,
    bag:    <><path d="M6 7h12l-1.2 11a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></>,
    chev:   <polyline points="6 9 12 15 18 9"/>,
    close:  <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    check:  <polyline points="20 6 9 17 4 12"/>,
    arrow:  <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></>,
    heart:  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 0 0 0-7.8z"/>,
  };
  return <svg {...common}>{paths[name]}</svg>;
};

const Nav = ({ onNav, cartCount = 0, onOpenCart }) => (
  <div className="dc-nav-wrap">
    <div className="container">
      <nav className="dc-nav">
        <a href="#" className="brand" onClick={(e) => { e.preventDefault(); onNav('home'); }}>
          <img src="../../assets/logo-black.svg" alt="Delcube" />
        </a>
        <div className="links">
          <a href="#" onClick={(e) => { e.preventDefault(); onNav('product'); }}>Store <Icon name="chev" size={12} /></a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNav('custom'); }}>Custom anfragen</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Community <Icon name="chev" size={12} /></a>
        </div>
        <div className="icons">
          <button aria-label="Suchen"><Icon name="search" /></button>
          <button aria-label="Konto"><Icon name="user" /></button>
          <button aria-label="Warenkorb" onClick={onOpenCart}>
            <Icon name="bag" />
            {cartCount > 0 && <span className="cart-dot">{cartCount}</span>}
          </button>
        </div>
      </nav>
    </div>
  </div>
);

const Button = ({ variant = 'primary', size = 'md', children, onClick, icon }) => {
  const cls = `btn btn-${variant}${size !== 'md' ? ` btn-${size}` : ''}`;
  return (
    <button className={cls} onClick={onClick}>
      {children}
      {icon && <Icon name={icon} size={14} />}
    </button>
  );
};

const Tag = ({ variant = 'default', dot, children }) => {
  const cls = ['tag'];
  if (variant === 'solid') cls.push('tag-solid');
  if (variant === 'accent') cls.push('tag-accent');
  if (dot) cls.push('tag-dot');
  return <span className={cls.join(' ')} style={dot ? { color: dot } : {}}>{children}</span>;
};

const HeroCard = ({ onCTA }) => (
  <div className="hero-card">
    <div className="txt">
      <span className="eb">personalisierte Art Toys</span>
      <h1>Dekoration mit deinem persönlichen Touch.</h1>
      <p>Kein Stück wie das andere. Wir verwandeln deine Idee in eine limitierte 3D-gedruckte Kunstfigur — von Hand bearbeitet, nummeriert und signiert.</p>
      <div className="cta">
        <Button variant="primary" onClick={() => onCTA('product')} icon="arrow">Jetzt entdecken</Button>
        <Button variant="secondary" onClick={() => onCTA('custom')}>Custom anfragen</Button>
      </div>
    </div>
    <div className="img" />
  </div>
);

const DripBanner = () => (
  <div className="drip-banner">
    <img className="wordmark" src="../../assets/tagbear-wordmark.svg" alt="Tag Bear" />
    <p>Gestalte deine Umgebung farbiger mit unseren kreativen Art Toys. Handgemacht und einzigartig.</p>
  </div>
);

const SectionHead = ({ title, lede }) => (
  <div className="sec-head">
    <h2>{title}</h2>
    {lede && <p className="lede">{lede}</p>}
  </div>
);

const ProductCard = ({ product, onClick }) => (
  <div className="prod-card" onClick={onClick}>
    <div className="img">
      {product.pin && <span className={`pin${product.pinDark ? ' dark' : ''}`}>{product.pin}</span>}
      <img src={product.img} alt={product.name} />
    </div>
    <div className="meta">
      <div className="eb">{product.collection}</div>
      <h3 className="t">{product.name}</h3>
      <div className="bot">
        <span className="price">€ {product.price.toFixed(2).replace('.', ',')}</span>
      </div>
    </div>
  </div>
);

const CharacterStory = ({ children }) => (
  <div className="char-story"><p>{children}</p></div>
);

const Newsletter = () => (
  <form className="news" onSubmit={(e) => e.preventDefault()}>
    <input placeholder="deine@email.de" />
    <button type="submit">Abonnieren</button>
  </form>
);

const Footer = () => (
  <footer className="dc-footer">
    <div className="top">
      <div className="brand">
        <img src="../../assets/logo-white.svg" alt="Delcube" />
        <p>Handgemachte, limitierte Art Toys aus Deutschland. 3D-gedruckt, von Hand bearbeitet, nummeriert und signiert.</p>
        <Newsletter />
      </div>
      <div>
        <h4>Shop</h4>
        <ul>
          <li><a href="#">Tag Bear</a></li>
          <li><a href="#">Cryptooze</a></li>
          <li><a href="#">Custom anfragen</a></li>
          <li><a href="#">Sale</a></li>
        </ul>
      </div>
      <div>
        <h4>Community</h4>
        <ul>
          <li><a href="#">Drops</a></li>
          <li><a href="#">Artists</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Discord</a></li>
        </ul>
      </div>
      <div>
        <h4>Service</h4>
        <ul>
          <li><a href="#">Versand &amp; Retouren</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Impressum</a></li>
          <li><a href="#">Datenschutz</a></li>
        </ul>
      </div>
    </div>
    <div className="bot">
      <span>© {new Date().getFullYear()} delcube. Handmade in Germany.</span>
      <span>AGB · Impressum · Cookies</span>
    </div>
  </footer>
);

const CartDrawer = ({ open, onClose, items, onRemove }) => {
  const total = items.reduce((a, i) => a + i.price, 0);
  return (
    <>
      <div className={`drawer-scrim${open ? ' open' : ''}`} onClick={onClose} />
      <aside className={`drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="head">
          <h3>Warenkorb · {items.length}</h3>
          <button onClick={onClose} aria-label="Schließen"><Icon name="close" /></button>
        </div>
        <div className="items">
          {items.length === 0 && <div className="empty">Dein Warenkorb ist leer.</div>}
          {items.map((it, i) => (
            <div className="item" key={i}>
              <div className="th" style={{ backgroundImage: `url(${it.img})` }} />
              <div>
                <div className="n">{it.name}</div>
                <div className="ed">{it.edition}</div>
              </div>
              <div className="p">€ {it.price.toFixed(2).replace('.', ',')}</div>
            </div>
          ))}
        </div>
        <div className="foot">
          <div className="tot"><span>Zwischensumme</span><span>€ {total.toFixed(2).replace('.', ',')}</span></div>
          <Button variant="accent" size="lg">Zur Kasse</Button>
        </div>
      </aside>
    </>
  );
};

Object.assign(window, { Icon, Nav, Button, Tag, HeroCard, DripBanner, SectionHead, ProductCard, CharacterStory, Newsletter, Footer, CartDrawer });

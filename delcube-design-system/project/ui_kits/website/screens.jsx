// Delcube Website — screen-level compositions.

const PRODUCTS = [
  { id: 'red-std',    collection: 'Tag Bear', name: 'Red Drip · Standard',    price: 189, edition: 'Edition 12 / 50', img: '../../assets/product-red-bear.webp',  pin: 'Neu' },
  { id: 'pop-blk',    collection: 'Tag Bear', name: 'Pop Drip · Black',       price: 249, edition: 'Edition 03 / 25', img: '../../assets/product-solo-bear.webp', pin: 'Limited', pinDark: true },
  { id: 'cryptooze',  collection: 'Cryptooze', name: 'Cryptooze · Original',  price: 219, edition: 'Edition 08 / 40', img: '../../assets/product-cryptooze.webp' },
  { id: 'red-alt',    collection: 'Tag Bear', name: 'Red Drip · Artist Cut',  price: 299, edition: 'Edition 01 / 10', img: '../../assets/product-red-bear.webp',  pin: '1/10', pinDark: true },
];

const HomeScreen = ({ onNav, onAdd }) => (
  <>
    <section style={{ paddingTop: 0, paddingBottom: 32 }}>
      <div className="container">
        <HeroCard onCTA={onNav} />
      </div>
    </section>

    <div className="marquee" aria-hidden="true">
      <div className="track">
        <span>Handmade in Germany</span><span>3D-printed · hand-finished</span><span>Numbered · signed</span><span>Limited drops</span>
        <span>Handmade in Germany</span><span>3D-printed · hand-finished</span><span>Numbered · signed</span><span>Limited drops</span>
      </div>
    </div>

    <section>
      <div className="container">
        <SectionHead
          title={<>Aktuelle Drops.<br/><span style={{color:'var(--fg-3)'}}>Edition über Preis.</span></>}
          lede="Handgefertigt. Nummeriert. Signiert. Jede Figur ist ein Unikat aus deutscher Produktion."
        />
        <div className="prod-grid">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} onClick={() => onNav('product', p)} />
          ))}
        </div>
      </div>
    </section>

    <section style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="feature-split">
          <div className="media red"></div>
          <div className="copy">
            <span className="eb">// tag-bear / red drip</span>
            <h3>Ein Wort. In Lack gegossen. Auf einen Bären getropft.</h3>
            <p>Tag Bears sind kleine Leinwände — weißer oder schwarzer PLA-Körper, Kopf von Hand mit Tropf-Lettering finiert. Kein Sticker, kein Decal. Jeder Buchstabe ein Einzelstück.</p>
            <div className="kv">
              <div><div className="k">HÖHE</div><div className="v">18 cm</div></div>
              <div><div className="k">EDITION</div><div className="v">50 Stück</div></div>
              <div><div className="k">DESIGNER</div><div className="v">J. Langer</div></div>
            </div>
            <div style={{display:'flex',gap:10,marginTop:8}}>
              <Button variant="primary" onClick={() => onNav('product', PRODUCTS[0])} icon="arrow">Zum Produkt</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style={{ paddingTop: 0 }}>
      <div className="container">
        <DripBanner />
      </div>
    </section>

    <section style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionHead
          title="Kollektionen."
          lede="Zwei Universen. Beide handgefertigt, beide streng limitiert."
        />
        <div className="coll-strip">
          <div className="tile tall">
            <img className="bg" src="../../assets/product-solo-bear.webp" alt=""/>
            <div className="eb">01 · Tag Bear</div>
            <h3>Pop-Drip-Serie</h3>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:20}}>
            <div className="tile yellow">
              <div className="eb">02 · Cryptooze</div>
              <h3>Ein schwarzer Charakter mit eigener Lore.</h3>
            </div>
            <div className="tile" style={{minHeight:180}}>
              <img className="bg" src="../../assets/product-cryptooze.webp" alt=""/>
              <div className="eb">Aktuell</div>
              <h3>Edition 08 / 40</h3>
            </div>
          </div>
          <div className="tile tall">
            <img className="bg" src="../../assets/product-red-bear.webp" alt=""/>
            <div className="eb">03 · Custom</div>
            <h3>Dein Wort. Edition 1/1.</h3>
          </div>
        </div>
      </div>
    </section>

    <section style={{ paddingTop: 0 }}>
      <div className="container">
        <CharacterStory>
          Hinter jedem unserer Produkte stehen sorgfältig entworfene Charaktere und Geschichten. Gerade wenn jeder mit nur wenigen Klicks Content erstellen kann, macht die persönliche Note den entscheidenden Unterschied.
        </CharacterStory>
      </div>
    </section>

    <section style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="manifest">
          <div className="head">// so arbeiten wir</div>
          <div className="list">
            <div className="item"><div className="n">01 / 04</div><h4>Design.</h4><p>Jede Figur beginnt mit einer Skizze und einem Charakter. Kein Produkt ohne Geschichte.</p></div>
            <div className="item"><div className="n">02 / 04</div><h4>Druck.</h4><p>3D-gedruckt in Deutschland. PLA-Material, matte oder glänzende Oberfläche je nach Edition.</p></div>
            <div className="item"><div className="n">03 / 04</div><h4>Finish.</h4><p>Farbe, Lack und Drip von Hand appliziert. Deshalb ist kein Stück wie das andere.</p></div>
          </div>
        </div>
      </div>
    </section>
  </>
);

const ProductScreen = ({ product, onAdd, onNav }) => {
  const p = product || PRODUCTS[0];
  return (
    <section>
      <div className="container">
        <div className="pdp">
          <div className="gal">
            {p.pin && <span className={`pin tag ${p.pinDark ? 'tag-solid' : 'tag-accent'}`}>{p.pin}</span>}
            <img src={p.img} alt={p.name} />
          </div>
          <div className="buy">
            <div className="eb">{p.collection}</div>
            <h1>{p.name}</h1>
            <div className="price-row">
              <span className="price">€ {p.price.toFixed(2).replace('.', ',')}</span>
              <span className="ed">{p.edition}</span>
            </div>
            <p className="lede">In einer Zeit, in der Nachrichten oft von Konflikten und Unsicherheit geprägt sind, wirkt das eigene Zuhause schnell wie der einzige Rückzugsort. Genau hier setzen die Tag Bears an — Farbe und eine positive Ausstrahlung in den Alltag.</p>
            <div className="tags">
              <Tag>Handgefertigt</Tag>
              <Tag>Made in Germany</Tag>
              <Tag dot="#1F7A3A">Auf Lager</Tag>
            </div>
            <div className="actions">
              <Button variant="accent" size="lg" onClick={() => onAdd(p)}>In den Warenkorb</Button>
              <Button variant="secondary" size="lg" icon="heart">Merken</Button>
            </div>
            <div className="spec">
              <div className="row"><span className="k">MATERIAL</span><span className="v">PLA · hand-finished</span></div>
              <div className="row"><span className="k">HÖHE</span><span className="v">18 cm</span></div>
              <div className="row"><span className="k">DESIGNER</span><span className="v">Janis Langer</span></div>
              <div className="row"><span className="k">VERSAND</span><span className="v">3–5 Werktage</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CustomScreen = ({ onNav }) => (
  <section>
    <div className="container">
      <div className="custom-split">
        <div className="hero-img" />
        <div>
          <span className="eb" style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg-3)' }}>Custom anfragen</span>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '8px 0 16px' }}>Dein Wort. Dein Bear. Edition von einem.</h2>
          <p style={{ color: 'var(--fg-2)', lineHeight: 1.6, marginBottom: 24 }}>Schick uns ein Wort, eine Idee oder ein Bild. Wir entwerfen dir eine einmalige Figur, drucken sie in 3D und finishen sie von Hand. Lieferzeit 4–6 Wochen.</p>
          <form className="custom-form" onSubmit={(e) => { e.preventDefault(); alert('Angefragt. Wir melden uns in 24h.'); }}>
            <div className="row">
              <div className="field">
                <label>Name</label>
                <input placeholder="Dein Name" required />
              </div>
              <div className="field">
                <label>E-Mail</label>
                <input type="email" placeholder="du@email.de" required />
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label>Wort / Idee</label>
                <input placeholder="z. B. HOME, BLU, deine Initialen" />
              </div>
              <div className="field">
                <label>Edition</label>
                <select>
                  <option>Solo (1 Stück)</option>
                  <option>Mini-Drop (10 Stück)</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>Kurze Beschreibung</label>
              <textarea placeholder="Erzähl uns von deiner Idee." />
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              <Button variant="accent" size="lg">Anfrage senden</Button>
              <Button variant="ghost" onClick={(e) => { e.preventDefault(); onNav('home'); }}>Abbrechen</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { HomeScreen, ProductScreen, CustomScreen, PRODUCTS });

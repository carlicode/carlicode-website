// App: design canvas with two artboards + tweaks panel
const { DesignCanvas, DCSection, DCArtboard } = window;
const { TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakColor } = window;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#ff2d92",
  "bg": "#0a0a0a",
  "bg2": "#141414",
  "heroVariant": "default",
  "lang": "es"
}/*EDITMODE-END*/;

const PALETTES = [
  { name: "Magenta", accent: "#ff2d92", bg: "#0a0a0a", bg2: "#141414" },
  { name: "Hot Pink", accent: "#ff4fa3", bg: "#0a0a0a", bg2: "#161013" },
  { name: "Fuchsia", accent: "#e040fb", bg: "#0a0a0a", bg2: "#140a18" },
  { name: "Coral", accent: "#ff6b9d", bg: "#0d0a0c", bg2: "#181014" },
];

function App() {
  const [tweaks, setTweak] = useTweaks(DEFAULTS);
  const [lang, setLangState] = React.useState(tweaks.lang || 'es');
  const setLang = (l) => { setLangState(l); setTweak('lang', l); };

  const theme = {
    accent: tweaks.accent,
    bg: tweaks.bg,
    bg2: tweaks.bg2,
  };

  const setPalette = (p) => {
    setTweak({ accent: p.accent, bg: p.bg, bg2: p.bg2 });
  };

  return (
    <>
      <DesignCanvas title="Carli Code · Landing redesign" subtitle="Editorial Bold vs Brutalist Tech · ES/EN">
        <DCSection id="variations" title={lang === 'es' ? "Dos direcciones" : "Two directions"}>
          <DCArtboard id="editorial" label="Editorial Bold — magazine, serif, asymmetric" width={1440} height={3400}>
            <window.EditorialBold lang={lang} setLang={setLang} theme={theme} />
          </DCArtboard>
          <DCArtboard id="brutalist" label="Brutalist Tech — mono, exposed grid, technical" width={1440} height={3400}>
            <window.BrutalistTech lang={lang} setLang={setLang} theme={theme} />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection title={lang === 'es' ? "Idioma global" : "Global language"}>
          <TweakRadio
            label={lang === 'es' ? "Idioma" : "Language"}
            value={lang}
            options={[
              { value: 'es', label: 'Español' },
              { value: 'en', label: 'English' },
            ]}
            onChange={setLang}
          />
        </TweakSection>

        <TweakSection title={lang === 'es' ? "Paleta" : "Palette"}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8}}>
            {PALETTES.map(p => {
              const active = p.accent.toLowerCase() === (tweaks.accent || '').toLowerCase();
              return (
                <button
                  key={p.name}
                  onClick={() => setPalette(p)}
                  style={{
                    background: p.bg,
                    border: active ? `2px solid ${p.accent}` : '1px solid rgba(255,255,255,0.15)',
                    color: '#fff',
                    padding: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: 12,
                    fontFamily: 'JetBrains Mono, monospace',
                    borderRadius: 6,
                  }}
                >
                  <span style={{width: 16, height: 16, borderRadius: '50%', background: p.accent, flexShrink: 0}}></span>
                  {p.name}
                </button>
              );
            })}
          </div>
          <div style={{marginTop: 12}}>
            <TweakColor
              label={lang === 'es' ? "Color de acento (custom)" : "Accent color (custom)"}
              value={tweaks.accent}
              onChange={(v) => setTweak('accent', v)}
            />
          </div>
          <div style={{marginTop: 8}}>
            <TweakColor
              label={lang === 'es' ? "Fondo principal" : "Main background"}
              value={tweaks.bg}
              onChange={(v) => setTweak('bg', v)}
            />
          </div>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

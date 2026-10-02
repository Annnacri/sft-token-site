import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  Facebook,
  Linkedin,
  Link2,
  Mail,
  ExternalLink,
  Leaf,
  Menu,
  MessageCircle,
  Send,
  Share2,
  Sprout,
  Sun,
  WalletCards,
  X,
} from "lucide-react";

type Language = "en" | "pt";
type Props = { language: Language; setLanguage: (language: Language) => void };

const contract = "0x8468a0358e14b7C0AC3D953e75762B00Ed89C197";
const shareUrl = "https://sfttoken-crvg9mqr.manus.space";
const shareTitle = "SFT Token — Alentejo Retreat & Sousel Farm";
const images = {
  hero: "/manus-storage/sft_qr_alentejo_background_c932cf05.jpg",
  farm: "/manus-storage/FeMyW4cEHbA6_cb83c0c8.jpg",
  landscape: "/manus-storage/kTfqvZ59tkbV_5e956e1d.jpg",
  qr: "/manus-storage/sft_token_qrcode_alentejo_fd439683.png",
};
const heroVideo = "/manus-storage/SFT(1)_f3fa6a81.mp4";

const copy = {
  en: {
    nav: ["The vision", "Experiences", "Token", "DAO", "Impact", "Whitepaper"],
    label: "A regenerative rural retreat in Alentejo",
    heroTitle: "Own a piece of the\nquiet revolution.",
    heroText:
      "SFT connects blockchain technology with the simple things that make us human: soil under our hands, food shared slowly, and time with people who live close to the land.",
    primary: "Explore the project",
    secondary: "Read the token model",
    note: "A concept project · Not a financial offer",
    visionEyebrow: "01 / The vision",
    visionTitle: "A place to come back to yourself.",
    visionText:
      "Near Monsaraz, an authentic Alentejo retreat will bring together independent suites, local food, nature and meaningful participation. Guests do not just visit the region. They help keep it alive.",
    stat1: "09", stat1Label: "independent units planned",
    stat2: "09%", stat2Label: "marketplace platform fee",
    stat3: "ERC-20", stat3Label: "token standard on Polygon",
    experienceEyebrow: "02 / Beyond a stay",
    experienceTitle: "Plant something. Learn something. Remember it.",
    experienceText: "The SFT experience is designed around participation rather than consumption.",
    experiences: [
      ["01", "Planting days", "Grow herbs, vegetables or a tree and leave a living memory behind."],
      ["02", "Local table", "Bread from a wood oven, regional cheese, honey, wine and conversations."],
      ["03", "Alentejo in motion", "Horse rides, boat trips, birdwatching, craft workshops and Évora."],
    ],
    tokenEyebrow: "03 / The token",
    tokenTitle: "SFT is a digital access layer for a real place.",
    tokenText:
      "The token is intended to connect supporters to project updates, selected experiences and a DAO governance layer for community participation in selected project decisions. Legal rights, utility, transferability, voting powers and any economic distribution must be defined in the final legal structure before launch.",
    tokenItems: ["Polygon network", "ERC-20 implementation", "DAO governance layer under development", "Experiences and community access"],
    contractLabel: "Contract address · Polygon",
    copy: "Copy",
    copied: "Copied",
    verify: "View on Polygonscan",
    impactEyebrow: "04 / Regeneration",
    impactTitle: "Growth that leaves more than it takes.",
    impactText:
      "Solar energy, rainwater collection, local employment and inclusive work opportunities are part of the operating vision. The goal is a retreat that strengthens the surrounding community instead of extracting from it.",
    pillars: [["Energy", "Solar panels and efficient hot-water systems."], ["Water", "Rainwater capture and responsible use."], ["Community", "Local suppliers, makers, guides and inclusive employment."]],
    financeEyebrow: "05 / Financial architecture",
    financeTitle: "A business model with several ways to earn.",
    financeText: "The project is designed to combine hospitality revenue with experiences, food and a carefully governed digital layer.",
    financeRows: [["Accommodation", "Suites, retreats and long stays"], ["Experiences", "Workshops, boats, horses, wine and nature"], ["Food & local products", "Breakfasts, tastings and partner products"], ["SFT ecosystem", "Access, community programmes and future utility"]],
    roadmapEyebrow: "06 / From idea to place",
    roadmap: [["01", "Validate", "Feasibility, land, permits and operating partners"], ["02", "Build", "Renovation, solar, water systems and first experiences"], ["03", "Open", "Pilot stays, community feedback and transparent reporting"], ["04", "Grow", "Careful token utility, partnerships and new local jobs"]],
    ctaTitle: "The future does not need to be louder.\nIt can be more human.",
    ctaText: "Follow the project as the concept becomes a place.",
    shareEyebrow: "07 / Share the project",
    shareTitle: "A good idea grows when it is shared.",
    shareText: "Invite someone into the quiet revolution. Share the SFT Token project with your network.",
    shareLabel: "Share SFT Token",
    shareCopied: "Link copied",
    shareCopy: "Copy link",
    shareNative: "More options",
    daoEyebrow: "03.5 / DAO governance",
    daoTitle: "A community voice, grounded in a real place.",
    daoText: "The planned SFT DAO is designed to give the community a transparent way to shape selected project decisions — from experiences and regenerative initiatives to partnerships and community programmes.",
    daoSteps: [["01", "Propose", "A community member submits an idea with a clear objective, budget and expected impact."], ["02", "Discuss", "The proposal is shared openly so the community and project team can ask questions and improve it."], ["03", "Vote", "Eligible participants vote transparently during a defined voting window. The final rules remain subject to legal and technical validation."], ["04", "Execute", "Approved initiatives are documented, assigned to responsible people and reported back to the community."]],
    daoNote: "Planned governance layer · Selected decisions only · Subject to legal and technical validation", quote: "The most valuable asset is not a building. It is a reason to return.", quoteCredit: "— SFT project principle", scroll: "Scroll to explore", scan: "Scan to enter the SFT project", roadmapTitle: "Build slowly.\nBuild properly.", backToTop: "Back to the beginning",
    footer: "SFT Token · Alentejo Retreat & Sousel Farm",
    disclaimer: "Information on this page describes a project concept. It is not investment, legal, tax or financial advice. Token rights and economics are subject to legal, technical and commercial validation.",
  },
  pt: {
    nav: ["A visão", "Experiências", "Token", "DAO", "Impacto", "Whitepaper"],
    label: "Um refúgio rural regenerativo no Alentejo",
    heroTitle: "Faz parte da\nrevolução tranquila.",
    heroText: "O SFT liga a tecnologia blockchain às coisas simples que nos tornam humanos: terra nas mãos, comida partilhada sem pressa e tempo com quem vive perto do campo.",
    primary: "Conhecer o projeto", secondary: "Ver o modelo do token", note: "Projeto conceptual · Não é uma oferta financeira",
    visionEyebrow: "01 / A visão", visionTitle: "Um lugar para voltar a ti.", visionText: "Perto de Monsaraz, um refúgio autêntico do Alentejo vai reunir suítes independentes, produtos locais, natureza e participação com significado. Quem visita a região também ajuda a mantê-la viva.", stat1: "09", stat1Label: "unidades independentes planeadas", stat2: "09%", stat2Label: "comissão da plataforma", stat3: "ERC-20", stat3Label: "token na rede Polygon",
    experienceEyebrow: "02 / Para além da estadia", experienceTitle: "Planta algo. Aprende algo. Guarda a memória.", experienceText: "A experiência SFT é pensada para a participação, não apenas para o consumo.", experiences: [["01", "Dias de plantação", "Cultiva ervas, legumes ou uma árvore e deixa uma memória viva."], ["02", "Mesa local", "Pão de forno a lenha, queijo, mel, vinho e conversas."], ["03", "Alentejo em movimento", "Passeios a cavalo e de barco, aves, artesanato e Évora."]],
    tokenEyebrow: "03 / O token", tokenTitle: "O SFT é uma camada digital de acesso a um lugar real.", tokenText: "O token pretende ligar apoiantes a novidades do projeto, experiências selecionadas e uma camada de governação DAO para participação da comunidade em decisões selecionadas do projeto. Os direitos legais, utilidade, transmissibilidade, poderes de voto e eventual distribuição económica terão de ser definidos na estrutura jurídica final antes do lançamento.", tokenItems: ["Rede Polygon", "Implementação ERC-20", "Camada de governação DAO em desenvolvimento", "Acesso à comunidade e experiências"], contractLabel: "Endereço do contrato · Polygon", copy: "Copiar", copied: "Copiado", verify: "Ver no Polygonscan",
    daoEyebrow: "03.5 / Governação DAO", daoTitle: "Uma voz da comunidade, ligada a um lugar real.", daoText: "A DAO SFT planeada pretende dar à comunidade uma forma transparente de participar em decisões selecionadas do projeto — desde experiências e iniciativas regenerativas até parcerias e programas comunitários.", daoSteps: [["01", "Propor", "Um membro da comunidade apresenta uma ideia com objetivo, orçamento e impacto esperado."], ["02", "Debater", "A proposta é partilhada de forma aberta para que a comunidade e a equipa possam colocar questões e melhorá-la."], ["03", "Votar", "Os participantes elegíveis votam de forma transparente durante um período definido. As regras finais dependem de validação jurídica e técnica."], ["04", "Executar", "As iniciativas aprovadas são documentadas, atribuídas a responsáveis e comunicadas novamente à comunidade."]], daoNote: "Camada de governação planeada · Apenas decisões selecionadas · Sujeita a validação jurídica e técnica", quote: "O ativo mais valioso não é um edifício. É uma razão para voltar.", quoteCredit: "— Princípio do projeto SFT", scroll: "Desliza para explorar", scan: "Lê para entrar no projeto SFT", roadmapTitle: "Construir devagar.\nConstruir bem.", backToTop: "Voltar ao início",
    impactEyebrow: "04 / Regeneração", impactTitle: "Crescer deixando mais do que se retira.", impactText: "Energia solar, recolha de água da chuva, emprego local e oportunidades inclusivas fazem parte da visão operacional.", pillars: [["Energia", "Painéis solares e sistemas eficientes de água quente."], ["Água", "Captação de chuva e utilização responsável."], ["Comunidade", "Produtores, artesãos, guias e emprego inclusivo." ]], financeEyebrow: "05 / Arquitetura financeira", financeTitle: "Um modelo de negócio com várias fontes de receita.", financeText: "O projeto combina alojamento, experiências, alimentação e uma camada digital com governação cuidadosa.", financeRows: [["Alojamento", "Suítes, retiros e estadias longas"], ["Experiências", "Workshops, barcos, cavalos, vinho e natureza"], ["Alimentação e produtos", "Pequenos-almoços, provas e parceiros locais"], ["Ecossistema SFT", "Acesso, programas de comunidade e futura utilidade"]], roadmapEyebrow: "06 / Da ideia ao lugar", roadmap: [["01", "Validar", "Viabilidade, terreno, licenças e parceiros"], ["02", "Construir", "Renovação, energia, água e primeiras experiências"], ["03", "Abrir", "Estadias-piloto, feedback e relatórios transparentes"], ["04", "Crescer", "Utilidade do token, parcerias e emprego local"]], ctaTitle: "O futuro não precisa de ser mais ruidoso.\nPode ser mais humano.", ctaText: "Acompanha a transformação do conceito num lugar.", shareEyebrow: "07 / Partilha o projeto", shareTitle: "Uma boa ideia cresce quando é partilhada.", shareText: "Convida alguém para a revolução tranquila. Partilha o projeto SFT Token com a tua rede.", shareLabel: "Partilhar SFT Token", shareCopied: "Link copiado", shareCopy: "Copiar link", shareNative: "Mais opções", footer: "SFT Token · Alentejo Retreat & Sousel Farm", disclaimer: "A informação descreve um conceito de projeto. Não constitui aconselhamento financeiro, legal, fiscal ou de investimento. Os direitos e a economia do token dependem de validação jurídica, técnica e comercial."
  }
};

export default function Home({ language, setLanguage }: Props) {
  const t = copy[language];
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [daoStep, setDaoStep] = useState(0);
  const copyContract = async () => { await navigator.clipboard?.writeText(contract); setCopied(true); setTimeout(() => setCopied(false), 1800); };
  const copyShareLink = async () => { await navigator.clipboard?.writeText(shareUrl); setShareCopied(true); setTimeout(() => setShareCopied(false), 1800); };
  const nativeShare = async () => { if (navigator.share) { await navigator.share({ title: shareTitle, text: t.shareText, url: shareUrl }); } else { await copyShareLink(); } };
  const scroll = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  return <div className="site-shell">
    <header className="nav"><a className="brand" href="#top" onClick={() => scroll("top")}><span className="brand-mark"><Sprout size={18} /></span><span>SFT<span className="brand-dot">.</span></span></a><nav className={menuOpen ? "nav-links open" : "nav-links"}>{t.nav.map((item, i) => <button key={item} onClick={() => item === "Whitepaper" ? window.location.assign("/whitepaper") : scroll(["vision", "experiences", "token", "dao", "impact"][i])}>{item}</button>)}</nav><div className="nav-actions"><div className="language"><button className={language === "en" ? "active" : ""} onClick={() => { setLanguage("en"); setMenuOpen(false); }}>EN</button><span>/</span><button className={language === "pt" ? "active" : ""} onClick={() => { setLanguage("pt"); setMenuOpen(false); }}>PT</button></div><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button></div></header>
    <main id="top">
      <section className="hero section-pad"><div className="hero-image" style={{ backgroundImage: `url(${images.hero})` }} /><video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={images.hero} aria-hidden="true"><source src={heroVideo} type="video/mp4" /></video><div className="hero-overlay" /><div className="hero-content"><p className="eyebrow light"><span className="eyebrow-line" />{t.label}</p><h1>{t.heroTitle.split("\n").map((line, i) => <span key={line}>{line}{i === 0 && <br />}</span>)}</h1><p className="hero-copy">{t.heroText}</p><div className="hero-buttons"><button className="btn btn-primary" onClick={() => scroll("vision")}>{t.primary}<ArrowUpRight size={17} /></button><button className="btn btn-ghost" onClick={() => scroll("token")}>{t.secondary}<ChevronDown size={17} /></button></div><p className="hero-note">{t.note}</p></div><div className="hero-scroll">{t.scroll} <span /></div></section>
      <section id="vision" className="section-pad vision"><div className="section-grid"><div><p className="eyebrow"><span className="eyebrow-line" />{t.visionEyebrow}</p><h2>{t.visionTitle}</h2></div><div className="body-large">{t.visionText}</div></div><div className="stats"><div><strong>{t.stat1}</strong><span>{t.stat1Label}</span></div><div><strong>{t.stat2}</strong><span>{t.stat2Label}</span></div><div><strong>{t.stat3}</strong><span>{t.stat3Label}</span></div></div><div className="image-split"><img src={images.landscape} alt="Alentejo landscape" /><div className="quote-card"><Leaf size={25} /><p>“{t.quote}”</p><span>{t.quoteCredit}</span></div></div></section>
      <section id="experiences" className="section-pad clay"><div className="section-grid"><div><p className="eyebrow"><span className="eyebrow-line" />{t.experienceEyebrow}</p><h2>{t.experienceTitle}</h2></div><p className="body-large">{t.experienceText}</p></div><div className="experience-grid">{t.experiences.map(([number, title, text]) => <article className="experience-card" key={number}><span className="card-number">{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight className="card-arrow" size={20} /></article>)}</div></section>
      <section id="token" className="section-pad dark-section"><div className="token-layout"><div><p className="eyebrow light"><span className="eyebrow-line" />{t.tokenEyebrow}</p><h2>{t.tokenTitle}</h2><p className="body-large muted">{t.tokenText}</p><div className="token-list">{t.tokenItems.map(item => <div key={item}><Check size={16} />{item}</div>)}</div></div><div className="token-panel"><div className="token-orbit"><div className="token-core">SFT<span>Polygon</span></div><div className="orbit orbit-a" /><div className="orbit orbit-b" /></div><p className="contract-label">{t.contractLabel}</p><div className="contract-row"><code>{contract.slice(0, 10)}…{contract.slice(-8)}</code><button onClick={copyContract} aria-label={t.copy}>{copied ? <Check size={16} /> : <Copy size={16} />}</button></div><a className="verify-link" href={`https://polygonscan.com/token/${contract}`} target="_blank" rel="noreferrer">{t.verify}<ExternalLink size={15} /></a><div className="site-qr"><img src={images.qr} alt="QR Code to open the SFT Token website" /><span>{t.scan}</span></div></div></div></section>
      <section id="dao" className="section-pad dao-section"><div className="section-grid"><div><p className="eyebrow"><span className="eyebrow-line" />{t.daoEyebrow}</p><h2>{t.daoTitle}</h2></div><p className="body-large">{t.daoText}</p></div><div className="dao-flow"><div className="dao-step-list">{t.daoSteps.map(([number, title], index) => <button className={daoStep === index ? "dao-step active" : "dao-step"} key={number} onClick={() => setDaoStep(index)}><span>{number}</span><strong>{title}</strong><i /></button>)}</div><div className="dao-detail"><div className="dao-detail-number">{t.daoSteps[daoStep][0]}</div><div><p className="eyebrow">{t.daoSteps[daoStep][1]}</p><h3>{t.daoSteps[daoStep][1]}</h3><p>{t.daoSteps[daoStep][2]}</p></div><ArrowUpRight size={22} /></div></div><p className="dao-note"><span />{t.daoNote}</p></section>
      <section id="impact" className="section-pad impact"><div className="section-grid"><div><p className="eyebrow"><span className="eyebrow-line" />{t.impactEyebrow}</p><h2>{t.impactTitle}</h2></div><p className="body-large">{t.impactText}</p></div><div className="pillar-grid">{t.pillars.map(([title, text], i) => <div className="pillar" key={title}><div className="pillar-icon">{i === 0 ? <Sun /> : i === 1 ? <WalletCards /> : <Leaf />}</div><h3>{title}</h3><p>{text}</p></div>)}</div><div className="finance-block"><div><p className="eyebrow">{t.financeEyebrow}</p><h2>{t.financeTitle}</h2><p>{t.financeText}</p></div><div className="finance-list">{t.financeRows.map(([title, text]) => <div key={title}><span>{title}</span><strong>{text}</strong></div>)}</div></div></section>
      <section className="section-pad roadmap"><div className="section-grid"><div><p className="eyebrow"><span className="eyebrow-line" />{t.roadmapEyebrow}</p><h2>{t.roadmapTitle.split("\n").map((line, i) => <span key={line}>{line}{i === 0 && <br />}</span>)}</h2></div><div className="roadmap-list">{t.roadmap.map(([n, title, text]) => <div key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>
      <section className="cta-section section-pad"><div className="cta-inner"><p className="eyebrow light"><span className="eyebrow-line" />SFT / ALENTEJO</p><h2>{t.ctaTitle.split("\n").map((line, i) => <span key={line}>{line}{i === 0 && <br />}</span>)}</h2><p>{t.ctaText}</p><button className="btn btn-primary" onClick={() => scroll("top")}>{t.backToTop} <ArrowUpRight size={17} /></button></div></section>
      <section id="share" className="section-pad share-section"><div className="share-intro"><p className="eyebrow"><span className="eyebrow-line" />{t.shareEyebrow}</p><h2>{t.shareTitle}</h2><p>{t.shareText}</p></div><div className="share-actions"><a className="share-button whatsapp" href={`https://wa.me/?text=${encodeURIComponent(`${shareTitle} — ${shareUrl}`)}`} target="_blank" rel="noreferrer"><MessageCircle size={18} />WhatsApp</a><a className="share-button linkedin" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer"><Linkedin size={18} />LinkedIn</a><a className="share-button telegram" href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`} target="_blank" rel="noreferrer"><Send size={18} />Telegram</a><a className="share-button facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer"><Facebook size={18} />Facebook</a><a className="share-button x-social" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer"><span className="x-mark">𝕏</span>X</a><a className="share-button email" href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`${t.shareText}\n\n${shareUrl}`)}`}><Mail size={18} />Email</a><button className="share-button copy-share" onClick={copyShareLink}>{shareCopied ? <Check size={18} /> : <Link2 size={18} />}{shareCopied ? t.shareCopied : t.shareCopy}</button><button className="share-button native-share" onClick={nativeShare}><Share2 size={18} />{t.shareNative}</button></div></section>
    </main><footer className="footer"><div><a className="brand" href="#top"><span className="brand-mark"><Sprout size={18} /></span><span>SFT<span className="brand-dot">.</span></span></a><p>{t.footer}</p><p className="creator-credit">Created by AhnaX</p><a className="workspace-link" href="/files">Project workspace</a></div><p className="disclaimer">{t.disclaimer}</p></footer>
  </div>;
}

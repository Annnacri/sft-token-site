import { ArrowLeft, ArrowUpRight, FileText, Sprout } from "lucide-react";

const sections = [
  {
    title: "Executive summary",
    body: "Sousel Farm Retreat is a concept for a small-scale regenerative rural retreat to be developed from the ground up in Alentejo, Portugal. The vision combines nine independent accommodation units, authentic experiences, a multi-purpose pavilion for up to 50 people, local food, sustainability, blockchain technology and community participation.",
  },
  {
    title: "Nine independent units",
    body: "The project plans nine independent accommodation units. This small-scale structure is intended to preserve a personal rural hospitality model rather than pursue a larger hotel operation. The final legal classification, land, design and licensing remain subject to professional validation in Portugal.",
  },
  {
    title: "Multi-purpose pavilion",
    body: "The retreat also plans a multi-purpose pavilion with a maximum capacity of 50 people and an integrated kitchen. It could host lunches for guests, food experiences, workshops, retreats, cultural gatherings, celebrations and small private or business events. When not used by the retreat, it could generate additional revenue through authorised rentals, subject to licensing, safety, insurance and operational requirements.",
  },
  {
    title: "Human experiences",
    body: "The experience is designed around participation rather than simple consumption: planting days, local food, bread workshops, nature observation, walking and cycling routes, horse riding, activities around Alqueva, crafts, producers, Monsaraz and Évora. Final activities will depend on safety, licensing, partners and real demand.",
  },
  {
    title: "SFT token and Polygon",
    body: "SFT is an ERC-20 token issued on Polygon. Contract reference: 0x8468a0358e14b7C0AC3D953e75762B00Ed89C197. The token does not, by itself, guarantee ownership, profits, returns, liquidity, reservations or project funding. Its final utility, rights and economics require technical, commercial, legal and regulatory validation.",
  },
  {
    title: "DAO governance under development",
    body: "The project is studying a DAO governance layer for selected project decisions. The intended journey is: Propose, Discuss, Vote and Execute. Eligibility, voting weight, quorum, proposal rules and the relationship between the DAO and the operating entity are not yet defined. The DAO should not be assumed to control the land, company, profits or operations.",
  },
  {
    title: "Funding reality",
    body: "The project is currently at concept and pre-funding stage. No construction capital or external investment has yet been secured. Traditional financing can be difficult for early-stage rural projects without substantial collateral, operating history or upfront capital. SFT is being explored as a pathway for visibility, community formation and connection with future strategic partners — not as a guarantee of funding.",
  },
  {
    title: "Roadmap",
    body: "Phase 0: validate land, licences, costs, legal structure and partners. Phase 1: structure the retreat, nine units and pavilion. Phase 2: build and run pilot experiences. Phase 3: operate, measure and improve. Phase 4: study a national rural marketplace. Phase 5: consider international expansion only after sufficient national maturity.",
  },
  {
    title: "National marketplace — still under study",
    body: "The long-term vision may include a marketplace connecting rural hosts, accommodation, meals, local products and experiences across Portugal’s interior. A possible principle is that each host offers at least one adventure, nature, cultural or gastronomic experience. Rules, benefits, commissions, insurance, quality criteria, technology and the relationship with SFT or the DAO are still being studied and are not yet defined.",
  },
  {
    title: "Internationalisation",
    body: "The intended sequence is: start with one place, connect nationally, then consider international growth. Internationalisation would only be explored after the first operation and the Portuguese model have been validated with an experienced team and aligned partners.",
  },
];

export default function Whitepaper() {
  return (
    <main className="whitepaper-page">
      <div className="whitepaper-shell">
        <div className="whitepaper-topbar"><a className="files-back" href="/"><ArrowLeft size={15} /> Back to SFT Token</a><span className="whitepaper-version"><FileText size={14} /> Concept Whitepaper · v2.0</span></div>
        <header className="whitepaper-hero"><div className="brand-mark"><Sprout size={18} /></div><p className="eyebrow"><span className="eyebrow-line" />SFT / Alentejo</p><h1>One place first.<br />A wider vision next.</h1><p>The updated project vision for Sousel Farm Token: a small rural retreat, a community layer and a possible future network of meaningful experiences.</p></header>
        <div className="whitepaper-grid"><aside><p className="eyebrow"><span className="eyebrow-line" />Contents</p><div>{sections.map((section, index) => <a href={`#whitepaper-${index}`} key={section.title}>{String(index + 1).padStart(2, "0")} {section.title}</a>)}</div></aside><article>{sections.map((section, index) => <section className="whitepaper-section" id={`whitepaper-${index}`} key={section.title}><span className="whitepaper-number">{String(index + 1).padStart(2, "0")}</span><div><h2>{section.title}</h2><p>{section.body}</p></div></section>)}<div className="whitepaper-cta"><p className="eyebrow light"><span className="eyebrow-line" />Status</p><h2>Concept, pre-funding and validation.</h2><p>This document is informative. It is not an investment offer, financial advice, promise of return or guarantee of funding. Token rights, utility, governance and economics remain subject to future validation.</p><a className="btn btn-primary" href="/">Return to the project <ArrowUpRight size={17} /></a></div></article></div>
        <footer className="whitepaper-footer">SFT Token · Sousel Farm Retreat · Alentejo, Portugal</footer>
      </div>
    </main>
  );
}

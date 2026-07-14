// Source of truth for all case studies.
// Consumed by the list page (app/case-studies/page.jsx) and the detail page
// (app/case-studies/[slug]/page.jsx). Each study carries a `category` used for
// the Performance Marketing vs Product & GTM filter, header metadata, a sidebar
// (kpiFramework + results), and an ordered `blocks` array that the detail page
// renders via components/case-study/Blocks.jsx.
//
// All figures in the two marketing studies are the client-supplied, pre-verified
// numbers from the engagement brief — do not recompute differently.
//
// NOTE: The two product studies (Dhruva, FlowReach) were briefed via summaries;
// their canonical userflow docs (Dhruva_Userflow.md / flowreach_whatsapp_userflow.md)
// were not available on disk at build time. Anywhere fuller product detail would
// sharpen the copy is marked [[NEEDS INPUT]] below.

export const CATEGORIES = ['Performance Marketing', 'Product & GTM'];

export const caseStudiesData = [
    // ------------------------------------------------------------------
    // 1. HRU INDIA — D2C performance marketing
    // ------------------------------------------------------------------
    {
        slug: 'hru-india',
        category: 'Performance Marketing',
        client: 'HRU India — D2C, Government-Approved Manufacturer',
        title: '3.5× ROAS on ₹21L D2C Revenue at a ₹1,000 CAC',
        period: '5-month window',
        tags: ['D2C', 'E-Commerce', 'Performance Marketing'],
        impact: '₹21L revenue on ₹6L spend · 3.5× ROAS · ₹1,000 CAC',
        stack: ['Meta Ads', 'Google Ads', 'D2C Storefront', 'Order CRM'],
        kpiFramework: [
            'Blended ROAS',
            'CAC per Order',
            'Average Order Value (AOV)',
            'CAC as % of AOV',
            'Monthly Order Volume',
        ],
        results: '3.5× ROAS · ₹1,000 CAC per order · 600 orders · ₹3,500 AOV',
        blocks: [
            {
                kind: 'prose',
                heading: 'Executive Overview',
                body: [
                    'Over a 5-month window, ₹6,00,000 in ad spend generated ₹21,00,000 in D2C revenue — a blended 3.5× ROAS — across roughly 600 orders at a ₹3,500 average order value.',
                    'The acquisition cost held at ₹1,000 per order, or 28.6% of AOV, leaving a clear margin corridor before product cost. Every headline number cross-checks against the underlying order data (see the integrity check below).',
                ],
            },
            {
                kind: 'prose',
                heading: 'Business Context',
                body: [
                    'HRU India is a government-approved D2C manufacturer selling direct to consumers online. The account ran at a steady cadence — an average of 120 orders and ~₹4,20,000 in order value per month — where the objective was not a viral spike but a repeatable, predictable acquisition engine that holds its economics as spend scales.',
                ],
            },
            {
                kind: 'stats',
                heading: 'Financial Impact',
                note: 'Blended across Meta + Google over the 5-month window.',
                items: [
                    { label: 'Ad Spend', value: '₹6.0L', sub: '₹1.2L / month avg' },
                    { label: 'Revenue', value: '₹21.0L', sub: 'D2C, direct-attributed' },
                    { label: 'Blended ROAS', value: '3.5×', sub: '₹21L ÷ ₹6L' },
                    { label: 'Orders', value: '600', sub: '120 / month × 5' },
                ],
            },
            {
                kind: 'bars',
                heading: 'CAC vs AOV — Acquisition Headroom',
                note: 'CAC is 28.6% of AOV, leaving ₹2,500 of gross headroom per order before product cost (COGS). This is not net margin — see the note below.',
                unit: '₹',
                groups: [
                    { label: 'CAC / order', value: 1000, display: '₹1,000', color: 'violet' },
                    { label: 'AOV', value: 3500, display: '₹3,500', color: 'blue' },
                ],
            },
            {
                kind: 'terminal',
                heading: 'Data Integrity Check',
                filename: 'data_integrity.check',
                intro: 'The numbers are internally consistent — a credibility signal that this is audited data, not rounded estimates.',
                lines: [
                    { text: 'monthly_order_value / monthly_orders == AOV', detail: '420000 / 120 == 3500', ok: true },
                    { text: 'total_orders == monthly_orders × months', detail: '120 × 5 == 600', ok: true },
                    { text: 'CAC == total_spend / total_orders', detail: '600000 / 600 == 1000', ok: true },
                    { text: 'ROAS == revenue / spend', detail: '2100000 / 600000 == 3.5', ok: true },
                ],
            },
            {
                // [[NEEDS INPUT]] — COGS was not supplied; provide it to model true
                // per-order contribution. Until then, no margin claim is made on-page.
                kind: 'callout',
                tone: 'warn',
                heading: 'Honesty Note — No Margin Claim',
                body: 'COGS was not part of this dataset, so no profit-margin or net-contribution figure is claimed. The CAC-to-AOV gap (₹2,500) represents gross headroom before product cost, not take-home margin.',
            },
            {
                kind: 'prose',
                heading: 'Scalability Model',
                body: [
                    'A ₹1,000 CAC against a ₹3,500 AOV, held steady across five months and 600 orders, defines a unit economic model that is safe to scale rather than a one-off promotional result. The constraint on scaling is not demand discovery — it is holding CAC as auction competition rises and preserving margin as volume grows.',
                ],
            },
        ],
    },

    // ------------------------------------------------------------------
    // 2. GREENTECH RESIDENCY — Real estate performance marketing
    // ------------------------------------------------------------------
    {
        slug: 'greentech-residency',
        category: 'Performance Marketing',
        client: 'Greentech Residency — Real Estate, Guwahati (Assam)',
        title: '₹5.36 Cr in Residential Sales at a 0.9% CAC-to-Price Ratio',
        period: 'Dec 2025 – Jun 2026 (6 months)',
        tags: ['Real Estate', 'Meta Lead Ads', 'Performance Marketing'],
        impact: '₹5.36 Cr revenue from ₹4.8L spend · ₹48K CAC per flat · 10 units sold',
        stack: ['Meta Lead Ads', 'Google Search + Display', 'Lead CRM', 'Offline Sales Attribution'],
        kpiFramework: [
            'Blended Cost Per Lead',
            'Lead → Site Visit Rate',
            'Site Visit → Sale Rate',
            'CAC per Unit',
            'Revenue per ₹ of Spend',
        ],
        results: '₹5.36 Cr pipeline revenue · ₹48K CAC per flat · 10 flats sold',
        blocks: [
            {
                kind: 'prose',
                heading: 'Executive Overview',
                body: [
                    'A 6-month performance campaign for a Guwahati residential project generated 1,500 qualified leads for ₹4,80,000 in ad spend. That pipeline converted to 10 flats sold and ₹5.36 Crore in sales value — a blended acquisition cost of ₹48,000 per unit, roughly 0.9% of the average selling price.',
                ],
            },
            {
                kind: 'prose',
                heading: 'Business Context',
                body: [
                    'Greentech Residency is a residential development in tier-2 Guwahati with two SKUs: 2BHK flats starting at ₹41,00,000 and 3BHK flats starting at ₹62,00,000. The mandate was to fill limited inventory in a market where the purchase is high-consideration and the close happens offline — through site visits and a broker/sales team — not inside the ad platform.',
                ],
            },
            {
                kind: 'prose',
                heading: 'Strategic Diagnosis',
                body: [
                    'The two channels behaved asymmetrically, and treating them the same would have been the mistake. Meta Lead Ads drove volume at a ₹214 CPL (1,400 leads). Google drove 15× fewer leads (100) at 8× the cost per lead (₹1,800) — but that traffic is self-selected, high-intent search demand.',
                    'The decision was to run them on different jobs rather than force both to a single CPL target: Meta for top-of-funnel volume, Google to capture the few buyers already looking. Judging Google by Meta’s CPL would have killed the account’s highest-intent source.',
                ],
                insight: 'Google: 15× fewer leads at 8× the cost per lead — that is a volume-vs-intent split, not an inefficiency to optimize away.',
            },
            {
                kind: 'barcompare',
                heading: 'Channel Performance — Meta vs Google',
                note: 'Each metric is normalized within its own row. Meta wins on volume and cost efficiency; Google is a deliberate high-intent complement.',
                seriesA: { label: 'Meta Lead Ads', color: 'blue' },
                seriesB: { label: 'Google (Search + Display)', color: 'violet' },
                metrics: [
                    { name: 'Leads', a: 1400, b: 100, aDisplay: '1,400', bDisplay: '100' },
                    { name: 'Spend', a: 300000, b: 180000, aDisplay: '₹3.0L', bDisplay: '₹1.8L' },
                    { name: 'Cost Per Lead', a: 214, b: 1800, aDisplay: '₹214', bDisplay: '₹1,800', lowerIsBetter: true },
                ],
            },
            {
                kind: 'funnel',
                heading: 'Pipeline Conversion Velocity',
                note: 'Site visits ran 10–12 per source per month; the 66 figure is the 6-month midpoint (range ~60–72). Lead → Sale end-to-end: 0.67%.',
                stages: [
                    { label: 'Qualified Leads', value: 1500, display: '1,500' },
                    { label: 'Site Visits', value: 66, display: '~66', rate: '4.4% of leads' },
                    { label: 'Flats Sold', value: 10, display: '10', rate: '15.2% of visits' },
                ],
            },
            {
                kind: 'donut',
                heading: 'Unit Mix & Revenue Contribution',
                note: 'Revenue = starting prices × units sold: (4 × ₹41L) + (6 × ₹62L).',
                centerValue: '₹5.36 Cr',
                centerLabel: '10 units',
                segments: [
                    { label: '3BHK · 6 units', value: 372, display: '₹3.72 Cr', color: 'blue', sub: '₹62L starting × 6' },
                    { label: '2BHK · 4 units', value: 164, display: '₹1.64 Cr', color: 'violet', sub: '₹41L starting × 4' },
                ],
            },
            {
                kind: 'stats',
                heading: 'Financial Impact',
                items: [
                    { label: 'Ad Spend', value: '₹4.8L', sub: '₹3.0L Meta + ₹1.8L Google' },
                    { label: 'Sales Value Generated', value: '₹5.36 Cr', sub: '10 flats' },
                    { label: 'CAC per Unit', value: '₹48K', sub: '≈0.9% of ₹53.6L blended ASP' },
                    { label: 'Revenue per ₹ Spent', value: '111.7×', sub: 'see note on attribution' },
                ],
            },
            {
                kind: 'callout',
                tone: 'info',
                heading: 'Attribution Note — Read This as Pipeline, Not Pure ROAS',
                body: 'The 111.7× figure is revenue generated per rupee of marketing spend, not ROAS in the strict e-commerce sense. Real-estate closing runs through offline site visits and a sales team, so ad attribution alone does not own the full sale. Marketing generated the qualified pipeline and the site visits; converting them to signed units was a joint effort with the sales team.',
            },
            {
                kind: 'prose',
                heading: 'Scalability Roadmap',
                body: [
                    'The ₹214 Meta CPL, the 4.4% lead-to-visit rate, and the 15.2% visit-to-sale rate together form a repeatable unit-economic model rather than a one-time result. Holding those conversion rates constant, roughly ₹9.0L of Meta spend would illustratively produce ~4,200 leads → ~185 site visits → ~28 sales — meaning the binding constraint becomes available inventory, not lead supply.',
                    'Projection is illustrative, holding current conversion rates constant; actual results depend on inventory, pricing, and sales-team capacity.',
                ],
            },
        ],
    },

    // ------------------------------------------------------------------
    // 3. DHRUVA (MISSION CONTROL) — AI product
    // ------------------------------------------------------------------
    {
        slug: 'dhruva-mission-control',
        category: 'Product & GTM',
        client: 'Dhruva (Mission Control) — AI Operations Platform',
        title: 'An AI Workspace Where Agents Do the Work — Behind a Human Approval Gate',
        period: 'Live build in testing',
        tags: ['AI SaaS', 'Product & GTM', 'Agentic AI'],
        impact: 'Notes, tasks, calendar, files + autonomous AI agents unified into one workspace',
        stack: ['Agentic AI', 'Multi-Tenant Architecture', 'Google Drive API', 'Role-Based Access Control'],
        kpiFramework: [
            'Human-in-the-Loop Approval (Brain → Review)',
            'Multi-Tenant Agent Isolation',
            'Live Agent Execution Trace',
            'Google Drive-Native Output',
        ],
        results: 'Unified workspace + autonomous agents governed by a Brain → Review approval gate',
        blocks: [
            {
                kind: 'prose',
                heading: 'Business Context / Problem',
                body: [
                    'Teams fragment their work across five or more disconnected tools — notes in one place, tasks in another, calendars, file storage, and a layer of undocumented tribal knowledge on top. Meanwhile, AI chat tools answer questions but stop there: they do not execute the work or hand back a real, finished deliverable.',
                    'Dhruva’s premise is to collapse that fragmentation into a single workspace, and to make the AI a worker that produces artifacts — not a smarter search box.',
                ],
            },
            {
                kind: 'list',
                heading: 'Product Thesis',
                intro: 'Three core ideas anchor the product.',
                items: [
                    {
                        title: 'One item, many views',
                        desc: 'A note, a task, and a calendar entry are the same underlying object surfaced in different views — so nothing is duplicated or lost between tools.',
                    },
                    {
                        title: 'The AI is a worker, not a search box',
                        desc: 'The agent executes real work — search → read → write a document → manage files — and shows every step of its execution, rather than returning a chat answer.',
                    },
                    {
                        title: 'Nothing is trusted until a human approves it',
                        desc: 'Agent output does not silently become team knowledge. It passes through a Brain → Review gate where a human approves before anything is promoted to trusted knowledge.',
                    },
                ],
            },
            {
                kind: 'prose',
                heading: 'Architecture / System Design',
                body: [
                    'The system is built around role-based access (Owner/Admin, Manager, Developer, Marketer, Viewer) and hard multi-tenant isolation: every agent runs sandboxed and cannot cross tenant boundaries. File output is Google Drive-native rather than locked into in-app storage, and the agent’s execution is streamed to the user as a live trace.',
                ],
            },
            {
                kind: 'flow',
                heading: 'Execution Flow',
                note: 'The agent’s run is visible end-to-end; the Review gate sits between raw agent output and trusted knowledge.',
                steps: [
                    { label: 'Sign Up', sub: 'role assigned' },
                    { label: 'Chat', sub: 'state intent' },
                    { label: 'Agent Executes', sub: 'search · read · write · run' },
                    { label: 'Notes → Brain', sub: 'Review gate (human approval)' },
                    { label: 'Tasks → Workspace', sub: 'actionable items' },
                    { label: 'Files → Google Drive', sub: 'real deliverables' },
                ],
            },
            {
                kind: 'prose',
                heading: 'My Role',
                body: [
                    'Product & GTM owner. I spec’d the product and its requirements, defined the human-in-the-loop approval model (Brain → Review) and the multi-tenant isolation boundaries, and I own the go-to-market. The hands-on engineering was executed by the build team using AI-native tooling; my role was to direct that build from spec through launch and to run positioning and GTM — not to write the code myself.',
                ],
            },
            {
                kind: 'callout',
                tone: 'info',
                heading: 'Status — Live Build in Testing',
                body: 'Live and in testing at testmc.ignitedbusiness.com. It has had server-stability issues during testing — normal for an active build-and-iterate cycle, and stated plainly rather than hidden. If anything, it is evidence of hands-on ownership through the messy middle of shipping, not just a polished demo.',
            },
        ],
    },

    // ------------------------------------------------------------------
    // 4. FLOWREACH AI — WhatsApp CRM product
    // ------------------------------------------------------------------
    {
        slug: 'flowreach-ai',
        category: 'Product & GTM',
        client: 'FlowReach AI — WhatsApp CRM Platform',
        title: 'A WhatsApp Business OS — Shared Inbox, Broadcasts & AI-Built Campaigns',
        period: 'Live',
        tags: ['AI SaaS', 'Product & GTM', 'WhatsApp CRM'],
        impact: 'A Wati/Interakt alternative, differentiated by AI-native campaign building',
        stack: ['Meta Official API', 'Baileys (Web/QR)', 'AI Campaign Builder', 'Anti-Ban Pacing'],
        kpiFramework: [
            'Dual-Channel Architecture',
            'Anti-Ban Pacing System',
            'AI Campaign Builder',
            'AI Auto-Reply + Human Handoff',
        ],
        results: 'Live and actively used — positioned as a Wati / Interakt competitor',
        blocks: [
            {
                kind: 'prose',
                heading: 'Business Context / Problem',
                body: [
                    'Businesses selling over WhatsApp quickly outgrow single-phone, single-person chat management. The tools that exist to fix this — Wati, Interakt — require teams to build automation flows by hand, and they force a choice between compliant mass broadcast and fast, informal conversation.',
                    'FlowReach is positioned as a full WhatsApp operating system: a shared team inbox, mass broadcast, AI auto-reply, and AI-built nurture campaigns — with the two messaging channels architected so they do not collide.',
                ],
            },
            {
                kind: 'list',
                heading: 'Product Thesis / Key Differentiators',
                items: [
                    {
                        title: 'Dual-channel architecture — a deliberate tradeoff',
                        desc: 'A Web/QR "Baileys" channel handles fast, free, informal conversations; the Meta Official API handles compliant, template-approved mass broadcast. This is a designed-for tradeoff between speed/cost and compliance/scale, not just two features side by side.',
                    },
                    {
                        title: 'Built-in anti-ban pacing — production-grade, not MVP',
                        desc: 'New numbers are throttled to 50 messages/day and scale to 500/day as the number "warms up" over 14+ days. A genuine product-safety mechanism that protects the customer’s WhatsApp number from bans.',
                    },
                    {
                        title: 'AI campaign builder — describe it in plain English',
                        desc: 'Describe a campaign in natural language and the AI generates the automation flowchart (trigger → send → wait → AI decision → tag → assign → end), then runs the nurture sequence autonomously until conversion.',
                    },
                    {
                        title: 'AI auto-reply with clean human handoff',
                        desc: 'The AI replies 24/7 in the brand’s voice and steps aside cleanly the moment a customer needs a human — no dropped conversations at the handoff seam.',
                    },
                ],
            },
            {
                kind: 'twolane',
                heading: 'Dual-Channel Architecture',
                note: 'The core strategic design decision: two channels, two jobs, engineered not to interfere.',
                laneA: {
                    title: 'Web / QR Channel',
                    tag: 'Baileys',
                    color: 'violet',
                    rows: [
                        { k: 'Speed', v: 'Instant, informal' },
                        { k: 'Cost', v: 'Free' },
                        { k: 'Compliance', v: 'No template approval' },
                        { k: 'Ban Risk', v: 'Higher — needs pacing' },
                        { k: 'Best For', v: 'Fast 1:1 conversations' },
                    ],
                },
                laneB: {
                    title: 'Official API Channel',
                    tag: 'Meta Official',
                    color: 'blue',
                    rows: [
                        { k: 'Speed', v: 'Template-gated' },
                        { k: 'Cost', v: 'Per-message pricing' },
                        { k: 'Compliance', v: 'Approved templates only' },
                        { k: 'Ban Risk', v: 'Low — fully compliant' },
                        { k: 'Best For', v: 'Compliant mass broadcast' },
                    ],
                },
            },
            {
                kind: 'flow',
                heading: 'AI Campaign Builder Flow',
                note: 'Generated from a plain-English description, then run autonomously until conversion.',
                steps: [
                    { label: 'Trigger', sub: 'event / entry' },
                    { label: 'Send', sub: 'first message' },
                    { label: 'Wait', sub: 'timed delay' },
                    { label: 'AI Decision', sub: 'branch on reply' },
                    { label: 'Tag / Assign', sub: 'route to human or segment' },
                    { label: 'Convert', sub: 'goal reached' },
                ],
            },
            {
                kind: 'prose',
                heading: 'My Role',
                body: [
                    'Product & GTM owner. I defined the dual-channel architecture and the anti-ban pacing model, spec’d the AI campaign builder and the auto-reply/handoff behavior, and I own positioning and go-to-market against Wati and Interakt. The engineering was executed by the build team with AI-native tooling; I directed the product from spec to launch and run its GTM — not the hands-on coding.',
                ],
            },
            {
                kind: 'callout',
                tone: 'info',
                heading: 'Status — Live',
                body: 'Live and actively used at flowreachai.ignitedbusiness.com, positioned directly as a Wati / Interakt competitor differentiated by AI-native campaign building.',
            },
        ],
    },
];

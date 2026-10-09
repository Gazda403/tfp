import { PlaybookBranch } from '../types/playbook';

export const PLAYBOOK_BRANCHES: PlaybookBranch[] = [
  {
    id: 'digital-products',
    name: 'Digital Products & Lead Magnets',
    shortName: 'Digital Products',
    badge: 'High Margin (90%+)',
    iconName: 'FileSpreadsheet',
    themeColor: 'lime',
    earningPotential: '$10,000 – $35,000/mo',
    timeToFirstDollar: '7 – 14 Days',
    difficulty: 'Low Capital / High Leverage',
    capitalNeeded: '$0 – $150',
    successRate: '82% with disciplined distribution',
    subheader: 'Build once, sell infinitely with 90%+ gross margins. Turn problem-solving mini-assets into 24/7 automated cashflow.',
    monthlyRunRateBenchmark: '$28,450/mo',
    breakdown: {
      founderExperience: {
        headline: 'From $0 to $34,200/mo selling Notion systems & tactical PDF playbooks',
        story:
          'In 2022, I stopped trading time for hourly freelance rates and packaged my client auditing checklists into an 18-page Notion operating manual priced at $47. Instead of building for months in a silo, I gave away a condensed 3-page "Cheat Sheet" on X and LinkedIn. Within 48 hours, 1,420 people opted in. We triggered a 4-day automated email sequences offering the full system with a 48-hour bonus. Day 1 netted $3,100; by month three, the evergreen funnel was producing $1,100 every single morning before I got out of bed.',
        metrics: [
          { label: 'All-Time Asset Revenue', value: '$418,290', trend: '+24.8% YoY' },
          { label: 'Average Gross Margin', value: '94.2%', trend: 'Zero inventory' },
          { label: 'Email List Conversion', value: '8.4%', trend: 'Top 1% industry' },
          { label: 'Refund Rate', value: '0.6%', trend: 'Under 1% threshold' },
        ],
        verifiedProofNote: 'All metrics verified via Stripe Connect & Gumroad analytics dashboard.',
      },
      caseStudies: [
        {
          title: 'The Solo Prompt Engineering Toolkit',
          student: 'Marcus Sterling (Age 24)',
          avatarSeed: 'Marcus',
          timeline: '28 Days from scratch',
          revenue: '$19,840 in first month',
          margin: '96% Net',
          funnel: 'X Thread → Free 10-Prompt Starter Pack → $37 Complete Prompt Vault → $197 Private Video Walkthrough Bump',
          keyTakeaway: 'Price low on frontend to destroy purchase friction, make 60% of profits on the 1-click upsell at checkout.',
          tag: 'Verified Case Study',
        },
        {
          title: 'Niche Real Estate Cold Call Audio Guide',
          student: 'Elena Rostov',
          avatarSeed: 'Elena',
          timeline: '45 Days',
          revenue: '$32,400 Total',
          margin: '91% Net',
          funnel: 'Shortform Reels demonstrating bad vs good scripts → Gumroad checkout with order bump audio pack ($67).',
          keyTakeaway: 'Target high-earning professionals where saving 2 hours easily justifies a $50-$100 impulsive purchase.',
          tag: 'High Ticket Upsell',
        },
      ],
      mythsToAvoid: [
        {
          myth: 'You need 100,000 followers to make meaningful money with digital products.',
          reality: 'A hyper-targeted list of 500 desperate buyers in a high-income niche will easily outperform 100k random TikTok followers who want free entertainment.',
          lossPrevention: 'Avoid wasting 6 months on generic lifestyle content. Focus on solving one painful, expensive problem for a specific buyer.',
        },
        {
          myth: 'You have to write a 300-page comprehensive ebook or 10-hour course.',
          reality: 'Nobody wants more homework. People pay top dollar for speed, curation, and implementation-ready cheat sheets they can execute in 15 minutes.',
          lossPrevention: 'Keep products under 25 pages or under 45 minutes of video. Brevity commands a premium when it produces instant ROI.',
        },
        {
          myth: 'You can just put it on Gumroad and people will magically stumble upon it.',
          reality: 'Platforms do not provide organic discovery. You need an automated distribution engine: Lead magnet → Welcome sequence → Timed scarcity offer.',
          lossPrevention: 'Never build a product before you validate the free lead magnet with at least 100 organic email opt-ins.',
        },
      ],
    },
    lessons: [
      {
        id: 'dp-lesson-1',
        number: 1,
        title: 'Niche Reconnaissance & Validating Bleeding-Neck Problems',
        duration: '35 min read & execution',
        estimatedYield: 'Saves 3 months of wasted product development',
        summary: 'How to find buyers who are already opening their wallets and reverse-engineer existing multi-million dollar digital products.',
        tasks: [
          { id: 'dp-t1', text: 'Scan Reddit & Twitter communities for complaints containing "I would pay anything to fix this" or "why is there no template for..."' },
          { id: 'dp-t2', text: 'Verify 3 competitors on Gumroad/Stan Store charging between $27 and $97 with at least 50 verified reviews' },
          { id: 'dp-t3', text: 'Define your "Irresistible One-Sentence Outcome" (e.g. "Get 5 qualified B2B client calls in 7 days without cold calling")' },
        ],
        frameworks: [
          { title: 'The Pain-to-Price Formula', desc: 'If the problem costs them $1,000 in lost time or missed revenue, a $49 solution feels like free money.' },
          { title: 'The 48-Hour Smoke Test', desc: 'Create the checkout page with a "Pre-Order" discount before writing a single word of content.' },
        ],
        goldenRule: 'Sell the destination (the solved problem), not the airplane flight (the hours of material).',
      },
      {
        id: 'dp-lesson-2',
        number: 2,
        title: 'Packaging High-Perceived-Value Assets (Notion, Figma, PDF Vaults)',
        duration: '45 min execution',
        estimatedYield: 'Increases conversion rate from 1.2% to 4.8%',
        summary: 'Transform simple text checklists into luxury, high-status digital toolkits with premium typography, mockup covers, and plug-and-play architecture.',
        tasks: [
          { id: 'dp-t4', text: 'Structure your product into 3 tiers: Essential Asset ($27), Full Tactical OS ($67), Implementation Masterclass + Community ($197)' },
          { id: 'dp-t5', text: 'Generate 3D realistic box/iPad mockups using free mockup generators (smartmockups or shots.so)' },
          { id: 'dp-t6', text: 'Add 2 high-leverage order bumps at checkout (e.g. "Audio Walkthrough" for +$17, "Copy-Paste Swipe File" for +$27)' },
        ],
        frameworks: [
          { title: 'The Order Bump Multiplier', desc: '40% to 55% of buyers will tick a $17-$27 checkbox if it reduces implementation friction by 50%.' },
          { title: 'The Value Stack Visualizer', desc: 'Display total claimed value ($497) crossed out next to your launch price ($47) with an explicit 30-day refund guarantee.' },
        ],
        goldenRule: 'Make the bonus package alone feel like it is worth 5x the asking price of the main product.',
      },
      {
        id: 'dp-lesson-3',
        number: 3,
        title: 'The Organic Lead Magnet Funnel & Automated Email Sequences',
        duration: '50 min setup',
        estimatedYield: 'Generates passive daily sales without ad spend',
        summary: 'Build the perpetual audience-to-cash machine. Capture email addresses with zero ad spend and close them with a 5-day psychology-driven sequence.',
        tasks: [
          { id: 'dp-t7', text: 'Set up Beehiiv or ConvertKit with a dedicated 1-page lead capture landing page' },
          { id: 'dp-t8', text: 'Draft the 5-day automated nurture sequence: Delivery → Personal Story → Hard Truth → The Framework → The 48-Hour Deadline' },
          { id: 'dp-t9', text: 'Distribute 3 viral hook formats per week on X, LinkedIn, or Instagram Reels driving traffic directly to the bio link' },
        ],
        frameworks: [
          { title: 'The Soap Opera Sequence', desc: 'Every email ends on an open psychological loop, forcing the subscriber to anticipate tomorrow’s message.' },
          { title: 'The 48-Hour Scarcity Clock', desc: 'Introduce an expiring bonus or special discount code on Day 4 that genuinely expires to trigger buyer urgency.' },
        ],
        goldenRule: 'An email list is the only digital asset that you truly own. Every email subscriber is worth an average of $2 to $5/month when monetized correctly.',
      },
    ],
    vault: [
      {
        id: 'dp-v1',
        title: 'High-Converting Viral Lead Magnet DM Opt-in Script',
        category: 'Cold Outbound DMs',
        description: 'Post this teaser on social media and reply to comments using this automated or manual DM template to capture emails at 70%+ conversion.',
        content: `Hey [First Name], saw you dropped a comment on my breakdown of [Specific Subject]!

Here is the direct access link to the full 1-page execution blueprint (no paywall):
👉 [Insert Landing Page Link]

Inside you will see the exact formulas, prompt templates, and the 3-step checklist we used to hit [Specific Result]. 

If you get stuck on Step 2, reply here and I will personally point you in the right direction. Talk soon!`,
        conversionMetric: '68% Opt-in to Email from DM',
        tags: ['Social DMs', 'Organic Funnel', 'High Opt-In'],
      },
      {
        id: 'dp-v2',
        title: 'The 48-Hour Deadline Close Email (Email #5 in Sequence)',
        category: 'Email Sequences',
        description: 'The exact final email that drives 40% of all front-end digital product sales through honest urgency.',
        content: `Subject: Closing down the [Product Name] launch bonus in 6 hours...

Hey [First Name],

Quick heads-up because I don't want you to message me tomorrow asking if I can extend this:

At midnight tonight, the 50% launch discount and the [Specific Bonus Asset, e.g. Notion OS + Video Swipe File] are coming off the table permanently.

Here is the honest truth:
You can keep trying to piece together random YouTube videos, lose another 3 months to guesswork, and wonder why the needle isn't moving...

Or you can grab the exact plug-and-play system that [Case Study Student] used to generate [Specific Outcome] in just [Timeframe].

👉 Click here to claim your instant access before the timer hits 0:00: [Link]

You are backed by my 30-Day "Action Taker" 100% money-back guarantee. If you run the checklist and do not see the outcome, email me and I will refund every penny.

Zero risk. Total upside.

See you inside,
[Your Name]`,
        conversionMetric: '14.2% Click-to-Purchase Rate',
        tags: ['Sales Sequence', 'Urgency', 'Evergreen Email'],
      },
      {
        id: 'dp-v3',
        title: 'Master Prompt: Reverse-Engineer Any Best-Selling Digital Product',
        category: 'AI Prompts',
        description: 'Feed this prompt into Claude 3.5 Sonnet or ChatGPT to extract the top 1% value hooks from any competing product in your niche.',
        content: `You are a world-class digital product strategist and direct-response copywriter responsible for $50M+ in info-product and software sales.

I want to create a high-leverage digital product in the [Insert Specific Niche, e.g. High-Ticket B2B Sales / Solana DeFi / Real Estate Wholesale].

Target Audience: [Describe Avatar, e.g. Freelancers wanting to transition into $5k/mo retainers]
Current Competitors: [List 2-3 competitor products or creators]

Deliver the following:
1. Identify the 3 most excruciating "bleeding neck" pain points that the current competitors fail to solve concisely.
2. Outline an irresistible 3-part digital toolkit structure (Checklist + Swipe File + Audio Walkthrough) with perceived value of $297 priced at $37-$67.
3. Formulate 5 high-converting headlines using the formula: "How to [Desired Result] in [Timeframe] without [Painful Obstacle]".
4. Write 2 high-converting checkout order bump offers ($17 - $27) that feel like no-brainers to add.`,
        conversionMetric: 'Generates 10/10 Product Architecture in 60s',
        tags: ['Claude Prompt', 'Product Creation', 'Offer Architecture'],
      },
      {
        id: 'dp-v4',
        title: 'Overcoming the "I Can Find This on Google for Free" Objection',
        category: 'Objection Closing',
        description: 'Drop this response on Twitter replies, YouTube comments, or sales page FAQ to neutralize the free information objection.',
        content: `You are 100% right — all the raw ingredients to build an engine exist at the hardware store for free. But would you rather spend 9 months collecting screws from 400 different YouTube channels and hope the car doesn't explode on the highway...

Or pay $47 for the pre-assembled keys and drive away today?

You are not paying for "information." You are paying for 200 hours of curated mistakes filtered down into an execution checklist that works in 30 minutes. 

If your time is worth more than $5/hour, this pays for itself before lunch.`,
        conversionMetric: '92% Agreement / Neutralization Rate',
        tags: ['Sales Psychology', 'FAQ Copy', 'Social Objections'],
      },
    ],
    tools: [
      {
        id: 'tool-gumroad',
        name: 'Gumroad / Stan Store',
        category: 'Checkout & Merchant of Record',
        cost: 'Free setup (10% flat fee) or $29/mo',
        purpose: 'Instantly host digital assets, handle EU VAT, process Apple Pay and credit cards in 30 seconds.',
        insiderAdvantage: 'High consumer trust and instant checkout with zero coding required.',
        url: 'https://gumroad.com',
        isEssential: true,
      },
      {
        id: 'tool-notion',
        name: 'Notion',
        category: 'Product Infrastructure',
        cost: 'Free tier',
        purpose: 'Create modern, interactive operating systems, dashboards, and playbooks that buyers love.',
        insiderAdvantage: 'Duplicating a Notion template feels 10x more valuable to buyers than receiving a static PDF.',
        url: 'https://notion.so',
        isEssential: true,
      },
      {
        id: 'tool-beehiiv',
        name: 'Beehiiv',
        category: 'Email Marketing & Growth',
        cost: 'Free up to 2,500 subscribers',
        purpose: 'Publish newsletters, manage automated welcome sequences, and monetize subscriber base.',
        insiderAdvantage: 'Built-in referral program and recommendations engine accelerates list growth without ad spend.',
        url: 'https://beehiiv.com',
        isEssential: true,
      },
      {
        id: 'tool-canva',
        name: 'Canva / Shots.so',
        category: 'Visual Mockups & Covers',
        cost: 'Free / $12.99 mo',
        purpose: 'Create 3D product boxes, clean presentation slides, and sleek social graphic thumbnails.',
        insiderAdvantage: 'High visual fidelity increases perceived product value by over 300%.',
        url: 'https://shots.so',
        isEssential: false,
      },
      {
        id: 'tool-loom',
        name: 'Loom',
        category: 'Video Walkthroughs',
        cost: 'Free tier',
        purpose: 'Record 5 to 10-minute micro-walkthroughs of your templates to include as high-ticket bonuses.',
        insiderAdvantage: 'Personal founder video builds instant intimacy and eliminates refund requests.',
        url: 'https://loom.com',
        isEssential: false,
      },
    ],
  },
  {
    id: 'b2b-services',
    name: 'B2B Client Services & Freelancing',
    shortName: 'B2B Services',
    badge: 'Fastest Cashflow ($5k-$15k Deals)',
    iconName: 'Briefcase',
    themeColor: 'coral',
    earningPotential: '$15,000 – $50,000/mo',
    timeToFirstDollar: '14 – 21 Days',
    difficulty: 'Execution Intensive / High Reward',
    capitalNeeded: '$50 – $200',
    successRate: '76% with 50 targeted outreaches/day',
    subheader: 'Sell high-ticket problem solving to established businesses. Land $3,000–$10,000/month recurring retainers using cold outbound infrastructure.',
    monthlyRunRateBenchmark: '$36,800/mo',
    breakdown: {
      founderExperience: {
        headline: 'Closing $6,500/mo B2B retainers without a portfolio or case studies',
        story:
          'When I landed my first $5,000/mo client, I had zero website, no agency name, and no fancy case study slide decks. What I had was a 90-second customized Loom video auditing their broken funnel and showing them the exact $40,000 in leaked pipeline revenue they were losing every month. Instead of pitching "general social media management" or "SEO", I offered a 30-day sprint guaranteeing 10 booked executive sales calls or they did not pay. Businesses with over $1M in revenue do not care about paying $5k; they care about certainty, speed, and not wasting executive time.',
        metrics: [
          { label: 'Highest Single Retainer', value: '$12,500/mo', trend: 'Closed in 1 call' },
          { label: 'Average Client LTV', value: '$34,800', trend: '5.8 months retention' },
          { label: 'Cold Loom Response Rate', value: '28.4%', trend: 'Personalized video' },
          { label: 'Gross Profit Margin', value: '88%', trend: 'Remote lean ops' },
        ],
        verifiedProofNote: 'Contracts signed via PandaDoc & Stripe Invoicing with automated ACH wire processing.',
      },
      caseStudies: [
        {
          title: 'Cold Loom Inbound for Dental Implant Clinics',
          student: 'Christian Vance',
          avatarSeed: 'Christian',
          timeline: '18 Days to First Client',
          revenue: '$7,500/mo ongoing retainer',
          margin: '85% Net',
          funnel: 'Scraped 150 local clinics on Google Maps → Sent 35 custom 90-sec Loom audits → 8 calls booked → 2 closed at $3,750/mo.',
          keyTakeaway: 'Specific niche + undeniable video audit destroys all objections before the prospect even gets on Zoom.',
          tag: 'High Ticket B2B',
        },
        {
          title: 'Fractional AI Automation Specialist',
          student: 'Devon Patel',
          avatarSeed: 'Devon',
          timeline: '32 Days',
          revenue: '$18,000/mo (3 retainers)',
          margin: '92% Net',
          funnel: 'Built Make.com demo workflows for e-com logistics brands → Direct message to Operations Directors on LinkedIn.',
          keyTakeaway: 'Pitch operational cost reduction rather than revenue growth during uncertain economic cycles.',
          tag: 'Enterprise Retainer',
        },
      ],
      mythsToAvoid: [
        {
          myth: 'You need an LLC, fancy agency branding, and a 20-page portfolio to pitch companies.',
          reality: 'A founder doing $2M/year only cares about: "Can you fix this headache in 30 days without making me babysit you?"',
          lossPrevention: 'Never spend more than $0 on logos, stationery, or agency websites before you collect $10,000 in client deposits.',
        },
        {
          myth: 'Compete on price by charging $300 to build a portfolio on Upwork or Fiverr.',
          reality: 'Low-paying clients are the most toxic, micromanaging, and demanding. High-ticket clients ($3k-$10k) respect boundaries and pay on time.',
          lossPrevention: 'Never quote an hourly rate. Package your service as an outcome-based 30-day or 90-day sprint with clear deliverables.',
        },
        {
          myth: 'Send 10,000 spammy generic emails with automated scrapers.',
          reality: 'Mass cold email deliverability is crashing. 50 laser-targeted, deeply personalized messages out-earn 5,000 robot spam emails every day.',
          lossPrevention: 'Spend 5 minutes researching the prospect before hitting send. Reference their specific podcast interview, quarterly report, or broken link.',
        },
      ],
    },
    lessons: [
      {
        id: 'b2b-lesson-1',
        number: 1,
        title: 'The Irresistible High-Ticket Grand Slam Offer',
        duration: '40 min read & exercise',
        estimatedYield: 'Positions you to command $3,000+ per month minimum',
        summary: 'How to transition from a replaceable commodity freelancer into an indispensable strategic growth partner.',
        tasks: [
          { id: 'b2b-t1', text: 'Select one hyper-specific high-cashflow niche (e.g. Med-Spas doing $50k+/mo, B2B SaaS companies with Series A, Commercial HVAC)' },
          { id: 'b2b-t2', text: 'Define the "Dream Outcome" and attach a concrete timeline (e.g. "Add 15 qualified sales demonstrations in 45 days")' },
          { id: 'b2b-t3', text: 'Construct a risk-reversal guarantee: "If we don’t hit [Milestone], we work for free until we do, or full refund"' },
        ],
        frameworks: [
          { title: 'The Value Equation', desc: 'Perceived Value = (Dream Outcome × Likelihood of Achievement) ÷ (Time Delay × Effort & Sacrifice).' },
          { title: 'The Pain Arbitrage Principle', desc: 'Charge 10% of the financial upside you generate for the client. If you bring $50,000, asking for $5,000 is an immediate bargain.' },
        ],
        goldenRule: 'Make your offer so ridiculous that they feel foolish saying no.',
      },
      {
        id: 'b2b-lesson-2',
        number: 2,
        title: 'The 90-Second Loom Outbound Blitz Engine',
        duration: '50 min practice',
        estimatedYield: 'Produces 3-5 qualified discovery calls per week',
        summary: 'The exact framework to prospect, record, and send personalized video audits that executives actually watch and reply to.',
        tasks: [
          { id: 'b2b-t4', text: 'Build a lead list of 50 verified Decision Makers (Founders, CMOs, Head of Growth) using Apollo.io or LinkedIn Sales Navigator' },
          { id: 'b2b-t5', text: 'Record a test 90-second screen recording showing their website, identifying 2 specific profit leaks, and revealing the fix' },
          { id: 'b2b-t6', text: 'Create an animated GIF preview of the video to embed in the email body to double click-through rates' },
        ],
        frameworks: [
          { title: 'The 3-Part Video Formula', desc: '0-15s: Personalized hook + compliment. 15-60s: Diagnosis of the specific leak. 60-90s: Soft call to action (no pitch, just asking permission to send a breakdown).' },
          { title: 'The Permission-First Close', desc: 'Never ask for a 30-minute Zoom call on cold outreach. Ask: "Mind if I send over a quick 2-page PDF showing how we fixed this for another team?"' },
        ],
        goldenRule: 'Give away your best secrets for free. Clients will happily pay you to execute them.',
      },
      {
        id: 'b2b-lesson-3',
        number: 3,
        title: 'The One-Call Close Framework (The Diagnostic Sales Session)',
        duration: '45 min review',
        estimatedYield: 'Closes 40%+ of discovery calls at $3k-$10k price points',
        summary: 'Stop doing awkward high-pressure sales pitches. Learn to lead the call as a trusted doctor diagnosing an emergency room patient.',
        tasks: [
          { id: 'b2b-t7', text: 'Adopt the Doctor Frame: Ask 80% questions, let the prospect speak 70% of the total call duration' },
          { id: 'b2b-t8', text: 'Quantify the Cost of Inaction: "What does it cost your business every month this problem remains unresolved?"' },
          { id: 'b2b-t9', text: 'Deliver the proposal live on the call; never email a PDF quote and say "let me know what you think"' },
        ],
        frameworks: [
          { title: 'The Gap Method', desc: 'Establish Current State (Point A) → Future State (Point B) → Establish that your service is the bridge across the chasm.' },
          { title: 'The Silence Rule', desc: 'After stating your price ($5,000/mo), stay completely silent. The next person who speaks loses leverage.' },
        ],
        goldenRule: 'Whoever asks the questions controls the conversation. Whoever talks the most loses the sale.',
      },
    ],
    vault: [
      {
        id: 'b2b-v1',
        title: 'The "Broken Funnel Audit" 90-Second Cold Loom Email',
        category: 'Cold Outbound DMs',
        description: 'Send this cold email with a personalized Loom thumbnail to founders and CMOs. Tested across 400+ campaigns.',
        content: `Subject: quick audit for [Company Name] (spotted a 15% leak in checkout)

Hey [First Name],

Was checking out your recent launch for [Product/Campaign] and loved the positioning around [Specific Detail].

While running through the checkout flow on mobile, I noticed [Specific Glitch/Bottleneck, e.g. the 2-step verification is causing abandoned carts before Stripe loads].

Recorded a quick 87-second screen recording showing exactly where the friction is occurring and how we fixed this for a similar brand last month:

▶️ [Link to 90-sec Loom Video with Animated GIF]

Not selling anything here — just thought you and the team would want to patch that leak before the weekend traffic hits.

If you'd like me to send over the clean wireframe patch, reply "send" and I'll drop the Figma link right over.

Best,
[Your Name]`,
        conversionMetric: '31.4% Reply Rate on Cold Outreach',
        tags: ['Cold Email', 'Loom Video', 'B2B Outbound'],
      },
      {
        id: 'b2b-v2',
        title: 'High-Ticket Proposal Closer Script (Live on Zoom)',
        category: 'Objection Closing',
        description: 'Word-for-word transition script from diagnostic discovery into the payment authorization agreement.',
        content: `Prospect: "Sounds interesting, can you send over a proposal so I can look it over with my team?"

You: "[First Name], I definitely can. But in my experience, when people ask for a PDF proposal, it usually means there is something in the game plan we just reviewed that you are not 100% convinced will work for your team. 

Can I ask — based on everything we mapped out today, do you feel confident that this strategy will get you to that [Specific Revenue Goal, e.g. $100k/mo] within the next 90 days?

(Prospect answers what they are hesitant about)

You: "Totally fair. Let's solve that right now while we are together. If we handle [Their Exact Objection], is there anything else preventing us from kicking off onboarding on Monday?"`,
        conversionMetric: 'Overcomes "Send Proposal" trap 74% of the time',
        tags: ['Closing Script', 'Zoom Negotiation', 'High-Ticket'],
      },
      {
        id: 'b2b-v3',
        title: 'Master Prompt: Generate 50 Hyper-Targeted Niche Cold Angles',
        category: 'AI Prompts',
        description: 'Use this to extract unique B2B problem angles and case study hooks for any industry within 30 seconds.',
        content: `You are an elite B2B sales development consultant who has booked meetings with Fortune 500 executives and $10M bootstrapped founders.

I am offering [Insert Core Skill, e.g. Paid Meta Ads + Creative Strategy / AI Workflow Automations] to [Insert Target Industry, e.g. Direct-to-Consumer Skincare Brands doing $1M-$5M].

Generate:
1. The 3 biggest operational bottlenecks costing these executives at least $10,000/month.
2. 3 non-generic, curiosity-inducing cold email subject lines that look like internal team memos (under 5 words).
3. A 4-sentence cold outbound script with zero corporate jargon, an undeniable value nugget, and a low-friction permission call-to-action.
4. 3 specific questions to ask on a diagnostic discovery call to make the prospect quantify their own financial pain.`,
        conversionMetric: 'Produces Top-Performing Cold Copy',
        tags: ['Sales Prompts', 'B2B Targeting', 'Lead Gen'],
      },
      {
        id: 'b2b-v4',
        title: 'Contract Retainer Master Agreement Clauses (Risk-Reversal Template)',
        category: 'Templates',
        description: 'The exact legal clause to include in your client contract that guarantees client confidence while protecting your operational time.',
        content: `SECTION 4. PERFORMANCE REVERSAL & MILESTONE SCHEDULE:
"Agency agrees to deliver [Quantity, e.g. 15 Verified Qualified Opportunities] within the 45-day evaluation period beginning on the Completion of Setup Date. In the event that Agency does not achieve the stated performance threshold within said timeframe, Agency shall continue full operational execution at zero additional retainer cost to Client until the threshold is attained in full, or Client may request a pro-rata refund of the monthly retainer fee minus hard advertising costs. Both parties agree that Client must provide approved collateral within 48 business hours to maintain milestone validity."`,
        conversionMetric: 'Reduces Legal Revision Cycles by 80%',
        tags: ['Contract Template', 'Legal', 'Guarantees'],
      },
    ],
    tools: [
      {
        id: 'tool-apollo',
        name: 'Apollo.io',
        category: 'B2B Lead Intelligence & Enrichment',
        cost: 'Free tier / $49 mo',
        purpose: 'Extract verified emails, direct phone numbers, and company revenue filters for 250M+ business executives.',
        insiderAdvantage: 'Filter companies by technology stack (e.g. finding Shopify Plus stores or HubSpot users).',
        url: 'https://apollo.io',
        isEssential: true,
      },
      {
        id: 'tool-instantly',
        name: 'Instantly.ai / Smartlead',
        category: 'Cold Email Infrastructure',
        cost: '$37/mo',
        purpose: 'Connect multiple secondary sending domains with automated inbox warmup to guarantee 99% inbox placement.',
        insiderAdvantage: 'Prevents your primary business domain from landing in spam folders.',
        url: 'https://instantly.ai',
        isEssential: true,
      },
      {
        id: 'tool-loom-pro',
        name: 'Loom Pro',
        category: 'Video Auditing & Prospecting',
        cost: '$12.50/mo',
        purpose: 'Record crisp 1080p video screen shares with custom branding, calls-to-action, and viewer analytics.',
        insiderAdvantage: 'Get instant notifications when a CEO watches your video, so you can call them 60 seconds later.',
        url: 'https://loom.com',
        isEssential: true,
      },
      {
        id: 'tool-pandadoc',
        name: 'PandaDoc / DocuSign',
        category: 'Proposals & E-Signatures',
        cost: '$19/mo',
        purpose: 'Send professional digital proposals with embedded Stripe credit card authorization for instant deposits.',
        insiderAdvantage: 'Collect payment and signature on the exact same screen.',
        url: 'https://pandadoc.com',
        isEssential: false,
      },
      {
        id: 'tool-cal',
        name: 'Cal.com / Calendly',
        category: 'Appointment Scheduling',
        cost: 'Free tier',
        purpose: 'Eliminate back-and-forth scheduling emails and qualify leads with mandatory intake survey questions.',
        insiderAdvantage: 'Redirect prospects to a video case study while they wait for the scheduled call.',
        url: 'https://cal.com',
        isEssential: true,
      },
    ],
  },
  {
    id: 'ecom-dropship',
    name: 'E-Commerce & Micro-Dropshipping',
    shortName: 'E-Commerce',
    badge: 'Scale to $100k+ Mo (High Volume)',
    iconName: 'ShoppingBag',
    themeColor: 'yellow',
    earningPotential: '$20,000 – $75,000/mo',
    timeToFirstDollar: '21 – 30 Days',
    difficulty: 'Capital Required / Rapid Iteration',
    capitalNeeded: '$300 – $1,000',
    successRate: '65% with strict unit economics discipline',
    subheader: 'Capitalize on viral algorithmic consumer demand. Rapidly test high-margin physical products with micro-inventory and ad arbitrage.',
    monthlyRunRateBenchmark: '$48,200/mo',
    breakdown: {
      founderExperience: {
        headline: 'Generating $78,000 in 34 days with a single problem-solving posture gadget',
        story:
          'In traditional dropshipping, rookies copy whatever Aliexpress garbage they see on TikTok and wonder why their store dies in 4 days with 4-week shipping times. In 2023, we pioneered Micro-Dropshipping: we validated a targeted ergonomics product via UGC ad tests, partnered with a private agent who fulfilled orders in 5 to 7 days with custom branded packaging, and priced the item at $69 with a $14 landed cost. Because we commanded a $55 gross margin, we could comfortably spend $22 on Meta and TikTok ads to acquire a customer and still walk away with $33 in clean net profit per order all day long.',
        metrics: [
          { label: 'Top 30-Day Gross Sales', value: '$112,450', trend: 'Single hero SKU' },
          { label: 'Blended ROAS', value: '3.18x', trend: 'TikTok + Meta ads' },
          { label: 'Average Order Value (AOV)', value: '$68.50', trend: 'With 2-pack bundle' },
          { label: 'Net Take-Home Margin', value: '27.4%', trend: 'After all ad spend' },
        ],
        verifiedProofNote: 'Shopify dashboard verified with CJ Dropshipping & AutoDS direct API supplier links.',
      },
      caseStudies: [
        {
          title: 'The Viral Pet Deshedding Vacuum Attachment',
          student: 'Liam & Sarah Vance',
          avatarSeed: 'Liam',
          timeline: '42 Days',
          revenue: '$64,300 Revenue',
          margin: '29% Net ($18,600 profit)',
          funnel: 'Curated 10 organic TikTok creative variations → Scaled winning 2 hooks to $800/day ad spend on TikTok Spark Ads.',
          keyTakeaway: 'Products that have an immediate visual "before-and-after" produce 4x higher CTR on short-form video.',
          tag: 'Viral Organic to Paid',
        },
        {
          title: 'Direct-to-Consumer Micro-Niche Espresso Tool',
          student: 'Kenji Takahashi',
          avatarSeed: 'Kenji',
          timeline: '60 Days',
          revenue: '$89,100 Revenue',
          margin: '34% Net',
          funnel: 'Pre-order Kickstarter-style landing page on Shopify → 1-Click Upsell coffee scale bundle.',
          keyTakeaway: 'Passionate hobbyist niches pay zero attention to price if the product looks sleek and artisanal.',
          tag: 'High AOV Bundle',
        },
      ],
      mythsToAvoid: [
        {
          myth: 'Dropshipping is dead because shipping from China takes 4 weeks.',
          reality: 'Cheap Aliexpress 30-day shipping is dead. Modern micro-dropshipping uses CJ Dropshipping or USA/EU 5-7 day fulfillment lines with branded packaging.',
          lossPrevention: 'Never test a supplier that cannot provide tracking numbers delivered to US/UK addresses within 7 business days.',
        },
        {
          myth: 'You should sell $15 phone cases and cheap jewelry.',
          reality: 'You will burn your entire budget on ad spend. Ad platforms charge $20-$30 per purchase. If your product is under $50, you are mathematically guaranteed to lose money.',
          lossPrevention: 'Strict Rule: Sell products with minimum $60 retail price and at least $40 gross profit margin before ad costs.',
        },
        {
          myth: 'Build a giant general store with 500 random items.',
          reality: 'General stores look like scam sites. Modern winners build sleek, ultra-clean "One-Product" brand landing pages that look like Apple or Dyson.',
          lossPrevention: 'Build a hyper-focused single-product store with high-resolution 3D renders, verified customer photo reviews, and trust badges.',
        },
      ],
    },
    lessons: [
      {
        id: 'ecom-lesson-1',
        number: 1,
        title: 'The 5-Point Winning Product Identification Formula',
        duration: '40 min research',
        estimatedYield: 'Filters out 95% of losing products before spending $1 on ads',
        summary: 'Master the exact checklist top 8-figure e-commerce operators use to spot breakthrough physical products.',
        tasks: [
          { id: 'ec-t1', text: 'Verify Product Criterion 1: Must solve a tangible, painful physical problem (e.g. back pain, pet mess, sleep quality)' },
          { id: 'ec-t2', text: 'Verify Product Criterion 2: "Wow Factor" visual demonstration within the first 2 seconds of video footage' },
          { id: 'ec-t3', text: 'Verify Margin Math: Retail Price ($69+) minus Supplier Cost ($15-) must equal at least $45 gross margin' },
        ],
        frameworks: [
          { title: 'The Impulse Buy Ceiling', desc: 'Between $45 and $89, customers purchase on mobile without consulting their spouse or comparing alternatives for weeks.' },
          { title: 'The Uncopyable Bundle', desc: 'Combine the main physical item with a digital companion guide or bonus replacement head to prevent competitors from undercutting you on Amazon.' },
        ],
        goldenRule: 'If you cannot demonstrate the core benefit in a 3-second silent GIF, do not sell it.',
      },
      {
        id: 'ecom-lesson-2',
        number: 2,
        title: 'High-Converting One-Product Shopify Store Architecture',
        duration: '55 min build',
        estimatedYield: 'Increases store conversion rate from 1.5% to 3.8%+',
        summary: 'Build a razor-sharp, frictionless landing page engineered specifically for mobile social media traffic.',
        tasks: [
          { id: 'ec-t4', text: 'Install clean minimal Shopify theme (Sense or Dawn) with customized dark luxury or clean medical branding' },
          { id: 'ec-t5', text: 'Implement the "Quantity Tier" pricing selector (Buy 1 for $59, Buy 2 for $99 [Save $19 - Most Popular], Buy 3 for $129)' },
          { id: 'ec-t6', text: 'Embed 10-15 authentic photo and video reviews using Loox or Judge.me' },
        ],
        frameworks: [
          { title: 'The Sticky Add-To-Cart Bar', desc: 'On mobile, keeping a floating "Claim 50% Off — Order Now" button at the bottom of the screen boosts checkout begins by 22%.' },
          { title: 'The Guarantee Badge Stack', desc: 'Display "30-Day Money-Back Guarantee", "Tracked FedEx/USPS Shipping", and "Secure SSL 256-bit Encryption" directly below the primary buy button.' },
        ],
        goldenRule: 'Every extra field or confusing distraction on checkout reduces conversion by 10%. Keep it dead simple.',
      },
      {
        id: 'ecom-lesson-3',
        number: 3,
        title: 'TikTok & Meta Creative UGC Testing Sprints ($50 Test Method)',
        duration: '60 min strategy',
        estimatedYield: 'Finds your scalable $1,000/day winning ad campaign for under $150 total risk',
        summary: 'How to source content creator videos and launch cost-capped ad tests to find winning creatives systematically.',
        tasks: [
          { id: 'ec-t7', text: 'Order 2 sample units to your home or hire 3 micro-creators on Billo/TikTok Creator Marketplace for $40 each' },
          { id: 'ec-t8', text: 'Produce 5 hook variations for the same 30-second video body (Problem hook, Curiosity hook, Competitor comparison hook)' },
          { id: 'ec-t9', text: 'Launch a Meta Advantage+ or TikTok Broad targeting campaign at $20/day per ad set with automatic placements' },
        ],
        frameworks: [
          { title: 'The 3-Second Hook Rate Rule', desc: 'If less than 30% of viewers watch past second 3, the hook is dead. Cut and replace the first 3 seconds.' },
          { title: 'The 2x Break-Even Kill Switch', desc: 'If an ad set spends 2x your target CPA ($60) without generating a sale, kill the ad immediately. Never hope or pray in paid media.' },
        ],
        goldenRule: 'Creative is the new targeting. The algorithm finds your ideal customer based on what is happening in the video.',
      },
    ],
    vault: [
      {
        id: 'ecom-v1',
        title: 'The Viral 3-Part TikTok / Reels UGC Script Formula',
        category: 'Templates',
        description: 'Send this exact storyboard brief to micro-creators or film it yourself with your smartphone camera.',
        content: `[0:00 - 0:03] THE PATTERN INTERRUPT HOOK (Visual Shock):
Actor holds the old broken method and throws it in the trash bin:
"Stop wasting $200 at the salon every month when this literally exists on TikTok..."

[0:03 - 0:15] THE AGITATION & RELATABLE PROBLEM:
"I used to dread [Painful Routine] because it took 45 minutes and always left a mess all over my counter. Look at this..." (Show close-up of annoying problem).

[0:15 - 0:32] THE REVEAL & SATISFYING DEMO:
"Then I found the [Brand Name]. You literally just [Action] and in 10 seconds it's completely done. It uses [Unique Mechanism] so it never pulls or snags." (Satisfying ASMR sound).

[0:32 - 0:45] CALL TO ACTION & BUNDLE SCARCITY:
"They are running a 50% off bundle deal right now, but it sells out every time they restock. Link is right below before it's gone!"`,
        conversionMetric: 'Produces sub-$15 Cost Per Acquisition on TikTok',
        tags: ['UGC Script', 'TikTok Ads', 'Meta Reels'],
      },
      {
        id: 'ecom-v2',
        title: 'High-Converting Abandoned Cart SMS & Email 3-Part Flow',
        category: 'Email Sequences',
        description: 'Recovers 18% to 26% of customers who leave without purchasing at the checkout screen.',
        content: `SMS 1 (Sent 15 minutes after abandon):
"Hey [First Name]! You left your [Product Name] in your cart. We saved it for you here: [Cart Link]. Reply HELP if you have any questions before we ship!"

EMAIL 1 (Sent 1 hour after abandon):
Subject: Did something happen to your order at [Brand Name]?
Body:
Hey [First Name],
Saw you were checking out [Product Name] today!
Just wanted to make sure our checkout didn't glitch on you. We have your order reserved in our California fulfillment center for the next 24 hours.
Click here to finish your order: [Cart Link]
P.S. We back every order with our 30-Day "Love It or It's Free" guarantee, so you have zero risk testing it out.

SMS 2 (Sent 20 hours after abandon with 10% discount code):
"Final call [First Name]: use code SAVE10 at checkout to unlock free priority shipping and 10% off your cart today: [Cart Link]. Expires at midnight!"`,
        conversionMetric: '22.8% Average Abandoned Cart Recovery',
        tags: ['Klaviyo', 'SMS Marketing', 'Checkout Recovery'],
      },
      {
        id: 'ecom-v3',
        title: 'Master Prompt: E-Commerce Landing Page Direct Response Copy',
        category: 'AI Prompts',
        description: 'Generate high-converting Shopify product descriptions, headline stacks, and benefit bullets.',
        content: `You are an elite direct-response e-commerce copywriter specializing in 7-figure Shopify landing pages.

Product: [Insert Name & What It Does, e.g. An ergonomic memory-foam neck stretcher for desk workers]
Retail Price: $59.95
Key Competitors: Generic foam blocks on Amazon ($20)

Write:
1. Above-the-fold headline + subheadline that sells the emotional transformation (waking up pain-free with effortless posture).
2. 5 Benefit-driven bullet points using the format: [Feature] so that you can [Emotional Benefit] without [Common Hassle].
3. A "Why 99% of Alternatives Fail" comparison chart table (Our Product vs Cheap Amazon Knockoffs vs $150 Chiropractor Visits).
4. 3 Frequently Asked Questions addressing shipping times, warranty, and return policy that remove all hesitation.`,
        conversionMetric: 'Boosts Landing Page Readability & Clicks',
        tags: ['Shopify Copy', 'Direct Response', 'AI Prompt'],
      },
    ],
    tools: [
      {
        id: 'tool-shopify',
        name: 'Shopify',
        category: 'E-Commerce Engine',
        cost: '$1 for first month ($39/mo thereafter)',
        purpose: 'The unquestioned gold standard for e-commerce checkout speed, fraud protection, and app ecosystem.',
        insiderAdvantage: 'Shop Pay checkout converts 50% better than standard mobile checkouts.',
        url: 'https://shopify.com',
        isEssential: true,
      },
      {
        id: 'tool-cjdropship',
        name: 'CJ Dropshipping / Private Agent',
        category: 'Fulfillment & Sourcing',
        cost: 'Free to source',
        purpose: 'Fast 6 to 9-day air shipping to US/EU with automated Shopify order syncing and custom branding inserts.',
        insiderAdvantage: 'Cheaper product costs than Aliexpress and dedicated Skype/WhatsApp agent support.',
        url: 'https://cjdropshipping.com',
        isEssential: true,
      },
      {
        id: 'tool-pipedrive',
        name: 'Minea / PiPiADS',
        category: 'Winning Product Ad Spy Tool',
        cost: '$49/mo',
        purpose: 'Spy on trending TikTok and Meta ads in real-time, see which stores are scaling ad spend right now.',
        insiderAdvantage: 'Filter ads by "Created within 7 days" and "Over 500k views" to catch viral trends before anyone else.',
        url: 'https://minea.com',
        isEssential: true,
      },
      {
        id: 'tool-loox',
        name: 'Loox / Judge.me',
        category: 'Social Proof & Photo Reviews',
        cost: '$9.99/mo',
        purpose: 'Import verified buyer reviews with high-resolution user photos to establish instant credibility.',
        insiderAdvantage: 'Photo reviews increase buyer conversion rate by an average of 28%.',
        url: 'https://judge.me',
        isEssential: false,
      },
      {
        id: 'tool-klaviyo',
        name: 'Klaviyo',
        category: 'Automated Retention & Email',
        cost: 'Free tier up to 250 contacts',
        purpose: 'Build abandoned checkout flows, post-purchase upsell emails, and VIP customer VIP campaigns.',
        insiderAdvantage: 'Email flows should generate 25% to 35% of your total store revenue on autopilot.',
        url: 'https://klaviyo.com',
        isEssential: true,
      },
    ],
  },
  {
    id: 'trading-defi',
    name: 'Trading & Non-Custodial Finance',
    shortName: 'Trading & DeFi',
    badge: 'Capital Compounding & Asymmetric Yield',
    iconName: 'TrendingUp',
    themeColor: 'lavender',
    earningPotential: '$8,000 – $25,000/mo (ROI based)',
    timeToFirstDollar: '30 – 60 Days',
    difficulty: 'High Capital / Psychological Mastery',
    capitalNeeded: '$1,000+',
    successRate: '54% due to emotional trading discipline',
    subheader: 'Preserve and compound wealth. Build automated risk-adjusted trend systems, capture liquidity pool fees, and master on-chain asymmetric setups.',
    monthlyRunRateBenchmark: '$21,500/mo',
    breakdown: {
      founderExperience: {
        headline: 'From liquidating accounts to consistent 18-32% annualized risk-controlled returns',
        story:
          'Like every degenerate beginner in 2021, I blew up two trading accounts trying to 50x leverage trade dog tokens based on Twitter hype. The epiphany came when I studied institutional market making and rule-based systematic execution. Today, 70% of my capital resides in delta-neutral liquidity provisioning and automated breakout strategies where position size is mathematically capped at 1% total portfolio risk per trade. In trading, you do not get rich by winning every trade; you get rich by ensuring your losers are tiny paper cuts and letting mathematical edge compound without emotional interference.',
        metrics: [
          { label: '3-Year Annualized ROI', value: '+34.2%', trend: 'Max drawdown 8.4%' },
          { label: 'Win Rate with 2:1 R/R', value: '52.6%', trend: 'Statistically profitable' },
          { label: 'On-Chain Yield APY', value: '14.8%', trend: 'Stablecoin / Delta-neutral' },
          { label: 'Risk Per Trade Limit', value: '1.0%', trend: 'Strict stop loss discipline' },
        ],
        verifiedProofNote: 'Audited trading performance records on Bybit, Hyperliquid, and Uniswap V3 liquidity vaults.',
      },
      caseStudies: [
        {
          title: 'Algorithmic Breakout System on Bitcoin & Solana',
          student: 'Alexandre Meyer',
          avatarSeed: 'Alexandre',
          timeline: '90 Days Live Execution',
          revenue: '+$14,200 Net Profit on $40k base',
          margin: 'Risk-controlled',
          funnel: 'TradingView PineScript webhook → automated execution on Hyperliquid DEX with strict 1.5% stop loss.',
          keyTakeaway: 'Removing manual emotion and button-clicking is the single biggest leap in trading profitability.',
          tag: 'Systematic Trading',
        },
        {
          title: 'Concentrated Liquidity Arbitrage on Base & Solana',
          student: 'Nadia Solis',
          avatarSeed: 'Nadia',
          timeline: '45 Days',
          revenue: '$4,800/mo recurring fee yield',
          margin: 'Zero directional exposure',
          funnel: 'Orca & Uniswap V3 tight-range concentrated liquidity pools rebalanced weekly with automated stop hedges.',
          keyTakeaway: 'Be the casino (market maker) collecting swap fees on volatile volume instead of betting on coin directions.',
          tag: 'DeFi Cashflow',
        },
      ],
      mythsToAvoid: [
        {
          myth: 'You can turn $100 into $1,000,000 overnight with 100x futures leverage.',
          reality: '100x leverage means a 1% price fluctuation wipes out 100% of your money. The exchange algorithms are designed to hunt and liquidate retail leverage.',
          lossPrevention: 'Never use more than 2x-3x leverage, and risk no more than 1% of total account equity on any individual position.',
        },
        {
          myth: 'You need to stare at 12 monitors and 5-minute candlestick charts all day.',
          reality: 'Day trading low timeframes produces maximum stress and maximum trading fees for your broker. Profitable traders operate on 4-Hour and Daily charts with set-and-forget limit orders.',
          lossPrevention: 'Trade the Daily and 4-Hour timeframe. Spend 20 minutes reviewing charts each morning, then close the laptop.',
        },
        {
          myth: 'Follow crypto Telegram "signal VIP groups" that promise 99% accuracy.',
          reality: 'Signal groups make money from affiliate signups and dumping illiquid tokens on their own followers.',
          lossPrevention: 'Learn core market structure: Support/Resistance, Liquidity Sweeps, and Position Sizing. Never trade someone else’s conviction.',
        },
      ],
    },
    lessons: [
      {
        id: 'trade-lesson-1',
        number: 1,
        title: 'Capital Preservation & The 1% Mathematical Risk Matrix',
        duration: '35 min study',
        estimatedYield: 'Guarantees you will never blow up a trading account',
        summary: 'Understand the mathematical law of ruin and configure the exact position size formula used by institutional hedge funds.',
        tasks: [
          { id: 'tr-t1', text: 'Calculate Account Risk Cap: If account is $10,000, maximum risk on any trade is $100 (1%)' },
          { id: 'tr-t2', text: 'Master the Position Size Formula: Position Size = Dollar Risk ÷ (Entry Price - Stop Loss Price)' },
          { id: 'tr-t3', text: 'Set hard daily loss limit: If you lose 3 trades in a single day (-3%), trading platform is locked for 24 hours' },
        ],
        frameworks: [
          { title: 'The Asymmetric Risk-Reward Principle', desc: 'Only enter setups offering at least 2.5:1 reward-to-risk. At 2.5:1, you can be wrong 60% of the time and still be wildly profitable.' },
          { title: 'The Drawdown Recovery Trap', desc: 'A 10% loss requires an 11% gain to break even. A 50% loss requires a 100% gain to break even. Protecting capital is always priority #1.' },
        ],
        goldenRule: 'Good traders focus on making money. Great traders obsess over not losing money.',
      },
      {
        id: 'trade-lesson-2',
        number: 2,
        title: 'Institutional Market Structure & Liquidity Pool Sweeps',
        duration: '50 min technical chart study',
        estimatedYield: 'Identifies high-probability entries before retail breakout traps occur',
        summary: 'How to read candlestick charts like a market maker. Spot where retail stop losses are sitting and enter when smart money hunts liquidity.',
        tasks: [
          { id: 'tr-t4', text: 'Identify Higher Timeframe (4H / Daily) Key Levels: Previous Day High (PDH), Previous Day Low (PDL), Equal Highs/Lows' },
          { id: 'tr-t5', text: 'Spot the "Liquidity Sweep & Reclaim": Price briefly punches through a major resistance, traps breakout buyers, and immediately closes back inside' },
          { id: 'tr-t6', text: 'Place limit entry orders on the retest with stop loss placed beyond the sweep wick' },
        ],
        frameworks: [
          { title: 'The Breakout Trap', desc: '90% of retail breakouts fail and reverse. The highest probability trades occur when you fade the trapped breakout crowd.' },
          { title: 'Fair Value Gaps (FVG)', desc: 'Imbalances left by large institutional orders serve as magnets that price returns to before resuming the broader trend.' },
        ],
        goldenRule: 'When retail traders are euphoric and greed is at maximum, look for exit liquidity. When fear is extreme, look for structural capitulation reclaims.',
      },
      {
        id: 'trade-lesson-3',
        number: 3,
        title: 'Non-Custodial DeFi Cashflow & Concentrated Liquidity',
        duration: '45 min setup',
        estimatedYield: 'Generates passive 12-25% yield paid in real-time fees',
        summary: 'Step-by-step guide to deploying capital into non-custodial decentralized protocols to generate passive yield without giving your keys to centralized exchanges.',
        tasks: [
          { id: 'tr-t7', text: 'Set up hardware wallet (Ledger or Trezor) connected to self-custody wallet (Rabby or Phantom)' },
          { id: 'tr-t8', text: 'Deploy stablecoin liquidity pair (USDC/USDT or LST) on low-fee Layer-2 networks (Arbitrum or Base)' },
          { id: 'tr-t9', text: 'Establish weekly harvesting and compounding schedule for collected trading fees' },
        ],
        frameworks: [
          { title: 'Not Your Keys, Not Your Coins', desc: 'Centralized exchanges like FTX or Celsius can freeze your funds overnight. Non-custodial smart contracts execute transparently on-chain.' },
          { title: 'Delta-Neutral Hedging', desc: 'Shorting the underlying asset 1x on a decentralized perp exchange while holding the spot token eliminates price volatility while keeping 100% of funding fees.' },
        ],
        goldenRule: 'Compound interest is the eighth wonder of the world. A consistent 20% annual return on protected capital turns into generational wealth over time.',
      },
    ],
    vault: [
      {
        id: 'trade-v1',
        title: 'Institutional Trade Journal & Risk Calculator (Python / Script)',
        category: 'Templates',
        description: 'Copy this position calculator to run in your browser or terminal to get exact contract sizing before submitting any order.',
        content: `// 1-Click Position Size Calculation Formula
function calculateTradeParameters(accountBalance, riskPercentage, entryPrice, stopLossPrice) {
  const maxRiskDollars = accountBalance * (riskPercentage / 100);
  const riskPerCoin = Math.abs(entryPrice - stopLossPrice);
  const positionSizeCoins = maxRiskDollars / riskPerCoin;
  const totalPositionValue = positionSizeCoins * entryPrice;
  const leverageRequired = totalPositionValue / accountBalance;

  return {
    maxRiskDollars: maxRiskDollars.toFixed(2),
    positionSizeCoins: positionSizeCoins.toFixed(4),
    totalPositionValue: totalPositionValue.toFixed(2),
    effectiveLeverage: leverageRequired.toFixed(2) + "x"
  };
}

// Example: $25,000 Account, 1% Risk ($250), Entry $64,200, Stop Loss $63,400
// Yields exact mathematically safe contract size with ZERO guesswork.`,
        conversionMetric: 'Prevents Account Ruin 100% of the Time',
        tags: ['Risk Formula', 'Trade Calculator', 'PineScript'],
      },
      {
        id: 'trade-v2',
        title: 'TradingView PineScript Indicator Blueprint (Liquidity Sweep Alert)',
        category: 'Templates',
        description: 'Paste into TradingView Pine Editor to highlight institutional liquidity sweeps on 1H/4H charts automatically.',
        content: `//@version=5
indicator("TFP — Institutional Liquidity Sweep Detector", overlay=true)

lookback = input.int(20, "Lookback Periods")
showLabels = input.bool(true, "Show Sweep Labels")

swingHigh = ta.highest(high, lookback)[1]
swingLow = ta.lowest(low, lookback)[1]

bullishSweep = (high > swingHigh) and (close < swingHigh)
bearishSweep = (low < swingLow) and (close > swingLow)

plotshape(bullishSweep, title="Bearish Liquidity Grab", location=location.abovebar, color=color.red, style=shape.triangledown, text="SWEEP")
plotshape(bearishSweep, title="Bullish Liquidity Grab", location=location.belowbar, color=color.green, style=shape.triangleup, text="SWEEP")

alertcondition(bullishSweep or bearishSweep, title="TFP Liquidity Alert", message="Institutional Liquidity Sweep Triggered on {{ticker}}")`,
        conversionMetric: 'Instant Alert on High-Probability Reversals',
        tags: ['PineScript', 'TradingView', 'Technical Indicator'],
      },
      {
        id: 'trade-v3',
        title: 'Master Prompt: Macro Sentiment & On-Chain Wallet Analysis',
        category: 'AI Prompts',
        description: 'Analyze on-chain whale flow data, open interest, and funding rate data to confirm market bias.',
        content: `You are an institutional macro analyst and crypto derivatives strategist.

Data inputs:
Current Asset: [e.g. Bitcoin / Ethereum / Solana]
Current Price: [e.g. $65,400]
Funding Rate: [e.g. +0.024% (Elevated Longs)]
Open Interest: [e.g. 30-day High (+18% in last 24h)]
Liquidations (last 12h): [e.g. $80M Short Liquidations]

Analyze:
1. Is the market currently showing signs of overleveraged retail complacency or healthy spot-driven accumulation?
2. Where are the nearest pools of resting stop-loss liquidity on the upside and downside?
3. Formulate the invalidation level where a bearish reversal thesis is completely broken.
4. Give a clear execution recommendation: (A) Wait for pullback sweep, (B) Fade the overextended longs, or (C) Hold cash.`,
        conversionMetric: 'Filters Bad Entries During Chop Markets',
        tags: ['Macro Prompt', 'Market Bias', 'Risk Management'],
      },
    ],
    tools: [
      {
        id: 'tool-hyperliquid',
        name: 'Hyperliquid DEX',
        category: 'Non-Custodial Perpetual Futures',
        cost: 'Low maker/taker fees',
        purpose: 'Trade crypto perps with up to 50x leverage directly from your private wallet with zero KYC and high on-chain liquidity.',
        insiderAdvantage: 'High execution speed and earned protocol vault points.',
        url: 'https://hyperliquid.xyz',
        isEssential: true,
      },
      {
        id: 'tool-tradingview',
        name: 'TradingView',
        category: 'Charting & Indicator Suite',
        cost: 'Free tier / $14.95 mo',
        purpose: 'The universal charting platform for technical analysis, custom PineScript indicators, and multi-timeframe alerts.',
        insiderAdvantage: 'Set server-side SMS/app alerts so you never have to sit watching charts.',
        url: 'https://tradingview.com',
        isEssential: true,
      },
      {
        id: 'tool-coinglass',
        name: 'Coinglass',
        category: 'Derivatives & Liquidation Heatmaps',
        cost: 'Free tier',
        purpose: 'View exact liquidation heatmap levels, global Open Interest, and exchange funding rates.',
        insiderAdvantage: 'Spot where $200M of liquidations are sitting to anticipate market maker sweep targets.',
        url: 'https://coinglass.com',
        isEssential: true,
      },
      {
        id: 'tool-rabby',
        name: 'Rabby Wallet / Phantom',
        category: 'Self-Custody Web3 Wallet',
        cost: 'Free open source',
        purpose: 'Simulate transactions before signing to prevent phishing drains and manage multi-chain assets safely.',
        insiderAdvantage: 'Pre-transaction simulation displays exact token balance changes before clicking confirm.',
        url: 'https://rabby.io',
        isEssential: true,
      },
      {
        id: 'tool-debank',
        name: 'DeBank / Arkham Intelligence',
        category: 'On-Chain Whale Tracker',
        cost: 'Free tier',
        purpose: 'Track wallet addresses of top hedge funds and profitable crypto traders in real-time.',
        insiderAdvantage: 'Receive alerts the second smart money moves stablecoins into new positions.',
        url: 'https://arkhamintelligence.com',
        isEssential: false,
      },
    ],
  },
  {
    id: 'ai-automation',
    name: 'AI & Workflow Automation',
    shortName: 'AI & Automation',
    badge: 'Highest 2026 Demand ($5k-$15k Sprints)',
    iconName: 'Cpu',
    themeColor: 'mint',
    earningPotential: '$12,000 – $45,000/mo',
    timeToFirstDollar: '10 – 18 Days',
    difficulty: 'Low Capital / Modern Tech Edge',
    capitalNeeded: '$0 – $100',
    successRate: '85% due to massive market demand',
    subheader: 'Sell no-code AI automation systems to legacy businesses. Automate customer support, lead intake, and document workflows using Make.com, n8n, and LLM APIs.',
    monthlyRunRateBenchmark: '$34,900/mo',
    breakdown: {
      founderExperience: {
        headline: 'Charging $8,500 to automate a law firm’s intake pipeline using Make.com and OpenAI',
        story:
          'Most business owners in traditional industries (construction, legal, medical, property management) are completely terrified of AI and have zero clue how to connect their software. In late 2023, I pitched a mid-sized law firm that was paying 2 full-time receptionists $90,000/year to manually copy-paste consultation forms from their website into their CRM. In 3 days, using Make.com and an OpenAI assistant, I built an automated intake workflow that qualifies the client via WhatsApp/SMS, extracts case documents, summarizes the incident report, and books the appointment on the attorney’s calendar automatically. They gladly paid $8,500 upfront and a $1,500/month maintenance retainer to keep it running smoothly.',
        metrics: [
          { label: 'Highest Setup Fee', value: '$14,000', trend: '3-day build' },
          { label: 'Recurring Maintenance MRR', value: '$18,500/mo', trend: '12 active retainers' },
          { label: 'Average Build Time', value: '72 Hours', trend: 'Using pre-built templates' },
          { label: 'Client Labor Hours Saved', value: '140+ hrs/mo', trend: 'Instant 10x ROI for client' },
        ],
        verifiedProofNote: 'Production workflows verified in Make.com enterprise workspace & Supabase databases.',
      },
      caseStudies: [
        {
          title: 'Automated Real Estate Lead Qualification Agent',
          student: 'Tariq Al-Mansoor',
          avatarSeed: 'Tariq',
          timeline: '21 Days to $12k MRR',
          revenue: '$12,000/mo ongoing',
          margin: '94% Net',
          funnel: 'Built n8n + WhatsApp voice note transcribing agent for commercial brokers → 100% automated property matching.',
          keyTakeaway: 'Save a business 20 hours of manual labor per week and they will never cancel their retainer.',
          tag: 'High Ticket AI Agency',
        },
        {
          title: 'E-commerce Automated Review & UGC Repurposing Pipeline',
          student: 'Chloe Moreau',
          avatarSeed: 'Chloe',
          timeline: '35 Days',
          revenue: '$21,400 Total ($7.5k retainers)',
          margin: '91% Net',
          funnel: 'Scraped customer reviews → Generated AI video script hooks and branded social carousels via Claude API.',
          keyTakeaway: 'Combine AI speed with human curation to produce enterprise-grade content in minutes.',
          tag: 'Creative Automation',
        },
      ],
      mythsToAvoid: [
        {
          myth: 'You have to be a senior Python programmer or machine learning PhD.',
          reality: '90% of commercial AI automation is glue-work: connecting existing APIs (OpenAI, Anthropic) to tools like Airtable, Make.com, and Slack with no-code visual nodes.',
          lossPrevention: 'Never spend 6 months trying to train custom models from scratch. Use existing frontier LLMs and focus entirely on business logic.',
        },
        {
          myth: 'Pitch businesses on "Artificial Intelligence" and technical jargon.',
          reality: 'Traditional CEOs do not care about vector embeddings, RAG, or token limits. They care about: "Will this stop my employees from wasting 3 hours a day on data entry?"',
          lossPrevention: 'Speak strictly in terms of hours saved, errors eliminated, and faster response times to new customer leads.',
        },
        {
          myth: 'Build complex custom solutions from scratch for every single client.',
          reality: 'Custom builds trap you in endless unpaid revisions. Build 2 or 3 standard modular automation templates (e.g. Lead Intake System, Invoice Extractor) and sell the exact same system to 20 different companies.',
          lossPrevention: 'Productize your automation service. Sell standardized packages: $4,500 setup + $750/mo support.',
        },
      ],
    },
    lessons: [
      {
        id: 'ai-lesson-1',
        number: 1,
        title: 'Identifying High-Dollar Repetitive Friction in Traditional Businesses',
        duration: '40 min discovery',
        estimatedYield: 'Uncovers $5k-$10k automation project opportunities on every sales call',
        summary: 'How to audit a non-technical business and find the 3 manual workflows that cost them thousands in wasted salary every single month.',
        tasks: [
          { id: 'ai-t1', text: 'Conduct the "10-Hour Audit": Ask the business owner: "What task does your team do every single day that feels like copy-pasting?"' },
          { id: 'ai-t2', text: 'Map the 3 Highest-Value Automation Categories: (1) Instant Lead Response, (2) Document/Invoice Data Extraction, (3) Automated Client Onboarding' },
          { id: 'ai-t3', text: 'Calculate the Financial ROI: 20 hours/week saved × $30/hour employee cost = $2,400/mo saved. An $4,500 setup fee pays for itself in 60 days.' },
        ],
        frameworks: [
          { title: 'The 5-Minute Lead Rule', desc: 'If a business replies to an inbound lead in under 5 minutes, their conversion rate is 391% higher than if they wait 30 minutes. Automated AI responses deliver this instantly.' },
          { title: 'The Standardized Module Architecture', desc: 'Trigger (Webhook/Email) → Normalizer (Airtable) → AI Processing (OpenAI/Claude) → Action (Slack Notification + CRM update).' },
        ],
        goldenRule: 'Never automate a bad process. Clarify and optimize the workflow first, then automate it with AI.',
      },
      {
        id: 'ai-lesson-2',
        number: 2,
        title: 'Building the 24/7 Automated Lead Intake & CRM Pipeline (Make.com Blueprint)',
        duration: '60 min hands-on build',
        estimatedYield: 'The core asset you can resell to 15 different local business clients',
        summary: 'Step-by-step visual blueprint connecting Webforms, OpenAI assistants, Twilio SMS, and Google Sheets/HubSpot.',
        tasks: [
          { id: 'ai-t4', text: 'Create free Make.com account and build Webhook Listener node to capture form submissions' },
          { id: 'ai-t5', text: 'Pass customer inquiry text to OpenAI node with custom system prompt to score lead quality (High / Medium / Low)' },
          { id: 'ai-t6', text: 'If High Quality: Trigger instant SMS via Twilio with booking link and ping the sales team private Slack channel' },
        ],
        frameworks: [
          { title: 'Error-Proof Fallback Routing', desc: 'Always include a fallback branch: If the AI confidence score is below 85%, route the task to a human staff member with an alert.' },
          { title: 'Client Token Encapsulation', desc: 'Have the client create their own OpenAI API key so they pay their own nominal API usage costs directly.' },
        ],
        goldenRule: 'Reliability is everything. An automation that breaks twice a month will get your retainer canceled. Build strict error handling into every node.',
      },
      {
        id: 'ai-lesson-3',
        number: 3,
        title: 'Packaging & Selling Recurring "AI Maintenance & Monitoring" Retainers',
        duration: '45 min pricing model',
        estimatedYield: 'Builds $10k-$20k in predictable monthly recurring revenue (MRR)',
        summary: 'How to structure your client agreements so you get paid every month to monitor, update, and improve their automated infrastructure.',
        tasks: [
          { id: 'ai-t7', text: 'Package your monthly retainer: $950/mo covers 24/7 uptime monitoring, prompt maintenance, API version updates, and up to 3 minor workflow enhancements' },
          { id: 'ai-t8', text: 'Send an automated monthly "Impact Report" showing exact hours saved, tasks completed, and error rate (0%)' },
          { id: 'ai-t9', text: 'Set up recurring auto-billing via Stripe Subscriptions on the 1st of every month' },
        ],
        frameworks: [
          { title: 'The Software-With-A-Service (SWAS) Model', desc: 'Clients don’t want software; they want the peace of mind that an expert is monitoring their mission-critical business plumbing.' },
          { title: 'The Expansion Revenue Loop', desc: 'Once you successfully automate one department (e.g. Sales Intake), pitch the next department (Operations or HR) for an additional $3,500 project fee.' },
        ],
        goldenRule: 'Retainers are kept through visible communication. When clients see a monthly metric showing 850 automated tasks executed, canceling is unthinkable.',
      },
    ],
    vault: [
      {
        id: 'ai-v1',
        title: 'The "5-Minute Lead Response" Cold Pitch Script to Local Business CEOs',
        category: 'Cold Outbound DMs',
        description: 'Send this to real estate agencies, roofers, dentists, and lawyers to book instant demonstration calls.',
        content: `Subject: tested your website form at 2:15 PM (took 4 hours for a response)

Hey [First Name],

I submitted a test inquiry on your website form today at 2:15 PM to see how your intake works.

It took 4 hours and 12 minutes to receive an initial confirmation email.

Harvard Business Review showed that if you don't respond to a customer lead within 5 minutes, your chances of closing them drops by 80% — because they are already calling the competitor below you on Google.

We built an automated AI workflow that connects to your current website, qualifies the customer's budget via SMS in 45 seconds, and books the call directly on your calendar before they click off the page.

Here is a 60-second video demo showing how it works with zero staff intervention:
👉 [Link to 60-second Loom Demo]

Mind if I send over the blueprint diagram?

Best,
[Your Name]`,
        conversionMetric: '34.8% Reply Rate from High-Ticket Business Owners',
        tags: ['Cold Email', 'AI Pitch', 'Local Business'],
      },
      {
        id: 'ai-v2',
        title: 'Production-Ready System Prompt: Lead Qualification & Sentiment Extractor',
        category: 'AI Prompts',
        description: 'Paste this system prompt directly into your OpenAI / Anthropic node in Make.com or n8n to classify raw inbound inquiries with 99% accuracy.',
        content: `You are an executive assistant and elite sales qualification agent for [Company Name].

Your job is to analyze the inbound customer inquiry text and return a strict JSON payload.

RULES:
1. Estimate budget if mentioned, or set to "UNKNOWN".
2. Assess urgency: "CRITICAL" (needs service within 48h), "MODERATE" (next 1-2 weeks), or "LOW" (just browsing).
3. Determine Lead Score from 1 to 10 based on clear intent, budget, and contact info provided.
4. Output MUST be valid JSON only with NO preamble and NO conversational filler.

OUTPUT SCHEMA:
{
  "lead_score": number,
  "urgency": "CRITICAL" | "MODERATE" | "LOW",
  "project_summary": "1 concise sentence",
  "key_objection_or_risk": "string",
  "recommended_action": "INSTANT_CALL" | "EMAIL_SEQUENCE" | "DISQUALIFY"
}`,
        conversionMetric: '100% Reliable JSON Execution in Make.com',
        tags: ['System Prompt', 'JSON Mode', 'Make.com Node'],
      },
      {
        id: 'ai-v3',
        title: 'Make.com Complete Lead Intake Blueprint JSON (Export / Import Format)',
        category: 'Templates',
        description: 'Import this pre-configured scenario into Make.com to deploy a fully functional multi-branch AI intake engine in 60 seconds.',
        content: `{
  "name": "TFP Instant AI Lead Qualification & Dispatch Engine",
  "nodes": [
    { "id": 1, "module": "gateway:CustomWebHook", "params": { "path": "/tfp-intake" } },
    { "id": 2, "module": "openai:CreateChatCompletion", "params": { "model": "gpt-4o-mini", "response_format": "json_object" } },
    { "id": 3, "module": "router:Filter", "params": { "condition": "lead_score >= 7" } },
    { "id": 4, "module": "twilio:SendSMS", "params": { "message": "Thanks for reaching out! Book priority slot: [Cal.com Link]" } },
    { "id": 5, "module": "slack:PostMessage", "params": { "channel": "#sales-hot-leads", "priority": "high" } }
  ]
}`,
        conversionMetric: 'Deploy in under 2 minutes',
        tags: ['Make Blueprint', 'Automation Code', 'No-Code'],
      },
    ],
    tools: [
      {
        id: 'tool-make',
        name: 'Make.com',
        category: 'Visual Workflow Orchestration',
        cost: 'Free tier / $9 mo for Core',
        purpose: 'The ultimate visual workflow builder to connect over 1,500 apps with custom webhooks, branching logic, and error handlers.',
        insiderAdvantage: 'Much cheaper and more flexible than Zapier, with visual debugging data inspections.',
        url: 'https://make.com',
        isEssential: true,
      },
      {
        id: 'tool-n8n',
        name: 'n8n',
        category: 'Self-Hosted & Cloud Workflows',
        cost: 'Free (self-hosted) / $20 mo cloud',
        purpose: 'Advanced workflow automation for technical teams needing custom JavaScript, Python, or self-hosted data privacy for enterprise clients.',
        insiderAdvantage: 'Unlimited executions when self-hosted on a $5/mo VPS server.',
        url: 'https://n8n.io',
        isEssential: true,
      },
      {
        id: 'tool-openai',
        name: 'OpenAI API / Anthropic API',
        category: 'Frontier Intelligence Layer',
        cost: 'Pay-per-token usage ($0.15 - $3 per million tokens)',
        purpose: 'Power all qualification, categorization, document parsing, and voice transcription tasks.',
        insiderAdvantage: 'GPT-4o-mini is so fast and cheap that running 10,000 tasks costs less than a cup of coffee.',
        url: 'https://platform.openai.com',
        isEssential: true,
      },
      {
        id: 'tool-airtable',
        name: 'Airtable',
        category: 'Relational Database & Admin UI',
        cost: 'Free tier / $20 mo',
        purpose: 'Provide clients with a sleek, clean spreadsheet interface where they can view all leads and automations running in real time.',
        insiderAdvantage: 'Clients love the visual Kanban and gallery views, making your service look like enterprise custom software.',
        url: 'https://airtable.com',
        isEssential: true,
      },
      {
        id: 'tool-twilio',
        name: 'Twilio',
        category: 'Telephony & SMS API',
        cost: 'Pay per SMS ($0.0079 per text)',
        purpose: 'Trigger programmatic 2-way SMS notifications and appointment reminders to prospects.',
        insiderAdvantage: 'SMS achieves a 98% open rate compared to 20% for email.',
        url: 'https://twilio.com',
        isEssential: false,
      },
    ],
  },
];

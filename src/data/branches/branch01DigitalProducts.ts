import { Branch17PageData } from '@/types/branchPlaybook';

export const branch01DigitalProducts: Branch17PageData = {
  branchId: 'digital-products',
  branchName: '01 Digital Products & Lead Magnets',
  shortName: 'Digital Products',
  targetBenchmark: '$10,000 – $35,000/mo Target',
  badge: 'High Margin 90%+',
  themeColor: 'lime',
  techStackList: [
    { name: 'Lemon Squeezy / Gumroad', role: 'Merchant of Record & Checkout', cost: 'Free setup (5–10% fee)' },
    { name: 'Notion', role: 'Asset Workspace & Operating Systems', cost: '$0 / Free tier' },
    { name: 'Framer / Vercel', role: 'High-Converting 1-Page Funnel', cost: '$0–$15/mo' },
    { name: 'Beehiiv', role: 'Email Newsletter & Auto-Sequence', cost: '$0 / Free tier' },
    { name: 'Shots.so / Figma', role: '3D Mockup Box Generation', cost: '$0 Free' },
  ],

  part1: {
    page1MacroReality: {
      headline: 'The Death of Bloated 10-Hour Video Courses & The Rise of Tactical Digital Assets',
      currentLandscape:
        'In 2026, the traditional $997 video course model is officially dead. Buyers have zero patience for 14 hours of filler lectures recorded by talking heads. The market has shifted permanently toward tactical micro-assets: Notion systems, n8n automation blueprints, swipe files, and plug-and-play templates that solve ONE specific, bleeding-neck problem in under 15 minutes of implementation.',
      whyOldMethodsFail:
        'Course completion rates across the internet have collapsed to under 3.2%. When customers do not finish a course, they never experience the outcome, leading to 15%+ refund rates, payment chargebacks, and brand burnout. Selling bloated video libraries creates high friction and zero word-of-mouth compounding.',
      modernBuyerExpectations:
        'Modern high-income buyers pay for curation, speed, and immediate utility. If a $47 digital toolkit saves an engineer, agency owner, or freelancer 4 hours of tedious setup, the ROI is mathematically instantaneous. They do not want education; they want compressed execution.',
      marketThesis:
        'Build once, sell infinitely with 90%+ gross margins. Strip all theory. Give the buyer the exact templates, scripts, and automation files, and automate 100% of distribution.',
    },

    page2UnitEconomics: {
      headline: 'Unit Economics: How $47 Front-End Assets Compound into $28,000/mo Net Cash Flow',
      calculatorDefaults: {
        traffic: 4500,
        conversionRate: 2.8,
        aov: 54, // Including order bump
        feePercent: 6.5,
        overhead: 29,
        unitLabel: 'Customer Orders',
      },
      pAndLBreakdown: [
        { item: 'Front-End Core Asset ($37 – $67)', benchmark: '$15,000 – $22,000/mo', note: '80% of front-end buyers' },
        { item: '1-Click Checkout Order Bump ($19 – $27)', benchmark: '42% Take Rate', note: 'Adds $8-$11 pure profit per order' },
        { item: 'Back-End Digital Vault Bundle ($147)', benchmark: '12% Conversion', note: 'Delivered via 4-day email sequence' },
        { item: 'Merchant Fee (Lemon Squeezy/Stripe)', benchmark: '5% + $0.50 per tx', note: 'Zero fixed merchant costs' },
        { item: 'Net Operating Profit Margin', benchmark: '92.4% Net Margin', note: 'Zero inventory, zero shipping, zero staff' },
      ],
      cacLtvBenchmarks: [
        { metric: 'Organic Customer Acquisition Cost (CAC)', target: '$0.00', explanation: 'Acquired through free viral lead magnet opt-ins on X, LinkedIn & YouTube' },
        { metric: 'Paid Acquisition Breakeven CAC', target: '< $24.00', explanation: 'Allows scaling $10/day Meta & X ads at positive day-1 ROAS' },
        { metric: 'Customer Lifetime Value (LTV 90-Day)', target: '$89.00', explanation: 'Compounded by back-end template bundles and community upgrades' },
      ],
    },

    page3Architecture: {
      headline: 'Systemic Architecture: The Automated Attention-to-Stripe Cash Flow Pipeline',
      systemFlowStages: [
        { stage: 'Stage 01: Attention', name: 'Micro-Value Hook', mechanism: 'Short tactical breakdown post on X/LinkedIn highlighting an expensive industry flaw.', output: '10,000–50,000 Impressions' },
        { stage: 'Stage 02: Opt-In', name: 'Free Lead Magnet Cheat Sheet', mechanism: 'User comments or clicks bio link to download a 2-page distilled checklist.', output: '300–600 Email Subscribers/wk' },
        { stage: 'Stage 03: Front-End', name: 'Tripwire Checkout ($27–$47)', mechanism: 'Thank-you page offers the Full Automated System with a 15-minute countdown discount.', output: '5%–8% Day-1 Conversion' },
        { stage: 'Stage 04: Order Bump', name: 'Implementation Swipe ($19)', mechanism: 'Single-checkbox add-on: "Add 50 Cold Outbound Scripts to my order for $19".', output: '40%+ Bump Take Rate' },
        { stage: 'Stage 05: Back-End', name: 'High-Ticket Upsell Funnel', mechanism: 'Automated 4-day email nurture introducing custom implementation support ($1,500).', output: '$3,000–$6,000 High-Ticket Deals' },
      ],
      architectureDiagramNote: 'This pipeline operates 24/7/365 without manual intervention. Your only daily operational task is queuing up 2 value posts on social platforms.',
    },

    page4AsymmetricLeverage: {
      headline: 'The 3 Vectors of Asymmetric Digital Leverage',
      leverageVectors: [
        {
          vector: 'Zero Marginal Cost of Reproduction',
          description: 'Producing the 1st copy of your Notion OS or Framer UI Kit takes 20 hours. Producing the 10,000th copy takes 0.00 seconds and costs $0.00 in cloud bandwidth.',
          mathAdvantage: 'Marginal Cost = $0.00 | Profit Scaling = Exponential',
        },
        {
          vector: 'Automated Global Delivery & Settlement',
          description: 'Lemon Squeezy acts as the Merchant of Record, automatically calculating and remitting EU/UK VAT, handling chargebacks, and delivering access tokens worldwide.',
          mathAdvantage: 'Zero legal footprint needed across 135+ supported countries',
        },
        {
          vector: 'Permissionless Software Distribution',
          description: 'Unlike physical stores constrained by foot traffic, an internet asset is accessible to 5.4 billion connected individuals simultaneously with zero distribution gatekeepers.',
          mathAdvantage: 'Global Market Size = 1,000,000x greater than local retail',
        },
      ],
    },

    page5FailureAnalysis: {
      headline: 'Forensic Analysis: Why 99% of Digital Product Creators Make Under $100',
      capitalPreservationRule:
        'Never spend more than $30 to validate a digital product idea. If you cannot get 50 free email opt-ins for a raw 2-page outline, you will NEVER get 50 paying customers for a $47 product.',
      traps: [
        {
          trapNumber: '01',
          title: 'Building in a Silo for 3 Months Before Validating',
          fatalMistake: 'Writing 120 pages of content or creating 40 video modules without verifying whether anyone actually wants to buy the outcome.',
          mitigationProtocol: 'Run the 48-Hour Smoke Test: Build a 1-page Framer pre-order page with a mockup cover and collect 10 pre-orders before creating the asset.',
        },
        {
          trapNumber: '02',
          title: 'Pricing Too High on Front-End Without Trust',
          fatalMistake: 'Trying to sell an unproven $297 course directly to cold social media traffic with zero brand recognition.',
          mitigationProtocol: 'Price front-end products at impulse thresholds ($27–$47) to eliminate financial hesitation, then monetize on backend retainers.',
        },
        {
          trapNumber: '03',
          title: 'Relying on Gumroad Platform Discovery',
          fatalMistake: 'Expecting Gumroad or Etsy search algorithms to send paying traffic without personal distribution systems.',
          mitigationProtocol: 'Own your distribution: Drive traffic from your own X/LinkedIn posts directly to your Beehiiv newsletter and Lemon Squeezy checkout.',
        },
        {
          trapNumber: '04',
          title: 'Vague, Academic Value Propositions',
          fatalMistake: 'Naming products "General Productivity Guide" instead of "The 4-Hour Solopreneur Operating System for $10k/mo Freelancers".',
          mitigationProtocol: 'Use the High-Concept Equation: "Specific Desired Outcome" + "Definite Time Horizon" - "Hated Obstacle".',
        },
        {
          trapNumber: '05',
          title: 'Zero Order Bumps or Upsell Sequences',
          fatalMistake: 'Leaving 50% of potential transaction value on the table by offering only a single standalone item at checkout.',
          mitigationProtocol: 'Always attach a $17–$27 impulse order bump and an automated 3-part backend email nurture sequence.',
        },
      ],
    },
  },

  part2: {
    page6CaseStudies: [
      {
        title: 'The Solo Prompt Engineering Toolkit ($19,840 in 28 Days)',
        student: 'Marcus Sterling (Age 24)',
        timeline: '28 Days from zero to $19,840 net',
        revenue: '$19,840 Gross Revenue',
        margin: '96.2% Net Profit',
        trafficSource: 'X/Twitter Thread Breakdowns (2 threads/week) + Free 10-Prompt Starter Pack',
        pricingStructure: '$37 Front-End Toolkit + $19 Order Bump (Audio Breakdown) + $147 Full System',
        exactFunnel: 'X Hook Post → Bio Link to Free Starter Pack (Beehiiv) → Automated 3-Email Welcome Sequence → Lemon Squeezy Checkout with 48h coupon.',
        breakdownStory:
          'Marcus noticed solopreneurs were struggling to get Claude and ChatGPT to produce reliable copywriting. Instead of teaching a class, he spent 14 hours curating 85 production-ready prompts into a Notion OS. He posted 4 breakdown threads dissecting real marketing campaigns. Within 4 weeks, 2,800 people downloaded the free starter pack, and 418 converted to the paid $37 toolkit with a 44% order bump take rate.',
        keyTakeaway: 'Package what people are already trying to do manually into a 1-click clipboard asset.',
      },
      {
        title: 'Niche Real Estate Cold Call Audio Vault ($32,400 in 45 Days)',
        student: 'Elena Rostov',
        timeline: '45 Days to $32,400 net',
        revenue: '$32,400 Total Inflow',
        margin: '93.5% Net Profit',
        trafficSource: 'Shortform Reels & TikToks demonstrating Bad vs Good Cold Calls',
        pricingStructure: '$47 Audio Vault + $27 Objection Handling Flashcards + $497 1-on-1 Script Review',
        exactFunnel: 'Reels Hook → "Comment SCRIPTS to get the free 3-page guide" (ManyChat automation) → DM link → Checkout page with order bump.',
        breakdownStory:
          'Elena recorded her real cold calls selling commercial real estate and highlighted the exact seconds objections occurred. She packaged 20 raw audio MP3s and PDF breakdown notes into a private portal. Real estate agents, who earn $10,000+ commissions per deal, happily paid $47 to save hundreds of wasted hours on dead phone calls.',
        keyTakeaway: 'High-income professional niches have zero price sensitivity for tactical assets that improve conversion.',
      },
    ],

    page7SwipeFile: {
      headlineFormulas: [
        { formula: 'The "Without" Formula', example: 'How to Build an Automated $10k/mo Digital Asset in 48 Hours Without Showing Your Face or Writing Code' },
        { formula: 'The Curated Mistakes Formula', example: 'The 40 Cold Outreach Scripts That Generated $418,000 (And the 5 Mistakes That Burned 1,000 Leads)' },
        { formula: 'The Operating System Formula', example: 'The Agency OS: The Exact Notion Workspace We Use to Manage 24 Retainers and $85k/mo in Billables' },
        { formula: 'The Time-Compression Formula', example: 'Stop Wasting 10 Hours a Week on Formatting: Grab 120 Plug-and-Play Framer Components in 1 Click' },
      ],
      valueStackFramework: [
        { tier: 'Tier 1: Essential Asset ($27)', offer: 'Core Notion Template + 30-Day Implementation Checklist', price: '$27', anchor: 'Perceived value: $97' },
        { tier: 'Tier 2: Tactical Operating System ($67)', offer: 'Core Asset + Video Walkthroughs + 40 Ready-to-Send Cold Outbound Scripts + 1-Click Loom Audit Framework', price: '$67', anchor: 'Perceived value: $297' },
        { tier: 'Tier 3: Executive Lifetime Suite ($197)', offer: 'Everything in Tier 2 + Lifetime Access to Future Updates + Private Discord Community + 1-on-1 Asset Review', price: '$197', anchor: 'Perceived value: $997' },
      ],
      swipeItems: [
        {
          type: 'Email Sequence',
          title: 'The 24-Hour Urgent Expiration Email (Swipe & Deploy)',
          purpose: 'Send on Day 4 of automated welcome series to convert 12%+ of cold email subscribers.',
          content: `Subject: Closing down your 40% launch discount in 6 hours...

Hey [First Name],

Quick heads-up because I don't want you to message me tomorrow asking if I can extend this:

At midnight tonight, your launch discount and the [Exclusive Bonus Asset] are disappearing permanently.

Here is the bottom line:
You can keep spending the next 3 months trying to piece together random YouTube clips and guessing what works...

Or you can grab the exact plug-and-play system that [Case Study Name] used to generate [Specific Result] in just [Timeframe].

👉 Click here to claim your instant download before the timer hits 0:00: [Your Lemon Squeezy Link]

You are fully backed by my 30-Day "Action Taker" 100% money-back guarantee. If you open the system and feel it doesn't give you 10x ROI on your $47, just email me and I will refund every penny.

Zero risk. Total upside.

Talk soon,
[Your Name]`,
        },
        {
          type: 'Order Bump Copy',
          title: 'High-Converting 1-Click Checkout Order Bump',
          purpose: 'Place in Lemon Squeezy or Stan Store checkout box to capture 40%+ add-on sales.',
          content: `[ ] YES! Upgrade my order with the "Audio Breakdown Vault" ($19)

Get instant access to 45 minutes of unfiltered founder commentary breaking down the 5 biggest mistakes to avoid when implementing this system. Saves you 20+ hours of trial and error. (Usually $49 — check this box to grab it for just $19 today).`,
        },
      ],
    },
  },

  part3Steps: [
    {
      stepNumber: 1,
      pageNumber: 8,
      title: 'Step 1: Validation & Niche Selection Framework',
      subtitle: 'Find Lucrative Bleeding-Neck Problems People Are Already Paying to Solve',
      objective: 'Identify an expensive problem in a high-income market and validate demand within 24 hours.',
      timeToExecute: '4 Hours',
      deliverable: '1-sentence validated offer proposition and competitor audit sheet',
      detailedWalkthrough: [
        'Audit Reddit (r/freelance, r/SaaS, r/marketing) and search: "what is the best template for", "I would pay for someone to give me", "why is there no software that".',
        'Search Gumroad and Stan Store for top-performing creators in your target niche. If at least 3 people have 100+ ratings charging $27–$97, market demand is 100% verified.',
        'Formulate the High-Concept Statement: "I help [Target Avatar] achieve [Specific Dream Result] in [Timeframe] without [Frustrating Obstacle]."',
      ],
      goldenRule: 'Never create an asset for broke hobbyists. Sell to people whose business or career benefits financially from saving time.',
      codeOrScriptSnippet: {
        title: 'Claude 3.5 Sonnet Master Validation Prompt',
        badge: 'AI PROMPT CHAIN',
        type: 'prompt',
        description: 'Feed this prompt into Claude 3.5 Sonnet to reverse-engineer top-selling digital products in any niche.',
        content: `You are an elite digital product strategist responsible for $20M+ in info-product and software sales.

I want to create a high-margin digital product in this niche: [INSERT NICHE, e.g. B2B Cold Email Outreach / Notion Solopreneur OS / Real Estate Lead Generation].

Target Avatar: [INSERT AVATAR, e.g. Agency owners scaling from $5k to $20k/mo]

Analyze this market and provide:
1. The 3 most excruciating "bleeding neck" operational bottlenecks they experience daily.
2. Outline a 3-part digital toolkit structure (Notion Template + Swipe File + Audio Guide) with perceived value of $197 priced at $37-$47.
3. 5 high-converting headline hooks following the "How to [Desired Result] in [Timeframe] without [Painful Obstacle]" formula.
4. 2 irresistible $17 checkout order bump offers that complement the core product naturally.`,
      },
      tasks: [
        { id: 'dp-s1-t1', text: 'Scan 3 Reddit and Twitter competitor threads for recurring complaints' },
        { id: 'dp-s1-t2', text: 'Document 3 competing digital products with at least 50 verified customer reviews' },
        { id: 'dp-s1-t3', text: 'Write down your 1-Sentence High-Concept Offer Proposition' },
      ],
    },

    {
      stepNumber: 2,
      pageNumber: 9,
      title: 'Step 2: Offer Design & High-Value Packaging',
      subtitle: 'Transform Raw Information into an Irresistible 3-Tier Luxury Toolkit',
      objective: 'Construct the product tiers, order bumps, and perceived-value multipliers.',
      timeToExecute: '6 Hours',
      deliverable: 'Complete product breakdown outline with 3 tiers and order bump specs',
      detailedWalkthrough: [
        'Design Tier 1 ($27-$37): The Core Asset. 1 Notion workspace, 1 checklist, or 1 swipe file that works immediately.',
        'Design Tier 2 ($67-$97): The Operating Suite. Includes video walkthroughs, additional templates, and real case breakdowns.',
        'Design Tier 3 ($197+): The Implementation Bundle. Includes private updates, community access, and asynchronous loom audit review.',
        'Create high-resolution 3D mockup assets on Shots.so or Canva showing a sleek iPad, MacBook, and box bundle layout.',
      ],
      goldenRule: 'Visual perception equals price authority. A clean 3D mockup increases perceived product value by over 300%.',
      tasks: [
        { id: 'dp-s2-t1', text: 'Finalize Tier 1, Tier 2, and Tier 3 pricing and feature boundaries' },
        { id: 'dp-s2-t2', text: 'Write order bump copy ($19 add-on at checkout)' },
        { id: 'dp-s2-t3', text: 'Generate 3D mockup graphic bundle on Shots.so' },
      ],
    },

    {
      stepNumber: 3,
      pageNumber: 10,
      title: 'Step 3: Tech Infrastructure Setup',
      subtitle: 'Deploy Lemon Squeezy, Custom Domain, and Beehiiv Email Engine in 60 Minutes',
      objective: 'Set up seamless merchant processing, custom domain email, and automated lead capture.',
      timeToExecute: '2 Hours',
      deliverable: 'Live Lemon Squeezy product links and connected Beehiiv publication',
      detailedWalkthrough: [
        'Register a clean domain on Namecheap or Cloudflare (e.g. [productname]system.com).',
        'Create a Lemon Squeezy store. Enable Apple Pay, Google Pay, and credit card processing with automatic EU VAT remittance.',
        'Set up Beehiiv for automated lead collection. Connect a custom subdomain (e.g. newsletter.[yourdomain].com).',
        'Configure webhook redirect from Lemon Squeezy success page to the Notion asset duplicate link.',
      ],
      goldenRule: 'Do not build a complex custom web app. Use battle-tested infrastructure that processes global cards with zero server maintenance.',
      codeOrScriptSnippet: {
        title: 'Lemon Squeezy Webhook Payload Handler (Next.js API Route)',
        badge: 'NEXT.JS CODE',
        type: 'code',
        description: 'Copy this API route into /src/app/api/webhook/lemon/route.ts to automatically process sales and add customers to Beehiiv.',
        content: `import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-signature');
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET || '';

    // Verify HMAC signature
    const hmac = crypto.createHmac('sha256', secret);
    const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
    const checksum = Buffer.from(signature || '', 'utf8');

    if (!crypto.timingSafeEqual(digest, checksum)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const payload = JSON.parse(rawBody);
    const eventName = payload.meta.event_name;

    if (eventName === 'order_created') {
      const customerEmail = payload.data.attributes.user_email;
      const orderTotal = payload.data.attributes.total_usd;
      console.log(\`✅ Verified Sale: \${customerEmail} spent $\${orderTotal / 100}\`);

      // Trigger automatic welcome email or CRM tag
      // await addSubscriberToBeehiiv(customerEmail);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}`,
      },
      tasks: [
        { id: 'dp-s3-t1', text: 'Create Lemon Squeezy store and configure product checkout' },
        { id: 'dp-s3-t2', text: 'Setup Beehiiv newsletter account and connect custom email domain' },
        { id: 'dp-s3-t3', text: 'Test a $1 test transaction to verify payment and fulfillment delivery' },
      ],
    },

    {
      stepNumber: 4,
      pageNumber: 11,
      title: 'Step 4: Building the MVP / Asset Assembly',
      subtitle: 'Produce the Complete High-Value Asset in Under 12 Hours with AI Leverage',
      objective: 'Construct the Notion workspace, scripts, and PDF cheat sheet ready for customer delivery.',
      timeToExecute: '12 Hours',
      deliverable: 'Complete, polished Notion Operating System template with duplicate button enabled',
      detailedWalkthrough: [
        'Create a master Notion workspace. Divide into 4 clean sections: Dashboard, Strategy, Checklists, and Swipe Files.',
        'Write step-by-step implementation instructions. Include realistic examples and avoid abstract theory.',
        'Embed interactive database views with progress bars and task checkboxes.',
        'Generate downloadable PDF cheat sheet versions using Canva for customers who prefer offline access.',
      ],
      goldenRule: 'Make the template visually stunning. Beautiful layout and clear icons make a Notion template feel like enterprise software.',
      codeOrScriptSnippet: {
        title: 'Claude 3.5 Sonnet Full Notion Blueprint Generator',
        badge: 'AI PROMPT CHAIN',
        type: 'prompt',
        description: 'Use this prompt to build the entire content architecture of your Notion system.',
        content: `You are an elite product architect. Generate the complete contents for a Notion-based operating system titled: "[PRODUCT NAME]".

The product solves this specific problem: [INSERT PROBLEM].

Generate:
1. Home Dashboard Layout (Widgets, Quick Actions, Daily Checklist).
2. The 5 Core Execution Databases (Columns, properties, and default tags).
3. 3 Step-by-Step Tactical SOPs written in bullet points with zero fluff.
4. An "Emergency Troubleshooting / FAQ" page resolving the 5 most common errors beginners encounter.

Make the tone confident, direct, and actionable. Write out every single checklist item in full.`,
      },
      tasks: [
        { id: 'dp-s4-t1', text: 'Build master Notion database and customize typography & banner styling' },
        { id: 'dp-s4-t2', text: 'Write out all actionable checklists and SOP operating procedures' },
        { id: 'dp-s4-t3', text: 'Set Notion page sharing settings to "Allow duplicate as template"' },
      ],
    },

    {
      stepNumber: 5,
      pageNumber: 12,
      title: 'Step 5: Landing Page & High-Converting Funnel Architecture',
      subtitle: 'Build a 1-Page Minimalist Framer Page Converting at 3% to 6%',
      objective: 'Assemble the high-converting sales lander with social proof and urgency hooks.',
      timeToExecute: '6 Hours',
      deliverable: 'Live Framer or Next.js sales page connected directly to Lemon Squeezy checkout',
      detailedWalkthrough: [
        'Hero Section: Bold headline, subheadline, 3D mockup image, and prominent "Get Instant Access ($47)" button.',
        'The Bleeding Neck Section: Detail the painful, time-consuming reality of doing this without the system.',
        'The Solution Showcase: Screenshot previews of the Notion OS, databases, and checklists in action.',
        'Social Proof & Guarantee: Display verified reviews and the 30-day "Action Taker" money-back guarantee.',
      ],
      goldenRule: 'Fast loading speed beats fancy animations. A simple, dark-mode 1-page layout converts higher than bloated web pages.',
      tasks: [
        { id: 'dp-s5-t1', text: 'Deploy Framer 1-page template or Next.js lander' },
        { id: 'dp-s5-t2', text: 'Embed Lemon Squeezy modal checkout overlay' },
        { id: 'dp-s5-t3', text: 'Add FAQ section resolving the 4 primary objections' },
      ],
    },

    {
      stepNumber: 6,
      pageNumber: 13,
      title: 'Step 6: Organic Distribution Engine ("Document, Don\'t Preach")',
      subtitle: 'Generate 1,000+ Email Leads Every Month for $0 Without Paid Ads',
      objective: 'Deploy a repeatable social media posting system that funnels cold attention to your lead magnet.',
      timeToExecute: 'Daily 45 Min',
      deliverable: 'Weekly publishing schedule generating 50–150 qualified opt-ins every week',
      detailedWalkthrough: [
        'Publish 2 "Breakdown Threads" per week on X and LinkedIn dissecting real workflows or mistakes.',
        'At the end of every thread, offer the free lead magnet: "Want my 2-page checklist? Grab it free in my bio."',
        'Use ManyChat or automated DM tools to deliver the link instantly to anyone who comments "SEND".',
        'Document real build metrics and lessons. Vulnerable, transparent posts outperform generic inspirational quotes by 10x.',
      ],
      goldenRule: 'Never preach theory. Share real screenshots of your Notion workspace, real client messages, and real numbers.',
      codeOrScriptSnippet: {
        title: 'High-Converting Viral Thread Structure for X/LinkedIn',
        badge: 'ORGANIC HOOK SCRIPT',
        type: 'script',
        description: 'Copy this proven 5-part structure to draft threads that drive 500+ free email opt-ins.',
        content: `[TWEET 1 - THE HOOK]
I spent 3 years trying to figure out [Goal].
I wasted $4,000 and 200 hours on bad advice.

Here is the 15-minute system I use today to [Achieve Result] (with zero fluff): 🧵

[TWEET 2 - THE PROBLEM]
Most people fail at [Goal] because they do [Common Mistake].
This burns 90% of your time and produces $0.

Here is what top 1% operators do instead:

[TWEET 3 to 6 - TACTICAL VALUE]
Step 1: [Specific Action + Screenshot of your template]
Step 2: [Specific Action]
Step 3: [Specific Action]

[TWEET 7 - THE CALL TO ACTION]
I turned this exact system into a plug-and-play Notion template + checklist.

Grab the free 2-page starter pack here: [Your Link]
Retweet the first post if this helped you!`,
      },
      tasks: [
        { id: 'dp-s6-t1', text: 'Write and schedule 2 high-value breakdown threads for the upcoming week' },
        { id: 'dp-s6-t2', text: 'Set up bio link directly pointing to Beehiiv free lead magnet' },
        { id: 'dp-s6-t3', text: 'Respond to all comments within 30 minutes of publishing to boost algorithm reach' },
      ],
    },

    {
      stepNumber: 7,
      pageNumber: 14,
      title: 'Step 7: Outbound Outreach & Paid Acquisition Pipeline',
      subtitle: 'Scale to $10,000/mo by Reinvesting Profits into $5/day Micro-Ad Testing',
      objective: 'Build predictable acquisition channels that deliver buyers even when you do not post.',
      timeToExecute: '4 Hours Setup',
      deliverable: 'Active $5/day Meta/X ad campaigns testing 3 creative angles',
      detailedWalkthrough: [
        'Identify your highest-performing organic post and turn it into a sponsored tweet or Meta ad.',
        'Run ads directly to the free lead magnet landing page with target cost-per-lead (CPL) under $1.50.',
        'Because 5% of leads buy the $37 front-end asset immediately, your ads self-liquidate on day 1.',
        'Scale budget by 20% every 3 days only when return on ad spend (ROAS) exceeds 1.5x.',
      ],
      goldenRule: 'Never run paid ads to cold traffic with an unvalidated product. Only amplify what already converts organically.',
      tasks: [
        { id: 'dp-s7-t1', text: 'Create Meta Ads Manager / X Ads account' },
        { id: 'dp-s7-t2', text: 'Design 3 static image creatives featuring product mockups' },
        { id: 'dp-s7-t3', text: 'Launch $5/day test campaign targeting lookalike interest groups' },
      ],
    },

    {
      stepNumber: 8,
      pageNumber: 15,
      title: 'Step 8: Fulfillment, Delivery & Onboarding Automation',
      subtitle: 'Delight Buyers in the First 60 Seconds to Drive Refunds to Under 0.5%',
      objective: 'Automate product access tokens, customer welcome emails, and onboarding instructions.',
      timeToExecute: '2 Hours',
      deliverable: 'Automated 1-click delivery flow with onboarding video welcome',
      detailedWalkthrough: [
        'On Lemon Squeezy purchase confirmation, automatically route buyer to a private "Getting Started" page.',
        'Include a 3-minute Loom video walking through how to duplicate the Notion template into their workspace.',
        'Add a "Click Here to Join Private Community / Get Support" button to foster community engagement.',
        'Send automated email receipt with backup download links within 30 seconds of card payment.',
      ],
      goldenRule: 'The first 5 minutes after purchase determine whether a customer becomes a raving fan or asks for a refund.',
      tasks: [
        { id: 'dp-s8-t1', text: 'Record 3-minute Loom walkthrough explaining how to duplicate template' },
        { id: 'dp-s8-t2', text: 'Configure automated delivery email in Lemon Squeezy dashboard' },
        { id: 'dp-s8-t3', text: 'Set up customer support inbox (support@[yourdomain].com)' },
      ],
    },

    {
      stepNumber: 9,
      pageNumber: 16,
      title: 'Step 9: Backend Monetization & High-Ticket Upsell Integration',
      subtitle: 'How to Turn $47 Buyers into $1,500–$3,000 Done-For-You Implementation Clients',
      objective: 'Integrate high-ticket service offers into the backend of your digital product ecosystem.',
      timeToExecute: '3 Hours',
      deliverable: 'Cal.com booking funnel embedded into the digital product and email sequence',
      detailedWalkthrough: [
        'Inside the Notion template, include an unobtrusive callout: "Need our team to custom-build this for your business? Book a strategy call."',
        'Send Email #6 in your automated series offering 2 spots per month for full Done-For-You implementation ($1,500-$3,000).',
        'Customers who already paid $47 and loved your asset are the easiest clients in the world to close on high-ticket retainers.',
        'Close deals over a 20-minute Zoom call using the proposal agreements in Branch 02.',
      ],
      goldenRule: 'Your digital product is not just a revenue generator—it is the highest-converting customer acquisition engine for high-ticket services.',
      tasks: [
        { id: 'dp-s9-t1', text: 'Embed Cal.com booking link inside the Notion product header' },
        { id: 'dp-s9-t2', text: 'Draft automated backend upsell email for Day 7 of customer journey' },
        { id: 'dp-s9-t3', text: 'Set up 1-page high-ticket implementation agreement' },
      ],
    },

    {
      stepNumber: 10,
      pageNumber: 17,
      title: 'Step 10: 90-Day Scaling, Optimization & KPI Protocol',
      subtitle: 'Systematize Your Operations to Maintain $10k–$35k/mo with 5 Hours of Weekly Maintenance',
      objective: 'Establish daily, weekly, and monthly operating rhythms to scale predictably.',
      timeToExecute: 'Ongoing Rhythm',
      deliverable: 'Weekly KPI tracking dashboard monitoring traffic, conversion, and net profit',
      detailedWalkthrough: [
        'Weekly KPI Review: Track Email Opt-ins, Checkout Conversion Rate, Order Bump % Take, and Net Profit.',
        'A/B Test 1 Element Every 14 Days: Test headline copy, 3D mockup variations, or pricing tiers.',
        'Publish 1 high-ticket customer case study every month to build compounding brand authority.',
        'Reinvest 20% of net profits into paid advertising and visual asset design.',
      ],
      goldenRule: 'Consistency over intensity. Two distribution posts per day for 90 days will beat 3 weeks of frantic effort every single time.',
      tasks: [
        { id: 'dp-s10-t1', text: 'Set up weekly KPI tracking spreadsheet or Notion dashboard' },
        { id: 'dp-s10-t2', text: 'Schedule recurring Sunday 30-minute metric review' },
        { id: 'dp-s10-t3', text: 'Commit to 90 consecutive days of execution without changing products' },
      ],
    },
  ],
};

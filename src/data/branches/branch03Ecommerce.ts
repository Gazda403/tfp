import { Branch17PageData } from '@/types/branchPlaybook';

export const branch03Ecommerce: Branch17PageData = {
  branchId: 'ecommerce-dropship',
  branchName: '03 E-Commerce & Micro-Dropshipping',
  shortName: 'E-Commerce / Micro-Scale',
  targetBenchmark: '$20,000 – $60,000/mo Target',
  badge: 'High Volume Scale',
  themeColor: 'yellow',
  techStackList: [
    { name: 'Shopify / Next.js Commerce', role: 'High-Converting 1-Product Storefront', cost: '$39/mo' },
    { name: 'TikTok Shop / Meta Ads Manager', role: 'Paid & Organic Traffic Engine', cost: '$5–$20/day test' },
    { name: 'AutoDS / CJ Dropshipping', role: 'Automated 5-Day US/EU Fulfillment', cost: '$19/mo' },
    { name: 'CapCut / Minuet', role: 'High-Paced Shortform Video Ad Creative', cost: '$0 Free tier' },
    { name: 'Loox / Judge.me', role: 'Social Proof & Photo Review Carousel', cost: '$9.99/mo' },
  ],

  part1: {
    page1MacroReality: {
      headline: 'The Death of Clunky 50-Item Catalog Stores & The Era of the Single-Problem Hero Brand',
      currentLandscape:
        'In 2026, building a generic dropshipping store with 40 random kitchen gadgets imported from AliExpress is completely dead. Shipping times of 25 days, cheap packaging, and bad Facebook ads guarantee customer chargebacks and banned ad accounts. The modern micro-ecom model revolves around hyper-focused single-product brands backed by private US/EU supplier fulfillment delivering in 3 to 7 days.',
      whyOldMethodsFail:
        'General stores dilute brand trust. When a cold visitor lands on a multi-category store with random currencies and pixelated images, conversion rates drop below 0.6%. You end up paying $45 in customer acquisition cost for a product you sell for $30, burning your advertising budget in days.',
      modernBuyerExpectations:
        'Modern TikTok and Instagram shoppers buy solutions to visceral daily annoyances: back pain relief, posture alignment, pet anxiety reduction, or aesthetic desk organization. They expect clean Apple-style product photography, instant Apple Pay checkout, and tracked 5-day shipping.',
      marketThesis:
        'Validate winning viral products using $5/day Meta ad tests or organic TikTok UGC. Once a winner produces 3.0+ ROAS, negotiate custom private supplier fulfillment and scale horizontally into $20k–$60k/mo revenue.',
    },

    page2UnitEconomics: {
      headline: 'Unit Economics: Anatomy of a $30,000/mo Hero E-Commerce Store at 65% Gross Margins',
      calculatorDefaults: {
        traffic: 8500,
        conversionRate: 3.2,
        aov: 68,
        feePercent: 3.5,
        overhead: 140,
        unitLabel: 'Customer Orders',
      },
      pAndLBreakdown: [
        { item: 'Customer Retail Price ($68.00 AOV)', benchmark: '100% Gross Inflow', note: 'Includes 1-click bundle discount at checkout' },
        { item: 'Cost of Goods Sold (COGS + Shipping)', benchmark: '$18.50 (27.2%)', note: 'Sourced via private CJ Dropshipping US line' },
        { item: 'Target Cost Per Acquisition (Ad Spend)', benchmark: '$22.00 (32.3%)', note: 'Blended Meta Ads + TikTok Shop affiliate commissions' },
        { item: 'Merchant & Gateway Fees', benchmark: '$2.38 (3.5%)', note: 'Shopify Payments / Stripe' },
        { item: 'Net Operating Profit Margin', benchmark: '$25.12 / order (37% Net)', note: 'Generates $6,800–$22,000/mo in pure net cash flow' },
      ],
      cacLtvBenchmarks: [
        { metric: 'Target Ad CPA (Cost Per Acquisition)', target: '< $24.00', explanation: 'Allows positive day-1 return on ad spend (ROAS > 2.5x)' },
        { metric: 'Checkout Conversion Rate', target: '2.8% – 4.2%', explanation: 'Achieved using 1-page checkout with Apple Pay & Google Pay' },
        { metric: 'Post-Purchase Upsell Take Rate', target: '22% – 35%', explanation: 'Instant 1-click upsell for replacement parts or 2nd unit discount' },
      ],
    },

    page3Architecture: {
      headline: 'Systemic Architecture: The Micro-Dropshipping Velocity Funnel',
      systemFlowStages: [
        { stage: 'Stage 01: Product Discovery', name: 'Viral Trend Spotting', mechanism: 'Filter TikTok Creative Center & Meta Ad Library for ads running 14+ days with high engagement.', output: '1 Validated Pain-Relief Product' },
        { stage: 'Stage 02: Store Assembly', name: '1-Product Clean Lander', mechanism: 'Deploy a minimalist Shopify or Next.js storefront highlighting 1 hero item, 3 visual GIFs, and customer reviews.', output: 'Sub-1-Second High-Trust Lander' },
        { stage: 'Stage 03: Ad Creative Testing', name: 'The 3x3 Creative Sprint', mechanism: 'Record 3 distinct hook variations (Problem, Contrast, Demonstration) tested across $5/day ad sets.', output: 'Identify 1 Hook with >3.0x ROAS' },
        { stage: 'Stage 04: Automated Fulfillment', name: 'Private Agent Integration', mechanism: 'Auto-sync orders to CJ Dropshipping or AutoDS for automated US/EU warehouse packing and tracking.', output: '3–7 Day Delivery with Tracking' },
        { stage: 'Stage 05: Brand Compounding', name: 'Custom Packaging & Scale', mechanism: 'At 30 orders/day, negotiate custom logo laser-engraving and branded poly mailers with suppliers.', output: 'Private Brand Asset Creation' },
      ],
      architectureDiagramNote: 'Because you never order thousands of units of inventory upfront, your downside risk on any unproven product is capped at $50 for ad testing.',
    },

    page4AsymmetricLeverage: {
      headline: 'The 3 Vectors of Asymmetric E-Commerce Leverage',
      leverageVectors: [
        {
          vector: 'Zero Physical Warehouse Risk',
          description: 'Traditional retail requires signing 3-year commercial leases and buying $20,000 of inventory upfront. Micro-dropshipping orders inventory only AFTER customer payment clears.',
          mathAdvantage: 'Inventory Risk = $0.00 | Working Capital Requirement = Minimal',
        },
        {
          vector: 'Infinite Algorithmic Distribution',
          description: 'A single viral 12-second TikTok UGC clip can generate 2,000,000 views and $40,000 in gross sales in 72 hours without spending a single dollar on ads.',
          mathAdvantage: 'Organic Viral Upside = Unbounded',
        },
        {
          vector: 'Supplier-Financed Operations',
          description: 'Customer pays your retail price ($68). You use their money to pay the supplier ($18.50) and pocket the remaining spread ($49.50) before fulfillment even begins.',
          mathAdvantage: 'Negative Working Capital Cycle (You get paid before paying suppliers).',
        },
      ],
    },

    page5FailureAnalysis: {
      headline: 'Forensic Analysis: Why 95% of Beginners Lose Money on Shopify Stores',
      capitalPreservationRule:
        'Kill ad campaigns quickly. If an ad set spends 1x your target break-even CPA ($25) without generating a single sale or at least 2 initiate checkouts, turn it off immediately. Never fall in love with a losing product.',
      traps: [
        {
          trapNumber: '01',
          title: 'Selling Cheap Saturated Trinkets',
          fatalMistake: 'Trying to dropship phone cases, cheap necklaces, or fidget spinners that customers can buy at Walmart for $5.',
          mitigationProtocol: 'Sell high perceived value problem-solvers (ergonomic support, anti-snoring tech, specialized kitchen tools) with at least a $40 retail margin spread.',
        },
        {
          trapNumber: '02',
          title: 'Terrible 20-Day Shipping Times',
          fatalMistake: 'Sourcing directly from slow standard shipping lines resulting in angry customers, credit card chargebacks, and frozen Stripe accounts.',
          mitigationProtocol: 'Only source from suppliers with verified US/EU local warehouse inventory offering 3–7 day delivery with USPS tracking.',
        },
        {
          trapNumber: '03',
          title: 'Overspending on Unvalidated Ad Sets',
          fatalMistake: 'Spending $300 on Facebook ads before testing the creative hook or verifying landing page conversion.',
          mitigationProtocol: 'Use the strict $5/day Micro-Budget Protocol: Test 3 ad sets at $5/day for 48 hours ($30 total spend) to find clear winners.',
        },
        {
          trapNumber: '04',
          title: 'Cluttered, Scammy-Looking Store Design',
          fatalMistake: 'Loading the site with countdown timers, fake spinning wheels, flashing popups, and broken english reviews.',
          mitigationProtocol: 'Design clean, editorial, Apple-style minimalist layouts with high-resolution imagery and genuine customer photo reviews.',
        },
        {
          trapNumber: '05',
          title: 'Zero Post-Purchase Order Bumping',
          fatalMistake: 'Selling a single unit and ignoring order bumps, leaving average order values capped at $25.',
          mitigationProtocol: 'Add "Buy 2 Get 1 50% Off" volume discounts and 1-click post-purchase checkout upsells to drive AOV to $65+.',
        },
      ],
    },
  },

  part2: {
    page6CaseStudies: [
      {
        title: 'Ergonomic Cervical Pillow Hero Brand ($48,200 in 35 Days)',
        student: 'Darius Thorne (Age 27)',
        timeline: '35 Days from first ad test to $48,200 revenue',
        revenue: '$48,200 Gross Revenue',
        margin: '64.5% Gross Margin ($18,400 Net Profit)',
        trafficSource: 'Meta Reels Ads ($15/day scaled to $250/day) + TikTok UGC reviews',
        pricingStructure: '$59.00 Single Pillow | $89.00 Dual Pack (52% selected dual pack)',
        exactFunnel: '1-Product Clean Lander → Sticky "Add to Bag" bar → 1-Click Shopify Checkout with Apple Pay → Order bump for silk pillowcase ($18).',
        breakdownStory:
          'Darius noticed countless tech workers complaining on Reddit about neck pain from laptop posture. He found a high-density memory foam cervical pillow stocked in CJ Dropshipping US warehouses with 4-day USPS delivery. He ordered 1 sample to his apartment, filmed 3 raw demonstration videos on his iPhone showing before/after spine alignment, and launched a $15/day Meta test. Ad Set 2 hit a 3.4x ROAS immediately. He scaled spend systematically and generated $48,200 in month one.',
        keyTakeaway: 'Relieve physical pain and customers will happily pay $60+ without comparison shopping.',
      },
      {
        title: 'Minimalist Electric Coffee Scaler ($24,800 Net Profit in Month 2)',
        student: 'Hannah Lindqvist',
        timeline: '60 Days to $24,800 net',
        revenue: '$58,400 Total Inflow',
        margin: '68% Gross Margin',
        trafficSource: 'TikTok Organic Coffee Aesthetic Videos (2 videos posted daily for 30 days)',
        pricingStructure: '$48 Retail (COGS: $14.20 sourced with private agent)',
        exactFunnel: 'TikTok Video showcasing espresso grind prep → Bio link to 1-product lander → Post-purchase upsell for precision dosing cup ($14).',
        breakdownStory:
          'Hannah capitalized on the booming "aesthetic morning routine" trend on TikTok. She posted peaceful 15-second ASMR videos preparing morning coffee using an ultra-sleek matte black precision scale. Video 7 went viral with 1.8M views. She directed traffic to a minimalist Next.js store with instant checkout, capturing 620 orders in a single weekend with zero paid advertising spend.',
        keyTakeaway: 'Aesthetic niche communities buy with their eyes on social media.',
      },
    ],

    page7SwipeFile: {
      headlineFormulas: [
        { formula: 'The Visceral Pain Relief Formula', example: 'Wake Up Pain-Free: The Orthopedic Alignment Pillow Engineered by Spinal Therapists' },
        { formula: 'The Comparison Contrast Formula', example: 'Stop Spending $120 on Brand Name Espresso Scales: Same 0.1g Precision at a Fraction of the Cost' },
        { formula: 'The 30-Day Guarantee Formula', example: 'Try It for 30 Nights Risk-Free. If Your Morning Back Stiffness Doesn\'t Disappear, We Refund 100%' },
      ],
      valueStackFramework: [
        { tier: 'Single Unit Option ($59)', offer: '1x Orthopedic Pillow + Washable Bamboo Cover', price: '$59', anchor: 'Standard Retail: $89' },
        { tier: 'Couples / Dual Pack ($89 — Most Popular)', offer: '2x Orthopedic Pillows + 2x Covers + Free Priority Tracked Shipping', price: '$89', anchor: 'Save $29 (52% of Buyers Select This)' },
        { tier: 'Family Bundle ($149)', offer: '4x Orthopedic Pillows + Free Silk Sleep Masks', price: '$149', anchor: 'Best Value for Homes' },
      ],
      swipeItems: [
        {
          type: 'Supplier Script',
          title: 'Private Supplier Negotiation Template (WhatsApp / WeChat)',
          purpose: 'Send to CJ Dropshipping or 1688 private agents once hitting 10+ orders/day to lower COGS by 20–30%.',
          content: `Hi [Agent Name],

We are currently scaling our store for [Product Name] in the US/EU market. 
Our current daily volume is 15–25 orders/day, and we are increasing ad spend this week to scale to 50+ orders/day.

We are currently paying $[Current Price] per unit with [Current Supplier].

Can you provide:
1. Your best unit price for 30–50 daily orders including 3–7 day USPS tracked shipping to USA?
2. Do you have physical inventory stocked in your US/Europe warehouse right now?
3. What is the turnaround time from order sync to tracking number generation?

We are looking for a reliable long-term fulfillment partner for our private brand. 

Looking forward to working together,
[Your Name]
Founder, [Brand Name]`,
        },
        {
          type: 'Ad Script',
          title: '15-Second High-Converting UGC Hook & Problem Script',
          purpose: 'Film on iPhone in your kitchen/bedroom. High visual pace that stops thumbs.',
          content: `[00:00 - 00:03 | VISCERAL HOOK]
(Visual: Person waking up grimacing and rubbing their stiff neck)
"If you wake up every morning feeling like you slept on a bag of rocks, stop scrolling..."

[00:03 - 00:08 | DEMONSTRATION & CONTRAST]
(Visual: Drop standard pillow — head falls flat. Drop ergonomic pillow — neck perfectly aligned)
"Standard pillows bend your spine at an unnatural 45-degree angle. This contoured memory foam cradle keeps your vertebrae in neutral alignment all night."

[00:08 - 00:15 | SOCIAL PROOF & CALL TO ACTION]
(Visual: Unboxing, pressing foam, and smiling in bed)
"Over 12,000 sleepers switched this month. Tap below to get 40% off your dual pack before the flash sale ends!"`,
        },
      ],
    },
  },

  part3Steps: [
    {
      stepNumber: 1,
      pageNumber: 8,
      title: 'Step 1: Validation & Niche Selection Framework',
      subtitle: 'Hunt for High-Demand Pain-Relief Products Running Profitable 14-Day Ads',
      objective: 'Identify a product with proven ad spend, high visual appeal, and healthy profit margins.',
      timeToExecute: '4 Hours',
      deliverable: '1 validated hero product with verified US warehouse supplier link',
      detailedWalkthrough: [
        'Open TikTok Creative Center and Meta Ad Library.',
        'Search keywords: "50% off today only", "link in bio to grab yours", "this literally saved my".',
        'Filter for ads that have been running continuously for at least 14 days (if they run ads for 14 days, the ad is profitable).',
        'Verify product has at least a $35 margin spread between supplier cost and customer retail price.',
      ],
      goldenRule: 'Never guess what sells. Find what competitors are actively spending thousands of dollars advertising right now.',
      tasks: [
        { id: 'ecom-s1-t1', text: 'Scan Meta Ad Library for 3 ads active for over 14 consecutive days' },
        { id: 'ecom-s1-t2', text: 'Locate product supplier on CJ Dropshipping with verified US warehouse stock' },
        { id: 'ecom-s1-t3', text: 'Calculate profit margin spread (must be > $35 per unit)' },
      ],
    },

    {
      stepNumber: 2,
      pageNumber: 9,
      title: 'Step 2: Offer Design & High-Value Packaging',
      subtitle: 'Construct Volume Tiers and 1-Click Order Bumps to Explode AOV',
      objective: 'Engineer bundle pricing so at least 40% of customers purchase 2 or more units.',
      timeToExecute: '3 Hours',
      deliverable: 'Offer stack featuring Single Unit, Double Pack, and checkout order bump',
      detailedWalkthrough: [
        'Set Single Item: $49.00 (Anchor retail price).',
        'Set Double Pack: $79.00 (Labeled "Most Popular — Buy 1 Get 1 40% Off").',
        'Add Checkout Order Bump: $14.00 (Add protective travel pouch or extended 2-year warranty).',
        'This pricing structure lifts Average Order Value from $49 to $72, allowing you to outbid competitors on ads.',
      ],
      goldenRule: 'Whoever can afford to spend the most to acquire a customer wins. High AOV gives you the highest advertising margin.',
      tasks: [
        { id: 'ecom-s2-t1', text: 'Design volume bundle options on Shopify dashboard' },
        { id: 'ecom-s2-t2', text: 'Configure 1-click checkout order bump ($14 add-on)' },
        { id: 'ecom-s2-t3', text: 'Set up 30-night risk-free trial guarantee terms' },
      ],
    },

    {
      stepNumber: 3,
      pageNumber: 10,
      title: 'Step 3: Tech Infrastructure Setup',
      subtitle: 'Deploy Shopify or Next.js Single-Product Store With Apple Pay Checkout',
      objective: 'Launch a frictionless, sub-1-second storefront optimized for mobile buyers.',
      timeToExecute: '3 Hours',
      deliverable: 'Live storefront ready to process global credit card and Apple Pay orders',
      detailedWalkthrough: [
        'Set up clean Shopify store or Next.js Commerce storefront on custom domain.',
        'Install Loox or Judge.me to import 20 verified customer photo reviews.',
        'Enable 1-Click Checkout: Make Apple Pay and Shop Pay the primary default payment buttons.',
        'Strip all unnecessary navigation menus, sidebars, and distractions. The entire page should funnel toward 1 button.',
      ],
      goldenRule: 'Every additional click or form field in the checkout process reduces conversion rate by 10%.',
      tasks: [
        { id: 'ecom-s3-t1', text: 'Set up 1-product theme layout on Shopify' },
        { id: 'ecom-s3-t2', text: 'Activate Shopify Payments, Apple Pay, and Google Pay' },
        { id: 'ecom-s3-t3', text: 'Import customer photo reviews with 5-star ratings' },
      ],
    },

    {
      stepNumber: 4,
      pageNumber: 11,
      title: 'Step 4: Building the MVP / Asset Assembly',
      subtitle: 'Produce 3 High-Energy TikTok/Reels Video Ads Using iPhone Footage',
      objective: 'Record 3 distinct video hooks testing Problem, Demonstration, and Lifestyle angles.',
      timeToExecute: '4 Hours',
      deliverable: '3 finished 15-second vertical video ads exported in 1080p ready for testing',
      detailedWalkthrough: [
        'Order 1 sample via Amazon Prime so it arrives at your door in 24 hours.',
        'Hook 1 (Visceral Pain): Film someone struggling with the everyday problem in the first 3 seconds.',
        'Hook 2 (Direct Comparison): Side-by-side demonstration showing competitor product failing vs your hero product succeeding.',
        'Hook 3 (Satisfying ASMR): Clean unboxing, tactile click sound, and peaceful aesthetic usage.',
      ],
      goldenRule: 'The first 3 seconds of your video dictate 80% of your advertising return. If the hook is boring, nobody sees your product.',
      tasks: [
        { id: 'ecom-s4-t1', text: 'Film 10 raw clips using natural lighting on iPhone' },
        { id: 'ecom-s4-t2', text: 'Edit into 3 vertical video variations on CapCut with bold captions' },
        { id: 'ecom-s4-t3', text: 'Export high-resolution MP4s ready for ad upload' },
      ],
    },

    {
      stepNumber: 5,
      pageNumber: 12,
      title: 'Step 5: Landing Page & High-Converting Funnel Architecture',
      subtitle: 'Assemble the High-Trust Product Page Layout That Converts at 3.5%+',
      objective: 'Organize GIFs, technical feature callouts, and medical/expert endorsements.',
      timeToExecute: '4 Hours',
      deliverable: 'Complete product page featuring 3 animated GIFs and sticky purchase bar',
      detailedWalkthrough: [
        'Hero: Clean product carousel, star ratings badge ("Over 12,000+ Happy Sleepers"), and volume bundles.',
        'Section 2: "Why Traditional Solutions Fail" (Visual contrast graphics).',
        'Section 3: 3 high-frame-rate GIFs demonstrating the product in action.',
        'Section 4: Technical breakdown specifications and 30-day guarantee badge.',
      ],
      goldenRule: 'GIFs sell 10x better than static images. Show moving demonstrations of the product solving the problem.',
      tasks: [
        { id: 'ecom-s5-t1', text: 'Create 3 optimized animated GIFs from your video footage' },
        { id: 'ecom-s5-t2', text: 'Implement sticky "Select Bundle" mobile bottom drawer' },
        { id: 'ecom-s5-t3', text: 'Verify mobile page speed is under 1.5 seconds' },
      ],
    },

    {
      stepNumber: 6,
      pageNumber: 13,
      title: 'Step 6: Organic Distribution Engine ("Document, Don\'t Preach")',
      subtitle: 'Post 2 TikToks/Reels Daily to Capture Free Algorithmic Viral Spikes',
      objective: 'Generate organic sales while warming up Meta and TikTok pixel data.',
      timeToExecute: 'Daily 30 Min',
      deliverable: 'Consistent 14-day organic posting cadence testing raw video concepts',
      detailedWalkthrough: [
        'Post 2 shortform vertical videos per day across TikTok, Instagram Reels, and YouTube Shorts.',
        'Use trending ambient audio tracks and direct response visual text hooks.',
        'Pin the top comment: "Where did you get this? Grabbed mine from the link in bio with 40% off."',
        'Any organic video that gets over 10,000 views is immediately turned into a paid ad.',
      ],
      goldenRule: 'Let the algorithm tell you what converts before you spend advertising capital.',
      tasks: [
        { id: 'ecom-s6-t1', text: 'Schedule 2 organic vertical videos daily for the week' },
        { id: 'ecom-s6-t2', text: 'Track view counts and engagement metrics in spreadsheet' },
        { id: 'ecom-s6-t3', text: 'Turn highest-performing organic video into paid ad creative' },
      ],
    },

    {
      stepNumber: 7,
      pageNumber: 14,
      title: 'Step 7: Outbound Outreach & Paid Acquisition Pipeline',
      subtitle: 'The $5/day Meta Micro-Testing Protocol to Identify 3.0+ ROAS Campaigns',
      objective: 'Launch low-budget ad sets to find winning audiences without blowing your budget.',
      timeToExecute: '2 Hours',
      deliverable: '3 active Meta ad sets running at $5/day targeting broad interest clusters',
      detailedWalkthrough: [
        'Create a Campaign Budget Optimization (CBO) or Advantage+ Campaign on Meta Ads Manager.',
        'Set up 3 Ad Sets at $5/day each (Total: $15/day).',
        'Ad Set 1: Broad targeting (Age 25–55, US only).',
        'Ad Set 2: Direct interest targeting (e.g. Back pain, ergonomics, physical therapy).',
        'Ad Set 3: Lifestyle interest targeting (e.g. Remote work, home office, wellness).',
        'Run for 48 hours. Turn off any ad set with zero sales. Scale the winner by 20% every 48 hours.',
      ],
      goldenRule: 'Cut losers fast, let winners run. Strict ad discipline separates profitable operators from gamblers.',
      tasks: [
        { id: 'ecom-s7-t1', text: 'Set up Meta Pixel and Conversion API on Shopify' },
        { id: 'ecom-s7-t2', text: 'Launch 3 test ad sets at $5/day budget' },
        { id: 'ecom-s7-t3', text: 'Review metrics at 48-hour mark and kill non-performing angles' },
      ],
    },

    {
      stepNumber: 8,
      pageNumber: 15,
      title: 'Step 8: Fulfillment, Delivery & Onboarding Automation',
      subtitle: 'Automate 100% of Order Tracking & Supplier Fulfillment via AutoDS',
      objective: 'Connect store directly to warehouse supplier so orders fulfill with zero manual clicking.',
      timeToExecute: '2 Hours',
      deliverable: 'Automated order sync pipeline delivering tracking emails to customers',
      detailedWalkthrough: [
        'Connect AutoDS or CJ Dropshipping app to your Shopify store.',
        'Enable auto-order fulfillment: When customer pays on Shopify, the supplier system automatically charges your payment method and ships the order.',
        'Automate tracking number upload: Once USPS scans the package, an automated shipping confirmation email is triggered to the buyer.',
      ],
      goldenRule: 'Never fulfill orders manually by copying and pasting addresses. Automate from Day 1.',
      tasks: [
        { id: 'ecom-s8-t1', text: 'Connect AutoDS / CJ Dropshipping API to Shopify' },
        { id: 'ecom-s8-t2', text: 'Set up automated USPS tracking email notification' },
        { id: 'ecom-s8-t3', text: 'Place a live test order to verify automated pipeline' },
      ],
    },

    {
      stepNumber: 9,
      pageNumber: 16,
      title: 'Step 9: Backend Monetization & High-Ticket Upsell Integration',
      subtitle: 'Capture Free Profits via Post-Purchase Klaviyo Email Flows',
      objective: 'Generate 20%+ additional store revenue with zero advertising spend.',
      timeToExecute: '3 Hours',
      deliverable: 'Automated 3-part Abandoned Cart and Customer Thank You email flows',
      detailedWalkthrough: [
        'Set up Klaviyo Abandoned Checkout Flow: Send Email 1 at 1 hour, Email 2 at 12 hours with a 10% coupon, Email 3 at 24 hours with urgency.',
        'Abandoned checkout emails recover 12%–18% of lost sales automatically.',
        'Send Day 7 Post-Purchase Review Request: Offer a $10 gift card for leaving a verified video review.',
      ],
      goldenRule: 'Email flow revenue is pure 100% profit because CAC has already been paid.',
      tasks: [
        { id: 'ecom-s9-t1', text: 'Configure Klaviyo Abandoned Cart email automation' },
        { id: 'ecom-s9-t2', text: 'Create Customer VIP repurchase discount flow' },
        { id: 'ecom-s9-t3', text: 'Set up automated review collection email sequence' },
      ],
    },

    {
      stepNumber: 10,
      pageNumber: 17,
      title: 'Step 10: 90-Day Scaling, Optimization & KPI Protocol',
      subtitle: 'Scale to 50+ Orders a Day and Build a Defensible Private-Label Brand',
      objective: 'Transition from dropshipping to branded private packaging and $30k–$60k/mo revenue.',
      timeToExecute: 'Ongoing Rhythm',
      deliverable: 'Private brand with custom packaging and dedicated warehouse agent',
      detailedWalkthrough: [
        'When reaching consistent 30 orders/day for 2 weeks, contact your CJ agent to print custom logo boxes.',
        'Negotiate bulk inventory stocking in US warehouses to reduce shipping times to 3 days.',
        'Expand advertising into TikTok Shop affiliate creator gifting (send free samples to 50 creators/week).',
        'At $50k/mo, this e-commerce brand can be sold on Acquire.com for a 2.5x–3.5x annual profit multiple.',
      ],
      goldenRule: 'Dropshipping is just the testing vehicle. The real prize is the defensible e-commerce brand you build once the winner is proven.',
      tasks: [
        { id: 'ecom-s10-t1', text: 'Establish daily ROAS and inventory tracking spreadsheet' },
        { id: 'ecom-s10-t2', text: 'Initiate creator sample gifting outreach on TikTok Shop' },
        { id: 'ecom-s10-t3', text: 'Maintain strict weekly profit accounting' },
      ],
    },
  ],
};

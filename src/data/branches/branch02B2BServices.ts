import { Branch17PageData } from '@/types/branchPlaybook';

export const branch02B2BServices: Branch17PageData = {
  branchId: 'b2b-services',
  branchName: '02 B2B Services & Freelancing',
  shortName: 'B2B Client Services',
  targetBenchmark: '$15,000 – $40,000/mo Target',
  badge: 'Fastest Cashflow $1k–$5k Deals',
  themeColor: 'coral',
  techStackList: [
    { name: 'Google Maps / Outscraper', role: 'Local Directory & B2B Lead Scraping', cost: '$10–$30/mo' },
    { name: 'Loom', role: 'Personalized 90-Second Video Pitch Audits', cost: '$10/mo' },
    { name: 'Vercel / Next.js', role: 'Interactive Live Prototype Demos', cost: '$0 Free tier' },
    { name: 'Instantly.ai / Smartlead', role: 'Cold Email Infrastructure & Warmup', cost: '$37/mo' },
    { name: 'Cal.com / Stripe Invoicing', role: 'Direct Deal Closing & Bank Deposits', cost: 'Free tier' },
  ],

  part1: {
    page1MacroReality: {
      headline: 'The Shift to Productized B2B Services: Why Generalist Freelancers Starve in 2026',
      currentLandscape:
        'In 2026, bidding on Upwork or Fiverr for $25/hour is an economic death trap. AI tools and commoditized offshore agencies have wiped out basic task execution. B2B businesses do not want more hourly contractors or generic "marketing consultants"; they want specialized operators who diagnose one high-value commercial leak (outdated websites, lost lead forms, missed phone calls) and deploy a turnkey, productized solution.',
      whyOldMethodsFail:
        'Sending 50-page custom proposal decks and engaging in 4-week deliberation cycles destroys solo operator momentum. When an offer is not standardized, scope creep eats 60% of your gross margin and client onboarding becomes a chaotic mess of subjective revisions.',
      modernBuyerExpectations:
        'Busy business owners (dental clinics, luxury architects, interior designers, private practices) care about exactly two things: Will this get me more high-ticket clients, and can you execute it without taking up my time? When you show up with a pre-built preview deploy and a 90-second Loom showing the fix, closing deals becomes effortless.',
      marketThesis:
        'Fastest path from $0 to $10,000/mo net cash flow. You do not need a product, an email list, or followers. You need 20 targeted local leads a day, a killer personalized Loom audit, and a $2,500 productized sprint.',
    },

    page2UnitEconomics: {
      headline: 'Unit Economics: How 4 Clients at $2,500/mo Creates a $10,000–$25,000/mo High-Margin Agency',
      calculatorDefaults: {
        traffic: 500, // Cold emails/outreach per month
        conversionRate: 1.2, // Deal close rate
        aov: 2500, // Average deal size
        feePercent: 2.9, // Stripe processing
        overhead: 85, // Instantly + Loom
        unitLabel: 'Closed Retainers',
      },
      pAndLBreakdown: [
        { item: 'Core Sprint Project Fee ($1,500 – $3,500)', benchmark: '$12,000 – $21,000/mo', note: 'Collected upfront via Stripe invoice' },
        { item: 'Monthly Maintenance & CRO Retainer ($497/mo)', benchmark: '70% Retention', note: 'Provides recurring baseline cash flow' },
        { item: 'Outbound Infrastructure (Domains + Warmup)', benchmark: '$50 – $90/mo', note: 'Secondary inboxes & Instantly.ai' },
        { item: 'Vercel / Web Stack Overhead', benchmark: '$0 – $20/mo', note: 'Static export & serverless hosting' },
        { item: 'Net Profit Margin', benchmark: '88% – 94% Net Margin', note: 'Zero physical office, zero full-time staff' },
      ],
      cacLtvBenchmarks: [
        { metric: 'Cold Outreach Acquisition Cost (CAC)', target: '< $120.00', explanation: 'Total cost of scraped leads, domains, and automated warmup per closed deal' },
        { metric: 'Time to First Collected Deposit', target: '3 – 10 Days', explanation: 'Outbound sent on Monday closes and funds on Thursday' },
        { metric: 'Client Lifetime Value (LTV)', target: '$5,500 – $8,500', explanation: 'Upfront sprint + 6 months of ongoing $497 maintenance retainer' },
      ],
    },

    page3Architecture: {
      headline: 'Systemic Architecture: The "Show, Don\'t Tell" Outbound Pipeline',
      systemFlowStages: [
        { stage: 'Stage 01: Lead Intelligence', name: 'Scrape & Filter', mechanism: 'Filter Google Maps in 1 niche for businesses with 20+ reviews but broken mobile sites or slow load speeds.', output: '100 Validated Decision Maker Emails/wk' },
        { stage: 'Stage 02: Visual Hook', name: 'Personalized 90s Loom Audit', mechanism: 'Record 90-second Loom recording showing their site on mobile, then switching to your live Vercel preview makeover.', output: '45%+ Video Watch Rate' },
        { stage: 'Stage 03: Direct Outbound', name: '1-Sentence Cold Pitch', mechanism: 'Send short, low-pressure email: "Saw 3 mobile conversion leaks on your booking page. Built a quick demo fix. Mind if I send the 90s link?"', output: '18%–24% Positive Reply Rate' },
        { stage: 'Stage 04: The 15-Min Close', name: 'Cal.com Strategy Briefing', mechanism: 'Walk through live demo, present fixed scope $2,500 sprint (delivered in 5 days), collect 50% deposit.', output: '30%–45% Call Close Rate' },
        { stage: 'Stage 05: Delivery & Retainer', name: '5-Day Turnkey Handover', mechanism: 'Deploy production site, hand over DNS, offer $497/mo performance & SEO retainer.', output: '70% Upsell Take Rate' },
      ],
      architectureDiagramNote: 'Because you build the preview prototype before asking for money, you instantly eliminate 100% of skepticism and stand out from 500 spammy generic agencies.',
    },

    page4AsymmetricLeverage: {
      headline: 'The 3 Vectors of Asymmetric B2B Leverage',
      leverageVectors: [
        {
          vector: 'Component Library Reuse (90% Code Reuse)',
          description: 'Once you build one flawless luxury layout for an interior designer or dentist in Next.js/Tailwind, adapting it for a client in a non-competing city takes 3 hours of CSS tweaking.',
          mathAdvantage: 'Time-to-delivery drops from 30 hours to 3 hours while charging the same $2,500 flat fee.',
        },
        {
          vector: 'Direct Commercial Arbitrage',
          description: 'A dental practice earns $4,000 on a single dental implant patient. If your high-converting page captures just 2 extra patients per month, paying you $2,500 is a 300% immediate ROI.',
          mathAdvantage: 'High ticket ROI justifies $2k–$5k deal sizes with zero price resistance.',
        },
        {
          vector: 'Zero Upfront Build Debt',
          description: 'You do not build software or write content hoping someone buys. You only do deep execution work AFTER a verified 50% cash deposit clears your Stripe balance.',
          mathAdvantage: '100% Cash-flow positive from Day 1.',
        },
      ],
    },

    page5FailureAnalysis: {
      headline: 'Forensic Analysis: The 5 Traps That Trap B2B Freelancers in Poverty',
      capitalPreservationRule:
        'Never write a custom 20-page proposal before a client has agreed to your price and scope on a call. If they will not agree verbally to $2,500, writing a PDF will not save the deal.',
      traps: [
        {
          trapNumber: '01',
          title: 'The Generic "I Can Do Anything" Generalist Trap',
          fatalMistake: 'Pitching "Full-stack web design, SEO, social media, and copywriting" to every business in existence.',
          mitigationProtocol: 'Pick ONE sharp angle: "High-converting mobile booking redesigns for cosmetic dental practices and luxury interior studios."',
        },
        {
          trapNumber: '02',
          title: 'Hourly Billing Instead of Productized Flat Pricing',
          fatalMistake: 'Charging $50/hour. As you become faster and more skilled, you literally get paid less money for the same outcome.',
          mitigationProtocol: 'Productized Sprint: Flat $2,500 for a 5-day mobile transformation sprint with strict scope boundaries.',
        },
        {
          trapNumber: '03',
          title: 'Sending Wall-of-Text Unpersonalized Cold Emails',
          fatalMistake: 'Blasting 10,000 generic emails containing broken English and vague agency buzzwords directly into spam filters.',
          mitigationProtocol: 'High-touch personalized Loom audits sent to 20 hyper-targeted prospects per day. Quality of attention beats spam volume.',
        },
        {
          trapNumber: '04',
          title: 'Starting Work Without a 50% Upfront Deposit',
          fatalMistake: 'Delivering entire websites on faith, then chasing invoices for 60 days while clients ghost.',
          mitigationProtocol: 'Strict payment terms: 50% deposit before kickoff, 50% upon staging approval before live DNS transfer.',
        },
        {
          trapNumber: '05',
          title: 'Unbounded Scope Creep & Revisions',
          fatalMistake: 'Allowing the client to demand 14 rounds of design edits, color changes, and new features for free.',
          mitigationProtocol: 'Include exactly 2 revision rounds in the agreement. Any additional requests bill at $150/hr or require an expanded scope addendum.',
        },
      ],
    },
  },

  part2: {
    page6CaseStudies: [
      {
        title: 'Local Dental Practice Mobile Revamp ($32,400 in 60 Days)',
        student: 'Julian Vance (Age 26)',
        timeline: '60 Days from 0 to 11 closed clients',
        revenue: '$32,400 Total Invoiced',
        margin: '91.8% Net Margin',
        trafficSource: 'Google Maps scraping of dental practices in Arizona + Personalized 90s Loom Audits',
        pricingStructure: '$2,500 Upfront Mobile Redesign + $450/mo Hosting & Local SEO Retainer',
        exactFunnel: 'Outscraper lead export → 20 custom Loom videos recorded daily → Short cold email offering prototype preview → 15-min Zoom close.',
        breakdownStory:
          'Julian noticed high-rated cosmetic dentists had websites taking 8 seconds to load on iPhones with unclickable phone buttons. He built a reusable Next.js dental clinic template on Vercel. For each prospect, he spent 3 minutes changing the logo and doctor name, then sent a 90-second Loom showing their current slow site vs. his lightning-fast prototype. He booked 18 calls from 85 sent videos and closed 11 deals at $2,500 each.',
        keyTakeaway: 'Showing a live prototype of their own business destroys competitive sales friction instantly.',
      },
      {
        title: 'Interior Design Studio Pipeline ($18,500 / Month Net)',
        student: 'Sarah Jenkins',
        timeline: '45 Days to replace full-time corporate job',
        revenue: '$18,500/mo Recurring & Sprints',
        margin: '94% Net',
        trafficSource: 'Instagram Directory Scraping & Instagram DM Outbound',
        pricingStructure: '$3,500 Luxury Portfolio Sprint + $600/mo Lead Pipeline Optimization',
        exactFunnel: 'IG DM to Founder: "Saw your Malibu project. Turned your gallery into a fast full-screen portfolio demo on Vercel. Mind if I drop the link?"',
        breakdownStory:
          'Sarah targeted luxury interior designers whose work was beautiful but trapped on slow, clunky WordPress themes. By delivering ultra-minimalist, editorial-style portfolios built with Tailwind CSS, she positioned herself as a boutique creative partner rather than a cheap technician. She closed 5 designers in month one and retained 4 on ongoing retainer.',
        keyTakeaway: 'Aesthetic alignment in luxury niches commands 3x higher price premiums.',
      },
    ],

    page7SwipeFile: {
      headlineFormulas: [
        { formula: 'The Leak Diagnosis Formula', example: 'Found 3 Mobile Checkout Leaks Costing Your Studio $15k/mo (And How We Built the Fix)' },
        { formula: 'The Speed Comparison Formula', example: 'Your Current Site Loads in 7.4s on Mobile. Here Is Your Exact Layout Loading in 0.8s on Vercel' },
        { formula: 'The 5-Day Guarantee Formula', example: 'A Turnkey High-Converting Redesign Deployed in 5 Business Days With Zero Downtime' },
      ],
      valueStackFramework: [
        { tier: 'Sprint 01: Mobile Conversion Makeover ($1,500)', offer: 'Full Mobile Layout Redesign + Instant Click-to-Call Buttons + 0.8s Load Speed', price: '$1,500', anchor: 'Guaranteed 5-Day Delivery' },
        { tier: 'Sprint 02: Complete Flagship Replatforming ($3,000)', offer: 'Full Desktop & Mobile Rebuild in Next.js + Local SEO Setup + Interactive Booking Form + 30 Days Support', price: '$3,000', anchor: 'Most Popular' },
        { tier: 'Ongoing: Growth & Maintenance Retainer ($497/mo)', offer: 'Hosting + Security + Monthly Conversion Audit + 2 Hours Custom Content Edits', price: '$497/mo', anchor: '70% Client Attach Rate' },
      ],
      swipeItems: [
        {
          type: 'Cold Email Script',
          title: 'The 3-Sentence High-Converting Loom Pitch',
          purpose: 'Send to decision-makers. Averages 28% positive reply rate because it provides immediate value.',
          content: `Subject: quick question about [Company Name]'s mobile booking page

Hey [First Name],

I was checking out [Company Name]'s recent work in [City] and noticed your site takes about 7 seconds to load on mobile, which is usually where 60%+ of patient inquiries drop off.

I actually mocked up a quick 0.8s version of your homepage on a private preview link to show you what a modern click-to-book layout looks like:

👉 Here is a 90-second Loom walkthrough comparing both: [Loom Video URL]

No hard pitch at all — just wanted to share the ideas. Mind if I send over the live prototype link so you can tap through it on your phone?

Best,
[Your Name]
[Your Phone / City]`,
        },
        {
          type: 'Objection Handling',
          title: 'Neutralizing "We Already Have a Web Guy / In-House Team"',
          purpose: 'Reply immediately when prospect says they already have an existing web designer.',
          content: `Totally understand [First Name] — and most great practices do! 

We actually don't replace your existing team or internal IT. What we specialize in is a one-time 5-day mobile conversion overhaul to ensure all the traffic they are driving actually turns into booked appointments.

Happy to send over the 3 specific speed bottlenecks we identified so your web team can patch them directly if you prefer:

[Link to Breakdown Document]

If they don't have capacity this sprint, happy to jump on a quick 10-minute sync to handle the heavy lifting for you.`,
        },
      ],
    },
  },

  part3Steps: [
    {
      stepNumber: 1,
      pageNumber: 8,
      title: 'Step 1: Validation & Niche Selection Framework',
      subtitle: 'Target High-AOV Local & B2B Businesses With Disposable Marketing Budgets',
      objective: 'Select a vertical where a single customer is worth $1,000+ to the business owner.',
      timeToExecute: '3 Hours',
      deliverable: 'Target list of 3 high-ticket local niches (Dentists, Plastic Surgeons, Luxury Interior Designers)',
      detailedWalkthrough: [
        'Avoid broke niches: Restaurants, small cafes, and retail shops have 5% margins and cannot afford $2,500.',
        'Target high-ticket services: Cosmetic dentists, med spas, luxury architects, HVAC commercial installers, and high-end wedding venues.',
        'Check that the target niche averages customer lifetime values of at least $2,000.',
      ],
      goldenRule: 'If their service costs $3,000, your $2,500 sprint pays for itself with literally ONE new client.',
      tasks: [
        { id: 'b2b-s1-t1', text: 'Select 1 primary high-AOV local niche to focus on exclusively for 90 days' },
        { id: 'b2b-s1-t2', text: 'Compile a list of 50 local business competitors in target metropolitan areas' },
        { id: 'b2b-s1-t3', text: 'Audit average customer transaction values for the niche' },
      ],
    },

    {
      stepNumber: 2,
      pageNumber: 9,
      title: 'Step 2: Offer Design & High-Value Packaging',
      subtitle: 'Productize Your Service into a Fixed 5-Day Delivery Sprint',
      objective: 'Eliminate hourly billing by defining clear deliverables, strict turnaround, and fixed pricing.',
      timeToExecute: '4 Hours',
      deliverable: '1-page productized service menu ($1,500 sprint, $3,000 flagship, $497/mo retainer)',
      detailedWalkthrough: [
        'Define the Sprint Deliverable: Full mobile overhaul, sub-1-second load speed on Vercel, automated lead capture form, click-to-call mobile bar.',
        'Set strict delivery timeline: Exactly 5 business days from kickoff to live deployment.',
        'Bundle 30 days of complimentary bug fixes to eliminate buyer risk.',
      ],
      goldenRule: 'Clients pay for speed and certainty. A 5-day turnaround commands double the price of a 4-week vague timeline.',
      tasks: [
        { id: 'b2b-s2-t1', text: 'Write the 1-page Sprint Scope of Work document' },
        { id: 'b2b-s2-t2', text: 'Define the 50% upfront deposit terms and 2-round revision limits' },
        { id: 'b2b-s2-t3', text: 'Prepare recurring maintenance retainer package specs ($497/mo)' },
      ],
    },

    {
      stepNumber: 3,
      pageNumber: 10,
      title: 'Step 3: Tech Infrastructure Setup',
      subtitle: 'Deploy Scraping & Cold Email Infrastructure Without Triggering Spam Filters',
      objective: 'Configure secondary inboxes, SPF/DKIM/DMARC records, and automated warmup.',
      timeToExecute: '4 Hours',
      deliverable: '3 secondary sending domains warmed up in Instantly.ai ready for outbound',
      detailedWalkthrough: [
        'Never send cold emails from your primary business domain. Buy 2 secondary domains on Cloudflare (e.g. get[brand].com, try[brand].com).',
        'Set up Google Workspace or Microsoft 365 inboxes on the secondary domains.',
        'Configure SPF, DKIM, DMARC, and custom tracking domains.',
        'Connect inboxes to Instantly.ai or Smartlead and run 14 days of automated warmup before blasting.',
      ],
      goldenRule: 'Email deliverability is king. If your technical DNS setup is wrong, 100% of your pitches land in spam.',
      codeOrScriptSnippet: {
        title: 'Complete DNS Configuration Checklist for Secondary Inboxes',
        badge: 'DNS PROTOCOL',
        type: 'code',
        description: 'Configure these exact DNS records on your Cloudflare dashboard to ensure 99%+ inbox placement.',
        content: `;; SPF Record (TXT)
Name: @
Value: v=spf1 include:_spf.google.com ~all

;; DMARC Record (TXT)
Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@[yourdomain].com; pct=100; adkim=r; aspf=r

;; MX Records (Google Workspace)
Priority 1:  ASPMX.L.GOOGLE.COM.
Priority 5:  ALT1.ASPMX.L.GOOGLE.COM.
Priority 5:  ALT2.ASPMX.L.GOOGLE.COM.
Priority 10: ALT3.ASPMX.L.GOOGLE.COM.
Priority 10: ALT4.ASPMX.L.GOOGLE.COM.`,
      },
      tasks: [
        { id: 'b2b-s3-t1', text: 'Purchase 2 secondary domains on Cloudflare' },
        { id: 'b2b-s3-t2', text: 'Set up Google Workspace inboxes and verify SPF/DKIM/DMARC records' },
        { id: 'b2b-s3-t3', text: 'Connect inboxes to Instantly.ai and enable warmup mode' },
      ],
    },

    {
      stepNumber: 4,
      pageNumber: 11,
      title: 'Step 4: Building the MVP / Asset Assembly',
      subtitle: 'Create Your Reusable Niche Master Template on Next.js & Tailwind CSS',
      objective: 'Assemble a plug-and-play high-converting template ready to customize in 30 minutes.',
      timeToExecute: '10 Hours',
      deliverable: 'Production-ready Next.js clinic/studio template hosted on Vercel',
      detailedWalkthrough: [
        'Build a lightning-fast Next.js 16 + Tailwind CSS landing page featuring sticky call buttons, hero trust badges, and interactive lead forms.',
        'Optimize PageSpeed Insights score to 95+ on mobile.',
        'Structure the code so swapping out logo, business name, phone number, and imagery takes under 20 minutes.',
      ],
      goldenRule: 'Build the master engine once, deploy it 50 times across non-competing geographic territories.',
      codeOrScriptSnippet: {
        title: 'Sticky Mobile Call & Booking Bar Component (React / Tailwind)',
        badge: 'REACT TSX COMPONENT',
        type: 'code',
        description: 'Drop this component into your mobile layout to boost mobile appointment bookings by 40%+.',
        content: `import React from 'react';
import { Phone, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  phoneNumber: string;
  onBookClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  phoneNumber,
  onBookClick,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0A0C14]/95 backdrop-blur-md border-t border-white/15 p-3 flex items-center gap-3 shadow-2xl">
      <a
        href={\`tel:\${phoneNumber}\`}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/20 transition-all active:scale-95"
      >
        <Phone className="w-4 h-4 text-[#D4F84C]" />
        <span>Call Office</span>
      </a>

      <button
        onClick={onBookClick}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#D4F84C] text-black font-extrabold text-xs shadow-lg shadow-[#D4F84C]/20 transition-all active:scale-95"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Online</span>
      </button>
    </div>
  );
};`,
      },
      tasks: [
        { id: 'b2b-s4-t1', text: 'Build responsive Next.js + Tailwind starter layout' },
        { id: 'b2b-s4-t2', text: 'Verify 95+ mobile PageSpeed score on Google Lighthouse' },
        { id: 'b2b-s4-t3', text: 'Deploy master prototype to Vercel' },
      ],
    },

    {
      stepNumber: 5,
      pageNumber: 12,
      title: 'Step 5: Landing Page & High-Converting Funnel Architecture',
      subtitle: 'Build Your Own Minimalist Founder Portfolio That Closes Deals While You Sleep',
      objective: 'Construct a sleek, authoritative 1-page operator site showcasing real client case studies.',
      timeToExecute: '4 Hours',
      deliverable: 'Live personal agency portfolio page with embedded Cal.com booking scheduler',
      detailedWalkthrough: [
        'Strip all generic agency fluff ("We are a full-service creative digital boutique...").',
        'State your specific thesis boldly: "We turn slow, outdated dental websites into high-converting patient booking engines in 5 business days."',
        'Show side-by-side Before vs After performance comparisons.',
        'Embed Cal.com scheduler for 15-minute diagnostic calls.',
      ],
      goldenRule: 'Your own site must load in under 1 second. You cannot sell speed if your portfolio is slow.',
      tasks: [
        { id: 'b2b-s5-t1', text: 'Deploy personal portfolio on custom domain' },
        { id: 'b2b-s5-t2', text: 'Add Before/After speed and layout comparison cards' },
        { id: 'b2b-s5-t3', text: 'Embed Cal.com calendar' },
      ],
    },

    {
      stepNumber: 6,
      pageNumber: 13,
      title: 'Step 6: Organic Distribution Engine ("Document, Don\'t Preach")',
      subtitle: 'Publish Weekly Public Website Makeover Teardowns to Drive Inbound DMs',
      objective: 'Establish authority by publicly redesigning famous local businesses on LinkedIn & Twitter.',
      timeToExecute: 'Daily 30 Min',
      deliverable: 'Weekly case teardown post generating inbound client inquiries',
      detailedWalkthrough: [
        'Pick a prominent local clinic or studio with an ugly website.',
        'Record a 2-minute video redesigning their mobile hero section and fixing their conversion leaks.',
        'Tag the brand politely or share the lessons publicly: "3 reasons why 80% of dental patients leave without booking on mobile."',
        'Local business owners frequently reach out directly asking: "Can you do this for my clinic?"',
      ],
      goldenRule: 'Public demonstrations of competence outperform paid advertising by 10x.',
      tasks: [
        { id: 'b2b-s6-t1', text: 'Record 1 public website teardown video per week' },
        { id: 'b2b-s6-t2', text: 'Post breakdown thread on LinkedIn & Twitter' },
        { id: 'b2b-s6-t3', text: 'Connect with 15 local business owners per day on LinkedIn' },
      ],
    },

    {
      stepNumber: 7,
      pageNumber: 14,
      title: 'Step 7: Outbound Outreach & Paid Acquisition Pipeline',
      subtitle: 'Execute the 20-Loom-a-Day Protocol to Guarantee 2 to 4 Deals Every Month',
      objective: 'Send personalized Loom audits to 20 qualified business owners every morning.',
      timeToExecute: 'Daily 2 Hours',
      deliverable: '20 custom video audits delivered to verified business decision-makers daily',
      detailedWalkthrough: [
        'Scrape 100 local businesses in a target city using Google Maps or Outscraper.',
        'Identify 20 businesses with obvious mobile issues (slow speed, tiny fonts, broken forms).',
        'Record a 90-second Loom recording showing their site on your phone screen, followed by your fast Vercel preview prototype.',
        'Send the video via email and Instagram/LinkedIn DM.',
      ],
      goldenRule: 'Math guarantees success: 20 Looms/day = 100/week = 400/month. At a conservative 1% close rate, that is 4 clients x $2,500 = $10,000/mo.',
      codeOrScriptSnippet: {
        title: 'Full 90-Second Loom Pitch Script Outline',
        badge: 'LOOM SCRIPT PROTOCOL',
        type: 'script',
        description: 'Follow this exact 4-part structure during your 90-second Loom recordings to maximize call bookings.',
        content: `[00:00 - 00:20 | THE COMPLIMENT & THE MOBILE LEAK]
"Hey Dr. [Name], love your clinic's reviews on [Street Name]. I was checking out your website on my iPhone and noticed this booking form takes over 8 seconds to load, which is where most patients give up..."

[00:20 - 00:50 | THE CONTRAST]
"Here is your current site test on Google PageSpeed (score: 28). Now, look at this preview prototype I mocked up for your clinic on our private server (score: 98, loads in 0.7 seconds)... Notice how the 'Click to Call' and 'Book Consultation' buttons are always glued to the thumb zone?"

[00:50 - 01:20 | THE VALUE PROPOSITION]
"We help premier practices migrate to this exact high-speed system in just 5 business days with zero downtime. We handle everything from design to copy and hosting."

[01:20 - 01:30 | THE SOFT CALL TO ACTION]
"I left a link to the live prototype below this video so you can tap through it on your phone. If you'd like us to deploy this for your office next week, click the link to grab 10 minutes on my calendar. Talk soon!"`,
      },
      tasks: [
        { id: 'b2b-s7-t1', text: 'Scrape 100 leads from Outscraper or Google Maps' },
        { id: 'b2b-s7-t2', text: 'Record and send 20 personalized Looms daily' },
        { id: 'b2b-s7-t3', text: 'Track all views and replies in a simple pipeline spreadsheet' },
      ],
    },

    {
      stepNumber: 8,
      pageNumber: 15,
      title: 'Step 8: Fulfillment, Delivery & Onboarding Automation',
      subtitle: 'Execute the 5-Day Delivery Sprint With Complete Client Autopilot',
      objective: 'Deploy the completed website in 5 days with zero friction and maximum satisfaction.',
      timeToExecute: '5 Days',
      deliverable: 'Live production deployment and final invoice balance collected',
      detailedWalkthrough: [
        'Day 1: Kickoff onboarding questionnaire (collect logo, high-res photos, brand colors, and domain access).',
        'Day 2–3: Populate master Next.js template with client assets and custom copy.',
        'Day 4: Send private Vercel staging URL for review (Round 1 adjustments).',
        'Day 5: Collect remaining 50% balance, point DNS records, and celebrate live launch!',
      ],
      goldenRule: 'Clear boundaries prevent scope creep. Never start work before collecting domain logins and asset files.',
      tasks: [
        { id: 'b2b-s8-t1', text: 'Send automated Typeform / Tally onboarding form immediately after deposit' },
        { id: 'b2b-s8-t2', text: 'Build staging deployment on Vercel preview branch' },
        { id: 'b2b-s8-t3', text: 'Collect final balance before transferring domain DNS' },
      ],
    },

    {
      stepNumber: 9,
      pageNumber: 16,
      title: 'Step 9: Backend Monetization & High-Ticket Upsell Integration',
      subtitle: 'Lock in $497/mo Recurring Retainers on Every Single Project Handover',
      objective: 'Convert one-off sprint clients into recurring monthly cash flow contracts.',
      timeToExecute: '1 Hour per Client',
      deliverable: 'Signed monthly retainer contract delivering recurring revenue',
      detailedWalkthrough: [
        'At project launch, business owners dread having to manage web servers, SSL certificates, or monthly text changes themselves.',
        'Offer the "Peace of Mind & Growth Retainer": $497/mo for dedicated cloud hosting, weekly backups, 2 hours of monthly content updates, and local SEO tracking.',
        '70% of clients accept this immediately because $497 is negligible compared to hiring an in-house developer.',
      ],
      goldenRule: 'Retainers give you recurring freedom. 20 clients on a $497/mo retainer = $9,940/mo in predictable baseline cash flow.',
      tasks: [
        { id: 'b2b-s9-t1', text: 'Present retainer agreement during final handover meeting' },
        { id: 'b2b-s9-t2', text: 'Set up recurring Stripe subscription billing' },
        { id: 'b2b-s9-t3', text: 'Schedule monthly automated traffic and conversion email reports' },
      ],
    },

    {
      stepNumber: 10,
      pageNumber: 17,
      title: 'Step 10: 90-Day Scaling, Optimization & KPI Protocol',
      subtitle: 'Systematize Your Agency Operations to Consistently Invoice $15,000–$40,000/mo',
      objective: 'Reach predictable $20k/mo revenue and hire your first junior developer subcontractor.',
      timeToExecute: 'Ongoing',
      deliverable: 'Fully systematized outbound pipeline and subcontracted delivery pipeline',
      detailedWalkthrough: [
        'Maintain daily outbound quota: Never pause outreach even when busy delivering client work.',
        'When you hit $10k/mo, hire a freelance junior frontend developer on Upwork for $500/project to handle CSS styling while you focus 100% on sales.',
        'Your role shifts from technician to operator, expanding your capacity from 3 clients to 10 clients per month.',
      ],
      goldenRule: 'Never stop the pipeline. The moment you stop sending Looms to celebrate a deal is the day you guarantee a broke month 60 days later.',
      tasks: [
        { id: 'b2b-s10-t1', text: 'Establish daily 20-Loom outbound habit on calendar' },
        { id: 'b2b-s10-t2', text: 'Document step-by-step developer handoff SOP in Notion' },
        { id: 'b2b-s10-t3', text: 'Track Close Rate, Average Deal Size, and Retainer MRR weekly' },
      ],
    },
  ],
};

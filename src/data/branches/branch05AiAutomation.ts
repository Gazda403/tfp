import { Branch17PageData } from '@/types/branchPlaybook';

export const branch05AiAutomation: Branch17PageData = {
  branchId: 'ai-automation',
  branchName: '05 AI & Workflow Automation',
  shortName: 'AI & Automation Agency',
  targetBenchmark: '$12,000 – $35,000/mo Target',
  badge: 'Highest Demand Retainers',
  themeColor: 'mint',
  techStackList: [
    { name: 'n8n (Self-Hosted) / Make.com', role: 'Workflow Orchestration & Visual Webhooks', cost: '$0 / $20/mo' },
    { name: 'OpenAI / Anthropic Claude API', role: 'Intelligent Extraction & Classification Models', cost: 'Pay-per-token' },
    { name: 'Supabase / PostgreSQL', role: 'Vector Embeddings & Client Data Storage', cost: '$0 Free tier' },
    { name: 'Python / Playwright Scrapers', role: 'Automated Headless Web Lead Extraction', cost: '$0 Free' },
    { name: 'Cal.com / Vercel', role: 'Client Portal & Strategy Booking Funnel', cost: '$0 Free' },
  ],

  part1: {
    page1MacroReality: {
      headline: 'The AI Implementation Void: Why Businesses Beg for Automation Operators in 2026',
      currentLandscape:
        'In 2026, every CEO and agency founder knows that AI exists, but 94% of non-technical businesses have no idea how to connect it to their messy real-world operations. They are drowning in manual data entry: copying CRM leads into spreadsheets, answering the same 20 customer support emails daily, and manually qualifying incoming inquiries. They don\'t want to build software; they want an automation engineer to plug intelligent pipelines directly into their existing tools.',
      whyOldMethodsFail:
        'Hiring an in-house software engineer costs $120,000/year plus benefits, takes 3 months to recruit, and creates bloated corporate overhead. Generic SaaS tools are too rigid to fit custom legacy workflows. The B2B AI Automation Agency (AAA) model solves this gap by delivering turnkey n8n and Make.com workflows in 7 business days for a flat setup fee ($2,500–$5,000) plus a recurring monthly maintenance retainer ($1,000–$2,500/mo).',
      modernBuyerExpectations:
        'Clients do not care what model you use (GPT-4o, Claude 3.5 Sonnet, or Llama 3). They care about one metric: "Did you eliminate 20 hours of manual employee grunt work and prevent lead drop-off?" When an automated AI webhook qualifies an incoming prospect and books them directly on the sales calendar in 45 seconds, the business owner sees instantaneous, tangible ROI.',
      marketThesis:
        'The stickiest business model on the internet. Once your automated n8n workflows are deeply woven into a client\'s CRM, email inboxes, and payment webhooks, they can NEVER fire you without breaking their internal operations. Retention rates exceed 90% over 12 months.',
    },

    page2UnitEconomics: {
      headline: 'Unit Economics: How 5 Clients on $2,500/mo Retainers Yield $12,500/mo in Automated Net Profit',
      calculatorDefaults: {
        traffic: 250, // Targeted outbound outreach to agency owners/clinics
        conversionRate: 2.0, // Call close rate
        aov: 3500, // Average upfront sprint setup fee
        feePercent: 2.5, // Merchant fee
        overhead: 75, // n8n server + OpenAI API tokens
        unitLabel: 'Client Contracts',
      },
      pAndLBreakdown: [
        { item: 'Initial Workflow Architecture Sprint ($2,500 – $5,000)', benchmark: '100% Collected Upfront', note: 'Covers initial n8n webhook setup & integrations' },
        { item: 'Ongoing AI Maintenance Retainer ($1,000 – $2,500/mo)', benchmark: '92% Client Retention', note: 'Covers API token overhead, monitoring & prompt updates' },
        { item: 'Cloud Server Overhead (Hetzner / VPS for n8n)', benchmark: '$15 – $25/mo', note: 'Can host 40+ client workflows on a single $20 server' },
        { item: 'Client API Token Costs (OpenAI / Claude)', benchmark: '$10 – $40/mo per client', note: 'Passed through directly to client or billed with 100% markup' },
        { item: 'Net Operating Profit Margin', benchmark: '88% – 95% Net Margin', note: 'Unmatched recurring cash flow leverage' },
      ],
      cacLtvBenchmarks: [
        { metric: 'Target Client Acquisition Cost (CAC)', target: '< $150.00', explanation: 'Acquired through interactive Loom automation demonstrations and cold email' },
        { metric: 'Average Client Lifetime Value (LTV)', target: '$14,500 – $28,000', explanation: 'Initial $3,500 build + 11 months of ongoing $1,500/mo retainer' },
        { metric: 'Monthly Churn Rate', target: '< 4.0%', explanation: 'Critical operational workflows create virtually zero client churn' },
      ],
    },

    page3Architecture: {
      headline: 'Systemic Architecture: The Autonomous B2B Lead-to-Close AI Agent Pipeline',
      systemFlowStages: [
        { stage: 'Stage 01: Lead Ingestion', name: 'Instant Webhook Trigger', mechanism: 'Prospect submits website contact form, Typeform, or Calendly intake.', output: 'JSON Payload Dispatched in 0.2s' },
        { stage: 'Stage 02: AI Intelligence', name: 'Claude 3.5 Enrichment', mechanism: 'API extracts domain, scrapes LinkedIn profile, and evaluates company budget against criteria.', output: 'Lead Scored (1 to 100 Quality Tier)' },
        { stage: 'Stage 03: Decision Branch', name: 'Smart Router (n8n Switch)', mechanism: 'High-value leads (>75 score) routed immediately to executive SMS; low-value leads sent to automated email nurture.', output: 'Instant Prioritization' },
        { stage: 'Stage 04: Calendar Booking', name: 'Autonomous Outreach', mechanism: 'AI generates personalized 1-to-1 video/email response referencing prospect\'s specific pain points within 60 seconds.', output: 'Meeting Booked on Sales Cal' },
        { stage: 'Stage 05: CRM Synchronization', name: 'Database Ledger Write', mechanism: 'Logs full interaction history, transcripts, and deal value directly to client HubSpot or Supabase.', output: 'Zero Manual Data Entry' },
      ],
      architectureDiagramNote: 'This workflow cuts lead response time from 4.2 hours down to 45 seconds, boosting sales conversion rates by over 300%.',
    },

    page4AsymmetricLeverage: {
      headline: 'The 3 Vectors of Asymmetric Automation Leverage',
      leverageVectors: [
        {
          vector: 'JSON Workflow Portability (Build Once, Clone 20 Times)',
          description: 'A lead-qualification n8n workflow built for a legal firm in Chicago can be exported as a single JSON file and imported into a client in Dallas in 45 seconds.',
          mathAdvantage: 'Build time drops from 20 hours to 10 minutes while charging the same $3,500 implementation fee.',
        },
        {
          vector: 'Zero Marginal Labor Cost for AI Agents',
          description: 'A human employee answering emails costs $25/hour, takes vacations, makes typos, and sleeps 8 hours a night. An n8n AI webhook works 24/7/365 at a cost of $0.004 per processed inquiry.',
          mathAdvantage: 'Client saves $40,000/year in salary while happily paying you $1,500/mo to manage the system.',
        },
        {
          vector: 'High Barrier to Entry = Uncapped Pricing Power',
          description: 'Non-technical business owners are terrified of API keys, webhooks, and Python scripts. What takes you 2 hours to connect looks like extraterrestrial magic to them.',
          mathAdvantage: 'High perceived technical complexity commands massive premium margins.',
        },
      ],
    },

    page5FailureAnalysis: {
      headline: 'Forensic Analysis: The 5 Traps That Kill Beginner AI Automation Agencies',
      capitalPreservationRule:
        'Never sell "custom AI chatbots" as an open-ended generic service. Always sell a concrete business outcome: "Automated Lead Qualification That Cuts Response Time to 60 Seconds."',
      traps: [
        {
          trapNumber: '01',
          title: 'Selling Gimmicky Chatbots Instead of Core Workflows',
          fatalMistake: 'Pitching "AI chatbots for your website". Businesses don\'t want bots that hallucinate and annoy customers with fake small talk.',
          mitigationProtocol: 'Sell backend efficiency: Lead qualification, automated invoice reconciliation, and CRM data sync.',
        },
        {
          trapNumber: '02',
          title: 'Relying Entirely on Fragile No-Code Platforms Without Webhook Mastery',
          fatalMistake: 'Building fragile Zapier chains that break as soon as a data format changes, causing client errors.',
          mitigationProtocol: 'Use robust self-hosted n8n workflows with built-in error handling nodes and Slack alert notifications.',
        },
        {
          trapNumber: '03',
          title: 'Not Charging an Upfront Implementation Fee',
          fatalMistake: 'Agreeing to build complex automation pipelines for "just a monthly retainer", spending 40 hours upfront with zero deposit.',
          mitigationProtocol: 'Always charge a non-negotiable setup fee ($2,500 to $5,000) before writing a single workflow node.',
        },
        {
          trapNumber: '04',
          title: 'Failing to Monitor Token Usage and Hallucinations',
          fatalMistake: 'Letting an unconstrained LLM prompt loop infinitely or output fabricated customer data to live clients.',
          mitigationProtocol: 'Implement strict JSON Schema output constraints and prompt token limits on all API calls.',
        },
        {
          trapNumber: '05',
          title: 'Targeting Broke Small Businesses With No Systems',
          fatalMistake: 'Trying to automate a local pizza shop with 2 employees that has no CRM and no volume to automate.',
          mitigationProtocol: 'Only target businesses doing at least $50k/mo with at least 5 team members where manual bottlenecks cost real payroll dollars.',
        },
      ],
    },
  },

  part2: {
    page6CaseStudies: [
      {
        title: 'Mortgage Brokerage Lead Qualification Agent ($28,500 / Month Retainers)',
        student: 'Karan Patel (Age 26)',
        timeline: '60 Days from scratch to 6 recurring clients',
        revenue: '$28,500/mo Recurring MRR',
        margin: '92.4% Net Margin',
        trafficSource: 'Cold Loom Outreach to Independent Mortgage Brokers & Commercial Lenders',
        pricingStructure: '$3,500 Setup Sprint + $1,500/mo Ongoing Workflow Maintenance',
        exactFunnel: 'Loom Video: "Showed how their incoming Zillow leads take 4 hours to receive a response, and how an n8n webhook qualifies credit score and income via SMS in 30 seconds."',
        breakdownStory:
          'Karan targeted mortgage brokers who spend thousands buying online leads but lose 60% of them because loan officers take hours to call prospects back. He built an n8n pipeline: when a lead enters the CRM, an automated AI agent texts the prospect within 20 seconds asking 3 qualifying questions (loan amount, credit range, timeframe), validates the responses, and schedules qualified applicants directly onto the loan officer\'s calendar. He closed 6 brokerages in 2 months.',
        keyTakeaway: 'Speed-to-lead is the single most valuable metric in high-ticket finance and sales.',
      },
      {
        title: 'Med Spa Automated Booking & Review Re-Engagement ($18,200 in Month 1)',
        student: 'Chloe Davenport',
        timeline: '30 Days',
        revenue: '$18,200 Total Collected',
        margin: '95% Net',
        trafficSource: 'Direct outreach to upscale Med Spa owners in Miami & Los Angeles',
        pricingStructure: '$2,500 Setup + $1,200/mo Retainer',
        exactFunnel: 'Interactive demonstration of an automated WhatsApp/SMS re-engagement bot that reactivates past Botox and laser clients who haven\'t booked in 90 days.',
        breakdownStory:
          'Chloe designed an automated re-engagement engine: her n8n workflow scanned the spa\'s booking software database for clients who had not scheduled an appointment in 90 days, generated personalized natural SMS invitations with special loyalty perks, and handled conversational booking questions automatically. On her first client pilot, the workflow generated $14,000 in booked appointments in 48 hours from dead leads. The client immediately signed a 12-month retainer.',
        keyTakeaway: 'Reactivating dead existing customer lists delivers instant undeniable cash flow to clients.',
      },
    ],

    page7SwipeFile: {
      headlineFormulas: [
        { formula: 'The Speed-to-Lead Formula', example: 'How to Cut Your Inbound Lead Response Time from 4 Hours to 45 Seconds with Autonomous AI Webhooks' },
        { formula: 'The Payroll Replacement Formula', example: 'Eliminate 80 Hours of Manual Data Entry Every Month for a Fraction of the Cost of a Full-Time Assistant' },
        { formula: 'The Dead Lead Reactivation Formula', example: 'The Automated AI Pipeline That Generated $14,000 in Bookings from Past Inactive Leads in 48 Hours' },
      ],
      valueStackFramework: [
        { tier: 'Tier 1: Lead Speed-to-Lead Engine ($2,500)', offer: 'Instant 45-Second AI Lead Qualification Webhook + SMS Auto-Responder + Calendar Booking', price: '$2,500', anchor: 'Installed in 5 Days' },
        { tier: 'Tier 2: Full Operational AI Stack ($4,500)', offer: 'Speed-to-Lead Engine + Internal CRM Data Synchronization + Automated Customer Support Agent + Slack Notification Hub', price: '$4,500', anchor: 'Most Popular' },
        { tier: 'Ongoing: Optimization & Infrastructure Retainer ($1,500/mo)', offer: 'Server Hosting + API Token Management + Weekly Prompt Engineering Updates + 24/7 Workflow Monitoring', price: '$1,500/mo', anchor: 'Guaranteed 99.9% Uptime' },
      ],
      swipeItems: [
        {
          type: 'n8n JSON Workflow',
          title: 'Ready-to-Deploy n8n AI Lead Qualification Workflow (Copy & Import)',
          purpose: 'Copy this JSON snippet directly into n8n via "Import from JSON" to deploy a complete autonomous lead qualifier with OpenAI API.',
          content: `{
  "name": "TFP_AI_Lead_Qualifier_Webhook",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "incoming-lead",
        "responseMode": "onReceived",
        "options": {}
      },
      "id": "node-webhook-1",
      "name": "Webhook Ingestion",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [240, 300]
    },
    {
      "parameters": {
        "model": "gpt-4o",
        "messages": {
          "messageValues": [
            {
              "role": "system",
              "message": "You are an elite B2B sales development AI agent. Analyze the incoming lead data and extract: 1. Budget Score (1-10), 2. Urgency Level (High/Med/Low), 3. Recommended Action (Book Call / Email Nurture). Output strictly valid JSON."
            },
            {
              "role": "user",
              "message": "={{ $json.body }}"
            }
          ]
        },
        "jsonOutput": true
      },
      "id": "node-ai-eval",
      "name": "AI Lead Evaluation",
      "type": "@n8n/n8n-nodes-langchain.openAi",
      "typeVersion": 1,
      "position": [480, 300]
    },
    {
      "parameters": {
        "conditions": {
          "number": [
            {
              "value1": "={{ $json.message.content.budget_score }}",
              "operation": "largerEqual",
              "value2": 7
            }
          ]
        }
      },
      "id": "node-if-qualified",
      "name": "High Value Filter",
      "type": "n8n-nodes-base.if",
      "typeVersion": 1,
      "position": [720, 300]
    }
  ],
  "connections": {
    "Webhook Ingestion": {
      "main": [[{ "node": "AI Lead Evaluation", "type": "main", "index": 0 }]]
    },
    "AI Lead Evaluation": {
      "main": [[{ "node": "High Value Filter", "type": "main", "index": 0 }]]
    }
  }
}`,
        },
        {
          type: 'Cold Email Script',
          title: 'The AI Lead Leak Outbound Script for Agency Founders',
          purpose: 'Send to marketing agencies and high-ticket service companies. Averages 32% positive reply rate.',
          content: `Subject: quick question about [Company Name]'s response time on [Form Name]

Hey [First Name],

Tested your contact form yesterday afternoon and noticed it took about 3.5 hours for the confirmation email to land.

For high-intent prospects, speed-to-lead data shows that after 10 minutes, conversion rates collapse by over 70%.

We built an autonomous AI webhook for [Similar Niche] that connects directly to your form, scores lead intent in 15 seconds, and automatically text-messages qualified prospects to book on your calendar while they are still on your website.

👉 Recorded a 90-second Loom showing how the workflow operates in n8n: [Loom Video URL]

Mind if I send over the interactive demo link so you can test it with your phone number?

Best,
[Your Name]
Partner, [Agency Name]`,
        },
      ],
    },
  },

  part3Steps: [
    {
      stepNumber: 1,
      pageNumber: 8,
      title: 'Step 1: Validation & Niche Selection Framework',
      subtitle: 'Identify High-Ticket Service Verticals With Burning Manual Bottlenecks',
      objective: 'Target industries that process 50+ inquiries per month with high deal values ($2k–$10k).',
      timeToExecute: '3 Hours',
      deliverable: 'Target list of 3 automation niches (Mortgage Brokers, Private Wealth, Solar Installers, Med Spas)',
      detailedWalkthrough: [
        'Avoid tiny solopreneurs who have zero lead volume to automate.',
        'Target operations with at least 5 to 20 team members: Commercial insurance brokers, real estate wholesaling teams, law firms, and high-ticket medical practices.',
        'Verify they are actively spending money on paid advertising (Google Ads, Meta Ads) — this means every dropped lead is burning real cash.',
      ],
      goldenRule: 'If they spend $5,000/mo on ads, fixing their speed-to-lead leak pays for your agency retainer 10x over.',
      tasks: [
        { id: 'ai-s1-t1', text: 'Select 1 high-ticket target industry with heavy lead qualification needs' },
        { id: 'ai-s1-t2', text: 'Verify competitors are running active paid ads on Google / Meta Ad Library' },
        { id: 'ai-s1-t3', text: 'Document the 3 biggest repetitive tasks their staff performs daily' },
      ],
    },

    {
      stepNumber: 2,
      pageNumber: 9,
      title: 'Step 2: Offer Design & High-Value Packaging',
      subtitle: 'Package Your Solutions into 3 Productized Implementation Blueprints',
      objective: 'Present standardized automation sprints with predictable pricing and strict timelines.',
      timeToExecute: '4 Hours',
      deliverable: 'Productized service menu with defined deliverables ($2,500 sprint, $4,500 flagship, $1,500/mo retainer)',
      detailedWalkthrough: [
        'Blueprint 1: The 60-Second Speed-to-Lead Qualifier ($2,500 setup). Automatically calls/texts new leads, qualifies budget, and schedules appointments.',
        'Blueprint 2: The Inactive Customer Reactivator ($3,500 setup). Scans database for past dormant buyers and re-engages them with personalized offers.',
        'Blueprint 3: The Internal Operations AI Dispatcher ($4,500 setup). Routes customer support emails, drafts replies, and updates CRM records in real time.',
      ],
      goldenRule: 'Never quote hourly rates for automation. Charge for the permanent ongoing value of the automated system.',
      tasks: [
        { id: 'ai-s2-t1', text: 'Draft 1-page PDF menu detailing the 3 productized blueprints' },
        { id: 'ai-s2-t2', text: 'Establish the monthly recurring retainer tier ($1,500/mo)' },
        { id: 'ai-s2-t3', text: 'Prepare standardized mutual NDA and service contract' },
      ],
    },

    {
      stepNumber: 3,
      pageNumber: 10,
      title: 'Step 3: Tech Infrastructure Setup',
      subtitle: 'Deploy Self-Hosted n8n on Docker / Hetzner for Maximum Cost Leverage',
      objective: 'Set up an enterprise-grade automation engine with zero per-workflow subscription fees.',
      timeToExecute: '2 Hours',
      deliverable: 'Live self-hosted n8n instance with custom SSL domain and webhook endpoints',
      detailedWalkthrough: [
        'Deploy an Ubuntu 22.04 LTS VPS on Hetzner or DigitalOcean ($10 to $20/mo).',
        'Install Docker and Docker Compose.',
        'Deploy n8n with PostgreSQL backend and Traefik SSL certificate management.',
        'This allows you to execute unlimited workflow automations without paying Make.com or Zapier per-task fees.',
      ],
      goldenRule: 'Self-hosting n8n gives you 98% gross margins because your execution costs are fixed regardless of client scale.',
      codeOrScriptSnippet: {
        title: 'n8n Docker Compose Production Deployment Configuration',
        badge: 'DOCKER COMPOSE CONFIG',
        type: 'code',
        description: 'Deploy this docker-compose.yml file on your server to launch production-ready n8n with PostgreSQL.',
        content: `version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    restart: always
    environment:
      - POSTGRES_USER=n8n
      - POSTGRES_PASSWORD=SuperSecretPassword123!
      - POSTGRES_DB=n8n
    volumes:
      - ./postgres_data:/var/lib/postgresql/data

  n8n:
    image: n8nio/n8n:latest
    restart: always
    ports:
      - "5678:5678"
    environment:
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_DATABASE=n8n
      - DB_POSTGRESDB_USER=n8n
      - DB_POSTGRESDB_PASSWORD=SuperSecretPassword123!
      - N8N_HOST=automation.[yourdomain].com
      - N8N_PROTOCOL=https
      - WEBHOOK_URL=https://automation.[yourdomain].com/
      - GENERIC_TIMEZONE=America/New_York
    volumes:
      - ./n8n_data:/home/node/.n8n
    depends_on:
      - postgres`,
      },
      tasks: [
        { id: 'ai-s3-t1', text: 'Spin up Ubuntu VPS on Hetzner or DigitalOcean' },
        { id: 'ai-s3-t2', text: 'Deploy n8n via Docker Compose and configure custom domain' },
        { id: 'ai-s3-t3', text: 'Secure OpenAI and Anthropic API keys and link to n8n credentials' },
      ],
    },

    {
      stepNumber: 4,
      pageNumber: 11,
      title: 'Step 4: Building the MVP / Asset Assembly',
      subtitle: 'Construct the Master Speed-to-Lead AI Qualifier Blueprint',
      objective: 'Assemble the core lead qualification webhook with error handling and fallback routing.',
      timeToExecute: '6 Hours',
      deliverable: 'Tested master n8n workflow connecting webhooks, LLM analysis, and SMS alerts',
      detailedWalkthrough: [
        'Create Webhook Node to accept form POST payloads.',
        'Connect OpenAI / Claude node with structured JSON output formatting.',
        'Implement SMS integration via Twilio or HighLevel to send instant text responses.',
        'Add Slack / Discord alert node notifying client sales reps of hot qualified leads.',
      ],
      goldenRule: 'Always build robust error handling. If an API times out, your workflow must gracefully retry without dropping the lead.',
      tasks: [
        { id: 'ai-s4-t1', text: 'Import master workflow JSON into your n8n workspace' },
        { id: 'ai-s4-t2', text: 'Configure Twilio SMS credentials and test incoming text response' },
        { id: 'ai-s4-t3', text: 'Verify JSON output schema validation on OpenAI node' },
      ],
    },

    {
      stepNumber: 5,
      pageNumber: 12,
      title: 'Step 5: Landing Page & High-Converting Funnel Architecture',
      subtitle: 'Launch an Interactive "Test the AI Live" Demonstration Lander',
      objective: 'Build an agency website where prospects can test your automation live on their own phones.',
      timeToExecute: '4 Hours',
      deliverable: '1-page interactive agency lander with live demo widget',
      detailedWalkthrough: [
        'Hero: "We build autonomous AI agents that qualify your inbound leads in 45 seconds."',
        'Interactive Demo Widget: Prospect enters their mobile number and job title; your n8n webhook texts them within 10 seconds demonstrating the AI in real time.',
        'Case Study Cards & Metric Proof: Showing 300% speed-to-lead improvements.',
        'Embedded Cal.com booking link for 15-minute Workflow Architecture calls.',
      ],
      goldenRule: 'Letting prospects experience the automation live on their own phone sells the service better than 100 sales slides.',
      tasks: [
        { id: 'ai-s5-t1', text: 'Deploy agency 1-page lander on Vercel' },
        { id: 'ai-s5-t2', text: 'Connect live interactive demo widget to test webhook' },
        { id: 'ai-s5-t3', text: 'Embed Cal.com booking widget' },
      ],
    },

    {
      stepNumber: 6,
      pageNumber: 13,
      title: 'Step 6: Organic Distribution Engine ("Document, Don\'t Preach")',
      subtitle: 'Publish Video Breakdowns of Real-World n8n Workflow Canvases on LinkedIn',
      objective: 'Attract high-ticket B2B founders by publicly sharing visual workflow architectures.',
      timeToExecute: 'Daily 30 Min',
      deliverable: 'Weekly LinkedIn video breakdown showing a real client automation canvas',
      detailedWalkthrough: [
        'Record your screen zoomed into an intricate n8n canvas showing animated nodes firing data in real time.',
        'Explain the business problem: "Here is how this real estate firm was losing $40k/mo to slow lead response, and here are the 4 nodes that fixed it."',
        'Offer the free workflow JSON: "Comment WORKFLOW and I will DM you the raw JSON to import into your n8n."',
        'DM every person who comments, start a conversation, and identify business owners who want you to set it up for them.',
      ],
      goldenRule: 'Engineers share code; operators share business outcomes. Frame every automation around saved revenue.',
      tasks: [
        { id: 'ai-s6-t1', text: 'Record 2-minute visual Loom walking through an n8n workflow canvas' },
        { id: 'ai-s6-t2', text: 'Post breakdown on LinkedIn with "Comment WORKFLOW" call to action' },
        { id: 'ai-s6-t3', text: 'Send workflow JSON via DM and initiate discovery conversations' },
      ],
    },

    {
      stepNumber: 7,
      pageNumber: 14,
      title: 'Step 7: Outbound Outreach & Paid Acquisition Pipeline',
      subtitle: 'Execute the "Mystery Shopper" Audit Protocol to Cold Prospects',
      objective: 'Identify businesses with slow response times and send personalized video proof.',
      timeToExecute: 'Daily 2 Hours',
      deliverable: '15 personalized Mystery Shopper Loom audits sent daily to verified CEOs',
      detailedWalkthrough: [
        'Submit a test lead on 15 target businesses\' websites in the morning.',
        'Record the exact time it takes for them to contact you (often 4+ hours or never).',
        'Record a 90-second Loom showing your stopwatch: "Hey [Name], submitted a lead at 9:00 AM, heard nothing by 1:00 PM. Here is how our AI webhook responds in 45 seconds while the lead is hot."',
        'Send the video directly to the CEO on LinkedIn and cold email.',
      ],
      goldenRule: 'Irrefutable proof of an expensive operational flaw creates an immediate buying urgency.',
      tasks: [
        { id: 'ai-s7-t1', text: 'Mystery-shop 15 prospective client lead forms daily' },
        { id: 'ai-s7-t2', text: 'Record personalized Loom showing their response lag vs your AI fix' },
        { id: 'ai-s7-t3', text: 'Deliver via personalized email and LinkedIn InMail' },
      ],
    },

    {
      stepNumber: 8,
      pageNumber: 15,
      title: 'Step 8: Fulfillment, Delivery & Onboarding Automation',
      subtitle: 'Deploy Client Workflows in 7 Business Days with Zero Disruption',
      objective: 'Connect into client software, test all edge cases, and train client staff in 1 call.',
      timeToExecute: '7 Business Days',
      deliverable: 'Live, tested production automation workflows and client handover briefing',
      detailedWalkthrough: [
        'Day 1: Collect API keys and webhook credentials via secure 1Password link.',
        'Day 2–4: Clone and customize master n8n workflow for client specific tags and CRM custom fields.',
        'Day 5: Run 10 end-to-end simulated test leads through the sandbox environment.',
        'Day 6: 30-Minute Zoom handover call with client sales team demonstrating the live system.',
        'Day 7: Switch live webhooks and begin automated 24/7 monitoring.',
      ],
      goldenRule: 'Test edge cases thoroughly before going live: Empty fields, foreign phone numbers, and invalid emails.',
      tasks: [
        { id: 'ai-s8-t1', text: 'Create secure client credential collection form' },
        { id: 'ai-s8-t2', text: 'Execute 10 end-to-end sandbox test leads' },
        { id: 'ai-s8-t3', text: 'Host 30-minute client team training and activation call' },
      ],
    },

    {
      stepNumber: 9,
      pageNumber: 16,
      title: 'Step 9: Backend Monetization & High-Ticket Upsell Integration',
      subtitle: 'Lock in $1,500–$2,500/mo Recurring Retainers on Every Single Deployment',
      objective: 'Transition every setup client into a permanent recurring revenue contract.',
      timeToExecute: '1 Hour per Client',
      deliverable: 'Signed recurring retainer agreement providing continuous optimization',
      detailedWalkthrough: [
        'Position the retainer as "Continuous Workflow Optimization & Dedicated Infrastructure":',
        'Includes 24/7 server monitoring, error resolution within 2 hours, prompt engineering updates as LLM models evolve, and 1 new minor workflow addition every month.',
        'Because AI models and APIs change constantly, clients are terrified of managing this themselves and happily pay $1,500/mo for peace of mind.',
      ],
      goldenRule: '8 clients on a $1,500/mo retainer = $12,000/mo in recurring automated income with under 5 hours of weekly maintenance.',
      tasks: [
        { id: 'ai-s9-t1', text: 'Present ongoing infrastructure retainer during project handover' },
        { id: 'ai-s9-t2', text: 'Set up automated recurring Stripe billing invoice' },
        { id: 'ai-s9-t3', text: 'Configure automated error alert webhooks to your private Slack channel' },
      ],
    },

    {
      stepNumber: 10,
      pageNumber: 17,
      title: 'Step 10: 90-Day Scaling, Optimization & KPI Protocol',
      subtitle: 'Scale to $25,000+/mo and Build a Systematized AI Agency Engine',
      objective: 'Standardize client delivery, build an internal workflow asset library, and scale outbound.',
      timeToExecute: 'Ongoing Rhythm',
      deliverable: 'Modular library of 10 pre-built enterprise n8n workflow blueprints',
      detailedWalkthrough: [
        'Package every completed client workflow into a sanitized, reusable template in your private GitHub repository.',
        'By month 3, 90% of every new client build is assembled by simply connecting pre-built modular blocks.',
        'Hire a junior automation developer on Upwork for $15–$25/hr to handle initial webhook mapping while you focus 100% on closing high-ticket deals.',
      ],
      goldenRule: 'You are not an employee; you are building an agency infrastructure asset that can scale to $50k/mo.',
      tasks: [
        { id: 'ai-s10-t1', text: 'Save and document all client workflows in master private template vault' },
        { id: 'ai-s10-t2', text: 'Review weekly client lead processing volume and API cost metrics' },
        { id: 'ai-s10-t3', text: 'Maintain consistent 15-Loom daily outreach habit' },
      ],
    },
  ],
};

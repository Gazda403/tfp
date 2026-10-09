import { AssetItem } from '@/types/assetLibrary';

export const ASSET_LIBRARY: AssetItem[] = [
  // ────────────────────────────────────────────────
  // 1. MICRO-SAAS & WEB APP STARTERS
  // ────────────────────────────────────────────────
  {
    id: 'micro-saas',
    title: 'Micro-SaaS & Web App Starters',
    subtitle: 'Next.js · Auth · Stripe · Supabase',
    tagline: 'Ship a paying product in 48 hours using AI code generation.',
    iconName: 'Code2',
    accentColor: '#D4F84C',
    accentBg: 'rgba(212,248,76,0.12)',
    borderAccent: 'rgba(212,248,76,0.35)',
    badge: 'Highest ROI',
    badgeBg: 'rgba(212,248,76,0.15)',
    estimatedRevenue: '$500–$8K/mo',
    timeToBuild: '4–12 hrs',
    difficulty: 'Intermediate',
    economics: {
      priceRange: '$29–$199 one-time or $9–$49/mo recurring',
      timeToBuild: '4–12 hours using Cursor + v0 + Supabase',
      marginProfile: '92–97% gross margin (no COGS)',
      demandSignal: 'SaaS micro-tools dominate Indie Hackers MRR leaderboard',
      validationMetric: '3+ upvotes on Product Hunt within 1 hour = viable',
      targetBuyer: 'Freelancers, SMBs, indie founders, content creators',
    },
    techStack: [
      { name: 'Next.js 15', role: 'Full-stack framework (App Router)', cost: 'Free', url: 'https://nextjs.org' },
      { name: 'Supabase', role: 'Auth + Postgres DB + Storage', cost: 'Free tier generous', url: 'https://supabase.com' },
      { name: 'Stripe', role: 'One-time payments + subscriptions', cost: '2.9% + 30¢/txn', url: 'https://stripe.com' },
      { name: 'Vercel', role: 'Zero-config deployment + edge CDN', cost: 'Free hobby / $20 pro', url: 'https://vercel.com' },
      { name: 'Cursor', role: 'AI code editor (10× speed)', cost: '$20/mo', url: 'https://cursor.sh' },
      { name: 'v0.dev', role: 'Component UI generation from prompts', cost: '$20/mo', url: 'https://v0.dev' },
    ],
    architecture: [
      { step: 1, label: 'Landing Page', detail: 'v0-generated hero + pricing section with Stripe buy button' },
      { step: 2, label: 'Auth Wall', detail: 'Supabase Auth (Google OAuth + Magic Link) gates the app' },
      { step: 3, label: 'Core Feature', detail: 'The single utility that solves the specific pain (≤3 screens)' },
      { step: 4, label: 'Webhook Loop', detail: 'Stripe webhook → Supabase sets user.isPro = true' },
      { step: 5, label: 'Distribution', detail: 'Product Hunt, X/Twitter thread, Reddit r/SideProject' },
    ],
    buildSteps: [
      {
        id: 'ms-1',
        phase: 1,
        title: 'Niche & Pain Point Identification',
        subtitle: 'The 20-minute research sprint',
        duration: '20 min',
        tasks: [
          'Search X/Twitter for "[tool name] is so painful", "I wish [software] could…"',
          'Scan r/SideProject, r/Entrepreneur for recurring complaints',
          'Validate: can this be solved with a single-function web app in <500 lines?',
          'Write a 1-sentence problem statement: "X struggles with Y, causing Z loss"',
        ],
        aiPrompt: `Find me 10 micro-SaaS opportunities in the [NICHE] space. For each, give me:
1. The specific pain point
2. Who experiences it daily
3. What existing tools fail at
4. A one-line app concept to fix it
5. Estimated willingness-to-pay ($)
Format as JSON array.`,
      },
      {
        id: 'ms-2',
        phase: 2,
        title: 'AI MVP Generation',
        subtitle: 'Build the core in Cursor using prompt chaining',
        duration: '3–6 hrs',
        tasks: [
          'Open Cursor, create a new Next.js App Router project',
          'Use the scaffold prompt below to generate the full app skeleton',
          'Run v0.dev to generate the landing page UI component',
          'Wire Supabase auth and create the protected dashboard route',
          'Connect Stripe checkout session with success/cancel redirects',
        ],
        aiPrompt: `You are a senior Next.js engineer. Build me a complete micro-SaaS called "[APP NAME]" that [SOLVES SPECIFIC PROBLEM].

Stack: Next.js 15 App Router, Supabase Auth, Stripe, Tailwind CSS, TypeScript.

Requirements:
- /app/page.tsx → Marketing landing page with CTA
- /app/dashboard/page.tsx → Core feature (protected route)
- /app/api/stripe/checkout/route.ts → Stripe checkout session
- /app/api/stripe/webhook/route.ts → Handle payment success
- /lib/supabase.ts → Server + client helpers
- middleware.ts → Auth protection

Generate all files with complete, production-ready code.`,
      },
      {
        id: 'ms-3',
        phase: 3,
        title: 'Deploy & Payment Setup',
        subtitle: 'Live on Vercel with Stripe collecting money',
        duration: '45 min',
        tasks: [
          'Push to GitHub → connect to Vercel (zero-config deploy)',
          'Add Supabase env vars to Vercel dashboard',
          'Configure Stripe webhook endpoint: vercel-url.vercel.app/api/stripe/webhook',
          'Set STRIPE_WEBHOOK_SECRET in Vercel env vars',
          'Test purchase flow end-to-end with Stripe test card 4242 4242 4242 4242',
          'Enable Stripe live mode + flip keys when ready',
        ],
      },
      {
        id: 'ms-4',
        phase: 4,
        title: 'Distribution & First Sales',
        subtitle: 'Get the first 10 paying customers',
        duration: '1–2 days',
        tasks: [
          'Post on X: "I built [TOOL] in 12 hours using AI. It does [BENEFIT]. Trying it free → [URL]"',
          'Submit to Product Hunt with a 60-second Loom demo',
          'Post in relevant subreddit: genuine problem-solving thread, link in bio',
          'Cold DM 50 ideal customers on X/Twitter with: "I built this for people like you…"',
          'List on Gumroad as a "digital product" for SEO exposure',
        ],
      },
    ],
    snippets: [
      {
        id: 'ms-s1',
        label: 'Stripe Checkout Route',
        language: 'typescript',
        description: 'Next.js API route that creates a Stripe checkout session with success redirect',
        code: `// /app/api/stripe/checkout/route.ts
import { stripe } from '@/lib/stripe';
import { createServerClient } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',               // swap to 'subscription' for SaaS
    customer_email: user.email,
    line_items: [{
      price_data: {
        currency: 'usd',
        unit_amount: 4900,          // $49.00 → adjust price here
        product_data: { name: 'Lifetime Access — Your App Name' },
      },
      quantity: 1,
    }],
    metadata: { userId: user.id },
    success_url: \`\${process.env.NEXT_PUBLIC_URL}/dashboard?success=1\`,
    cancel_url: \`\${process.env.NEXT_PUBLIC_URL}/?cancelled=1\`,
  });

  return NextResponse.json({ url: session.url });
}`,
      },
      {
        id: 'ms-s2',
        label: 'Stripe Webhook Handler',
        language: 'typescript',
        description: 'Verifies Stripe signature and upgrades user in Supabase on payment success',
        code: `// /app/api/stripe/webhook/route.ts
import { stripe } from '@/lib/stripe';
import { createAdminClient } from '@/lib/supabase';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch { return NextResponse.json({ error: 'Bad signature' }, { status: 400 }); }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.userId;
    if (userId) {
      const supabase = createAdminClient();
      await supabase.from('profiles').update({ is_pro: true }).eq('id', userId);
    }
  }

  return NextResponse.json({ received: true });
}`,
      },
      {
        id: 'ms-s3',
        label: 'Auth Middleware',
        language: 'typescript',
        description: 'Protects /dashboard routes — redirect to /login if no Supabase session',
        code: `// middleware.ts
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  let res = NextResponse.next({ request: req });
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => req.cookies.getAll(),
      setAll: (cs) => cs.forEach(({ name, value, options }) => res.cookies.set(name, value, options)) } }
  );
  const { data: { user } } = await supabase.auth.getUser();
  if (!user && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return res;
}

export const config = { matcher: ['/dashboard/:path*'] };`,
      },
    ],
  },

  // ────────────────────────────────────────────────
  // 2. CHROME EXTENSIONS & BROWSER TOOLS
  // ────────────────────────────────────────────────
  {
    id: 'chrome-extension',
    title: 'Chrome Extensions & Browser Tools',
    subtitle: 'Manifest v3 · Content Scripts · Storage API',
    tagline: 'Build browser superpowers — sell once, earn forever.',
    iconName: 'Globe',
    accentColor: '#60A5FA',
    accentBg: 'rgba(96,165,250,0.12)',
    borderAccent: 'rgba(96,165,250,0.35)',
    badge: 'Low Competition',
    badgeBg: 'rgba(96,165,250,0.15)',
    estimatedRevenue: '$200–$3K/mo',
    timeToBuild: '3–8 hrs',
    difficulty: 'Intermediate',
    economics: {
      priceRange: '$7–$39 one-time or $4–$12/mo',
      timeToBuild: '3–8 hours (no backend required for simple extensions)',
      marginProfile: '99% margin — pure digital distribution via Chrome Web Store',
      demandSignal: 'Chrome Web Store has 3B+ users; utility tools get organic discovery',
      validationMetric: 'Search the Chrome Web Store — if top result has <50 reviews, market is open',
      targetBuyer: 'Power users, researchers, recruiters, content marketers, developers',
    },
    techStack: [
      { name: 'Manifest V3', role: 'Required Chrome extension config format', cost: 'Free', url: 'https://developer.chrome.com/docs/extensions/mv3/' },
      { name: 'React + Vite', role: 'Build extension popup UI', cost: 'Free', url: 'https://vitejs.dev' },
      { name: 'Chrome Storage API', role: 'Persistent user settings & data', cost: 'Free', url: 'https://developer.chrome.com/docs/extensions/reference/storage/' },
      { name: 'Lemon Squeezy', role: 'License key system for paid tier', cost: '5% + 50¢/txn', url: 'https://lemonsqueezy.com' },
      { name: 'CRXJS Vite Plugin', role: 'Hot-reloading dev workflow for extensions', cost: 'Free', url: 'https://crxjs.dev' },
    ],
    architecture: [
      { step: 1, label: 'manifest.json', detail: 'Declares permissions, popup, background service worker, content scripts' },
      { step: 2, label: 'Popup UI', detail: 'React SPA rendered in the 400px popup iframe' },
      { step: 3, label: 'Content Script', detail: 'Injected into target pages, manipulates DOM or scrapes data' },
      { step: 4, label: 'Background Worker', detail: 'Service worker handles API calls, alarms, and cross-tab messaging' },
      { step: 5, label: 'Paywall Gate', detail: 'Lemon Squeezy license key verified on feature access' },
    ],
    buildSteps: [
      {
        id: 'ce-1',
        phase: 1,
        title: 'Find the Browser Friction',
        subtitle: 'Where do power users waste time in their browser?',
        duration: '15 min',
        tasks: [
          'Think: what do you do manually in the browser 10×/week that could be automated?',
          'Good niches: LinkedIn automation, GitHub utilities, Gmail sorters, Price trackers',
          'Check Chrome Web Store reviews of competitors — 1-star complaints = your feature list',
          'Confirm: does this require real-time page access (content script) or background API calls?',
        ],
        aiPrompt: `I want to build a Chrome extension that [SOLVES PROBLEM] for [TARGET USER].
List 5 specific features I should include in V1, ordered by user value.
For each feature, tell me: which Chrome API I need, the technical difficulty (1–5), and 1 sentence on implementation.`,
      },
      {
        id: 'ce-2',
        phase: 2,
        title: 'Scaffold & Build with AI',
        subtitle: 'Use the manifest + React popup template',
        duration: '2–5 hrs',
        tasks: [
          'Clone or use the manifest.json snippet below as your foundation',
          'Build popup UI in React with Tailwind for a polished 400px panel',
          'Write content script that injects and reads from target page',
          'Add chrome.storage.sync for user preferences that persist across browsers',
          'Test by loading unpacked extension in chrome://extensions',
        ],
        aiPrompt: `Build a Chrome Extension Manifest V3 that:
- Injects into [TARGET_URL_PATTERN] pages
- Adds a floating action button to the page
- When clicked, [CORE FEATURE ACTION]
- Stores results in chrome.storage.local
- Popup shows history of all [FEATURE] results

Generate: manifest.json, content.js, popup/App.tsx, background.js
Use TypeScript. Include all Chrome API type declarations.`,
      },
      {
        id: 'ce-3',
        phase: 3,
        title: 'Monetization & Publishing',
        subtitle: 'Freemium model + Chrome Web Store submission',
        duration: '2 hrs',
        tasks: [
          'Implement freemium: 5 uses free, then prompt license key input',
          'Integrate Lemon Squeezy: generate license key on purchase webhook',
          'Validate license key via fetch() in background service worker',
          'Build with Vite: npm run build generates /dist folder',
          'Submit to Chrome Web Store ($5 one-time developer fee)',
          'Write 5 keyword-rich descriptions for store SEO discovery',
        ],
      },
      {
        id: 'ce-4',
        phase: 4,
        title: 'Growth & Reviews',
        subtitle: 'First 100 users drives organic ranking',
        duration: 'Ongoing',
        tasks: [
          'Post demo video on X showing before/after time savings',
          'Share in relevant Reddit communities (no direct promotion — show value first)',
          'Ask first 20 users for a Chrome Web Store review (5-star = algorithm boost)',
          'Write a blog post: "How I built [Extension] in a weekend" → dev.to + Medium',
        ],
      },
    ],
    snippets: [
      {
        id: 'ce-s1',
        label: 'manifest.json (Manifest V3)',
        language: 'json',
        description: 'Complete Manifest V3 config with all common permissions',
        code: `{
  "manifest_version": 3,
  "name": "Your Extension Name",
  "version": "1.0.0",
  "description": "One-line value proposition for the store",
  "permissions": ["storage", "activeTab", "scripting", "alarms"],
  "host_permissions": ["https://*.targetsite.com/*"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": { "16": "icons/16.png", "128": "icons/128.png" }
  },
  "background": {
    "service_worker": "background.js",
    "type": "module"
  },
  "content_scripts": [{
    "matches": ["https://*.targetsite.com/*"],
    "js": ["content.js"],
    "run_at": "document_idle"
  }],
  "icons": { "16": "icons/16.png", "128": "icons/128.png" }
}`,
      },
      {
        id: 'ce-s2',
        label: 'Content Script Injector',
        language: 'javascript',
        description: 'Injects a floating action button into the host page',
        code: `// content.js — runs on every matching page
(function () {
  if (document.getElementById('myext-fab')) return; // idempotent

  const fab = document.createElement('button');
  fab.id = 'myext-fab';
  fab.textContent = '⚡';
  Object.assign(fab.style, {
    position: 'fixed', bottom: '24px', right: '24px',
    zIndex: '999999', width: '48px', height: '48px',
    borderRadius: '50%', background: '#D4F84C', border: 'none',
    fontSize: '20px', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
  });

  fab.addEventListener('click', () => {
    // Send message to background service worker
    chrome.runtime.sendMessage({ action: 'TRIGGER_FEATURE', url: location.href }, (res) => {
      console.log('[Extension] Feature result:', res);
    });
  });

  document.body.appendChild(fab);
})();`,
      },
      {
        id: 'ce-s3',
        label: 'License Key Validator',
        language: 'javascript',
        description: 'Background worker validates Lemon Squeezy license key',
        code: `// background.js — service worker
async function validateLicense(licenseKey) {
  const res = await fetch('https://api.lemonsqueezy.com/v1/licenses/validate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ license_key: licenseKey }),
  });
  const data = await res.json();
  return data.valid === true;
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'VALIDATE_LICENSE') {
    validateLicense(msg.key).then((isValid) => {
      chrome.storage.sync.set({ isPro: isValid });
      sendResponse({ isValid });
    });
    return true; // keep channel open for async
  }
});`,
      },
    ],
  },

  // ────────────────────────────────────────────────
  // 3. AUTOMATION WORKFLOWS & WEBHOOKS
  // ────────────────────────────────────────────────
  {
    id: 'automation',
    title: 'Automation Workflows & Webhooks',
    subtitle: 'n8n · Make · B2B Lead Scrapers · Zapier',
    tagline: 'Package your automation into a productized service or sell the JSON workflow.',
    iconName: 'Workflow',
    accentColor: '#F97316',
    accentBg: 'rgba(249,115,22,0.12)',
    borderAccent: 'rgba(249,115,22,0.35)',
    badge: 'B2B Gold',
    badgeBg: 'rgba(249,115,22,0.15)',
    estimatedRevenue: '$1K–$15K/mo',
    timeToBuild: '2–6 hrs',
    difficulty: 'Beginner',
    economics: {
      priceRange: '$197–$2,000 one-time (workflow) or $500–$5K/mo retainer',
      timeToBuild: '2–6 hours to build a sellable n8n workflow template',
      marginProfile: '95% margin — deliver JSON file or self-hosted n8n instance',
      demandSignal: 'Every business has manual processes worth 5–20 hrs/week to automate',
      validationMetric: 'If a business pays a VA to do it repeatedly, they will pay for automation',
      targetBuyer: 'Agencies, e-commerce brands, recruiting firms, marketing teams',
    },
    techStack: [
      { name: 'n8n (self-hosted)', role: 'Visual workflow automation engine', cost: 'Free self-hosted / $20+/mo cloud', url: 'https://n8n.io' },
      { name: 'Make.com', role: 'No-code automation (Zapier alternative)', cost: '$9–$16/mo', url: 'https://make.com' },
      { name: 'Apify', role: 'Web scraping & data extraction at scale', cost: '$49/mo', url: 'https://apify.com' },
      { name: 'Airtable', role: 'Structured data store for automation outputs', cost: 'Free–$20/mo', url: 'https://airtable.com' },
      { name: 'Instantly.ai', role: 'Cold email sequencing at scale', cost: '$37/mo', url: 'https://instantly.ai' },
    ],
    architecture: [
      { step: 1, label: 'Trigger Node', detail: 'Webhook / Schedule / Form submission / New row in sheet' },
      { step: 2, label: 'Data Enrichment', detail: 'Scrape, enrich, or transform the trigger data (Apollo, Hunter.io)' },
      { step: 3, label: 'Decision Branch', detail: 'IF/ELSE logic gates filter records meeting criteria' },
      { step: 4, label: 'Action Nodes', detail: 'Send email, create CRM record, post Slack message, update sheet' },
      { step: 5, label: 'Error Handling', detail: 'Catch node logs failures to a dedicated error Airtable base' },
    ],
    buildSteps: [
      {
        id: 'aw-1',
        phase: 1,
        title: 'Find the Manual Process',
        subtitle: 'Look for repetitive 5-step processes done in spreadsheets',
        duration: '30 min',
        tasks: [
          'Cold outbound lead gen: find leads → verify emails → add to sequence (3+ hrs/day manually)',
          'Content repurposing: blog post → Twitter thread → LinkedIn post → Newsletter section',
          'Client reporting: pull ad data → format → send PDF every Monday at 9am',
          'Recruitment sourcing: scrape LinkedIn → enrich with email → send personalized outreach',
        ],
        aiPrompt: `I run a [TYPE OF BUSINESS]. List the 10 most time-consuming manual tasks my team does every week that could be automated with n8n + APIs.
For each task, estimate:
- Hours saved per week
- API/services required
- Complexity (simple/medium/complex)
- Revenue impact (direct/indirect)`,
      },
      {
        id: 'aw-2',
        phase: 2,
        title: 'Build the n8n Workflow',
        subtitle: 'Chain nodes until the full process runs automatically',
        duration: '2–4 hrs',
        tasks: [
          'Deploy n8n locally: npx n8n or use n8n.cloud for testing',
          'Start with trigger: HTTP Webhook or Schedule node',
          'Add HTTP Request node to call target API (use the JSON template below)',
          'Add data transformation: Set/Function node to reshape the payload',
          'Chain action nodes: send email via SMTP, create Airtable record, notify Slack',
          'Test with sample data → enable production → export as JSON file to sell',
        ],
        aiPrompt: `Generate a complete n8n workflow JSON for automating [PROCESS].

The workflow should:
1. Trigger via webhook when [TRIGGER CONDITION]
2. Fetch data from [API/SOURCE]
3. Filter records where [CONDITION]
4. For each qualifying record: [ACTION]
5. Log results to Airtable

Include error handling and rate limit delays between API calls.
Output the complete n8n workflow JSON that can be imported directly.`,
      },
      {
        id: 'aw-3',
        phase: 3,
        title: 'Package & Price It',
        subtitle: 'Turn the workflow into a product people pay for',
        duration: '1 hr',
        tasks: [
          'Export n8n workflow as JSON (Settings → Download)',
          'Write a Loom video showing the workflow in action (15 minutes)',
          'Create a PDF setup guide: "How to import and configure in 10 minutes"',
          'Price at $197–$497 for the template bundle on Gumroad',
          'Alternatively: offer as a $500–$2,000 done-for-you installation service',
        ],
      },
      {
        id: 'aw-4',
        phase: 4,
        title: 'Sell on Autopilot',
        subtitle: 'LinkedIn + cold email is the fastest channel',
        duration: 'Ongoing',
        tasks: [
          'Post a "before/after time saved" post on LinkedIn with the Loom demo',
          'Cold email 100 small agencies: "I automated [process] for [company] — saved 20hrs/week"',
          'Submit to n8n Template Library for organic discovery (free traffic)',
          'Post in r/automation and r/nocode with genuine value-first thread',
        ],
      },
    ],
    snippets: [
      {
        id: 'aw-s1',
        label: 'n8n Workflow Skeleton (JSON)',
        language: 'json',
        description: 'Importable n8n workflow: Webhook → HTTP Enrichment → Airtable write → Slack notify',
        code: `{
  "name": "B2B Lead Enrichment Pipeline",
  "nodes": [
    {
      "parameters": { "path": "new-lead", "responseMode": "onReceived" },
      "name": "Webhook Trigger",
      "type": "n8n-nodes-base.webhook",
      "position": [240, 300]
    },
    {
      "parameters": {
        "url": "https://api.hunter.io/v2/email-finder",
        "qs": {
          "domain": "={{ $json.company_domain }}",
          "first_name": "={{ $json.first_name }}",
          "last_name": "={{ $json.last_name }}",
          "api_key": "YOUR_HUNTER_API_KEY"
        }
      },
      "name": "Find Email (Hunter.io)",
      "type": "n8n-nodes-base.httpRequest",
      "position": [460, 300]
    },
    {
      "parameters": {
        "application": "YOUR_AIRTABLE_BASE_ID",
        "table": "Leads",
        "operation": "create",
        "fields": {
          "Name": "={{ $('Webhook Trigger').item.json.full_name }}",
          "Email": "={{ $json.data.email }}",
          "Score": "={{ $json.data.score }}",
          "Status": "Enriched"
        }
      },
      "name": "Save to Airtable",
      "type": "n8n-nodes-base.airtable",
      "position": [680, 300]
    }
  ],
  "connections": {
    "Webhook Trigger": { "main": [[{ "node": "Find Email (Hunter.io)" }]] },
    "Find Email (Hunter.io)": { "main": [[{ "node": "Save to Airtable" }]] }
  }
}`,
      },
      {
        id: 'aw-s2',
        label: 'LinkedIn Scraper (Apify Actor)',
        language: 'javascript',
        description: 'Node.js script that calls Apify LinkedIn scraper and returns structured leads',
        code: `import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

async function scrapeLinkedInLeads(searchUrl: string, maxResults = 50) {
  const run = await client.actor('curious_coder/linkedin-profile-scraper').call({
    startUrls: [{ url: searchUrl }],
    maxResults,
    proxy: { useApifyProxy: true },
  });

  const { items } = await client.dataset(run.defaultDatasetId).listItems();

  return items.map((p: any) => ({
    name: p.fullName,
    title: p.headline,
    company: p.companyName,
    location: p.location,
    profileUrl: p.url,
    // Pass to Hunter.io for email enrichment
  }));
}

// Usage:
const leads = await scrapeLinkedInLeads(
  'https://www.linkedin.com/search/results/people/?keywords=marketing+director',
  100
);
console.log(\`Scraped \${leads.length} leads\`);`,
      },
    ],
  },

  // ────────────────────────────────────────────────
  // 4. WEB TEMPLATES & UI KITS
  // ────────────────────────────────────────────────
  {
    id: 'web-template',
    title: 'Web Templates & UI Kits',
    subtitle: 'Tailwind · Framer · Next.js · shadcn/ui',
    tagline: 'Design once. Sell to 1,000 buyers. Pure passive income.',
    iconName: 'PanelsTopLeft',
    accentColor: '#A78BFA',
    accentBg: 'rgba(167,139,250,0.12)',
    borderAccent: 'rgba(167,139,250,0.35)',
    badge: 'Passive Income',
    badgeBg: 'rgba(167,139,250,0.15)',
    estimatedRevenue: '$300–$5K/mo',
    timeToBuild: '6–20 hrs',
    difficulty: 'Intermediate',
    economics: {
      priceRange: '$29–$299 one-time (template) or $97–$497 (UI Kit bundle)',
      timeToBuild: '6–20 hours for a polished, multi-page template',
      marginProfile: '100% margin — deliver as a zip file or Framer community clone',
      demandSignal: 'Framer, Webflow, and Gumroad template categories grow 40% YoY',
      validationMetric: 'Check Framer Marketplace bestsellers — 500+ clones = proven demand',
      targetBuyer: 'Indie hackers, agencies, SaaS founders, consultants, no-coders',
    },
    techStack: [
      { name: 'Next.js + Tailwind', role: 'Code-based template for developers', cost: 'Free', url: 'https://nextjs.org' },
      { name: 'Framer', role: 'No-code template for designers', cost: '$15/mo', url: 'https://framer.com' },
      { name: 'shadcn/ui', role: 'Pre-built accessible React components', cost: 'Free', url: 'https://ui.shadcn.com' },
      { name: 'Gumroad', role: 'Primary marketplace for selling templates', cost: '10% fee', url: 'https://gumroad.com' },
      { name: 'Lemon Squeezy', role: 'Alternative with better EU VAT handling', cost: '5% + 50¢', url: 'https://lemonsqueezy.com' },
    ],
    architecture: [
      { step: 1, label: 'Niche Selection', detail: 'SaaS landing page, agency portfolio, creator dashboard, link-in-bio' },
      { step: 2, label: 'Design System', detail: 'Define: colors, typography, spacing scale, component variants' },
      { step: 3, label: 'Core Pages', detail: 'Build: Landing, Pricing, About, Blog, Dashboard (5–8 pages minimum)' },
      { step: 4, label: 'Demo Site', detail: 'Deploy live preview on Vercel — buyers convert 3× more with live demo' },
      { step: 5, label: 'Marketplace Listing', detail: 'Gumroad + Framer Marketplace + your own site for full margin' },
    ],
    buildSteps: [
      {
        id: 'wt-1',
        phase: 1,
        title: 'Template Niche Research',
        subtitle: 'Find what buyers want that does not exist yet',
        duration: '30 min',
        tasks: [
          'Browse Gumroad "templates" → sort by Revenue → note categories with <20 results',
          'Check Framer Marketplace → what niches have <5 templates?',
          'Look at YC startup landing pages — what design patterns repeat?',
          'Winning niches: AI SaaS, Creator tools, B2B agency, Fintech dashboard',
        ],
        aiPrompt: `I want to build a web template to sell on Gumroad.
Niche: [YOUR NICHE]
Analyze 5 top-selling templates in this space and tell me:
1. Common sections they all include
2. What sections are missing that buyers would pay extra for
3. A recommended page structure for my template
4. 3 unique value props I should emphasize in my listing`,
      },
      {
        id: 'wt-2',
        phase: 2,
        title: 'Build with AI Assistance',
        subtitle: 'v0.dev generates 80% of the UI in minutes',
        duration: '5–15 hrs',
        tasks: [
          'Use v0.dev prompt to generate the hero section, features grid, pricing table',
          'Export to Next.js → wire up Tailwind design tokens',
          'Build 5–8 distinct pages with consistent design language',
          'Add dark/light mode toggle using next-themes',
          'Test responsive breakpoints: mobile → tablet → desktop',
          'Write component docs: "How to customize colors, fonts, and content"',
        ],
        aiPrompt: `Generate a premium SaaS landing page template with:
- Hero: Bold headline, subheadline, dual CTA (primary + ghost button), product screenshot/mockup
- Social proof bar: 6 company logos
- Features: 3-column icon grid with heading and description
- How it works: 3-step numbered process
- Testimonials: 3-card grid with avatar, name, role, quote, rating
- Pricing: 3-tier table with highlighted "popular" middle tier
- FAQ: 6 questions accordion
- CTA footer: email capture form

Use Next.js 15, Tailwind CSS v4, shadcn/ui. Dark theme. Lime accent color (#D4F84C). TypeScript.`,
      },
      {
        id: 'wt-3',
        phase: 3,
        title: 'Package & List for Sale',
        subtitle: 'Presentation quality determines conversion rate',
        duration: '2–3 hrs',
        tasks: [
          'Deploy live demo on Vercel with a custom subdomain (e.g., demo.yourtemplate.com)',
          'Create 8–12 high-quality screenshots of each page (use Cleanshot X or browser tool)',
          'Write listing description: problem → solution → what is included → tech specs → FAQ',
          'Set price: start at $49, A/B test at $79 after 10 sales',
          'Create a "Changelog" to justify future price increases as you add pages',
        ],
      },
      {
        id: 'wt-4',
        phase: 4,
        title: 'SEO + Community Distribution',
        subtitle: 'Templates rank on Google — set up organic discovery',
        duration: 'Ongoing',
        tasks: [
          'Create a dedicated landing page: "Free Next.js SaaS Template" for SEO',
          'Share on X with demo GIF: "I just released [Template] — 8 pages, free demo → [URL]"',
          'Post in r/webdev, r/nextjs, Indie Hackers, Hacker News Show HN',
          'Submit to template directories: Tailwind Awesome, Made with Supabase, etc.',
        ],
      },
    ],
    snippets: [
      {
        id: 'wt-s1',
        label: 'Design Token Config (Tailwind v4)',
        language: 'css',
        description: 'CSS-first design tokens for a premium SaaS template',
        code: `/* globals.css — Tailwind v4 CSS-first configuration */
@import "tailwindcss";

@theme {
  /* Brand Colors */
  --color-accent: #D4F84C;
  --color-accent-dark: #B8D83A;
  --color-surface: #0A0C10;
  --color-surface-raised: #12151F;
  --color-surface-hover: #1A1F2E;
  --color-border: rgba(255, 255, 255, 0.10);
  --color-border-strong: rgba(255, 255, 255, 0.22);

  /* Typography Scale */
  --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Spacing / Radii */
  --radius-card: 1.25rem;   /* 20px */
  --radius-pill: 9999px;
  --shadow-glow: 0 0 40px -10px var(--color-accent);
}

@layer base {
  body {
    background-color: var(--color-surface);
    color: theme(colors.zinc.100);
    -webkit-font-smoothing: antialiased;
  }
}`,
      },
      {
        id: 'wt-s2',
        label: 'Pricing Card Component',
        language: 'tsx',
        description: 'Reusable pricing card with highlighted popular tier',
        code: `// components/PricingCard.tsx
interface PricingTier {
  name: string; price: string; period: string;
  features: string[]; cta: string; isPopular?: boolean;
}

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div className={[
      'relative rounded-2xl p-8 flex flex-col border transition-all',
      tier.isPopular
        ? 'bg-accent/10 border-accent/50 shadow-[0_0_40px_-10px_#D4F84C40]'
        : 'bg-surface-raised border-border hover:border-border-strong',
    ].join(' ')}>
      {tier.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full bg-accent text-black text-xs font-black uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-lg font-bold text-white">{tier.name}</h3>
      <div className="mt-4 mb-6">
        <span className="text-5xl font-black text-white">{tier.price}</span>
        <span className="text-zinc-400 text-sm ml-2">{tier.period}</span>
      </div>
      <ul className="space-y-3 flex-1 mb-8">
        {tier.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
            <span className="text-accent mt-0.5 flex-shrink-0">✓</span> {f}
          </li>
        ))}
      </ul>
      <button className={[
        'w-full py-3 rounded-xl font-bold text-sm transition-all',
        tier.isPopular
          ? 'bg-accent text-black hover:bg-accent-dark'
          : 'bg-white/10 text-white border border-white/20 hover:bg-white/15',
      ].join(' ')}>
        {tier.cta}
      </button>
    </div>
  );
}`,
      },
    ],
  },

  // ────────────────────────────────────────────────
  // 5. INTERACTIVE NOTION WORKSPACES
  // ────────────────────────────────────────────────
  {
    id: 'notion-workspace',
    title: 'Interactive Notion Workspaces',
    subtitle: 'OS Dashboards · CRM Systems · Client Portals',
    tagline: 'The easiest digital product to build. Sell the same template 1,000 times.',
    iconName: 'LayoutDashboard',
    accentColor: '#34D399',
    accentBg: 'rgba(52,211,153,0.12)',
    borderAccent: 'rgba(52,211,153,0.35)',
    badge: 'Easiest Start',
    badgeBg: 'rgba(52,211,153,0.15)',
    estimatedRevenue: '$200–$4K/mo',
    timeToBuild: '1–3 hrs',
    difficulty: 'Beginner',
    economics: {
      priceRange: '$9–$97 one-time (templates sell at volume)',
      timeToBuild: '1–3 hours for a complete, polished Notion workspace',
      marginProfile: '100% margin — deliver via Notion template link',
      demandSignal: 'Notion Template Gallery has 10M+ page views/month; top sellers earn $10K+/mo',
      validationMetric: 'Search Gumroad for "Notion template" — top sellers have 500–5,000+ sales',
      targetBuyer: 'Students, freelancers, entrepreneurs, content creators, coaches',
    },
    techStack: [
      { name: 'Notion', role: 'Core product — build the workspace here', cost: 'Free (Plus $10/mo for advanced)', url: 'https://notion.so' },
      { name: 'Gumroad', role: 'Primary sales platform for templates', cost: '10% fee', url: 'https://gumroad.com' },
      { name: 'Notionway / Notioly', role: 'Custom icons and cover images for polish', cost: '$15 one-time', url: 'https://notionway.com' },
      { name: 'Notion AI', role: 'Auto-populate templates with example content', cost: '$10/mo', url: 'https://notion.so/product/ai' },
    ],
    architecture: [
      { step: 1, label: 'Master Dashboard', detail: 'Home page with linked databases and key metric widgets' },
      { step: 2, label: 'Core Databases', detail: '3–7 linked databases (Tasks, Projects, CRM, Content, Finance)' },
      { step: 3, label: 'Views & Filters', detail: 'Board, Calendar, Gallery, Table views for each database' },
      { step: 4, label: 'Templates Within', detail: 'Page templates for recurring entries (weekly review, meeting notes)' },
      { step: 5, label: 'Documentation', detail: 'Quick-start guide embedded in the workspace' },
    ],
    buildSteps: [
      {
        id: 'nw-1',
        phase: 1,
        title: 'Pick a High-Demand Template Type',
        subtitle: 'Specificity sells better than general "OS" templates',
        duration: '20 min',
        tasks: [
          'Freelancer CRM: client tracker, proposal pipeline, invoice log, project timeline',
          'Content Creator OS: content calendar, brand deal tracker, analytics log, idea vault',
          'Student Planner: course tracker, assignment database, exam prep, resource library',
          'Startup OS: OKR tracker, hiring pipeline, investor CRM, product roadmap',
          'Validate: search Gumroad for your idea → if it exists with 100+ sales, build a better version',
        ],
        aiPrompt: `I want to create a Notion template for [TARGET AUDIENCE].
Design a complete Notion workspace structure with:
1. Master dashboard layout (what widgets/sections go on the home page)
2. List of 5–7 databases to include with their properties
3. Recommended views for each database
4. Page templates for recurring entries
5. 3 differentiating features that would make this better than existing templates`,
      },
      {
        id: 'nw-2',
        phase: 2,
        title: 'Build & Polish the Workspace',
        subtitle: 'Visual presentation is 80% of perceived value',
        duration: '1–2 hrs',
        tasks: [
          'Set a dark or custom cover image on every page (use Unsplash or Notioly)',
          'Add custom emoji or Notioly icons to every database and page',
          'Populate with 5–10 example records so buyers understand the system immediately',
          'Create a "Quick Start" page with GIFs or screenshots of key features',
          'Test: duplicate the template yourself → verify everything links correctly',
        ],
      },
      {
        id: 'nw-3',
        phase: 3,
        title: 'Publish & Price',
        subtitle: 'Share as template link → sell on Gumroad',
        duration: '1 hr',
        tasks: [
          'In Notion: Share → Publish to web → "Allow duplicate as template"',
          'Copy the template link — this is what you sell',
          'Create Gumroad product: $19–$49 price point (test, optimize later)',
          'Write a killer description: who is it for, what problem does it solve, what is included',
          'Include 6–8 screenshots in the listing (Notion gallery views photograph well)',
        ],
      },
      {
        id: 'nw-4',
        phase: 4,
        title: 'Scale with Bundles & Upgrades',
        subtitle: 'Bundle 3 templates → charge 3× the price',
        duration: 'Ongoing',
        tasks: [
          'After 10 sales: raise price 25% (demand validation)',
          'Create a "Pro Version" with 2× more databases and Notion AI integration for 2× price',
          'Bundle: "Complete [Niche] OS" = 3 templates at 60% discount vs. individual pricing',
          'TikTok/YouTube: 60-second "How I use my Notion setup" = free advertising',
        ],
      },
    ],
    snippets: [
      {
        id: 'nw-s1',
        label: 'Notion Database Schema (JSON)',
        language: 'json',
        description: 'Schema blueprint for a Freelancer CRM database with all property types',
        code: `// Freelancer CRM — Notion Database Property Schema
{
  "database_name": "Client CRM",
  "icon": "👥",
  "properties": {
    "Client Name":     { "type": "title" },
    "Status":          { "type": "select",
                         "options": ["Lead", "Proposal Sent", "Active", "Completed", "Churned"] },
    "Contract Value":  { "type": "number", "format": "dollar" },
    "Start Date":      { "type": "date" },
    "End Date":        { "type": "date" },
    "Industry":        { "type": "select",
                         "options": ["SaaS", "E-commerce", "Agency", "Creator", "Healthcare"] },
    "Contact Email":   { "type": "email" },
    "Monthly Retainer":{ "type": "checkbox" },
    "Next Action":     { "type": "rich_text" },
    "Priority":        { "type": "select",
                         "options": ["🔴 High", "🟡 Medium", "🟢 Low"] },
    "Related Projects":{ "type": "relation", "linked_db": "Projects" },
    "Total Billed":    { "type": "rollup",
                         "relation": "Related Projects",
                         "property": "Invoice Amount",
                         "function": "sum" }
  },
  "suggested_views": [
    { "name": "Pipeline Board", "type": "board", "group_by": "Status" },
    { "name": "Active Clients", "type": "table", "filter": "Status = Active" },
    { "name": "Revenue Calendar", "type": "calendar", "date_property": "Start Date" }
  ]
}`,
      },
    ],
  },

  // ────────────────────────────────────────────────
  // 6. MICRO-PLAYBOOKS & ACTION GUIDES
  // ────────────────────────────────────────────────
  {
    id: 'micro-playbook',
    title: 'Micro-Playbooks & Action Guides',
    subtitle: 'Cold Outreach Blueprints · Execution Frameworks',
    tagline: 'Package your expertise into a PDF or Notion doc. Sell it forever.',
    iconName: 'BookMarked',
    accentColor: '#F59E0B',
    accentBg: 'rgba(245,158,11,0.12)',
    borderAccent: 'rgba(245,158,11,0.35)',
    badge: 'Fastest to Ship',
    badgeBg: 'rgba(245,158,11,0.15)',
    estimatedRevenue: '$500–$6K/mo',
    timeToBuild: '2–5 hrs',
    difficulty: 'Beginner',
    economics: {
      priceRange: '$17–$97 one-time',
      timeToBuild: '2–5 hours using AI to draft, human to refine',
      marginProfile: '100% margin — PDF/Notion doc has zero COGS',
      demandSignal: 'Every professional pays for shortcuts that save 6+ months of trial and error',
      validationMetric: '"If you could have read this before starting, would you have paid $47?" = Yes → ship it',
      targetBuyer: 'Aspiring freelancers, career changers, first-time founders, skill-seekers',
    },
    techStack: [
      { name: 'Notion', role: 'Write and host the playbook (clean, linkable)', cost: 'Free', url: 'https://notion.so' },
      { name: 'Claude / ChatGPT', role: 'AI drafting co-author (10× writing speed)', cost: '$20/mo', url: 'https://claude.ai' },
      { name: 'Canva', role: 'PDF cover design and visual layout', cost: 'Free / $13/mo pro', url: 'https://canva.com' },
      { name: 'Gumroad', role: 'Zero-setup digital storefront', cost: '10% fee', url: 'https://gumroad.com' },
      { name: 'ConvertKit', role: 'Email list for upsell sequence', cost: 'Free up to 1K subscribers', url: 'https://convertkit.com' },
    ],
    architecture: [
      { step: 1, label: 'Core Framework', detail: '5–7 step actionable process — the exact sequence you would follow' },
      { step: 2, label: 'Templates & Scripts', detail: '5+ copy-paste templates, email scripts, or prompt chains' },
      { step: 3, label: 'Case Study', detail: '1 real or realistic example showing the framework applied end-to-end' },
      { step: 4, label: 'Resource List', detail: 'Curated tools, links, and further reading that buyers trust' },
      { step: 5, label: 'Action Plan', detail: 'Day 1–30 implementation schedule so buyers have no excuse to delay' },
    ],
    buildSteps: [
      {
        id: 'mp-1',
        phase: 1,
        title: 'Pick Your Playbook Topic',
        subtitle: 'You need painful specificity — not generic advice',
        duration: '20 min',
        tasks: [
          'Specific examples: "The $10K Freelance Copywriting Cold Email System", "Launch a Chrome Extension in a Weekend"',
          'The topic must solve a painful, specific problem people Google for solutions to',
          'Validate: search Gumroad, Twitter, Reddit for the exact phrase → is anyone selling it?',
          'If yes: build a 2× better version with more templates. If no: test demand with a tweet first.',
        ],
        aiPrompt: `I have expertise in [YOUR SKILL/EXPERIENCE].
Suggest 10 specific micro-playbook titles I could sell for $27–$97 on Gumroad.
Each title should:
- Promise a specific, measurable outcome
- Be targeted at a specific buyer persona  
- Be achievable in 30 days or less
- Have zero fluff (execution-first)
Format: [Title] → [Target Buyer] → [Core Promise] → [Suggested Price]`,
      },
      {
        id: 'mp-2',
        phase: 2,
        title: 'Write with AI in 3 Hours',
        subtitle: 'Outline first, then expand each section with AI',
        duration: '2–4 hrs',
        tasks: [
          'Use the AI prompt below to generate the full playbook outline',
          'Expand each section: write in first person, specific, with real examples',
          'Add 5+ copy-paste templates or scripts (this is the main value driver)',
          'Include a "day by day" action plan section at the end',
          'Edit for voice: remove all AI-sounding phrases, add your own insights',
        ],
        aiPrompt: `Write a detailed outline for a micro-playbook called "[PLAYBOOK TITLE]".

Structure:
- Introduction: The problem, why current advice fails, what this playbook does differently
- Section 1–5: Each major step of the framework (give each a bold title + 3 sub-points)
- Template Library: 3 copy-paste scripts/templates buyers can use immediately
- 30-Day Action Plan: Day-by-day implementation broken into weeks
- FAQ: 5 questions buyers will have

Tone: direct, no fluff, first-person authority. Write for someone who is smart but new to this.`,
      },
      {
        id: 'mp-3',
        phase: 3,
        title: 'Design & Publish',
        subtitle: 'A polished cover = 3× higher conversion rate',
        duration: '1 hr',
        tasks: [
          'Design cover in Canva: dark background, bold title, 1 credibility indicator',
          'Format in Notion: clean headers, callout boxes, numbered lists',
          'OR export from Notion as PDF → re-upload to Gumroad',
          'Write Gumroad listing: pain point → who it is for → what they will get → social proof',
          'Price at $37 to start → raise to $67 after 20 sales',
        ],
      },
      {
        id: 'mp-4',
        phase: 4,
        title: 'Email List & Upsell System',
        subtitle: 'The playbook is the lead magnet for bigger offers',
        duration: 'Ongoing',
        tasks: [
          'Collect buyer emails on Gumroad → import to ConvertKit',
          'Send 5-email welcome sequence: deliver value, share results, pitch upsell',
          'Upsell: "Want the 1-hour implementation call?" → $197 coaching session',
          'At 100 buyers: repackage into a "Complete Bundle" with 3 playbooks → 2× price',
        ],
      },
    ],
    snippets: [
      {
        id: 'mp-s1',
        label: 'Cold Email Outreach Script',
        language: 'text',
        description: 'Proven cold email template with 15–25% reply rate for B2B outreach',
        code: `Subject: Quick question about [SPECIFIC PAIN POINT at COMPANY]

Hi [First Name],

I noticed [SPECIFIC OBSERVATION — something real from their website/LinkedIn/content].

Most [ROLE]s at [COMPANY SIZE] companies I talk to are dealing with [SPECIFIC PAIN POINT].

We built [SOLUTION] that [SPECIFIC RESULT — e.g., "cut prospecting time from 4 hours to 20 minutes"].

[SOCIAL PROOF — "We helped [Similar Company] achieve [Outcome] in [Timeframe]."]

Would it make sense to have a 15-minute call this week to see if we could do the same for you?

If not, no worries — happy to share the [RELEVANT RESOURCE] we created on [TOPIC] regardless.

[Your Name]

P.S. — [Personalization hook related to their recent activity — LinkedIn post, podcast appearance, company news]`,
      },
      {
        id: 'mp-s2',
        label: '30-Day Launch Timeline',
        language: 'markdown',
        description: 'Day-by-day playbook launch plan from zero to first sales',
        code: `# 30-Day Digital Product Launch Plan

## Week 1: Build (Days 1–7)
- Day 1: Finalize topic + write 500-word outline
- Day 2–3: Write all content with AI assistance
- Day 4: Create templates/scripts section  
- Day 5: Design Canva cover + format in Notion
- Day 6: Proofread + add personal examples
- Day 7: Set up Gumroad product + write listing

## Week 2: Warm Up (Days 8–14)
- Day 8: Post teaser on X: "Building something for [TARGET AUDIENCE]..."
- Day 9–10: Engage with ideal buyers on X/LinkedIn (reply with value)
- Day 11: Post behind-the-scenes: "Here is the framework I am turning into a product"
- Day 12–13: Collect 3 beta reader testimonials (give away free for feedback)
- Day 14: Refine based on feedback

## Week 3: Launch (Days 15–21)
- Day 15: LAUNCH DAY — post on X with demo screenshots + link
- Day 16: Submit to Product Hunt "Products" section
- Day 17: Post in 3 relevant subreddits (value-first thread, link in bio)
- Day 18–20: DM 50 warm connections on X with personalized pitch
- Day 21: Write a LinkedIn article explaining the framework (free taste)

## Week 4: Scale (Days 22–30)
- Day 22–24: Analyze what traffic source drove most sales → double down
- Day 25: Raise price 20–30% (signals demand)
- Day 26–28: Reach out to 5 newsletters in the niche for affiliate/sponsorship
- Day 29: Plan V2 additions based on buyer feedback
- Day 30: Automate: set up ConvertKit welcome sequence + upsell email`,
      },
    ],
  },
];

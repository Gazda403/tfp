import { Branch17PageData } from '@/types/branchPlaybook';

export const branch04Trading: Branch17PageData = {
  branchId: 'crypto-trading',
  branchName: '04 Trading & Non-Custodial Finance',
  shortName: 'Trading & DeFi Protocol',
  targetBenchmark: '$8,000 – $25,000/mo Target',
  badge: 'Asymmetric Compounding',
  themeColor: 'lavender',
  techStackList: [
    { name: 'Phantom / Rabby Wallet', role: 'Non-Custodial Self-Sovereign Key Storage', cost: '$0 Free' },
    { name: 'TradingView Pro', role: 'Multi-Timeframe Charting & Liquidity Levels', cost: '$14.95/mo' },
    { name: 'DexScreener / Birdeye', role: 'Real-Time On-Chain Liquidity & Volume Analytics', cost: '$0 Free' },
    { name: 'Jupiter / Raydium / Uniswap', role: 'Decentralized Non-Custodial Execution Engines', cost: 'Network Gas Only' },
    { name: 'Ledger / Keystone Hardware', role: 'Cold Storage OpSec Key Vault', cost: '$79 – $149 One-Time' },
  ],

  part1: {
    page1MacroReality: {
      headline: 'The Sovereign Operator: Navigating Global Non-Custodial Liquidity in 2026',
      currentLandscape:
        'In 2026, traditional centralized crypto exchanges (CEXs) are heavily surveilled, subject to sudden withdrawal freezes, and plagued by predatory market-making algorithms that liquidate retail traders. The real sovereign wealth is generated on non-custodial decentralized protocols (DeFi on Solana and EVM L2s) where smart contracts govern settlement and your capital never leaves your cryptographic control.',
      whyOldMethodsFail:
        '95% of retail crypto traders treat the markets like a casino: buying meme coins at all-time highs based on Telegram hype, using 50x leverage, and ignoring stop losses. They experience massive temporary paper gains only to give 100% of it back in a single liquidation event.',
      modernBuyerExpectations:
        'Professional on-chain operators treat trading as an asymmetric risk-management protocol. They track volume flow, liquidity pools, wallet clusters, and institutional rebalancing. They protect their capital with military-grade OpSec and execute systematic, rules-based trades with defined 1:3 or 1:5 risk-to-reward ratios.',
      marketThesis:
        'Zero clients, zero products, zero customer support. Complete financial sovereignty through strict capital preservation, systematic technical analysis, and non-custodial liquidity protocols.',
    },

    page2UnitEconomics: {
      headline: 'Unit Economics: The Mathematical Power of 1:3 Asymmetric Risk-to-Reward',
      calculatorDefaults: {
        traffic: 20, // Total monthly trade setups
        conversionRate: 45, // Win rate percentage
        aov: 850, // Average winning trade profit
        feePercent: 0.2, // DEX swap fee
        overhead: 15, // TradingView
        unitLabel: 'Closed Trades',
      },
      pAndLBreakdown: [
        { item: 'Total Monthly Trade Opportunities', benchmark: '15 – 25 Trades Max', note: 'Strictly high-conviction A+ setups only' },
        { item: 'System Win Rate (Conservative)', benchmark: '45% – 50% Win Rate', note: 'You can be wrong 55% of the time and still be wildly profitable' },
        { item: 'Average Risk per Trade (1R Stop Loss)', benchmark: '$250 Max Loss', note: 'Strict 1%–2% total portfolio risk rule' },
        { item: 'Average Reward per Trade (3R Target)', benchmark: '$750 – $1,250 Gain', note: 'Asymmetric 1:3 to 1:5 risk-reward ratio' },
        { item: 'Net Monthly Compounded Profit', benchmark: '$6,500 – $18,000/mo', note: 'Directly deposited into cold storage wallet' },
      ],
      cacLtvBenchmarks: [
        { metric: 'Maximum Portfolio Risk per Trade', target: '1.0% – 1.5%', explanation: 'Guarantees that a 5-trade losing streak only draws down 5–7% of total capital' },
        { metric: 'Minimum Risk/Reward Asymmetry', target: '1 : 3.0', explanation: 'Never enter a trade where potential reward is less than 3x potential risk' },
        { metric: 'Monthly Profit Withdrawal Target', target: '50% of Profits', explanation: 'Always move 50% of monthly net trading gains into cold USDC or stable cash' },
      ],
    },

    page3Architecture: {
      headline: 'Systemic Architecture: The Non-Custodial Sovereign Trading Engine',
      systemFlowStages: [
        { stage: 'Stage 01: Fiat-to-Crypto Bridge', name: 'Clean P2P Routing', mechanism: 'On-ramp fiat currency directly into decentralized stablecoins (USDC) via non-custodial P2P ramps.', output: '100% Unencumbered Capital' },
        { stage: 'Stage 02: OpSec Partitioning', name: 'Dual-Wallet Protocol', mechanism: 'Vault Wallet (Cold storage hardware) separated from Burner/Trading Wallet connected to browser.', output: 'Zero Phishing/Drainer Risk' },
        { stage: 'Stage 03: Liquidity Scanning', name: 'DexScreener & Volume', mechanism: 'Filter on-chain tokens with >$1M liquidity, audited contracts, and increasing 4-hour smart money inflow.', output: 'Top 3 High-Probability Setups' },
        { stage: 'Stage 04: Execution via DEX', name: 'Jupiter / Uniswap Swap', mechanism: 'Execute swap directly from Phantom/Rabby with slippage capped at 0.5% and predetermined stop level.', output: 'Instant On-Chain Settlement' },
        { stage: 'Stage 05: Profit Harvesting', name: '50% Profit Extraction', mechanism: 'Take profit at predetermined Fib extension levels and transfer USDC to cold hardware vault.', output: 'Permanent Compounding Wealth' },
      ],
      architectureDiagramNote: 'At no point in this architecture does a centralized third-party hold your private keys or have the power to freeze your funds.',
    },

    page4AsymmetricLeverage: {
      headline: 'The 3 Vectors of Asymmetric Trading Leverage',
      leverageVectors: [
        {
          vector: 'Mathematical Positive Expectancy',
          description: 'If you win 45% of your trades with an average gain of $900 and lose 55% with an average loss of $250, across 20 trades your expected net profit is +$5,350 every month.',
          mathAdvantage: 'Math guarantees profit even when you are wrong more than half the time.',
        },
        {
          vector: '24/7 Global Borderless Liquidity',
          description: 'Decentralized crypto protocols never close for weekends, bank holidays, or nighttime. Global liquidity flows continuously across all time zones with instant settlement.',
          mathAdvantage: 'Zero reliance on traditional banking hours or international wire delays.',
        },
        {
          vector: 'Zero Overhead & Zero Headcount',
          description: 'Unlike e-commerce or agencies, trading requires zero inventory, zero clients, zero customer complaints, and zero staff salaries. Your only asset is your personal discipline.',
          mathAdvantage: '100% of profit is pure retained capital with zero business drag.',
        },
      ],
    },

    page5FailureAnalysis: {
      headline: 'Forensic Analysis: The 5 Psychological Traps That Liquated 99% of Traders',
      capitalPreservationRule:
        'The First Law of Trading: Rule #1 is Capital Preservation. Rule #2 is never forget Rule #1. If you run out of chips, you cannot play the game. Never risk more than 2% on any single thesis.',
      traps: [
        {
          trapNumber: '01',
          title: 'Revenge Trading After a Loss',
          fatalMistake: 'Taking a 1R loss, getting emotionally enraged, doubling position size immediately, and wiping out a month of gains in 20 minutes.',
          mitigationProtocol: 'Strict 2-Loss Daily Circuit Breaker: If you take 2 consecutive losses in one day, close the terminal and walk away until tomorrow.',
        },
        {
          trapNumber: '02',
          title: 'Trading Without a Hard Pre-Determined Stop Loss',
          fatalMistake: 'Entering a trade hoping it goes up, and watching a small -$50 loss balloon into a catastrophic -$1,200 bag-holding nightmare.',
          mitigationProtocol: 'Never enter a swap without setting the exact invalidation price on your chart first. If price touches the line, exit immediately.',
        },
        {
          trapNumber: '03',
          title: 'Neglecting Operational Security (OpSec Drainers)',
          fatalMistake: 'Signing malicious phishing smart contracts or storing seed phrases in unencrypted cloud notes / iCloud.',
          mitigationProtocol: 'Never store seed phrases digitally. Use a cold hardware wallet (Ledger/Keystone) for 90% of assets and a hot burner wallet for swaps.',
        },
        {
          trapNumber: '04',
          title: 'Over-Trading Boredom (Action Junkie Syndrome)',
          fatalMistake: 'Forcing trades when the market is chopping sideways because you feel like you need to be doing something.',
          mitigationProtocol: 'Top operators trade like snipers, not machine gunners. Wait patiently for your A+ setup. No setup = no trade.',
        },
        {
          trapNumber: '05',
          title: 'Greedily Failing to Take Profits',
          fatalMistake: 'Watching a trade go up 400%, dreaming of buying sports cars, and failing to take profits until it round-trips back to zero.',
          mitigationProtocol: 'Systematic scaling out: Take 30% profit at 2R, 40% at 3R, and move stop loss to break-even to let the remainder ride for free.',
        },
      ],
    },
  },

  part2: {
    page6CaseStudies: [
      {
        title: 'Systematic Solana Breakout Protocol ($21,400 Profit in 30 Days)',
        student: 'Kaelen Ross (Age 29)',
        timeline: '30 Days executing strictly A+ Solana liquidity breakouts',
        revenue: '$21,400 Net Profit Realized',
        margin: '99.5% Net (Minus DEX gas fees)',
        trafficSource: 'On-Chain Volume Filters on DexScreener + TradingView 4-Hour Levels',
        pricingStructure: '$1,000 Risk per Trade (1R) | Average Winner: $3,200 (3.2R)',
        exactFunnel: 'Filter tokens breaking 7-day consolidation with >$2M 24h volume → Wait for 15-minute retest → Enter swap via Jupiter with 0.3% slippage → Set 3-tier take profit limit.',
        breakdownStory:
          'Kaelen had previously blown two $5,000 accounts by day-trading low-cap meme coins on Twitter tips. He reset his approach: allocated $15,000 into a non-custodial Phantom wallet, banned leverage completely, and traded spot on-chain breakouts exclusively. Across 18 trades in month one, he took 8 losses (-$8,000 total) and 10 asymmetric winners (+$29,400 total), finishing the month with $21,400 in net profit. He immediately transferred $11,000 into cold storage USDC.',
        keyTakeaway: 'Win rate is irrelevant. The size of your winners relative to your losers is the only math that creates wealth.',
      },
      {
        title: 'EVM L2 Mean Reversion Strategy ($14,800 Compounded Month)',
        student: 'Alexandre Moreau',
        timeline: '45 Days',
        revenue: '$14,800 Net Realized',
        margin: '99% Net',
        trafficSource: 'Arbitrum & Base On-Chain Liquidity Heatmaps',
        pricingStructure: 'Strict 1.5% capital risk per trade on $20,000 operating account',
        exactFunnel: 'Identify liquidation wick deviations outside Bollinger Bands on 1-Hour chart → Enter counter-trend mean reversion with hard stop below wick → Exit at 20 EMA.',
        breakdownStory:
          'Alexandre specialized exclusively in high-liquidity assets on Arbitrum and Base. Instead of chasing pumps, he waited for rapid flash-crashes that liquidated retail over-leveraged longs, then stepped in when RSI crossed below 20. His average holding period was 4 to 8 hours. By compounding his account systematically, he made $14,800 with zero overnight panic.',
        keyTakeaway: 'Buy when liquidations force panic sellers to dump at wholesale discounts.',
      },
    ],

    page7SwipeFile: {
      headlineFormulas: [
        { formula: 'The Position Sizing Formula', example: 'Position Size = (Account Capital * Risk %) / (Entry Price - Stop Loss Price)' },
        { formula: 'The 3-Tier Take Profit Formula', example: 'Scale Out: 33% at 2R (De-risks trade), 33% at 3R (Locks profit), 34% Trailing Stop at 20 EMA' },
        { formula: 'The OpSec Golden Rule', example: 'If a smart contract requires signing an "Unlimited Token Approval", Reject Immediately.' },
      ],
      valueStackFramework: [
        { tier: 'Rule 01: The 1-2% Portfolio Risk Cap', offer: 'Never risk more than 1.5% of total capital on a single trade idea', price: 'Capital Rule', anchor: 'Guarantees survival' },
        { tier: 'Rule 02: Hard Stop Invalidation', offer: 'Stop loss is set before the order is placed, never moved down', price: 'Execution Rule', anchor: 'Zero emotional bias' },
        { tier: 'Rule 03: 50% Profit Extraction', offer: 'Withdraw 50% of monthly net gains to physical bank account or cold vault', price: 'Banking Rule', anchor: 'Realizes paper wealth' },
      ],
      swipeItems: [
        {
          type: 'Risk Calculator Code',
          title: 'Position Size & Risk Management Python Calculator',
          purpose: 'Run in terminal or copy into code to calculate exact position size before entering any on-chain trade.',
          content: `def calculate_position_size(account_balance, risk_percentage, entry_price, stop_loss_price):
    """
    Calculates exact token position size so maximum loss never exceeds defined risk %.
    """
    dollar_risk = account_balance * (risk_percentage / 100.0)
    per_token_risk = abs(entry_price - stop_loss_price)
    
    if per_token_risk == 0:
        raise ValueError("Stop loss cannot be identical to entry price.")
        
    tokens_to_buy = dollar_risk / per_token_risk
    total_position_value = tokens_to_buy * entry_price
    
    print(f"--- ASYMMETRIC RISK PROFILE ---")
    print(f"Total Account Capital: \${account_balance:,.2f}")
    print(f"Max Dollars at Risk:   \${dollar_risk:,.2f} ({risk_percentage}%)")
    print(f"Tokens to Purchase:    {tokens_to_buy:,.4f}")
    print(f"Total Order Value:     \${total_position_value:,.2f}")
    print(f"Max Loss if Stopped:   -\${dollar_risk:,.2f}")
    return tokens_to_buy

# Example: $10,000 account, risking 1.5% ($150), Entry at $4.50, Stop at $4.20
calculate_position_size(10000, 1.5, 4.50, 4.20)`,
        },
        {
          type: 'OpSec SOP',
          title: 'Military-Grade Non-Custodial OpSec Protocol Checklist',
          purpose: 'Step-by-step security rules to make your wallet 100% immune to hack drainers.',
          content: `1. SEED PHRASE PROTOCOL:
   - Written by hand on paper or stamped in stainless steel plate.
   - NEVER photographed with smartphone camera.
   - NEVER saved in iCloud, Google Drive, Notes app, or password manager.
   - Stored in a fireproof physical lockbox.

2. HARDWARE PARTITIONING:
   - 80%–90% of assets stay on a disconnected Ledger or Keystone cold vault.
   - 10%–20% on hot browser wallet (Phantom/Rabby) used exclusively for active trades.

3. SMART CONTRACT REVOCATION:
   - Use revoke.cash at the end of every trading session to cancel active token spending approvals.
   - Never click Discord or Telegram direct message links offering "airdrops" or "support".`,
        },
      ],
    },
  },

  part3Steps: [
    {
      stepNumber: 1,
      pageNumber: 8,
      title: 'Step 1: Validation & Niche Selection Framework',
      subtitle: 'Select Your Primary High-Liquidity Ecosystem (Solana vs EVM L2s)',
      objective: 'Choose one dominant ecosystem and master its liquidity dynamics.',
      timeToExecute: '3 Hours',
      deliverable: 'Configured charting watchlist containing 10 high-liquidity ecosystem tokens',
      detailedWalkthrough: [
        'Solana: Lowest network fees (<$0.01/tx), fastest transaction confirmation (400ms), highest retail volume on Jupiter.',
        'EVM L2s (Base, Arbitrum): Deep institutional liquidity, predictable order books on Uniswap v3.',
        'Focus on tokens with at least $10M market cap and verified liquidity locks to eliminate rug-pull risk.',
      ],
      goldenRule: 'Specialization creates alpha. Mastering one chain beats spreading attention across 10 random ecosystems.',
      tasks: [
        { id: 'trade-s1-t1', text: 'Select primary trading ecosystem (Solana or Base/Arbitrum)' },
        { id: 'trade-s1-t2', text: 'Set up customized DexScreener watchlist with volume filters' },
        { id: 'trade-s1-t3', text: 'Install Phantom / Rabby non-custodial wallet extensions' },
      ],
    },

    {
      stepNumber: 2,
      pageNumber: 9,
      title: 'Step 2: Offer Design & High-Value Packaging',
      subtitle: 'Build Your Written Personal Trading Rulebook (The Operating Constitution)',
      objective: 'Write down non-negotiable rules for entry, position sizing, and loss limits.',
      timeToExecute: '4 Hours',
      deliverable: '1-page laminated Trading Constitution taped next to your monitor',
      detailedWalkthrough: [
        'Rule 1: Maximum risk per trade is strictly 1.5% of total account capital.',
        'Rule 2: Minimum Risk/Reward ratio is 1:3.0. Never enter a 1:1 trade.',
        'Rule 3: Daily circuit breaker: 2 losses in a day = shut down terminal immediately.',
        'Rule 4: Zero trades before 9:00 AM or after 5:00 PM to eliminate fatigue-induced errors.',
      ],
      goldenRule: 'If your trading rules are not written down in black and white, you are gambling, not executing.',
      tasks: [
        { id: 'trade-s2-t1', text: 'Draft personal 1-page Trading Constitution' },
        { id: 'trade-s2-t2', text: 'Define exact 1.5% dollar risk per trade based on account balance' },
        { id: 'trade-s2-t3', text: 'Print out and tape rulebook to your workstation' },
      ],
    },

    {
      stepNumber: 3,
      pageNumber: 10,
      title: 'Step 3: Tech Infrastructure Setup',
      subtitle: 'Configure High-Speed Charting & Non-Custodial DEX Routing',
      objective: 'Set up TradingView Pro layouts with key liquidity levels, volume profile, and EMA ribbons.',
      timeToExecute: '2 Hours',
      deliverable: 'Clean multi-timeframe TradingView workspace (4H, 1H, 15M layouts)',
      detailedWalkthrough: [
        'Set up clean dark-mode chart with 20 EMA, 50 EMA, and 200 EMA.',
        'Add Volume Profile indicator to identify high-volume consolidation nodes.',
        'Mark Key 4-Hour Support and Resistance horizontal levels.',
        'Bookmark Jupiter Exchange (Solana) or Uniswap (EVM) for instant non-custodial swaps.',
      ],
      goldenRule: 'Keep charts clean. 10 indicators on a screen creates analysis paralysis. Price and volume are the only true leading indicators.',
      tasks: [
        { id: 'trade-s3-t1', text: 'Configure TradingView 4H/1H/15M multi-chart layout' },
        { id: 'trade-s3-t2', text: 'Add 20, 50, and 200 Exponential Moving Averages' },
        { id: 'trade-s3-t3', text: 'Set price alerts on key support/resistance boundaries' },
      ],
    },

    {
      stepNumber: 4,
      pageNumber: 11,
      title: 'Step 4: Building the MVP / Asset Assembly',
      subtitle: 'Master the High-Probability Liquidity Breakout & Retest Setup',
      objective: 'Learn the exact chart pattern that produces 1:3+ asymmetric trade returns.',
      timeToExecute: '4 Hours Practice',
      deliverable: 'Visual playbook of 10 historical winning trade charts saved in your folder',
      detailedWalkthrough: [
        'Condition 1: Token consolidates in a tight range for at least 5 to 7 days on the 4-Hour chart.',
        'Condition 2: Strong expansion candle breaks above resistance with 2x average volume.',
        'Condition 3: Price gently pulls back (retests) the previous resistance level (now turned support).',
        'Execution: Enter on the retest candle with stop loss placed 0.5% below the retest wick.',
      ],
      goldenRule: 'Never buy the green breakout candle directly. Always wait for the patient retest to buy at wholesale prices.',
      tasks: [
        { id: 'trade-s4-t1', text: 'Screen for 3 tokens currently in multi-day tight consolidation' },
        { id: 'trade-s4-t2', text: 'Mark the exact breakout price levels and set automated alerts' },
        { id: 'trade-s4-t3', text: 'Calculate the hypothetical stop loss distance in advance' },
      ],
    },

    {
      stepNumber: 5,
      pageNumber: 12,
      title: 'Step 5: Landing Page & High-Converting Funnel Architecture',
      subtitle: 'The 3-Tier Take-Profit Execution & Profit De-Risking Protocol',
      objective: 'Lock in profits systematically so winning trades never turn into losing trades.',
      timeToExecute: 'Immediate in every trade',
      deliverable: 'Automated limit order scale-out setup on decentralized exchange',
      detailedWalkthrough: [
        'Tier 1 (At 2R Profit): Sell 33% of your position. Move stop loss on remaining tokens to Break-Even. The trade is now mathematically risk-free.',
        'Tier 2 (At 3R Profit): Sell another 33% of your position. Lock in bankable net profit.',
        'Tier 3 (Runner): Let the remaining 34% ride with a trailing stop beneath the 4-Hour 20 EMA to capture macro parabolic runs.',
      ],
      goldenRule: 'Taking profits never made anyone poor. The market gives, and the market takes back if you get greedy.',
      tasks: [
        { id: 'trade-s5-t1', text: 'Calculate 2R, 3R, and 5R profit targets on chart before entering' },
        { id: 'trade-s5-t2', text: 'Execute Tier 1 take-profit when price hits 2R target' },
        { id: 'trade-s5-t3', text: 'Move stop loss immediately to entry price' },
      ],
    },

    {
      stepNumber: 6,
      pageNumber: 13,
      title: 'Step 6: Organic Distribution Engine ("Document, Don\'t Preach")',
      subtitle: 'Maintain a Rigorous Personal Trading Journal in Notion',
      objective: 'Track every single trade with screenshots, emotions, and mathematical execution data.',
      timeToExecute: '10 Min per Trade',
      deliverable: 'Comprehensive Notion Trading Journal logging every trade setup',
      detailedWalkthrough: [
        'Log: Date, Token, Entry Price, Stop Loss, Target, Position Size, and Risk Dollars.',
        'Take a screenshot of the chart BEFORE entering and AFTER closing the trade.',
        'Rate your emotional discipline from 1 to 10: Did you follow all rules in your Constitution?',
        'Review journal every weekend to identify recurring behavioral flaws.',
      ],
      goldenRule: 'You cannot improve what you do not measure. A trading journal is your mirror of reality.',
      tasks: [
        { id: 'trade-s6-t1', text: 'Create dedicated Notion Trading Journal database' },
        { id: 'trade-s6-t2', text: 'Log every trade entry within 5 minutes of execution' },
        { id: 'trade-s6-t3', text: 'Attach before/after chart screenshots to each journal entry' },
      ],
    },

    {
      stepNumber: 7,
      pageNumber: 14,
      title: 'Step 7: Outbound Outreach & Paid Acquisition Pipeline',
      subtitle: 'The Capital Inflow Funnel: Reinvesting Profit into Risk-Free Yield',
      objective: 'Funnel trading gains into decentralized lending and yield protocols for passive compounding.',
      timeToExecute: 'Monthly 1 Hour',
      deliverable: 'Staked stablecoin position generating 6%–12% APY in non-custodial yield',
      detailedWalkthrough: [
        'At the end of every profitable month, withdraw 50% of net trading gains.',
        'Deposit into battle-tested DeFi protocols (Aave, Kamino Finance, or Morpho) as USDC.',
        'Earn passive single-digit to low double-digit yield on cash reserves while waiting for the next market cycle.',
      ],
      goldenRule: 'Real wealth is built by taking profits off the table and converting high-risk speculative gains into permanent cash flow.',
      tasks: [
        { id: 'trade-s7-t1', text: 'Set up Kamino / Aave lending account on cold wallet' },
        { id: 'trade-s7-t2', text: 'Deposit 50% of monthly trading profits into USDC vault' },
        { id: 'trade-s7-t3', text: 'Verify smart contract audits and insurance coverage' },
      ],
    },

    {
      stepNumber: 8,
      pageNumber: 15,
      title: 'Step 8: Fulfillment, Delivery & Onboarding Automation',
      subtitle: 'Hardware Wallet Migration & Physical Cold Storage Quarantine',
      objective: 'Ensure your long-term capital is 100% disconnected from the internet.',
      timeToExecute: '2 Hours',
      deliverable: 'Hardware wallet verified with steel backup seed phrase stored in safe',
      detailedWalkthrough: [
        'Set up a Ledger Nano X or Keystone hardware wallet.',
        'Generate private keys completely offline.',
        'Transfer accumulated USDC profits and long-term crypto assets to the cold address.',
        'Never connect this cold wallet to random browser dApps or speculative websites.',
      ],
      goldenRule: 'Not your keys, not your coins. If your assets sit on a centralized exchange, you are an unsecured creditor.',
      tasks: [
        { id: 'trade-s8-t1', text: 'Initialize hardware wallet and test test-recovery seed' },
        { id: 'trade-s8-t2', text: 'Transfer profits from hot trading wallet to cold vault address' },
        { id: 'trade-s8-t3', text: 'Store steel backup plate in secure fireproof location' },
      ],
    },

    {
      stepNumber: 9,
      pageNumber: 16,
      title: 'Step 9: Backend Monetization & High-Ticket Upsell Integration',
      subtitle: 'Building a Private Sovereign Research Substack / Alpha Community',
      objective: 'Monetize your trading journal by sharing institutional-grade research with paying subscribers.',
      timeToExecute: 'Weekly 2 Hours',
      deliverable: 'Paid Substack or private Discord generating $3,000–$8,000/mo in recurring MRR',
      detailedWalkthrough: [
        'Once you have 6 months of verified profitable track record, publish weekly macro breakdowns.',
        'Do NOT give financial advice or sell fake signals. Share institutional liquidity research and technical setups.',
        'Charge $99/mo on Beehiiv/Substack. 50 dedicated high-net-worth subscribers = $4,950/mo in guaranteed recurring revenue.',
      ],
      goldenRule: 'Adding subscription MRR to trading profits creates ultimate financial stability during low-volatility market months.',
      tasks: [
        { id: 'trade-s9-t1', text: 'Document 30-day verified track record on Twitter / Substack' },
        { id: 'trade-s9-t2', text: 'Launch weekly institutional research newsletter on Beehiiv' },
        { id: 'trade-s9-t3', text: 'Offer premium research tier at $99/mo' },
      ],
    },

    {
      stepNumber: 10,
      pageNumber: 17,
      title: 'Step 10: 90-Day Scaling, Optimization & KPI Protocol',
      subtitle: 'Scale Account Capital Safely from $10k to $50k+ With Zero Leverage',
      objective: 'Maintain psychological discipline and compound returns over 90 days.',
      timeToExecute: 'Ongoing Rhythm',
      deliverable: 'Monthly audited performance metrics showing steady upward equity curve',
      detailedWalkthrough: [
        'Never increase position size after a big winning trade. Only increase dollar risk when your base account balance increases permanently.',
        'Calculate your Monthly Profit Factor (Gross Profits / Gross Losses). Target is >2.2.',
        'If Drawdown reaches 8%, cut position risk in half (from 1.5% to 0.75%) until confidence and rhythm return.',
      ],
      goldenRule: 'Amateurs focus on how much money they can make. Professionals obsess over how much money they can lose.',
      tasks: [
        { id: 'trade-s10-t1', text: 'Audit monthly Profit Factor and Win Rate metrics' },
        { id: 'trade-s10-t2', text: 'Execute monthly 50% profit withdrawal without hesitation' },
        { id: 'trade-s10-t3', text: 'Review Trading Constitution weekly to enforce 100% rule compliance' },
      ],
    },
  ],
};

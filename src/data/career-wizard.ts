export interface WizardOption {
  id: string
  label: string
}

export interface WizardResult {
  resultId: string
  resultTitle: string
  feelingSummary: string
  advice: string[]
}

export const careerWizardIntro = {
  pageTitle: 'Find your path',
  pageSubtitle: 'Three short questions to surface where you are stuck, and what to do next.',
  resultsContactFooterLead:
    'When you are ready, use the section below to book a call or connect on LinkedIn, the same options as elsewhere on the site.',
} as const

export const careerWizardPaths = {
  job: {
    label: 'Looking for a job',
    q2Options: [
      { id: 'no_interviews', label: 'Not landing interviews' },
      { id: 'interviews_no_offer', label: 'Getting interviews, but not reaching the offer stage' },
      { id: 'unsure_start', label: 'Not sure where to start' },
    ],
    q3Options: [
      { id: 'cv_signals', label: 'Sharpening my CV, LinkedIn, and project signals' },
      { id: 'interview_loop', label: 'Interview practice and feedback loops' },
      { id: 'direction_plan', label: 'Choosing targets and building a weekly rhythm' },
    ],
    feelingByQ2: {
      no_interviews:
        'You are putting energy out, but the pipeline feels quiet, and that can quietly drain confidence.',
      interviews_no_offer:
        'You are getting conversations, yet each “no” (or silence) makes it harder to trust your own read on what is missing.',
      unsure_start:
        'The market feels noisy and you are not sure which lever to pull first, so progress stalls before it really starts.',
    },
    feelingNudgeByQ3: {
      cv_signals: ' Right now, tightening how you signal credibility is probably the fastest relief.',
      interview_loop: ' Right now, tightening how you show up in interviews is probably the fastest relief.',
      direction_plan: ' Right now, getting a simple weekly plan beats more random applications.',
    },
    adviceLines: [
      'Write down your target role in one sentence (title, stack, company size). If you cannot, spend 30 minutes picking a default target you can revise later.',
      'Pick one “signal upgrade” for the week: either LinkedIn headline/about, one flagship project bullet, or one measurable story you can paste into CV and interviews.',
      'Book two calendar blocks this week for applications and follow-ups. Small, protected time beats heroic bursts.',
    ],
    adviceExtraByQ2Q3: {
      'no_interviews__cv_signals':
        'Ask one peer you trust: “If you only had my LinkedIn, what role would you guess I want next?” Fix the mismatch they name first.',
      'interviews_no_offer__interview_loop':
        'After your next interview, write a 10-line retro: what questions surprised you, where you rambled, and one story you will tighten next time.',
    },
  },
  promotion: {
    label: 'Looking for a promotion',
    q2Options: [
      { id: 'invisible_impact', label: 'My work is strong, but my impact feels invisible' },
      { id: 'unclear_bar', label: 'I do not have clear feedback on what “next level” means here' },
      { id: 'stakeholder_gap', label: 'I struggle with stakeholders, visibility, or self-advocacy' },
    ],
    q3Options: [
      { id: 'promo_story', label: 'Writing a clearer promotion story (impact + scope)' },
      { id: 'manager_align', label: 'Aligning expectations with my manager' },
      { id: 'stakeholder_vis', label: 'Growing visibility with stakeholders' },
    ],
    feelingByQ2: {
      invisible_impact:
        'You know you are delivering, but it does not feel like the right people connect your work to “next level.”',
      unclear_bar:
        'Promotion criteria feel fuzzy, so it is hard to know whether you are on track, or what to change this quarter.',
      stakeholder_gap:
        'Stakeholder moments feel high stakes; it is easy to feel overlooked even when your technical work is solid.',
    },
    feelingNudgeByQ3: {
      promo_story: ' Right now, clarifying your narrative will make everything else easier.',
      manager_align: ' Right now, alignment with your manager is the highest-leverage conversation.',
      stakeholder_vis: ' Right now, small visibility upgrades can change how you are perceived.',
    },
    adviceLines: [
      'Draft a one-page “promotion case”: 5 outcomes, 3 ways you reduced risk for the team, 2 cross-team wins, written for a busy manager skimming in 3 minutes.',
      'Schedule a structured 1:1 ask: “What would ‘exceed expectations’ look like for the next cycle for me?” Capture feedback as concrete behaviors, not vibes.',
      'Pick one visibility habit for two weeks: concise weekly updates, leading a short demo, or owning a recurring stakeholder touchpoint.',
    ],
    adviceExtraByQ2Q3: {
      'stakeholder_gap__stakeholder_vis':
        'Pick one recurring meeting: prepare one crisp update + one question that shows judgment, not just status.',
    },
  },
  change_job: {
    label: 'Looking to change my job',
    q2Options: [
      { id: 'comp_offer', label: 'I need a better offer or compensation' },
      { id: 'culture_fit', label: 'I want a healthier culture or scope (burnout or fit)' },
      { id: 'relocation', label: 'I am changing city or country and need a practical plan' },
    ],
    q3Options: [
      { id: 'search_time', label: 'Carving consistent search time alongside my job' },
      { id: 'confidence_brand', label: 'Confidence, personal brand, or fear of change' },
      { id: 'market_outreach', label: 'Reading the market and tailoring outreach' },
    ],
    feelingByQ2: {
      comp_offer:
        'You want your next move to reflect your value, but it is stressful to negotiate reality against what you need.',
      culture_fit:
        'You are weighing health, scope, and sustainability, not just a title, and that can feel emotionally heavy.',
      relocation:
        'Changing geography adds logistics and uncertainty on top of an already demanding job search.',
    },
    feelingNudgeByQ3: {
      search_time: ' Right now, protecting time is the bottleneck more than “motivation.”',
      confidence_brand: ' Right now, the emotional load is as real as the tactical work.',
      market_outreach: ' Right now, market clarity will calm the noise and sharpen your pitch.',
    },
    adviceLines: [
      'Define your non-negotiables (comp band, remote policy, domain, pace) before you optimize your CV. Clarity here saves weeks of misfit interviews.',
      'Refresh your story for why you are leaving (30 seconds, neutral tone). Practice it out loud so it feels boring, not defensive.',
      'Create a lightweight tracker: roles applied, referrals sent, recruiter replies, so you can improve the system, not just your mood.',
    ],
    adviceExtraByQ2Q3: {
      'relocation__market_outreach':
        'List 10 companies hiring in your target city/domain and prioritize 3 where your stack is a direct match. Depth beats spray.',
    },
  },
} as const

export type CareerQ1 = keyof typeof careerWizardPaths

const DEFAULT_FEELING_FALLBACK =
  'You are carrying a real career question, and it makes sense if it feels heavy.'

const DEFAULT_ADVICE_EXTRA =
  'On a free strategy call we can turn this into a two-week plan with specific scripts, artifacts, and checkpoints.'

export const careerWizardQ1 = {
  heading: 'Where are you in your career?',
  options: (Object.keys(careerWizardPaths) as CareerQ1[]).map((id) => ({
    id,
    label: careerWizardPaths[id].label,
  })),
}

export const careerWizardQuestionLabels = {
  q1: careerWizardQ1.heading,
  q2: 'What best describes your situation?',
  q3: 'What feels hardest right now?',
} as const

export function getCareerWizardQ2Options(q1: CareerQ1): WizardOption[] {
  return [...careerWizardPaths[q1].q2Options]
}

export function getCareerWizardQ3Options(q1: CareerQ1): WizardOption[] {
  return [...careerWizardPaths[q1].q3Options]
}

export function getCareerWizardQ1Label(q1Id: CareerQ1): string {
  return careerWizardPaths[q1Id].label
}

export function getCareerWizardQ2Label(q1: CareerQ1, q2Id: string): string {
  return careerWizardPaths[q1].q2Options.find((o) => o.id === q2Id)?.label ?? q2Id
}

export function getCareerWizardQ3Label(q1: CareerQ1, q3Id: string): string {
  return careerWizardPaths[q1].q3Options.find((o) => o.id === q3Id)?.label ?? q3Id
}

export function buildCareerWizardResultId(q1: CareerQ1, q2: string, q3: string): string {
  return `${q1}__${q2}__${q3}`
}

export function getCareerWizardResult(q1: CareerQ1, q2: string, q3: string): WizardResult {
  const path = careerWizardPaths[q1]
  const resultId = buildCareerWizardResultId(q1, q2, q3)
  const feelingByQ2 = path.feelingByQ2 as Record<string, string>
  const feelingNudgeByQ3 = path.feelingNudgeByQ3 as Record<string, string>
  const adviceExtraByQ2Q3 = path.adviceExtraByQ2Q3 as Record<string, string>
  const feelingBase = feelingByQ2[q2] ?? DEFAULT_FEELING_FALLBACK
  const nudge = feelingNudgeByQ3[q3] ?? ''
  const extra = adviceExtraByQ2Q3[`${q2}__${q3}`] ?? DEFAULT_ADVICE_EXTRA
  return {
    resultId,
    resultTitle: 'Here is a good place to start',
    feelingSummary: `${feelingBase}${nudge}`,
    advice: [...path.adviceLines, extra],
  }
}

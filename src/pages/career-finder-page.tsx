import { useCallback, useEffect, useMemo, useState } from 'react'
import { Box, Button, LinearProgress, Stack, Typography } from '@mui/material'
import { ContactCTA } from '../components/contact-cta/contact-cta'
import { Seo } from '../components/seo/seo'
import {
  type CareerQ1,
  careerWizardIntro,
  careerWizardQ1,
  getCareerWizardQ2Options,
  getCareerWizardQ3Options,
  getCareerWizardResult,
} from '../data/career-wizard'
import { trackEvent } from '../lib/analytics'
import { ANALYTICS_EVENTS } from '../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../lib/analytics-event-params'
import { ANALYTICS_CONTENT_TYPES, ANALYTICS_LOCATION_VALUES } from '../lib/analytics-event-values'
import { MainContainer } from './home-page.styles'

export function CareerFinderPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1)
  const [q1, setQ1] = useState<CareerQ1 | null>(null)
  const [q2, setQ2] = useState<string | null>(null)
  const [q3, setQ3] = useState<string | null>(null)

  const result = useMemo(() => {
    if (!q1 || !q2 || !q3) return null
    return getCareerWizardResult(q1, q2, q3)
  }, [q1, q2, q3])

  useEffect(() => {
    if (step !== 4 || !result) return
    trackEvent(ANALYTICS_EVENTS.CAREER_WIZARD_COMPLETE, {
      [ANALYTICS_PARAM_KEYS.RESULT_ID]: result.resultId,
      [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.CAREER_WIZARD,
    })
  }, [step, result])

  const trackAnswer = useCallback((itemId: string) => {
    trackEvent(ANALYTICS_EVENTS.SELECT_CONTENT, {
      [ANALYTICS_PARAM_KEYS.CONTENT_TYPE]: ANALYTICS_CONTENT_TYPES.CAREER_WIZARD_ANSWER,
      [ANALYTICS_PARAM_KEYS.ITEM_ID]: itemId,
      [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.CAREER_WIZARD,
    })
  }, [])

  const renderQuestion = () => {
    if (step === 1) {
      return (
        <>
          <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
            {careerWizardQ1.heading}
          </Typography>
          <Stack spacing={1.5} role="radiogroup" aria-label={careerWizardQ1.heading}>
            {careerWizardQ1.options.map((opt) => (
              <Button
                key={opt.id}
                variant="outlined"
                size="large"
                sx={{ justifyContent: 'flex-start', textAlign: 'left', py: 2 }}
                onClick={() => {
                  trackAnswer(`career_q1_${opt.id}`)
                  setQ1(opt.id)
                  setStep(2)
                }}
              >
                {opt.label}
              </Button>
            ))}
          </Stack>
        </>
      )
    }

    if (step === 2 && q1) {
      const options = getCareerWizardQ2Options(q1)
      return (
        <>
          <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
            What best describes your situation?
          </Typography>
          <Stack spacing={1.5} role="radiogroup">
            {options.map((opt) => (
              <Button
                key={opt.id}
                variant="outlined"
                size="large"
                sx={{ justifyContent: 'flex-start', textAlign: 'left', py: 2 }}
                onClick={() => {
                  trackAnswer(`career_q2_${q1}_${opt.id}`)
                  setQ2(opt.id)
                  setStep(3)
                }}
              >
                {opt.label}
              </Button>
            ))}
          </Stack>
        </>
      )
    }

    if (step === 3 && q1) {
      const options = getCareerWizardQ3Options(q1)
      return (
        <>
          <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
            What feels hardest right now?
          </Typography>
          <Stack spacing={1.5} role="radiogroup">
            {options.map((opt) => (
              <Button
                key={opt.id}
                variant="outlined"
                size="large"
                sx={{ justifyContent: 'flex-start', textAlign: 'left', py: 2 }}
                onClick={() => {
                  trackAnswer(`career_q3_${q1}_${opt.id}`)
                  setQ3(opt.id)
                  setStep(4)
                }}
              >
                {opt.label}
              </Button>
            ))}
          </Stack>
        </>
      )
    }

    if (step === 4 && result) {
      return (
        <Box
          component="article"
          aria-live="polite"
        >
          <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
            {result.resultTitle}
          </Typography>
          <Typography variant="subtitle1" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
            You might be feeling…
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {result.feelingSummary}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2 }} gutterBottom>
            Practical next steps
          </Typography>
          <Box component="ul" sx={{ pl: 2.25, m: 0 }}>
            {result.advice.map((line) => (
              <Typography key={line} component="li" variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                {line}
              </Typography>
            ))}
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 3, maxWidth: 520 }}>
            {careerWizardIntro.resultsContactFooterLead}
          </Typography>
        </Box>
      )
    }

    return null
  }

  const progressLabel = `Question ${step} of 3`
  const questionsCompleted = step - 1
  const progressPercent = (questionsCompleted / 3) * 100

  return (
    <MainContainer role="main">
      <Seo path="/find-your-path" />
      <Box component="section" sx={{ mt: 4, maxWidth: 640, mx: 'auto', px: 1 }}>
        {step < 4 ? (
          <>
            <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
              {careerWizardIntro.pageTitle}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {careerWizardIntro.pageSubtitle}
            </Typography>
          </>
        ) : null}

        {step < 4 ? (
          <Box sx={{ mb: 2 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: 0.75 }}>
              <Typography variant="body2" color="text.secondary" aria-live="polite">
                {progressLabel}
              </Typography>
              <Typography variant="caption" color="text.secondary" component="span">
                {questionsCompleted}
                {' '}
                of 3 answered
              </Typography>
            </Stack>
            <LinearProgress
              variant="determinate"
              value={progressPercent}
              sx={{
                height: 8,
                borderRadius: 999,
                bgcolor: 'action.hover',
                '& .MuiLinearProgress-bar': { borderRadius: 999 },
              }}
              aria-label={`${questionsCompleted} of 3 questions answered`}
            />
          </Box>
        ) : null}

        {renderQuestion()}
      </Box>

      {step === 4 && <ContactCTA disableFade />}
    </MainContainer>
  )
}

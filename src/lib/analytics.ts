import type { AnalyticsEventName } from './analytics-events'
import { ANALYTICS_PARAM_KEYS } from './analytics-event-params'

const GA_MEASUREMENT_ID = 'G-T2JS4WX908'

type AnalyticsValue = string | number | boolean
type AnalyticsParams = Record<string, AnalyticsValue>

function canTrack(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsParams = {}): void {
  if (!canTrack()) return
  const pageContext: AnalyticsParams = {}
  if (typeof window !== 'undefined') {
    pageContext[ANALYTICS_PARAM_KEYS.PAGE_PATH] = window.location.pathname
    pageContext[ANALYTICS_PARAM_KEYS.PAGE_TITLE] = typeof document !== 'undefined' ? (document.title || '') : ''
  }
  window.gtag('event', eventName, { ...pageContext, ...params })
}

export function trackPageView(pagePath: string): void {
  if (!canTrack()) return
  window.gtag('config', GA_MEASUREMENT_ID, { page_path: pagePath })
}

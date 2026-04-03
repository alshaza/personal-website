import type { AnalyticsEventName } from './analytics-events'

const GA_MEASUREMENT_ID = 'G-T2JS4WX908'

type AnalyticsValue = string | number | boolean
type AnalyticsParams = Record<string, AnalyticsValue>

function canTrack(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsParams = {}): void {
  if (!canTrack()) return
  window.gtag('event', eventName, params)
}

export function trackPageView(pagePath: string): void {
  if (!canTrack()) return
  window.gtag('config', GA_MEASUREMENT_ID, { page_path: pagePath })
}

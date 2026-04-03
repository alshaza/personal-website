export const ANALYTICS_EVENTS = {
  CTA_CLICK: 'cta_click',
  CUSTOM_BUTTON_CLICK: 'custom_button_click',
} as const

export type AnalyticsEventName = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS]

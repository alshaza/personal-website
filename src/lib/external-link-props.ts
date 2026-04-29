export const EXTERNAL_NEW_TAB_REL = 'noopener noreferrer external'

export const externalNewTabLinkProps = {
  target: '_blank',
  rel: EXTERNAL_NEW_TAB_REL,
} as const

const ABSOLUTE_HTTP_RE = /^https?:\/\//i

export function isExternalAbsoluteUrl(href: string): boolean {
  return ABSOLUTE_HTTP_RE.test(href) || href.startsWith('//')
}

export function externalLinkPropsForHref(href: string): typeof externalNewTabLinkProps | Record<string, never> {
  return isExternalAbsoluteUrl(href) ? externalNewTabLinkProps : {}
}

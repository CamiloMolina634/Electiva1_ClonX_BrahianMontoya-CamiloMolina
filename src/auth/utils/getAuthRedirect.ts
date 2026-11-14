export const getAuthRedirect = (state: unknown): string => {
  if (!state || typeof state !== 'object' || !('from' in state)) return '/'
  const from = state.from
  return typeof from === 'string' && from !== '/tweets/new' && /^\/tweets\/[^/?#]+$/.test(from) ? from : '/'
}

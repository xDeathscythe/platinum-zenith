const TOKEN_KEY = 'pz_token'
const UNAUTHORIZED_CODE = 'UNAUTHORIZED'

export class AdminApiError extends Error {
  constructor(message, { status, code, data } = {}) {
    super(message)
    this.name = 'AdminApiError'
    this.status = status
    this.code = code
    this.data = data
  }
}

async function parseResponse(res) {
  const contentType = res.headers.get('content-type') || ''
  if (contentType.includes('application/json')) return res.json()

  const text = await res.text()
  return text ? { message: text } : null
}

export async function adminFetch(path, { method = 'GET', headers = {}, body, onUnauthorized } = {}) {
  const token = localStorage.getItem(TOKEN_KEY)
  const response = await fetch(path, {
    method,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(body ? { 'Content-Type': 'application/json' } : {}),
      ...headers,
    },
    ...(body ? { body: typeof body === 'string' ? body : JSON.stringify(body) } : {}),
  })

  const data = await parseResponse(response)

  if (response.status === 401) {
    localStorage.removeItem(TOKEN_KEY)
    onUnauthorized?.()
    throw new AdminApiError('Sesija je istekla. Prijavite se ponovo.', {
      status: 401,
      code: UNAUTHORIZED_CODE,
      data,
    })
  }

  if (!response.ok || (data && data.ok === false)) {
    throw new AdminApiError(data?.error || data?.message || `Greška (${response.status})`, {
      status: response.status,
      data,
    })
  }

  return data
}

export function isUnauthorizedError(err) {
  return err?.code === UNAUTHORIZED_CODE || err?.status === 401
}

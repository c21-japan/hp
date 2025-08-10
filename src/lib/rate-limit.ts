interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

const store: RateLimitStore = {}

export function rateLimit(identifier: string, limit: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now()
  const key = identifier
  
  if (!store[key] || now > store[key].resetTime) {
    store[key] = {
      count: 1,
      resetTime: now + windowMs
    }
    return true
  }
  
  if (store[key].count >= limit) {
    return false
  }
  
  store[key].count++
  return true
}

export function getRateLimitInfo(identifier: string) {
  const key = identifier
  if (!store[key]) return null
  
  return {
    remaining: Math.max(0, 5 - store[key].count),
    resetTime: store[key].resetTime
  }
}

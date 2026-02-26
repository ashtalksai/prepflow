import Stripe from "stripe"

// Lazy initialization to avoid build-time failures when env vars not set
let _stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY is not set")
    }
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-01-28.clover",
      typescript: true,
    })
  }
  return _stripe
}

// Backwards compatibility export that's lazily evaluated
export const stripe = {
  get checkout() {
    return getStripe().checkout
  },
  get webhooks() {
    return getStripe().webhooks
  },
  get customers() {
    return getStripe().customers
  },
  get subscriptions() {
    return getStripe().subscriptions
  },
}

export const PLANS = {
  FREE: {
    name: "Free",
    price: 0,
    priceId: null,
    features: [
      "Basic diagnostic test",
      "3 resource recommendations/day",
      "Access to free content",
      "Basic progress tracking",
    ],
  },
  PREMIUM: {
    name: "Premium",
    price: 999, // cents
    priceId: process.env.STRIPE_PREMIUM_PRICE_ID,
    features: [
      "Everything in Free",
      "Unlimited recommendations",
      "Full resource library",
      "Adaptive study sequences",
      "Advanced analytics",
      "Priority support",
    ],
  },
  ANNUAL: {
    name: "Annual",
    price: 9900, // cents
    priceId: process.env.STRIPE_ANNUAL_PRICE_ID,
    features: [
      "Everything in Premium",
      "2 months free",
      "Early access to new features",
      "1-on-1 onboarding call",
      "Priority resource requests",
    ],
  },
} as const

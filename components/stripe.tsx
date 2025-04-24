"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import type { StripeElementsOptions } from "@stripe/stripe-js"

interface StripeProps {
  options: StripeElementsOptions
  children: React.ReactNode
  className?: string
}

// This is a mock component for the portfolio - in a real app you would use your actual Stripe publishable key
const stripePromise = loadStripe("pk_test_mock_key_for_portfolio")

export function Stripe({ options, children, className }: StripeProps) {
  const [clientSecret, setClientSecret] = useState("")

  useEffect(() => {
    // In a real app, you would fetch the client secret from your server
    setClientSecret("mock_client_secret_for_portfolio")
  }, [])

  return (
    <div className={className}>
      {clientSecret && (
        <Elements options={{ ...options, clientSecret }} stripe={stripePromise}>
          {children}
        </Elements>
      )}
    </div>
  )
}

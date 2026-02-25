"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Check, Zap } from "lucide-react"
import { PlateauBadge } from "@/components/dashboard/plateau-badge"
import { cn } from "@/lib/utils"

const questions = [
  {
    id: 1,
    question: "What's your current LSAT practice score range?",
    options: [
      { value: 150, label: "Below 155", description: "Still building fundamentals" },
      { value: 158, label: "155-160", description: "Solid foundation, need strategy" },
      { value: 165, label: "160-167", description: "Good, pushing for elite" },
      { value: 172, label: "168+", description: "Elite, fine-tuning" },
    ],
  },
  {
    id: 2,
    question: "Which section is your biggest weakness?",
    options: [
      { value: "lg", label: "Logic Games", description: "Puzzles and diagrams" },
      { value: "lr", label: "Logical Reasoning", description: "Arguments and flaws" },
      { value: "rc", label: "Reading Comprehension", description: "Dense passages" },
      { value: "all", label: "All about equal", description: "No clear weakness" },
    ],
  },
  {
    id: 3,
    question: "How long have you been stuck at your current score?",
    options: [
      { value: 1, label: "Less than 2 weeks", description: "Just started noticing" },
      { value: 2, label: "2-4 weeks", description: "Starting to worry" },
      { value: 3, label: "1-2 months", description: "Definitely stuck" },
      { value: 4, label: "2+ months", description: "Major plateau" },
    ],
  },
  {
    id: 4,
    question: "What resources have you primarily used?",
    options: [
      { value: "free", label: "Free only", description: "Khan, YouTube, Reddit" },
      { value: "mixed", label: "Free + some paid", description: "Mix of resources" },
      { value: "paid", label: "Mainly paid courses", description: "Kaplan, Blueprint, etc." },
      { value: "tutor", label: "Working with tutor", description: "1-on-1 instruction" },
    ],
  },
  {
    id: 5,
    question: "What's your target LSAT score?",
    options: [
      { value: 160, label: "160", description: "Good law schools" },
      { value: 165, label: "165", description: "Top 30 law schools" },
      { value: 170, label: "170", description: "T14 competitive" },
      { value: 175, label: "175+", description: "HYS competitive" },
    ],
  },
]

export default function DiagnosticPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string | number>>({})
  const [showResults, setShowResults] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const question = questions[currentQuestion]
  const isAnswered = answers[question.id] !== undefined

  const handleAnswer = (value: string | number) => {
    setAnswers({ ...answers, [question.id]: value })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  // Calculate plateau from answers
  const calculatePlateau = () => {
    const score = answers[1] as number
    return score || 158
  }

  const plateauScore = calculatePlateau()

  if (showResults) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg"
        >
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            {/* Success icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
            >
              <Check className="h-10 w-10 text-primary" />
            </motion.div>

            <h1 className="font-display text-3xl font-bold mb-2">
              Diagnostic Complete!
            </h1>
            <p className="text-muted-foreground mb-8">
              We&apos;ve identified your plateau and weak areas.
            </p>

            {/* Plateau Result */}
            <div className="bg-secondary/50 rounded-xl p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-2">
                Your Current Plateau
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="font-mono text-5xl font-bold">{plateauScore}</span>
                <PlateauBadge score={plateauScore} className="text-base px-3 py-1" />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Target:{" "}
                <span className="font-mono font-bold text-foreground">
                  {answers[5]}
                </span>{" "}
                • Gap:{" "}
                <span className="font-mono font-bold text-primary">
                  +{(answers[5] as number) - plateauScore} points
                </span>
              </p>
            </div>

            {/* Weakness */}
            <div className="text-left mb-8">
              <p className="text-sm text-muted-foreground mb-2">Primary Weakness</p>
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                <p className="font-display font-semibold text-destructive">
                  {answers[2] === "lg"
                    ? "Logic Games"
                    : answers[2] === "lr"
                    ? "Logical Reasoning"
                    : answers[2] === "rc"
                    ? "Reading Comprehension"
                    : "No clear weakness"}
                </p>
                <p className="text-sm text-muted-foreground">
                  We&apos;ll prioritize resources targeting this area.
                </p>
              </div>
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="w-full gap-2"
              onClick={() => router.push("/dashboard")}
            >
              <Zap className="h-5 w-5" />
              See Your Personalized Resources
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              Your diagnostic results have been saved to your profile.
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border p-4">
        <div className="container-narrow flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <span className="font-mono text-lg font-bold text-primary">[</span>
            <span className="font-display text-lg font-bold">PrepFlow</span>
            <span className="font-mono text-lg font-bold text-primary">]</span>
          </Link>
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
      </header>

      {/* Progress */}
      <div className="container-narrow py-4">
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={question.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="font-display text-2xl font-bold text-center">
                {question.question}
              </h2>

              <div className="space-y-3">
                {question.options.map((option) => {
                  const isSelected = answers[question.id] === option.value
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={cn(
                        "w-full p-4 rounded-xl border text-left transition-all",
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border bg-card hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-display font-semibold">
                            {option.label}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {option.description}
                          </p>
                        </div>
                        {isSelected && (
                          <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                            <Check className="h-4 w-4 text-primary-foreground" />
                          </div>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="border-t border-border p-4">
        <div className="container-narrow flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Button onClick={handleNext} disabled={!isAnswered} className="gap-2">
            {currentQuestion === questions.length - 1 ? "See Results" : "Continue"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  )
}

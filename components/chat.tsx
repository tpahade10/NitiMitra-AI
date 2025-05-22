"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Namaste! I'm NitiMitra, your AI guide to Indian policies and governance. How can I assist you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const userMessage = input
    setInput("")

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])

    setIsLoading(true)

    try {
      // Create the system prompt that defines the AI politician's knowledge and behavior
      const systemPrompt = `
        You are NitiMitra, an AI assistant specializing in Indian government policies and political landscape.
        
        Your knowledge includes:
        - Current and historical Indian government policies and initiatives
        - Major political parties and their ideologies
        - Economic reforms and programs
        - Social welfare schemes
        - Foreign policy and international relations
        - Constitutional matters and governance structure
        
        Respond in a helpful, informative manner while maintaining political neutrality.
        Provide factual information about policies without expressing personal opinions or biases.
        When discussing controversial topics, present multiple perspectives.
        Use respectful language and occasionally incorporate Hindi phrases where appropriate.
        If asked about something outside your knowledge scope, acknowledge limitations.
        
        Format your responses clearly with concise paragraphs and bullet points when listing information.
      `

      // Generate AI response
      const { text } = await generateText({
        model: openai("gpt-4o"),
        system: systemPrompt,
        prompt: userMessage,
      })

      // Add AI response to chat
      setMessages((prev) => [...prev, { role: "assistant", content: text }])
    } catch (error) {
      console.error("Error generating response:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I apologize, but I'm having trouble connecting to my knowledge base at the moment. Please try again shortly.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const suggestedQuestions = [
    "What is the Digital India initiative?",
    "Explain the GST tax system in India",
    "What are India's major welfare schemes?",
    "How does India's parliamentary system work?",
    "What is India's current foreign policy approach?",
  ]

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4 mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                <Avatar
                  className={
                    message.role === "assistant"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-slate-200 dark:bg-slate-700"
                  }
                >
                  <div className="flex h-full items-center justify-center text-sm font-semibold">
                    {message.role === "assistant" ? "NM" : "U"}
                  </div>
                </Avatar>
                <div
                  className={`rounded-lg px-4 py-2 ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-slate-100 dark:bg-slate-800"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.content}</div>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[80%]">
                <Avatar className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <div className="flex h-full items-center justify-center text-sm font-semibold">NM</div>
                </Avatar>
                <div className="rounded-lg px-4 py-2 bg-slate-100 dark:bg-slate-800">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-slate-400 dark:bg-slate-500 [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-slate-400 dark:bg-slate-500 [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-slate-400 dark:bg-slate-500"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {messages.length === 1 && (
        <div className="px-4 pb-4">
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Suggested Questions</h3>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="rounded-md bg-slate-100 px-3 py-1.5 text-xs text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                  onClick={() => handleSuggestedQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="p-4 border-t dark:border-slate-800 mt-auto">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            placeholder="Ask about Indian policies..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            {isLoading ? (
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}

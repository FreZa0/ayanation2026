import { useState } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const faqData = [
  {
    id: "1",
    title: "What is FAQ?",
    content: "A FAQ is a list of frequently asked questions and answers on a particular topic.",
  },
  {
    id: "2",
    title: "What is the purpose of a FAQ?",
    content: "The purpose of a FAQ is to provide quick and easy access to information that users commonly need, reducing the need for repetitive support inquiries.",
  },
  {
    id: "3",
    title: "How do I create a FAQ?",
    content: "To create a FAQ, identify common questions from your users, organize them logically, write clear and concise answers, and keep the content updated.",
  },
  {
    id: "4",
    title: "What are the benefits of a FAQ?",
    content: "FAQs save time for both users and support teams, improve user experience, reduce support costs, and help users find answers instantly.",
  },
  {
    id: "5",
    title: "How should I organize my FAQ?",
    content: "Organize your FAQ by categories or topics, use clear headings, prioritize the most common questions, and consider adding a search function for longer lists.",
  },
  {
    id: "6",
    title: "How long should FAQ answers be?",
    content: "FAQ answers should be concise yet complete, typically 2-4 sentences. Provide enough information to answer the question while linking to detailed resources if needed.",
  },
  {
    id: "7",
    title: "Should I include links in my FAQ",
    content: "Yes, including relevant links in your FAQ can help users access more detailed information, related resources, or contact support when needed.",
  },
]

export default function FAQ() {
  const [expandedItem, setExpandedItem] = useState("1")

  return (
    <div className="flex w-full flex-col items-center px-4 py-12 md:py-20">
      <div className="flex w-full max-w-3xl flex-col gap-11">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="font-inter text-4xl font-semibold leading-[1.11] text-[#0A0A0A]">
            Frequently asked questions
          </h1>
          <p className="font-inter text-lg font-normal leading-[1.56] text-[#737373]">
            Find answers to common questions about our products. Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          value={expandedItem}
          onValueChange={setExpandedItem}
          className="flex w-full flex-col"
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className={cn(
                "group flex flex-col",
                index !== faqData.length - 1 && "border-b border-[#E5E5E5]"
              )}
            >
              <AccordionTrigger
                className={cn(
                  "flex flex-row items-center justify-between gap-1 py-6 text-left font-inter text-lg font-medium leading-[1.56] text-[#0A0A0A] hover:underline focus-visible:ring-0",
                  expandedItem === item.id && "underline"
                )}
              >
                <span>{item.title}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    "shrink-0 transition-transform duration-200",
                    expandedItem === item.id && "rotate-180"
                  )}
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-6 pt-0">
                <p className="font-inter text-lg font-normal leading-[1.56] text-[#737373]">
                  {item.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

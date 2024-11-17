import React, { useState } from "react";
import "../assets/styles.css";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Presently?",
      answer:
        "Presently is a comprehensive project management tool designed to streamline task tracking, team collaboration, and project visualization.",
    },
    {
      question: "Is Presently available for free?",
      answer:
        "Yes, Presently offers a free plan with basic features, ideal for small teams or personal projects.",
    },
    {
      question: "Can I create custom project workflows in Presently?",
      answer:
        "Absolutely! Presently allows you to customize workflows to suit different project types and team needs.",
    },
    {
      question: "How can I track project progress on Presently?",
      answer:
        "Presently includes various tools like Gantt charts, task lists, and progress indicators to keep you updated on your project's status.",
    },
    {
      question: "Can I integrate Presently with other tools?",
      answer:
        "Yes, Presently supports integrations with popular tools like Slack, Google Workspace, and more to enhance team productivity.",
    },
    {
      question: "Does Presently support collaborative task management?",
      answer:
        "Yes, teams can collaborate in real-time, assign tasks, and communicate within Presently for efficient project management.",
    },
  ];

  return (
    <div className="container">
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        {faqItems.map((item, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={index}
          >
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
              style={{ cursor: "pointer" }}
            >
              <span>{item.question}</span>
              <span className="toggle">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
        <div className="load-more">
          <button>+ Load more FAQs</button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

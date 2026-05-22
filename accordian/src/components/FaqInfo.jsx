import {useState, useEffect} from 'react'
const faqData = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building UI.",
    },
    {
      id: 2,
      question: "What is useState?",
      answer: "useState is a React hook for state management.",
    },
    {
      id: 3,
      question: "What is JSX?",
      answer: "JSX allows writing HTML inside JavaScript.",
    },
  ];
  

export default function FaqInfo () {
    const [open, setOpen] = useState(null);

    return (
        <>
            {faqData.map((item) => {
                return (
                    <div key={item.id}>
                        <button onClick={() => setOpen((prev) => prev === item.id ? null : item.id)}>{item.question}</button>
                        {open === item.id && <p>{item.answer}</p>}
                    </div>
                )
            })}
        </>
    );
}
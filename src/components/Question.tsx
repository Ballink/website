import {useState} from "react"

interface Props {
  question: string;
  answer: string[];
}

export default function Question({question, answer}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const questionClasses = [
    "max-w-[42rem] mr-auto leading-relaxed opacity-60 overflow-hidden",
    isOpen ? "pt-2" : "max-h-0",
  ]

  const iconClasses = [
    "px-2 opacity-60 transition-all duration-200 ease-in-out",
    isOpen ? "rotate-45" : "rotate-0",
  ]

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      onClick={toggle}
      className="cursor-pointer flex flex-col border-b border-gray-200 py-5"
    >
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold opacity-80">{question}</h3>
        <span className={iconClasses.join(" ")}>+</span>
      </div>

      <div className={questionClasses.join(" ")}>
        {answer.map((answer) => (
          <p>{answer}</p>
        ))}
      </div>
    </div>
  )
}

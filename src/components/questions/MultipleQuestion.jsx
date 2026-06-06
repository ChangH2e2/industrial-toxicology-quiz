import { useState } from 'react'

const LABELS = ['A', 'B', 'C', 'D']

export default function MultipleQuestion({ q, answered, onAnswer }) {
  const [selected, setSelected] = useState(null)

  const handleClick = (i) => {
    if (answered) return
    setSelected(i)
    onAnswer(i === q.answer, q.options[i])
  }

  return (
    <div className="space-y-3">
      {q.options.map((opt, i) => {
        let cls = `w-full flex items-start gap-3 px-4 py-3 rounded-xl border-2 text-left font-medium text-sm transition-all cursor-pointer`
        if (answered) {
          if (i === q.answer)    cls += ' bg-emerald-100 border-emerald-500 text-emerald-800 animate-correct'
          else if (i === selected) cls += ' bg-rose-100 border-rose-400 text-rose-700 animate-shake'
          else                   cls += ' opacity-40 border-gray-200 text-gray-500'
        } else {
          cls += ' border-gray-200 text-gray-700 hover:border-indigo-400 hover:bg-indigo-50 active:scale-[0.98]'
        }
        return (
          <button key={i} onClick={() => handleClick(i)} className={cls}>
            <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
              answered && i === q.answer ? 'bg-emerald-500 text-white' :
              answered && i === selected ? 'bg-rose-400 text-white' :
              'bg-gray-100 text-gray-500'
            }`}>{LABELS[i]}</span>
            <span className="pt-0.5">{opt}</span>
          </button>
        )
      })}
    </div>
  )
}

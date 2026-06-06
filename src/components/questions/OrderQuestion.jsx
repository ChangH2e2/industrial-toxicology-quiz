import { useState } from 'react'

const LABELS = ['①', '②', '③', '④', '⑤', '⑥']
const CIRCLED = '①②③④⑤⑥'

function parseOrder(s, n) {
  // Try circled numbers ①②③④
  const circled = [...s].filter(c => CIRCLED.includes(c)).map(c => CIRCLED.indexOf(c))
  if (circled.length === n && new Set(circled).size === n) return circled

  // Try regular digits 1–6
  const digits = [...s.matchAll(/[1-6]/g)].map(m => parseInt(m[0]) - 1)
  if (digits.length === n && new Set(digits).size === n) return digits

  return null
}

export default function OrderQuestion({ q, answered, onAnswer }) {
  const [value, setValue] = useState('')
  const [isCorrect, setIsCorrect] = useState(null)

  const n = q.items.length

  const handleSubmit = () => {
    if (answered || !value.trim()) return
    const userSeq = parseOrder(value, n)
    const correct = userSeq !== null && userSeq.every((idx, pos) => idx === q.answer[pos])
    setIsCorrect(correct)
    onAnswer(correct, value)
  }

  const correctLabelStr = q.answer.map(i => LABELS[i]).join(' → ')
  const correctTextStr = q.answer.map(i => q.items[i]).join(' → ')

  let borderCls = 'border-gray-200 focus:border-teal-400'
  if (answered) {
    borderCls = isCorrect ? 'border-emerald-400 bg-emerald-50' : 'border-rose-400 bg-rose-50'
  }

  return (
    <div className="space-y-4">
      {/* Items labeled ①②③④ */}
      <div className="space-y-1.5">
        {q.items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 px-3 py-2 bg-teal-50 border border-teal-100 rounded-xl">
            <span className="text-sm font-bold text-teal-600 w-5 flex-shrink-0 text-center">{LABELS[idx]}</span>
            <span className="text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      {/* Text input */}
      <div className="space-y-1">
        <label className="text-xs font-semibold text-teal-600">
          🔢 올바른 순서를 번호로 입력하세요 (예: {LABELS.slice(0, n).join(',')})
        </label>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !answered && handleSubmit()}
          disabled={answered}
          placeholder={`번호를 순서대로 입력... 예) 2,3,1,4`}
          className={`w-full px-4 py-3 rounded-xl border-2 text-gray-800 font-medium text-sm outline-none transition-all disabled:cursor-not-allowed ${borderCls}`}
        />
      </div>

      {!answered && (
        <button
          onClick={handleSubmit}
          disabled={!value.trim()}
          className="w-full py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          제출하기 ✓
        </button>
      )}

      {answered && (
        <div className="text-sm text-gray-600 bg-gray-50 rounded-xl p-3 space-y-1">
          <div>
            <span className="font-semibold text-gray-700">정답: </span>
            <span className="text-gray-800 font-semibold">{correctLabelStr}</span>
          </div>
          <div className="text-xs text-gray-500 leading-relaxed">{correctTextStr}</div>
        </div>
      )}
    </div>
  )
}

import { useState } from 'react'

function normalize(s) {
  return String(s).trim().toLowerCase().replace(/\s+/g, '')
}

export default function FillQuestion({ q, answered, onAnswer }) {
  const [values, setValues] = useState(q.blanks.map(() => ''))
  const [result, setResult] = useState(null)

  const handleChange = (i, v) => {
    const next = [...values]
    next[i] = v
    setValues(next)
  }

  const handleSubmit = () => {
    if (answered) return
    const correct = q.answers.every((acceptedList, i) =>
      acceptedList.some(a => normalize(a) === normalize(values[i]))
    )
    setResult(correct)
    onAnswer(correct, values.join(', '))
  }

  return (
    <div className="space-y-4">
      {q.blanks.map((blank, i) => {
        let borderCls = 'border-gray-200 focus:border-indigo-400'
        if (answered) borderCls = result ? 'border-emerald-400 bg-emerald-50' : 'border-rose-400 bg-rose-50'
        return (
          <div key={blank.id} className="space-y-1">
            <label className="text-xs font-semibold text-gray-500">{blank.label} 빈칸</label>
            <input
              type="text"
              value={values[i]}
              onChange={e => handleChange(i, e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !answered && handleSubmit()}
              disabled={answered}
              placeholder={`${blank.label} 에 들어갈 답을 입력하세요`}
              className={`w-full px-4 py-3 rounded-xl border-2 text-gray-800 font-medium text-sm outline-none transition-all disabled:cursor-not-allowed ${borderCls}`}
            />
          </div>
        )
      })}
      {!answered && (
        <button
          onClick={handleSubmit}
          disabled={values.some(v => !v.trim())}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          제출하기 ✓
        </button>
      )}
      {answered && (
        <div className="text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
          <span className="font-semibold text-gray-700">정답: </span>
          {q.answers.map(a => a[0]).join(' / ')}
        </div>
      )}
    </div>
  )
}

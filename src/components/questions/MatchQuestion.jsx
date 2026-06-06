import { useState } from 'react'

const SUB_MAP = { '₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9',
                  '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9',
                  '⁺':'+','⁻':'-' }

function normalize(s) {
  return String(s)
    .trim()
    .toLowerCase()
    .replace(/[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]/g, c => SUB_MAP[c] ?? c)
    .replace(/[^a-z0-9가-힣]/g, '')
}

export default function MatchQuestion({ q, answered, onAnswer }) {
  const [value, setValue] = useState('')
  const [isCorrect, setIsCorrect] = useState(null)

  const accepts = q.accepts || [q.answer]

  const handleSubmit = () => {
    if (answered || !value.trim()) return
    const norm = normalize(value)
    const correct = accepts.some(a => normalize(a) === norm)
    setIsCorrect(correct)
    onAnswer(correct, value)
  }

  let borderCls = 'border-gray-200 focus:border-rose-400'
  if (answered) {
    borderCls = isCorrect ? 'border-emerald-400 bg-emerald-50' : 'border-rose-400 bg-rose-50'
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs font-semibold text-rose-500">🔍 설명이 가리키는 용어를 직접 입력하세요</label>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !answered && handleSubmit()}
          disabled={answered}
          placeholder="용어·약자·영문 모두 가능..."
          className={`w-full px-4 py-3 rounded-xl border-2 text-gray-800 font-medium text-sm outline-none transition-all disabled:cursor-not-allowed ${borderCls}`}
        />
      </div>

      {!answered && (
        <button
          onClick={handleSubmit}
          disabled={!value.trim()}
          className="w-full py-3 bg-rose-500 text-white rounded-xl font-bold hover:bg-rose-600 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          제출하기 ✓
        </button>
      )}

      {answered && (
        <div className="text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
          <span className="font-semibold text-gray-700">정답: </span>
          <span className="text-gray-800">{q.answer}</span>
          {accepts.length > 1 && (
            <span className="text-xs text-gray-400 ml-2">
              (인정: {accepts.slice(1).join(', ')})
            </span>
          )}
        </div>
      )}
    </div>
  )
}

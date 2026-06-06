import { useState, useMemo } from 'react'

export default function OrderQuestion({ q, answered, onAnswer }) {
  const shuffledIdxs = useMemo(() => {
    const idxs = q.items.map((_, i) => i)
    for (let i = idxs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idxs[i], idxs[j]] = [idxs[j], idxs[i]]
    }
    return idxs
  }, [q])

  const [pool, setPool] = useState(shuffledIdxs)
  const [arranged, setArranged] = useState([])

  const addToArranged = (itemIdx) => {
    if (answered) return
    setPool(p => p.filter(i => i !== itemIdx))
    setArranged(a => [...a, itemIdx])
  }

  const removeFromArranged = (pos) => {
    if (answered) return
    const itemIdx = arranged[pos]
    setArranged(a => a.filter((_, i) => i !== pos))
    setPool(p => [...p, itemIdx])
  }

  const handleSubmit = () => {
    if (answered || arranged.length !== q.items.length) return
    const correct = arranged.every((itemIdx, pos) => itemIdx === q.answer[pos])
    onAnswer(correct, arranged.map(i => q.items[i]).join(' → '))
  }

  const posCorrect = (itemIdx, pos) => itemIdx === q.answer[pos]

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs font-semibold text-teal-600 block mb-2">
          🔢 순서대로 클릭하여 아래에 배치하세요
        </label>
        {pool.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {pool.map(idx => (
              <button
                key={idx}
                onClick={() => addToArranged(idx)}
                disabled={answered}
                className="px-3 py-2 rounded-xl border-2 border-teal-200 bg-teal-50 text-sm font-medium text-teal-800 hover:border-teal-500 hover:bg-teal-100 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {q.items[idx]}
              </button>
            ))}
          </div>
        ) : !answered ? (
          <p className="text-xs text-gray-400 text-center py-2">모든 항목이 배치되었습니다 ✓</p>
        ) : null}
      </div>

      <div>
        <label className="text-xs font-semibold text-gray-500 block mb-2">
          {answered ? '내 답안 순서' : `선택한 순서 (${arranged.length}/${q.items.length})`}
          {!answered && arranged.length > 0 && (
            <span className="ml-2 font-normal text-gray-400">— 클릭하면 제거</span>
          )}
        </label>
        <div className="space-y-2 min-h-[3rem]">
          {arranged.length === 0 && !answered && (
            <div className="text-sm text-gray-400 text-center py-4 border-2 border-dashed border-gray-200 rounded-xl">
              위 항목을 순서대로 클릭하면 여기에 배치됩니다
            </div>
          )}
          {arranged.map((itemIdx, pos) => (
            <div
              key={pos}
              onClick={() => removeFromArranged(pos)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all ${
                answered
                  ? posCorrect(itemIdx, pos)
                    ? 'bg-emerald-50 border-emerald-400'
                    : 'bg-rose-50 border-rose-400'
                  : 'bg-white border-indigo-200 cursor-pointer hover:border-rose-300 hover:bg-rose-50'
              }`}
            >
              <span className={`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold ${
                answered
                  ? posCorrect(itemIdx, pos) ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                  : 'bg-indigo-500 text-white'
              }`}>
                {pos + 1}
              </span>
              <span className={`text-sm font-medium flex-1 ${
                answered
                  ? posCorrect(itemIdx, pos) ? 'text-emerald-800' : 'text-rose-800'
                  : 'text-gray-800'
              }`}>
                {q.items[itemIdx]}
              </span>
              {answered && <span>{posCorrect(itemIdx, pos) ? '✅' : '❌'}</span>}
            </div>
          ))}
        </div>
      </div>

      {!answered && (
        <button
          onClick={handleSubmit}
          disabled={arranged.length !== q.items.length}
          className="w-full py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          순서 확인하기 ✓
        </button>
      )}

      {answered && (
        <div className="text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
          <span className="font-semibold text-gray-700">올바른 순서: </span>
          <span className="text-gray-800 leading-relaxed">
            {q.answer.map(i => q.items[i]).join(' → ')}
          </span>
        </div>
      )}
    </div>
  )
}

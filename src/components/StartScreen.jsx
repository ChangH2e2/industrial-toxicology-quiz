import { useState } from 'react'
import { questions, QUIZ_TYPES, LECTURES } from '../data/questions'

const COLOR = {
  indigo:  { bg: 'bg-indigo-100',  border: 'border-indigo-400',  text: 'text-indigo-700',  ring: 'ring-indigo-400',  sel: 'bg-indigo-500 text-white border-indigo-500' },
  emerald: { bg: 'bg-emerald-100', border: 'border-emerald-400', text: 'text-emerald-700', ring: 'ring-emerald-400', sel: 'bg-emerald-500 text-white border-emerald-500' },
  blue:    { bg: 'bg-blue-100',    border: 'border-blue-400',    text: 'text-blue-700',    ring: 'ring-blue-400',    sel: 'bg-blue-500 text-white border-blue-500' },
  violet:  { bg: 'bg-violet-100',  border: 'border-violet-400',  text: 'text-violet-700',  ring: 'ring-violet-400',  sel: 'bg-violet-500 text-white border-violet-500' },
  orange:  { bg: 'bg-orange-100',  border: 'border-orange-400',  text: 'text-orange-700',  ring: 'ring-orange-400',  sel: 'bg-orange-500 text-white border-orange-500' },
  rose:    { bg: 'bg-rose-100',    border: 'border-rose-400',    text: 'text-rose-700',    ring: 'ring-rose-400',    sel: 'bg-rose-500 text-white border-rose-500' },
}

export default function StartScreen({ onStart }) {
  const [quizType, setQuizType] = useState('all')
  const [lecture, setLecture] = useState('all')
  const [count, setCount] = useState(10)

  const filtered = questions.filter(q =>
    (quizType === 'all' || q.type === quizType) &&
    (lecture === 'all' || q.lecture === lecture)
  )

  const maxCount = filtered.length
  const safeCount = Math.min(count, maxCount)

  const selectedType = QUIZ_TYPES.find(t => t.id === quizType)
  const c = COLOR[selectedType?.color || 'indigo']

  const handleStart = () => {
    if (maxCount === 0) return
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, safeCount)
    onStart({ questions: shuffled, quizType, lecture, count: safeCount })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl animate-fadeInUp">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🧪</div>
          <h1 className="text-3xl font-bold text-indigo-900 mb-1">산업독성학 퀴즈</h1>
          <p className="text-gray-500 text-sm">8~14강 기말고사 대비 | 총 {questions.length}문제</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 space-y-6">
          {/* 문제 유형 선택 */}
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">문제 유형</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {QUIZ_TYPES.map(t => {
                const cc = COLOR[t.color]
                const isSelected = quizType === t.id
                return (
                  <button
                    key={t.id}
                    onClick={() => setQuizType(t.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all ${
                      isSelected
                        ? cc.sel
                        : `${cc.bg} ${cc.border} ${cc.text} hover:opacity-80`
                    }`}
                  >
                    <span className="text-lg">{t.icon}</span>
                    {t.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* 강의 선택 */}
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">강의 범위</h2>
            <div className="flex flex-wrap gap-2">
              {LECTURES.map(l => (
                <button
                  key={l.id}
                  onClick={() => setLecture(l.id)}
                  className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                    lecture === l.id
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* 문제 수 */}
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              문제 수 <span className="text-indigo-600 font-bold">{safeCount}문제</span>
              <span className="ml-2 text-xs text-gray-400">(선택 가능: {maxCount}문제)</span>
            </h2>
            <div className="flex gap-2 flex-wrap">
              {[5, 10, 15, 20, 30].map(n => (
                <button
                  key={n}
                  onClick={() => setCount(n)}
                  disabled={n > maxCount}
                  className={`px-4 py-2 rounded-full border-2 text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
                    count === n
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setCount(maxCount)}
                className={`px-4 py-2 rounded-full border-2 text-sm font-semibold transition-all ${
                  count === maxCount && maxCount > 0
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'
                }`}
              >
                전체({maxCount})
              </button>
            </div>
          </div>

          {/* 시작 버튼 */}
          <button
            onClick={handleStart}
            disabled={maxCount === 0}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-violet-700 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {maxCount === 0 ? '해당 문제가 없습니다' : `퀴즈 시작 🚀`}
          </button>
        </div>

        {/* 문제 유형 설명 */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs text-gray-400">
          <div>📝 4지선다 — 보기 선택</div>
          <div>✏️ 빈칸 — 단어 입력</div>
          <div>💭 주관식 — 자유 서술</div>
          <div>🔗 맞추기 — 설명→용어</div>
        </div>
      </div>
    </div>
  )
}

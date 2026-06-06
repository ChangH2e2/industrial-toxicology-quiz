import { useState, useCallback } from 'react'
import OXQuestion from './questions/OXQuestion'
import MultipleQuestion from './questions/MultipleQuestion'
import FillQuestion from './questions/FillQuestion'
import ShortQuestion from './questions/ShortQuestion'
import MatchQuestion from './questions/MatchQuestion'

const TYPE_LABELS = {
  ox: { label: 'OX 퀴즈', icon: '⭕', color: 'emerald' },
  multiple: { label: '4지선다', icon: '📝', color: 'blue' },
  fill: { label: '빈칸채우기', icon: '✏️', color: 'violet' },
  short: { label: '주관식', icon: '💭', color: 'orange' },
  match: { label: '설명 맞추기', icon: '🔗', color: 'rose' },
}

const BADGE_COLOR = {
  emerald: 'bg-emerald-100 text-emerald-700',
  blue:    'bg-blue-100 text-blue-700',
  violet:  'bg-violet-100 text-violet-700',
  orange:  'bg-orange-100 text-orange-700',
  rose:    'bg-rose-100 text-rose-700',
}

export default function QuizScreen({ settings, onFinish }) {
  const { questions } = settings
  const [idx, setIdx] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(null)
  const [userAnswer, setUserAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [log, setLog] = useState([])
  const [animKey, setAnimKey] = useState(0)

  const q = questions[idx]
  const meta = TYPE_LABELS[q.type] || TYPE_LABELS.multiple
  const progress = ((idx) / questions.length) * 100

  const handleAnswer = useCallback((correct, ua) => {
    setAnswered(true)
    setIsCorrect(correct)
    setUserAnswer(ua)
    if (correct) setScore(s => s + 1)
    setLog(prev => [...prev, { q, correct, userAnswer: ua }])
  }, [q])

  const handleNext = () => {
    if (idx + 1 >= questions.length) {
      onFinish({ score: isCorrect ? score : score, total: questions.length, log: [...log] })
    } else {
      setIdx(i => i + 1)
      setAnswered(false)
      setIsCorrect(null)
      setUserAnswer(null)
      setAnimKey(k => k + 1)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 pt-6">
      {/* 상단 바 */}
      <div className="w-full max-w-2xl mb-4">
        <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
          <span className="font-semibold text-indigo-700">{idx + 1} / {questions.length}</span>
          <span className="font-bold text-indigo-600">정답 {score}개</span>
        </div>
        <div className="w-full h-2 bg-indigo-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 문제 카드 */}
      <div key={animKey} className="w-full max-w-2xl animate-fadeInUp">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* 카드 헤더 */}
          <div className="px-6 pt-5 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${BADGE_COLOR[meta.color]}`}>
                {meta.icon} {meta.label}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                {q.lecture}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500">
                {q.category}
              </span>
            </div>
            <p className="text-gray-800 font-semibold text-base leading-relaxed whitespace-pre-line">{q.question}</p>
          </div>

          {/* 문제 유형별 렌더 */}
          <div className="p-6">
            {q.type === 'ox'       && <OXQuestion       q={q} answered={answered} onAnswer={handleAnswer} />}
            {q.type === 'multiple' && <MultipleQuestion  q={q} answered={answered} onAnswer={handleAnswer} />}
            {q.type === 'fill'     && <FillQuestion      q={q} answered={answered} onAnswer={handleAnswer} />}
            {q.type === 'short'    && <ShortQuestion     q={q} answered={answered} onAnswer={handleAnswer} />}
            {q.type === 'match'    && <MatchQuestion     q={q} answered={answered} onAnswer={handleAnswer} />}
          </div>

          {/* 해설 박스 */}
          {answered && (
            <div className={`mx-6 mb-4 rounded-2xl p-4 animate-popIn ${
              isCorrect
                ? 'bg-emerald-50 border border-emerald-200'
                : 'bg-rose-50 border border-rose-200'
            }`}>
              <div className={`font-bold mb-1 flex items-center gap-2 ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                {isCorrect ? '✅ 정답!' : '❌ 오답'}
                {!isCorrect && q.type !== 'short' && (
                  <span className="font-normal text-sm">
                    {q.type === 'ox'
                      ? `정답: ${q.answer ? 'O (참)' : 'X (거짓)'}`
                      : q.type === 'fill'
                      ? `정답: ${q.answers.map(a => a[0]).join(', ')}`
                      : q.type === 'multiple' || q.type === 'match'
                      ? `정답: ${q.options[q.answer]}`
                      : ''}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{q.explanation}</p>
            </div>
          )}

          {/* 다음 버튼 */}
          {answered && (
            <div className="px-6 pb-6">
              <button
                onClick={handleNext}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-bold hover:from-indigo-700 hover:to-violet-700 active:scale-95 transition-all shadow"
              >
                {idx + 1 >= questions.length ? '결과 보기 🏁' : '다음 문제 →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

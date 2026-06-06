export default function OXQuestion({ q, answered, onAnswer }) {
  const handleClick = (val) => {
    if (answered) return
    onAnswer(val === q.answer, val ? 'O' : 'X')
  }

  return (
    <div className="flex gap-4">
      {[
        { val: true,  label: 'O', emoji: '⭕', colors: 'border-emerald-400 text-emerald-600 hover:bg-emerald-50', selCorrect: 'bg-emerald-100 border-emerald-500 text-emerald-700', selWrong: 'bg-red-100 border-red-400 text-red-600' },
        { val: false, label: 'X', emoji: '❌', colors: 'border-rose-400 text-rose-600 hover:bg-rose-50', selCorrect: 'bg-emerald-100 border-emerald-500 text-emerald-700', selWrong: 'bg-red-100 border-red-400 text-red-600' },
      ].map(btn => {
        let cls = `flex-1 flex flex-col items-center justify-center h-28 rounded-2xl border-2 font-bold text-4xl cursor-pointer transition-all select-none`
        if (answered) {
          if (btn.val === q.answer) cls += ' bg-emerald-100 border-emerald-500 text-emerald-700 animate-correct'
          else cls += ' opacity-40 border-gray-200 text-gray-400'
        } else {
          cls += ` ${btn.colors} active:scale-95`
        }
        return (
          <button key={btn.label} onClick={() => handleClick(btn.val)} className={cls}>
            <span>{btn.emoji}</span>
            <span className="text-base font-semibold mt-1">{btn.val ? '참 (O)' : '거짓 (X)'}</span>
          </button>
        )
      })}
    </div>
  )
}

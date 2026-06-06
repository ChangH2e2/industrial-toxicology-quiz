// 산업독성학 기말 퀴즈 문제 뱅크 — 전범위 120+ 문제
// type: 'ox' | 'multiple' | 'fill' | 'short' | 'match'

export const questions = [

  /* ══════════════════════════════════════════════════
     ★ OX 문제 (40문제)
  ══════════════════════════════════════════════════ */

  // 9강 – 원소·금속·중금속
  { id:1, type:'ox', lecture:'9강', category:'원소·금속',
    question:'금속(Metal)은 전기·열 전도성, 연성(늘어남), 가소성(해지짐), 금속광택의 특성을 가진다.',
    answer:true, explanation:'금속의 4대 특성: 전기/열 전도성, 연성, 가소성, 금속광택.' },

  { id:2, type:'ox', lecture:'9강', category:'원소·금속',
    question:'아연(Zn)은 인체 필수 미량원소이지만, 과다하면 독성이 나타난다.',
    answer:true, explanation:'Fe, Zn, Cu, Mn, Co 등은 필수 미량원소이지만 부족·과다 모두 독성 유발.' },

  { id:3, type:'ox', lecture:'9강', category:'중금속 기초',
    question:'중금속(Heavy Metal)의 비중 기준은 4 이상이다.',
    answer:true, explanation:'비중 4 이상의 금속 원소를 중금속으로 정의한다.' },

  { id:4, type:'ox', lecture:'9강', category:'중금속 기초',
    question:'6가 크롬(Cr⁶⁺)은 3가 크롬(Cr³⁺)보다 독성이 낮다.',
    answer:false, explanation:'6가 크롬은 3가보다 독성이 훨씬 강하며 폐암·비강암·비중격천공을 유발한다.' },

  { id:5, type:'ox', lecture:'9강', category:'중금속 기초',
    question:'납(Pb)은 칼슘(Ca)과 화학적 성질이 유사하여 뼈에 주로 축적된다.',
    answer:true, explanation:'납이 Ca 대신 뼈에 축적. 어린이는 Ca 대신 납을 더 잘 흡수해 취약하다.' },

  { id:6, type:'ox', lecture:'9강', category:'중금속 기초',
    question:'카드뮴(Cd)은 인체 필수 미량원소이다.',
    answer:false, explanation:'카드뮴은 독성 중금속으로 인체에 필요하지 않다. 아연과 유사한 성질로 독성을 나타낸다.' },

  { id:7, type:'ox', lecture:'9강', category:'중금속 기초',
    question:'유기수은(메틸수은)이 무기수은보다 신경독성이 더 강하다.',
    answer:true, explanation:'유기수은은 지용성이 높아 혈뇌장벽을 쉽게 통과. 미나마타병의 원인.' },

  // 9강 – 방사성 원소
  { id:8, type:'ox', lecture:'9강', category:'방사성 원소',
    question:'방사성 원소는 원자핵이 불안정하여 스스로 방사선을 방출하며 붕괴한다.',
    answer:true, explanation:'방사성 붕괴는 수 초~수십억 년의 반감기를 가진다.' },

  { id:9, type:'ox', lecture:'9강', category:'방사성 원소',
    question:'알파(α)선의 투과력이 감마(γ)선보다 강하다.',
    answer:false, explanation:'투과력: 감마선 > 베타선 > 알파선. 알파선은 종이 한 장으로도 차단 가능.' },

  { id:10, type:'ox', lecture:'9강', category:'방사성 원소',
    question:'원자력 발전은 핵분열의 연쇄반응을 제어봉으로 통제하여 전기를 생산한다.',
    answer:true, explanation:'U-235 + 중성자 → 핵분열 + 에너지 + 중성자(연쇄반응). 제어봉으로 반응 속도 조절.' },

  // 9강 – 생체축적
  { id:11, type:'ox', lecture:'9강', category:'생체축적',
    question:'생물학적 반감기가 짧을수록 생체축적이 더 잘 된다.',
    answer:false, explanation:'반감기가 길수록 체내에 오래 머물러 생체축적이 심해진다.' },

  { id:12, type:'ox', lecture:'9강', category:'생체축적',
    question:'생물농축(Biomagnification)은 먹이사슬 상위 생물일수록 독성물질 농도가 높아지는 현상이다.',
    answer:true, explanation:'생체축적이 먹이사슬을 통해 증폭되는 것이 생물농축.' },

  { id:13, type:'ox', lecture:'9강', category:'생체축적',
    question:'중금속의 주요 배설 경로는 소변이며, 장간순환은 체내 축적을 증가시킨다.',
    answer:true, explanation:'장간순환: 간에서 담즙으로 분비 → 장 흡수 → 재순환 → 체내 축적 증가.' },

  // 9강 – ROS·산화적 스트레스
  { id:14, type:'ox', lecture:'9강', category:'ROS·산화적 스트레스',
    question:'활성산소종(ROS)은 세포막(지질), 단백질, DNA 세 가지를 모두 손상시킨다.',
    answer:true, explanation:'ROS는 수명이 짧지만 반응성이 매우 커 세포의 모든 주요 구성성분을 공격한다.' },

  { id:15, type:'ox', lecture:'9강', category:'ROS·산화적 스트레스',
    question:'납(Pb)과 수은(Hg)도 산화적 스트레스를 통해 독성을 나타낸다.',
    answer:true, explanation:'납, 수은, 카드뮴 등 대부분의 독성 중금속이 ROS 생성을 통해 독성을 유발한다.' },

  // 9강 – 필수금속 치환·신경독성
  { id:16, type:'ox', lecture:'9강', category:'필수금속 치환',
    question:'Metallothionein은 중금속 이온 노출 시 세포에서 합성되며 카드뮴·아연·구리·수은과 결합한다.',
    answer:true, explanation:'Metallothionein은 금속 이온 해독 핵심 단백질. 카드뮴·아연·구리·수은과 높은 친화력.' },

  { id:17, type:'ox', lecture:'9강', category:'신경독성',
    question:'어린이가 납 독성에 취약한 이유 중 하나는 혈뇌장벽이 성인보다 미발달 상태이기 때문이다.',
    answer:true, explanation:'어린이: ①많은 호흡량, ②칼슘 대신 납 쉽게 흡수, ③혈뇌장벽 미성숙, ④CNS 발달 중.' },

  // 9강 – 발암성·아르신
  { id:18, type:'ox', lecture:'9강', category:'발암성',
    question:'비소(As)는 IARC 1군 발암물질로 피부암·폐암·방광암을 유발한다.',
    answer:true, explanation:'비소는 이온주입 공정, 농약 등에서 노출. IARC 1군 확정 발암물질.' },

  { id:19, type:'ox', lecture:'9강', category:'아르신',
    question:'아르신(AsH₃)은 반도체 이온주입 공정에서 사용되며, 적혈구를 파괴하는 용혈작용을 일으킨다.',
    answer:true, explanation:'아르신(AsH₃)은 매우 강한 급성독성과 용혈작용(hemolysis)으로 황달·빈혈·신부전을 유발.' },

  { id:20, type:'ox', lecture:'9강', category:'아르신',
    question:'아르신(AsH₃)의 OSHA 허용노출기준(PEL)은 0.5 ppm이다.',
    answer:false, explanation:'OSHA PEL은 0.05 ppm (0.2 mg/m³). NIOSH IDLH는 3 ppm.' },

  // 10강 – 노출평가·ADME
  { id:21, type:'ox', lecture:'10강', category:'노출평가',
    question:'생물학적 모니터링(BM)은 작업장 공기 중 농도를 측정하는 외부 노출 평가 방법이다.',
    answer:false, explanation:'BM은 혈액·소변 등 생체 검체로 내부 노출을 평가. 작업환경측정이 외부 노출 평가.' },

  { id:22, type:'ox', lecture:'10강', category:'독성동태',
    question:'생체변환(Biotransformation)은 주로 간에서 이루어지며, 항상 독성을 감소시킨다.',
    answer:false, explanation:'일부 물질은 생체변환 후 독성이 오히려 증가(bioactivation). 예: 벤젠→에폭사이드.' },

  { id:23, type:'ox', lecture:'10강', category:'바이오마커',
    question:'바이오마커는 노출(Exposure), 영향(Effects), 감수성(Susceptibility) 세 종류로 분류된다.',
    answer:true, explanation:'노출마커→영향마커→감수성마커로 질병 스펙트럼상 각 위치에 대응.' },

  { id:24, type:'ox', lecture:'10강', category:'독성 개념',
    question:'감수성(Susceptibility)은 취약성(Vulnerability)보다 더 포괄적인 개념이다.',
    answer:false, explanation:'취약성(Vulnerability)이 더 포괄적. 감수성(내재적 경향) + 노출수준 + 대처능력까지 포함.' },

  { id:25, type:'ox', lecture:'10강', category:'독성 개념',
    question:'비가역적(Irreversible) 질병은 원인 제거 후에도 영구적으로 회복되지 않는다.',
    answer:true, explanation:'암, 신경 손상, 섬유화 등이 비가역적 질병의 예. 가역적은 원인 제거로 회복 가능.' },

  // 11-12강 – 제도·법규
  { id:26, type:'ox', lecture:'11-12강', category:'제도·법규',
    question:'작업환경측정은 법적으로 6개월에 1회 이상, 연 2회 실시해야 한다.',
    answer:true, explanation:'산업안전보건법 제125조. 측정 결과는 근로자에게 알려야 함.' },

  { id:27, type:'ox', lecture:'11-12강', category:'제도·법규',
    question:'특수건강검진은 외부 노출만을 평가하는 검진이다.',
    answer:false, explanation:'특수건강검진은 내부 노출 및 건강영향 평가. 작업환경측정이 외부 노출 평가.' },

  { id:28, type:'ox', lecture:'11-12강', category:'연관·인과',
    question:'역학적 연관(Association)이 존재하면 반드시 인과관계(Causality)가 성립한다.',
    answer:false, explanation:'연관은 집단 수준의 경향성. 개인 인과는 별도 판단 필요. 연관 ≠ 인과.' },

  // 11-12강 – ISO·ESG
  { id:29, type:'ox', lecture:'11-12강', category:'경영시스템',
    question:'ISO 14000은 환경경영시스템(EMS), ISO 45000은 안전보건경영시스템(OSHMS)이다.',
    answer:true, explanation:'ISO 14000(환경, EMS) / ISO 45000(OSHMS, 2018년 발행).' },

  { id:30, type:'ox', lecture:'11-12강', category:'경영시스템',
    question:'ISO 45000(OSHMS)은 2018년 3월에 발행되었다.',
    answer:true, explanation:'2013년 10월 제정, 2018년 3월 발행. 최고경영자 리더십 강조가 특징.' },

  { id:31, type:'ox', lecture:'11-12강', category:'ESG·CSR',
    question:'ESG는 Environment(환경), Safety(안전), Governance(지배구조)의 약자이다.',
    answer:false, explanation:'ESG = Environment(환경) + Social(사회) + Governance(지배구조).' },

  { id:32, type:'ox', lecture:'11-12강', category:'ESG·CSR',
    question:'RE100은 2050년까지 사용 전력의 100%를 재생에너지로 충당하겠다는 기업 이니셔티브이다.',
    answer:true, explanation:'삼성 등 반도체 기업도 RE100 선언. 탄소중립 목표와 연계.' },

  { id:33, type:'ox', lecture:'11-12강', category:'탄소중립',
    question:'탄소중립 목표는 산업화 이전 대비 지구 평균 기온 상승을 1.5°C 이내로 유지하는 것이다.',
    answer:true, explanation:'파리협정 목표. 2022년 이미 1.1°C 상승. 우리나라: 2030년 40% 감축, 2050년 넷제로.' },

  // 12-13강 – 반도체 기초·공정
  { id:34, type:'ox', lecture:'12-13강', category:'반도체 기초',
    question:'현재 반도체 생산 주류 웨이퍼 크기는 300mm이다.',
    answer:true, explanation:'2000년대 이후 300mm 웨이퍼가 표준. 클수록 한 번에 더 많은 칩 생산 가능.' },

  { id:35, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'클린룸(Clean Room)은 먼지가 없으므로 화학물질 노출 위험도 낮다.',
    answer:false, explanation:'클린룸은 먼지는 없지만 수십~수백 종의 복합 화학물질에 저농도로 만성 노출.' },

  { id:36, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 이온주입 공정에서 고전압 이온 가속 시 X선(제동복사)이 발생할 수 있다.',
    answer:true, explanation:'200~400kV 고전압 이온이 금속 표면에 충돌 시 X선 발생. 이온박스 내부 정비 시 위험.' },

  { id:37, type:'ox', lecture:'12-13강', category:'반도체 안전',
    question:'불산(HF)은 강산이므로 피부 접촉 즉시 심한 통증이 나타난다.',
    answer:false, explanation:'HF는 약산이지만 피부 침투성이 강하다. 통증이 지연되어 노출 인식이 늦어 더 위험.' },

  { id:38, type:'ox', lecture:'12-13강', category:'반도체 안전',
    question:'반도체 여성 근로자에서 자연유산(SAB), 선천성 기형, 생리이상 등의 생식독성이 보고된다.',
    answer:true, explanation:'1995년 국내 반도체 공장에서 2-bromopropane에 의한 생식독성 사례 발생.' },

  // 13-14강 – SEMI·안전
  { id:39, type:'ox', lecture:'13-14강', category:'반도체 안전',
    question:'TMAH(테트라메틸암모늄수산화물)는 냄새와 색이 없어 노출 감지가 어렵다.',
    answer:true, explanation:'TMAH의 가장 큰 위험성 중 하나. 무색·무취로 인지가 어렵고 피부 침투성이 강함.' },

  { id:40, type:'ox', lecture:'13-14강', category:'반도체 안전',
    question:'질소(N₂) 자체는 독성이 없지만 밀폐공간에서 누출 시 산소결핍을 유발해 질식사를 일으킬 수 있다.',
    answer:true, explanation:'2015년 전자공장 건설현장에서 질소 누출로 3명 사망. 산소 18% 미만 = 산소결핍.' },

  /* ══════════════════════════════════════════════════
     ★ 4지선다 (40문제)
  ══════════════════════════════════════════════════ */

  // 9강
  { id:41, type:'multiple', lecture:'9강', category:'중금속 질환',
    question:'이이타이이타이(Itai-Itai)병의 원인 중금속은?',
    options:['납(Pb)','수은(Hg)','카드뮴(Cd)','비소(As)'],
    answer:2, explanation:'카드뮴이 철 부족 대신 뼈로 흡수 → 칼슘 흡수 방해 → 골연화증·골절. "아프다 아프다"' },

  { id:42, type:'multiple', lecture:'9강', category:'중금속 질환',
    question:'미나마타(Minamata)병의 원인 물질은?',
    options:['무기납','메틸수은(유기수은)','6가 크롬','카드뮴'],
    answer:1, explanation:'메틸수은에 오염된 어패류 섭취 → 신경독성. 언어장애·시야협착·운동실조.' },

  { id:43, type:'multiple', lecture:'9강', category:'중금속 질환',
    question:'망간(Mn) 과다 노출로 발생하는 직업병은?',
    options:['납중독','파킨슨증후군(망간증)','미나마타병','이이타이이타이병'],
    answer:1, explanation:'망간증은 파킨슨증후군과 유사한 증상. 용접공이 대표적 노출 집단.' },

  { id:44, type:'multiple', lecture:'9강', category:'중금속 질환',
    question:'6가 크롬(Cr⁶⁺) 직업 노출로 발생하는 특징적 질환은?',
    options:['망간증','골연화증','비중격천공(코뚫림병)','용혈성 빈혈'],
    answer:2, explanation:'6가 크롬 → 비중격천공(코 연골이 녹아 구멍), 폐암, 비강암. "아린 브로코비치" 사건.' },

  { id:45, type:'multiple', lecture:'9강', category:'중금속 기초',
    question:'중금속 독성 4대 기전이 아닌 것은?',
    options:['산화적 스트레스(ROS 생성)','산-염기 중화 반응','필수금속 치환','항산화 방어 파괴'],
    answer:1, explanation:'4대 기전: ①산화적스트레스 ②단백질/효소 기능장애 ③필수금속 치환 ④항산화 파괴.' },

  { id:46, type:'multiple', lecture:'9강', category:'방사성 원소',
    question:'방사선 종류 중 투과력이 가장 강한 것은?',
    options:['알파(α)선','베타(β)선','감마(γ)선','중성자선'],
    answer:2, explanation:'투과력: 감마선 > 베타선 > 알파선. 알파선은 종이로 차단, 감마선은 납이나 콘크리트 필요.' },

  { id:47, type:'multiple', lecture:'9강', category:'방사성 원소',
    question:'핵분열(nuclear fission)에 주로 사용되는 방사성 원소는?',
    options:['Ra-226','Rn-222','U-235','Th-232'],
    answer:2, explanation:'U-235 + 중성자 → 핵분열 + 엄청난 에너지 + 추가 중성자(연쇄반응).' },

  { id:48, type:'multiple', lecture:'9강', category:'발암성',
    question:'다음 중 반도체 공정과 관련해 폐암 발생이 가장 잘 확립된 중금속은?',
    options:['납(Pb)','수은(Hg)','6가 크롬(Cr⁶⁺)','망간(Mn)'],
    answer:2, explanation:'6가 크롬은 도금·용접·피혁 공장에서 노출되며, 폐암·비강암과의 인과관계가 잘 확립.' },

  { id:49, type:'multiple', lecture:'9강', category:'아르신',
    question:'아르신(AsH₃)의 OSHA 허용노출기준(PEL)은?',
    options:['0.005 ppm','0.05 ppm','0.5 ppm','5 ppm'],
    answer:1, explanation:'OSHA PEL: 0.05 ppm (0.2 mg/m³). NIOSH IDLH: 3 ppm.' },

  { id:50, type:'multiple', lecture:'9강', category:'생체축적',
    question:'금속 배설 경로 중 가장 많은 비율을 차지하는 것은?',
    options:['대변','소변','머리카락','땀'],
    answer:1, explanation:'금속 배설: 소변(가장 많은 비율) > 대변 > 머리카락, 손톱, 호기 등.' },

  // 10강
  { id:51, type:'multiple', lecture:'10강', category:'노출평가',
    question:'생물학적 모니터링(BM)에 사용되는 검체가 아닌 것은?',
    options:['소변','혈액','호기(날숨)','작업장 공기'],
    answer:3, explanation:'작업장 공기는 작업환경측정(외부 노출). BM은 소변·혈액·모발·호기 등 생체 검체.' },

  { id:52, type:'multiple', lecture:'10강', category:'바이오마커',
    question:'벤젠 노출의 생물학적 모니터링 지표(노출 바이오마커)는?',
    options:['혈중 납','소변 중 t,t-뮤콘산','콜린에스테라제 활성','혈중 코티닌'],
    answer:1, explanation:'소변 t,t-뮤콘산(trans,trans-muconic acid)은 벤젠 노출의 대표적 노출 바이오마커.' },

  { id:53, type:'multiple', lecture:'10강', category:'바이오마커',
    question:'영향 바이오마커(Marker of Effects)에 해당하는 것은?',
    options:['혈중 납 농도','소변 t,t-뮤콘산','콜린에스테라제 활성 감소','유전적 다형성'],
    answer:2, explanation:'콜린에스테라제 활성 감소 = 생물학적 기능 변화 → 영향 바이오마커. 유전적 다형성은 감수성 마커.' },

  { id:54, type:'multiple', lecture:'10강', category:'독성동태',
    question:'다음 중 생체변환(biotransformation) 후 독성이 오히려 증가하는 경우(bioactivation)는?',
    options:['납 → 아세트산납','벤젠 → 무코닉산','메탄올 → 포름알데히드','수은 → 황화수은'],
    answer:2, explanation:'메탄올 → 포름알데히드(독성 강화)가 대표적. 벤젠 → 에폭사이드(골수독성)도 해당.' },

  { id:55, type:'multiple', lecture:'10강', category:'표적 장기',
    question:'납(Pb)의 주요 표적 장기가 아닌 것은?',
    options:['뼈(축적)','혈액(조혈계)','신경계','폐(주 배설)'],
    answer:3, explanation:'납: 뼈(축적), 혈액(ALAD 억제), 신경계가 주 표적. 배설은 주로 신장(소변). 폐는 주 배설기관 아님.' },

  // 11-12강
  { id:56, type:'multiple', lecture:'11-12강', category:'경영시스템',
    question:'ISO 9000이 대상으로 하는 경영시스템은?',
    options:['품질경영(QMS)','환경경영(EMS)','안전보건경영(OSHMS)','사회책임(CSR)'],
    answer:0, explanation:'ISO 9000 = 품질경영시스템(QMS). 1980년대 도입.' },

  { id:57, type:'multiple', lecture:'11-12강', category:'경영시스템',
    question:'ISO 경영시스템의 공통 사이클(PDCA)에서 "C"가 뜻하는 것은?',
    options:['Control(통제)','Check(점검·모니터링)','Certify(인증)','Correct(수정)'],
    answer:1, explanation:'PDCA = Plan(계획) → Do(실행) → Check(점검·모니터링) → Act(개선).' },

  { id:58, type:'multiple', lecture:'11-12강', category:'경영시스템',
    question:'ISO 26000이 규정하는 사회책임(CSR)의 7대 핵심 원칙 중 가장 첫 번째 주제는?',
    options:['Human rights(인권)','Environment(환경)','Organizational governance(조직 거버넌스)','Labor practices(노동 관행)'],
    answer:2, explanation:'ISO 26000 7대 주제: ①조직 거버넌스 ②인권 ③노동관행 ④환경 ⑤공정사업관행 ⑥소비자 ⑦지역사회.' },

  { id:59, type:'multiple', lecture:'11-12강', category:'ESG·CSR',
    question:'ESG의 구성 요소로 올바른 것은?',
    options:['환경·안전·지배구조','환경·사회·지배구조','에너지·사회·거버넌스','경제·사회·거버넌스'],
    answer:1, explanation:'ESG = Environment(환경) + Social(사회) + Governance(지배구조).' },

  { id:60, type:'multiple', lecture:'11-12강', category:'ESG·CSR',
    question:'CSR(ISO 26000)과 ESG의 차이로 가장 적절한 것은?',
    options:[
      'CSR은 환경에, ESG는 사회에 중점',
      'CSR은 ISO 국제지침(조직의 실천), ESG는 UN·금융기관 주도 투자·평가 기준',
      'CSR과 ESG는 동일한 개념',
      'ESG는 강제기준, CSR은 자율기준',
    ],
    answer:1, explanation:'CSR(ISO 26000): 조직의 실천 지침. ESG: 외부 투자자·평가기관이 기업 성과를 평가하는 기준.' },

  { id:61, type:'multiple', lecture:'11-12강', category:'연관·인과',
    question:'직업성 만성질환에서 인과 판단이 어려운 가장 핵심적인 이유는?',
    options:[
      '법적 기준이 없기 때문에',
      '장기 잠복기·다중 원인성·개인 감수성 차이로 인과 판단이 어렵기 때문에',
      '근로자의 자기신고가 없기 때문에',
      '의사의 진단 기준이 없기 때문에',
    ],
    answer:1, explanation:'장기 잠복기(수년~수십년), 다중 원인성, 비특이성, 개인 감수성 차이, 역학적 연관과 개인 인과의 괴리.' },

  { id:62, type:'multiple', lecture:'11-12강', category:'탄소중립',
    question:'도넛 경제학(Doughnut Economics)에서 "도넛 안쪽 구멍"은 무엇을 의미하는가?',
    options:['환경 한계 초과','사회적 빈곤(최소기준 미충족)','지속가능한 경제 공간','거버넌스 실패'],
    answer:1, explanation:'도넛 구멍(안쪽) = 사회적 빈곤. 도넛 바깥 = 환경 한계 초과. 도넛 안 = 안전하고 공정한 공간.' },

  // 12-13강
  { id:63, type:'multiple', lecture:'12-13강', category:'반도체 기초',
    question:'반도체 Fab 공정의 올바른 순서는?',
    options:[
      '이온주입 → 산화 → 포토 → 식각',
      '산화 → 포토 → 식각 → 스트리핑 → 이온주입',
      '포토 → 산화 → 식각 → 이온주입',
      '식각 → 산화 → 포토 → 스트리핑',
    ],
    answer:1, explanation:'산화 → 포토(PR도포→노광→현상) → 식각 → 스트리핑 → 이온주입 → 에피택시 → 금속증착.' },

  { id:64, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 식각(Etching) 공정에서 SiO₂를 제거하는 주요 물질은?',
    options:['황산(H₂SO₄)','불산(HF)','암모니아(NH₃)','아세톤'],
    answer:1, explanation:'불산(HF)은 SiO₂와 반응하여 제거하는 습식식각의 핵심 물질.' },

  { id:65, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 포토리소그래피(Photolithography) 공정에서 PR(감광제) 성분 중 생식독성이 문제가 되는 물질은?',
    options:['황산','Glycol ethers(메톡시에탄올 등)','불산(HF)','아르신(AsH₃)'],
    answer:1, explanation:'PR의 Glycol ethers(methoxyethanol, ethoxyethanol)는 생식독성 물질. 반도체 여성 근로자 연구에서 주목.' },

  { id:66, type:'multiple', lecture:'12-13강', category:'반도체 안전',
    question:'클린룸(Clean Room) 작업환경의 특성이 아닌 것은?',
    options:[
      '수직 층류 방식으로 공기를 공급한다',
      '단일 유해물질에 집중 노출되는 환경이다',
      '다종 화학물질에 저농도로 만성 노출된다',
      '방진복 착용으로 열 스트레스가 발생할 수 있다',
    ],
    answer:1, explanation:'클린룸은 수십~수백 종 복합 화학물질 노출 환경. 단일 물질 집중 노출이 아님.' },

  { id:67, type:'multiple', lecture:'12-13강', category:'반도체 안전',
    question:'반도체 이온주입 공정에서 사용되는 비소계 도판트 가스는?',
    options:['포스핀(PH₃)','아르신(AsH₃)','실란(SiH₄)','보론트리플루오라이드(BF₃)'],
    answer:1, explanation:'아르신(AsH₃)은 n형 도핑 가스. 이온박스 내부 정비 시 가장 높은 노출.' },

  { id:68, type:'multiple', lecture:'12-13강', category:'반도체 안전',
    question:'반도체 공정에서 백혈병(NHL·AML)과 역학적으로 가장 관련성이 확립된 물질은?',
    options:['TMAH','불산(HF)','벤젠(Benzene)','아르신(AsH₃)'],
    answer:2, explanation:'벤젠은 골수독성 → 급성골수성백혈병(AML). 반도체 공정 내 직접 사용은 드물지만 혼재 가능.' },

  // 13-14강
  { id:69, type:'multiple', lecture:'13-14강', category:'SEMI·위험성평가',
    question:'SEMI S10 위험성평가 공식은?',
    options:[
      '위험성 = 빈도 + 심각도',
      '위험성 = 심각도(Severity) × 가능성(Likelihood)',
      '위험성 = 노출량 ÷ 허용기준',
      '위험성 = 독성지수 + 노출경로',
    ],
    answer:1, explanation:'Risk = Severity × Likelihood. 이를 기반으로 n×n 리스크 매트릭스(3×3 or 4×4) 구성.' },

  { id:70, type:'multiple', lecture:'13-14강', category:'SEMI·위험성평가',
    question:'SEMI S10 위험성평가에서 Severity "Catastrophic(매우 치명적)"에 해당하는 상황은?',
    options:['일시적 불편','경미한 부상','가역적 신경 손상','사망에 가까운 폭발·대형 사고'],
    answer:3, explanation:'Catastrophic(매우 치명적) → 사망/대형 사고. Critical(중대) → 신경계 등 심각 건강영향.' },

  { id:71, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'TMAH에 대한 설명으로 틀린 것은?',
    options:[
      '반도체 현상액·식각제로 사용된다',
      '피부 침투성이 강하다',
      '강한 냄새가 있어 쉽게 감지된다',
      '피부 접촉 시 심장마비를 유발할 수 있다',
    ],
    answer:2, explanation:'TMAH는 무색·무취라 감지가 어렵다. 이것이 가장 큰 위험 특성 중 하나.' },

  { id:72, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'불산(HF) 노출 시 발생하는 전신 독성의 주요 기전은?',
    options:['급성 폐부종','저칼슘혈증(hypocalcemia)으로 인한 심장마비','적혈구 용혈','급성 간부전'],
    answer:1, explanation:'F⁻ + Ca²⁺ → CaF₂(불용성) → 혈중 칼슘 급감(저칼슘혈증) → 심장마비.' },

  { id:73, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'LOTO(Lockout/Tagout)에서 Lockout의 역할은?',
    options:[
      '경고 표지를 부착하는 것',
      '에너지원을 잠금으로 물리적 차단하는 것',
      '작업 허가서를 발급하는 것',
      '비상 대피로를 표시하는 것',
    ],
    answer:1, explanation:'Lockout = 에너지원(전기·가스·압축공기) 잠금 차단. Tagout = 경고 표지 부착.' },

  { id:74, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'2015년 전자공장 건설현장에서 3명이 사망한 사고의 원인은?',
    options:['TMAH 노출','불산(HF) 누출','질소(N₂) 누출로 인한 산소결핍','이온주입 X선 피폭'],
    answer:2, explanation:'2015년: 공조설비 관련 배기덕트 작업 중 질소 누출 → 산소결핍 → 3명 사망.' },

  { id:75, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'반도체 공장 정비 작업 전 설비·배관 내 잔류 유해가스를 제거하는 작업은?',
    options:['인터록(Interlock)','LOTO','퍼지(Purge)','AMHS 점검'],
    answer:2, explanation:'퍼지(Purge): 불활성 기체(N₂)나 공기로 잔류 가스를 밀어내는 작업. 정비 전 필수 안전 조치.' },

  { id:76, type:'multiple', lecture:'13-14강', category:'SEMI',
    question:'SEMI F63 표준이 다루는 내용은?',
    options:[
      '반도체 공정용 초순수(UPW) 품질 기준',
      '반도체 장비 안전 요건',
      '웨이퍼 규격',
      '클린룸 청정도 기준',
    ],
    answer:0, explanation:'SEMI F63: 반도체 공정용 초순수(Ultra Pure Water) 품질 기준 및 관리 방법.' },

  { id:77, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'반도체 공정 중 2021년 TMAH 누출 사망 사고의 직접 원인은?',
    options:[
      '이온주입기 인터록 해제',
      '현상액 저장탱크 배관 해체 중 TMAH 누출',
      '질소 가스 누출',
      '불산 스프레이 누출',
    ],
    answer:1, explanation:'2021년: 현상액 저장탱크 배관 해체 중 TMAH 누출 → 사망·부상. 배관 내 잔류 물질이 핵심 원인.' },

  { id:78, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'FOUP(Front Opening Unified Pod)의 주요 역할은?',
    options:[
      '클린룸 공기 청정 유지',
      '300mm 웨이퍼를 오염으로부터 보호하는 밀폐 운반 용기',
      '가스 공급 시스템',
      '화학약품 저장 용기',
    ],
    answer:1, explanation:'FOUP: SEMI 표준으로 규격화된 300mm 웨이퍼 표준 밀폐 운반 용기.' },

  { id:79, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'인터록(Interlock)에 대한 설명으로 가장 적절한 것은?',
    options:[
      '경고 표지를 부착하는 절차',
      '특정 조건이 충족되지 않으면 장비가 작동하지 않도록 하는 안전 장치',
      '유해가스를 배출하는 장치',
      '웨이퍼를 운반하는 시스템',
    ],
    answer:1, explanation:'인터록: 특정 안전 조건 미충족 시 장비를 물리적·전기적으로 작동 불가하게 하는 안전장치.' },

  { id:80, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'2013년 반도체 공장 HF(불산) 누출 사고에서 사상자가 발생한 상황은?',
    options:[
      '포토리소그래피 라인 화재',
      '설비 보수 과정 중 배관에서 불산 누출',
      '이온주입기 X선 피폭',
      '클린룸 질소 누출',
    ],
    answer:1, explanation:'2013년: 설비 보수 중 배관·저장설비에서 불산 누출 → 작업자 사망 + 다수 부상.' },

  /* ══════════════════════════════════════════════════
     ★ 빈칸 채우기 (25문제)
  ══════════════════════════════════════════════════ */

  { id:81, type:'fill', lecture:'9강', category:'중금속 기초',
    question:'중금속(Heavy Metal)은 비중이 [①] 이상이고 독성을 가질 수 있는 금속 원소이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['4']],
    explanation:'중금속 정의: 비중 4 이상.' },

  { id:82, type:'fill', lecture:'9강', category:'중금속 기초',
    question:'카드뮴(Cd)은 [①]과/와 화학적 성질이 유사하여 해당 원소의 효소 결합 자리를 차지함으로써 독성을 나타낸다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['아연','Zn','아연(Zn)','징크','zinc']],
    explanation:'카드뮴-아연 치환이 핵심 메커니즘. metallothionein에서 아연 대신 카드뮴 결합.' },

  { id:83, type:'fill', lecture:'9강', category:'중금속 질환',
    question:'이이타이이타이병은 [①] 노출로 인한 골연화증·골절 질환이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['카드뮴','Cd','카드뮴(Cd)']],
    explanation:'카드뮴이 철 부족 대신 흡수 → 골연화증.' },

  { id:84, type:'fill', lecture:'9강', category:'중금속 질환',
    question:'메틸수은에 오염된 어패류 섭취로 발생한 일본의 신경독성 질환은 [①]병이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['미나마타','Minamata']],
    explanation:'1950년대 일본 미나마타시. 유기수은(메틸수은) 오염 어패류 섭취.' },

  { id:85, type:'fill', lecture:'9강', category:'중금속 기초',
    question:'활성산소종의 영문 약자는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['ROS']],
    explanation:'ROS = Reactive Oxygen Species. 세포막·단백질·DNA 모두 손상.' },

  { id:86, type:'fill', lecture:'9강', category:'방사성 원소',
    question:'방사성 원소의 종류: Uranium([①]), Radium(Ra), Thorium(Th), Radon([②]).',
    blanks:[{id:'①',label:'①'},{id:'②',label:'②'}],
    answers:[['U'],['Rn']],
    explanation:'주요 방사성 원소: U, Ra, Th, Rn.' },

  { id:87, type:'fill', lecture:'9강', category:'아르신',
    question:'반도체 이온주입 공정에서 사용되는 비소계 도판트 가스의 화학식은 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['AsH3','AsH₃','아르신','Arsine','arsine']],
    explanation:'아르신(AsH₃): n형 도핑 가스. 용혈작용. OSHA PEL 0.05 ppm.' },

  { id:88, type:'fill', lecture:'9강', category:'아르신',
    question:'아르신(AsH₃)의 OSHA 허용노출기준(PEL)은 [①] ppm이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['0.05']],
    explanation:'OSHA PEL: 0.05 ppm. NIOSH IDLH: 3 ppm.' },

  { id:89, type:'fill', lecture:'10강', category:'노출평가',
    question:'근로자의 생물학적 검체에서 독성물질·대사물질을 측정하여 내부 노출을 평가하는 방법을 [①]이라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['생물학적 모니터링','BM','biological monitoring','바이오모니터링']],
    explanation:'BM = Biological Monitoring. 작업환경측정(외부)과 구별.' },

  { id:90, type:'fill', lecture:'10강', category:'바이오마커',
    question:'바이오마커 3종류: 노출 바이오마커, [①] 바이오마커, 감수성 바이오마커.',
    blanks:[{id:'①',label:'①'}],
    answers:[['영향','영향(Effects)','효과','effects']],
    explanation:'노출→영향→감수성 순.' },

  { id:91, type:'fill', lecture:'11-12강', category:'경영시스템',
    question:'ISO [①]은/는 안전보건경영시스템(OSHMS) 국제표준으로 2018년 3월 발행되었다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['45000','45001']],
    explanation:'ISO 45000(45001): 2013년 제정, 2018년 발행. 최고경영자 리더십 포함.' },

  { id:92, type:'fill', lecture:'11-12강', category:'경영시스템',
    question:'PDCA 사이클: Plan → Do → [①] → Act.',
    blanks:[{id:'①',label:'①'}],
    answers:[['Check','check','점검','모니터링']],
    explanation:'PDCA = Plan(계획)-Do(실행)-Check(점검)-Act(개선). 모든 ISO 경영시스템의 기본 사이클.' },

  { id:93, type:'fill', lecture:'11-12강', category:'ESG·CSR',
    question:'ESG = [①](환경) + Social(사회) + Governance([②]).',
    blanks:[{id:'①',label:'①'},{id:'②',label:'②'}],
    answers:[['Environment','environment','환경'],['지배구조','Governance','governance']],
    explanation:'ESG 3요소: Environment, Social, Governance.' },

  { id:94, type:'fill', lecture:'11-12강', category:'탄소중립',
    question:'탄소중립 목표: 산업화 이전 대비 지구 평균 기온 상승을 [①]°C 이내로 유지한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['1.5']],
    explanation:'파리협정 목표. 2022년 이미 1.1°C 상승 상태.' },

  { id:95, type:'fill', lecture:'11-12강', category:'탄소중립',
    question:'기업이 사용하는 전력의 100%를 재생에너지로 충당하겠다는 이니셔티브를 [①]이라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['RE100','RE 100']],
    explanation:'RE100: 삼성 등 반도체 기업이 선언. 탄소중립과 연계.' },

  { id:96, type:'fill', lecture:'12-13강', category:'반도체 기초',
    question:'현재 반도체 생산 주류 웨이퍼 크기는 [①]mm이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['300']],
    explanation:'2000년대 이후 300mm가 표준. 클수록 한 번에 더 많은 칩 생산.' },

  { id:97, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 포토리소그래피에서 빛에 민감한 고분자 물질로, 회로 패턴을 웨이퍼에 전달하는 물질을 [①](이)라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['감광제','포토레지스트','PR','Photoresist','photoresist']],
    explanation:'PR(Photoresist): UV에 반응하여 회로 패턴을 형성하는 핵심 재료.' },

  { id:98, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 식각(Etching) 공정에서 SiO₂를 제거하는 주요 약품은 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['불산','HF','불화수소','hydrofluoric acid','Hydrofluoric acid']],
    explanation:'불산(HF): SiO₂ 제거의 핵심. 저칼슘혈증·심장마비를 유발하는 고위험 물질.' },

  { id:99, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 이온주입 공정에서 인계 도판트 가스로 사용되는 화합물은 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['포스핀','PH3','PH₃','phosphine','Phosphine']],
    explanation:'포스핀(PH₃): p형 도핑 가스. 독성 강한 가스.' },

  { id:100, type:'fill', lecture:'12-13강', category:'반도체 안전',
    question:'1995년 국내 반도체 공장에서 여성 근로자 33명의 생식독성(자연유산 등)을 유발한 물질은 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['2-bromopropane','2브로모프로판','브로모프로판']],
    explanation:'1995년 반도체 부품 세척 과정에서 2-bromopropane 노출 → 생식독성(자연유산, 생리이상, 불임).' },

  { id:101, type:'fill', lecture:'13-14강', category:'반도체 안전',
    question:'불산(HF)의 불소 이온이 체내 [①]과/와 결합하여 저칼슘혈증을 유발한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['칼슘','Ca','Ca2+','Ca²⁺','칼슘(Ca)']],
    explanation:'F⁻ + Ca²⁺ → CaF₂(불용성) → 혈중 칼슘 급감 → 심장마비.' },

  { id:102, type:'fill', lecture:'13-14강', category:'반도체 안전',
    question:'정비 작업 전 에너지원을 잠금으로 차단하고 경고 표지를 부착하는 절차를 [①]이라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['LOTO','잠금표지','잠금·표지','Lockout/Tagout','lockout tagout']],
    explanation:'LOTO(Lockout/Tagout): 정비 중 에너지 우발 가동 방지의 핵심 절차.' },

  { id:103, type:'fill', lecture:'13-14강', category:'반도체 안전',
    question:'산소결핍의 기준: 공기 중 산소 농도가 [①]% 미만인 경우.',
    blanks:[{id:'①',label:'①'}],
    answers:[['18']],
    explanation:'산소 18% 미만 = 산소결핍. 질소 누출이 주요 원인.' },

  { id:104, type:'fill', lecture:'13-14강', category:'반도체 안전',
    question:'설비·배관 내 잔류 유해가스를 불활성 기체(주로 [①])로 밀어내어 제거하는 작업을 퍼지(Purge)라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['질소','N2','N₂','nitrogen','Nitrogen']],
    explanation:'퍼지는 주로 질소(N₂)를 사용. 단, 밀폐공간에서는 질소 자체가 산소결핍 유발 위험.' },

  { id:105, type:'fill', lecture:'13-14강', category:'SEMI',
    question:'SEMI S10은 반도체 장비의 [①] 및 위험성평가 방법에 관한 안전 가이드라인이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['위험성평가','안전성평가','risk assessment','safety']],
    explanation:'SEMI S10-0423: Safety Guideline for Risk Assessment (위험성평가 방법).' },

  /* ══════════════════════════════════════════════════
     ★ 주관식 (10문제)
  ══════════════════════════════════════════════════ */

  { id:106, type:'short', lecture:'9강', category:'중금속 기초',
    question:'중금속 독성의 4대 기전을 모두 쓰시오.',
    modelAnswer:'①산화적 스트레스(ROS 생성) → 세포막·단백질·DNA 손상\n②단백질/효소 기능 장애 (SH기 결합 등, 예: 수은의 SH기 결합)\n③필수금속 치환 (예: 카드뮴→아연, 납→칼슘)\n④항산화 방어 파괴 (GSH, SOD, 카탈라아제 등 감소)',
    explanation:'4대 기전을 모두 암기. 카드뮴의 아연 치환, 수은의 SH기 결합이 자주 출제.' },

  { id:107, type:'short', lecture:'9강', category:'생체축적',
    question:'생체축적(Bio-accumulation)과 생물농축(Biomagnification)의 차이를 설명하고, 중금속이 이러한 현상을 보이는 이유를 쓰시오.',
    modelAnswer:'[생체축적] 개별 생물체 내에서 화학물질 흡수속도 > 배설속도로 체내 농도가 점점 높아지는 현상\n[생물농축] 생체축적이 먹이사슬 상위 생물로 갈수록 증폭되는 현상\n[중금속이 이런 현상 보이는 이유] 중금속은 자연 분해·생체변환이 되지 않아 반감기가 매우 길기 때문.',
    explanation:'생체축적(개체 내) vs 생물농축(먹이사슬 통한 증폭). 중금속의 화학적 안정성이 핵심.' },

  { id:108, type:'short', lecture:'10강', category:'노출평가',
    question:'외부 노출(External Exposure)과 내부 노출(Internal Exposure)을 정의하고, 각각의 평가 방법을 쓰시오.',
    modelAnswer:'[외부 노출] 인체 흡수 전 환경 중 노출량 측정 → 평가: 작업환경측정(개인시료, 공기 중 농도 측정)\n[내부 노출] 실제 체내에 흡수된 양 → 평가: 생물학적 모니터링(혈액·소변 등 생체 검체 분석)\n외부=법적 의무(작업환경측정), 내부=특수건강검진 연계(생물학적 모니터링)',
    explanation:'외부-작업환경측정, 내부-생물학적 모니터링 연결이 핵심.' },

  { id:109, type:'short', lecture:'10강', category:'바이오마커',
    question:'바이오마커(Biomarker) 3종류를 나열하고 각각의 예시를 드시오.',
    modelAnswer:'①노출 바이오마커(Marker of Exposure): 혈중 납, 소변 t,t-뮤콘산(벤젠 노출 지표)\n②영향 바이오마커(Marker of Effects): 콜린에스테라제 활성 감소, DNA 부가물, ALT/AST 증가\n③감수성 바이오마커(Marker of Susceptibility): 유전적 다형성, CYP450 효소 다형성',
    explanation:'노출→영향→감수성 순서로 암기.' },

  { id:110, type:'short', lecture:'11-12강', category:'연관·인과',
    question:'"역학적 연관(Association)"과 "인과(Causality)"의 차이를 설명하고, 직업성 만성질환에서 인과 판단이 왜 어려운지 이유를 3가지 이상 쓰시오.',
    modelAnswer:'[연관] 집단 수준에서 특정 노출↑→질병↑ 경향(역학연구에서 확인)\n[인과] 특정 개인의 질병이 직무/노출에 의해 실제 발생했다는 판단\n[판단 어려운 이유] ①장기 잠복기(수년~수십년) ②다중 원인성(흡연·유전·환경 등) ③비특이성 질환(직업 특이적 아님) ④개인 감수성 차이 ⑤역학적 연관↔개인 인과의 괴리',
    explanation:'연관≠인과. 이 괴리가 직업성 암 보상에서 가장 어려운 핵심.' },

  { id:111, type:'short', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 Fab(전공정)의 주요 단계를 순서대로 쓰시오.',
    modelAnswer:'①산화(Oxidation): 웨이퍼 표면에 SiO₂ 산화막 형성\n②포토리소그래피(Photolithography): PR 도포→노광(UV)→현상\n③식각(Etching): 불산 등으로 SiO₂ 제거\n④스트리핑(Stripping): PR층 제거\n⑤이온주입(Ion Implantation): 도판트 이온으로 전기특성 부여\n⑥에피택시(Epitaxy): 추가 실리콘층 증착\n⑦금속증착(Metallization): 금속 배선 형성',
    explanation:'7단계 순서를 흐름으로 암기.' },

  { id:112, type:'short', lecture:'12-13강', category:'반도체 안전',
    question:'반도체 클린룸(Clean Room)의 특성을 설명하고, 왜 일반 작업장보다 건강 위험성 평가가 어려운지 설명하시오.',
    modelAnswer:'[클린룸 특성] 수직 층류 방식, 고도로 여과된 공기, 방진복 착용 의무, 먼지는 없으나 다종 화학물질 복합 노출\n[평가 어려운 이유] ①복합 노출(수십~수백 종 화학물질 동시): 단일물질 기여 분리 불가 ②8시간 평균 노출 의미 약화(단시간 고농도·이상 노출 많음) ③공정이 빠르게 변화하여 과거 데이터 활용 어려움 ④정비원 노출=가동 중 노출과 다른 패턴',
    explanation:'클린룸: 먼지 없지만 복합화학물질 만성노출 환경.' },

  { id:113, type:'short', lecture:'13-14강', category:'반도체 안전',
    question:'TMAH(테트라메틸암모늄수산화물)의 독성 특성과 실제 사고 사례를 2건 이상 서술하시오.',
    modelAnswer:'[독성 특성] ①피부 침투성 강함(피부 접촉만으로 체내 흡수) ②무색·무취로 감지 어려움 ③흡수 후 신경계 영향·심장마비 유발 ④이·뇨·눈·다리 접촉 시 즉각 조직 손상\n[사고①] 2011년 경기도: 핸드폰 인쇄회로 테스트 작업 중 피부 접촉 → 사망\n[사고②] 2012년 충북: 탱크로리 호스 세척 노출 → 사망\n[사고③] 2021년 국내 디스플레이 공장: 현상액 탱크 배관 해체 중 TMAH 누출 → 사망·부상',
    explanation:'TMAH = 무색·무취 + 피부흡수 = "보이지 않는 살인자"' },

  { id:114, type:'short', lecture:'13-14강', category:'반도체 안전',
    question:'반도체 공정에서 정비 작업 전 필수적으로 취해야 할 안전 조치를 5가지 이상 쓰시오.',
    modelAnswer:'①작업 안전허가서(PTW) 취득\n②관계 부서 확인 후 공정 중단·밸브 차단·맹판 설치\n③전기·압축공기 차단 / LOTO(잠금·표지) 적용\n④지속적 퍼지(Purge) 및 산소·유해가스 농도 측정\n⑤방독마스크·보호경 등 적절한 PPE 착용\n⑥2인 1조 작업 및 의사소통 확보\n⑦긴급 시 배기덕트 별도 사용',
    explanation:'정비 중 사고 예방의 핵심: 퍼지+LOTO+2인1조+측정+PPE' },

  { id:115, type:'short', lecture:'11-12강', category:'경영시스템',
    question:'ISO 경영시스템 표준의 발전 흐름을 시간 순서대로 쓰고, 각각의 주요 대상을 설명하시오.',
    modelAnswer:'①ISO 9000(1980년대): 품질경영(QMS) - 제품·서비스 품질 관리\n②ISO 14000(1990년대): 환경경영(EMS) - 환경·생태계 위해 최소화\n③ISO 45000(2010년대, 2018년 발행): 안전보건경영(OSHMS) - 근로자 생명권\n④ISO 26000(2010년대): 사회적 책임(CSR) - 이해관계자 사회적 책임\n⑤ESG(2020년대): 환경·사회·지배구조 - 투자·공시 기준',
    explanation:'품질→환경→안전보건→사회책임→ESG 순서로 확장.' },

  /* ══════════════════════════════════════════════════
     ★ 설명 맞추기 (match, 15문제)
  ══════════════════════════════════════════════════ */

  { id:116, type:'match', lecture:'9강', category:'중금속 기초',
    question:'다음 설명이 가리키는 중금속 독성 메커니즘은?\n\n"독성 금속이 아연·칼슘 등 필수 금속과 화학적으로 유사하여, 필수 금속이 결합하는 단백질/효소 자리를 빼앗아 정상 기능을 방해하는 메커니즘"',
    options:['산화적 스트레스','필수금속 치환(Essential Metal Displacement)','항산화 파괴','생체변환'],
    answer:1, explanation:'필수금속 치환. 예: 카드뮴→아연, 납→칼슘.' },

  { id:117, type:'match', lecture:'9강', category:'생체축적',
    question:'다음 설명이 가리키는 현상은?\n\n"생물체가 환경 중 물질을 흡수하는 속도가 배설 속도보다 빨라 체내 농도가 점점 높아지는 현상. 먹이사슬 상위 생물일수록 농도가 더 높아지는 생물농축으로 이어짐"',
    options:['생물학적 모니터링','생체축적(Bio-accumulation)','생체변환(Biotransformation)','대사활성화'],
    answer:1, explanation:'생체축적: 흡수속도>배설속도 → 체내 축적. 먹이사슬 따라 증폭 = 생물농축.' },

  { id:118, type:'match', lecture:'9강', category:'신경독성',
    question:'다음 설명이 가리키는 직업병은?\n\n"망간(Mn) 과다 노출로 발생하는 신경계 질환. 파킨슨병과 유사한 운동장애·진전·경직을 나타내며 용접공에서 주로 발생"',
    options:['미나마타병','이이타이이타이병','망간증(파킨슨증후군)','납중독'],
    answer:2, explanation:'망간증: 용접공 대표 직업병. 파킨슨 증상과 유사.' },

  { id:119, type:'match', lecture:'10강', category:'바이오마커',
    question:'다음 설명이 가리키는 바이오마커 종류는?\n\n"외부 노출로부터 체내에 들어온 내부용량을 나타내는 지표. 혈액·소변에서 독성물질이나 대사체를 측정. 예: 혈중 납, 소변 t,t-뮤콘산"',
    options:['영향 바이오마커','감수성 바이오마커','노출 바이오마커','유전 바이오마커'],
    answer:2, explanation:'노출 바이오마커(Marker of Exposure): 내부 노출량을 반영.' },

  { id:120, type:'match', lecture:'10강', category:'독성 개념',
    question:'다음 설명이 가리키는 용어는?\n\n"원인 제거 또는 치료 시 완전히 회복 가능한 질환 상태. 조직·기관의 면역·회복 능력 이내에서 발생"',
    options:['비가역적 질병','급성독성','가역적 질병(Reversible)','만성독성'],
    answer:2, explanation:'가역적(Reversible): 원인 제거 시 회복. 비가역적: 영구 손상(암·신경손상·섬유화).' },

  { id:121, type:'match', lecture:'11-12강', category:'경영시스템',
    question:'다음 설명이 가리키는 국제표준은?\n\n"기업·조직의 안전보건 리스크를 관리하기 위한 경영시스템 국제표준. 2018년 3월 발행. 최고경영자(CEO)의 리더십과 의지를 특히 강조"',
    options:['ISO 9000','ISO 14000','ISO 45000(OSHMS)','ISO 26000(CSR)'],
    answer:2, explanation:'ISO 45000: OSHMS(안전보건경영시스템). CEO 리더십 강조가 특징.' },

  { id:122, type:'match', lecture:'11-12강', category:'탄소중립',
    question:'다음 설명이 가리키는 경제 모델은?\n\n"\'사회적 최소 기준(사회적 토대)\'과 \'지구 환경 한계(생태적 천장)\' 사이에서 경제가 작동해야 한다는 이론. 케이트 레이워스(Kate Raworth)가 제안"',
    options:['코스모스 이론','도넛 경제학(Doughnut Economics)','탄소 거래제','PDCA 모델'],
    answer:1, explanation:'도넛 경제학: 구멍(사회 빈곤) ↔ 도넛 바깥(환경 한계). 안전하고 공정한 공간이 목표.' },

  { id:123, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 반도체 공정은?\n\n"200~400kV 고전압으로 가속된 도판트 이온(비소·붕소·인 등)을 웨이퍼에 주입하여 전기 특성을 부여하는 공정. X선 발생 및 독성 가스 노출 위험"',
    options:['산화(Oxidation)','포토리소그래피','이온주입(Ion Implantation)','금속증착(Metallization)'],
    answer:2, explanation:'이온주입: 도판트 이온을 고전압 가속 주입. X선·독성 가스(AsH₃, PH₃ 등) 위험.' },

  { id:124, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 반도체 공정은?\n\n"마스크의 회로 패턴을 감광제(PR)를 매개로 웨이퍼에 옮기는 공정. PR 도포 → UV 노광 → 현상의 순서로 진행"',
    options:['산화(Oxidation)','포토리소그래피(Photolithography)','식각(Etching)','스트리핑(Stripping)'],
    answer:1, explanation:'포토리소그래피: "빛(photo)으로 돌(litho)에 인쇄(graphia)". 반도체 핵심 공정.' },

  { id:125, type:'match', lecture:'13-14강', category:'반도체 안전',
    question:'다음 설명이 가리키는 안전 절차는?\n\n"정비 작업 전 전기·가스·압축공기 등 에너지원을 잠금(Lock)으로 물리적 차단하고, 경고 표지(Tag)를 부착하여 타인이 임의 가동시키지 못하게 하는 절차"',
    options:['인터록(Interlock)','잠금·표지(LOTO, Lockout/Tagout)','퍼지(Purge)','FOUP 교체'],
    answer:1, explanation:'LOTO(Lockout/Tagout): 정비 중 에너지 우발 투입 방지. 2인 1조 원칙과 함께 적용.' },

  { id:126, type:'match', lecture:'13-14강', category:'반도체 안전',
    question:'다음 설명이 가리키는 작업은?\n\n"정비 전 설비·배관·장비 내부에 잔류하는 유해가스·공정가스를 불활성 기체(주로 질소)나 공기로 밀어내어 제거하는 안전 작업"',
    options:['인터록(Interlock)','퍼지(Purge)','LOTO','AMHS 점검'],
    answer:1, explanation:'퍼지(Purge): 잔류 독성물질 제거. 불충분하면 배관 내 잔류 물질 노출 사고(2021년 TMAH 사고).' },

  { id:127, type:'match', lecture:'13-14강', category:'반도체 안전',
    question:'다음 설명이 가리키는 것은?\n\n"300mm 웨이퍼를 클린룸 오염으로부터 보호하기 위해 SEMI 표준으로 규격화된 밀폐형 표준 운반 용기"',
    options:['AMHS','FOUP(Front Opening Unified Pod)','OHT(Overhead Hoist Transport)','SEMI S10'],
    answer:1, explanation:'FOUP: Front Opening Unified Pod. 300mm 웨이퍼 표준 운반 용기.' },

  { id:128, type:'match', lecture:'9강', category:'중금속 질환',
    question:'다음 설명이 가리키는 질병은?\n\n"1950년대 일본에서 공장 폐수로 오염된 어패류 섭취 후 발생. 유기수은(메틸수은)에 의한 신경독성. 언어장애·시야협착·운동실조 증상"',
    options:['이이타이이타이병','미나마타병','망간증','납중독'],
    answer:1, explanation:'미나마타병: 메틸수은 → 혈뇌장벽 통과 → 중추신경 손상.' },

  { id:129, type:'match', lecture:'11-12강', category:'ESG·CSR',
    question:'다음 설명이 가리키는 개념은?\n\n"기업의 환경·사회·지배구조 성과를 평가하여 투자·공시에 활용하는 기준. UN 중심 금융기관이 발전. 탄소중립·노동관행·CEO 독립성 등을 평가"',
    options:['ISO 9000','ISO 26000','OSHMS','ESG'],
    answer:3, explanation:'ESG(Environment·Social·Governance): UN 주도, 금융·투자 기관의 기업 평가 기준.' },

  { id:130, type:'match', lecture:'12-13강', category:'반도체 기초',
    question:'다음 설명이 가리키는 것은?\n\n"반도체 전공정(Fab)에서 집적회로(IC)를 만든 후, 웨이퍼를 개별 칩으로 절단·조립·포장하는 후공정"',
    options:['에피택시(Epitaxy)','금속증착(Metallization)','패키징/테스트(Packaging/Test)','포토리소그래피'],
    answer:2, explanation:'패키징(후공정): 웨이퍼 → 칩 절단 → 조립 → 포장. 전공정(Fab)과 구별.' },

];

/* ══════════════════════════════════════════════════
   메타데이터
══════════════════════════════════════════════════ */
export const QUIZ_TYPES = [
  { id:'all',      label:'전체 유형',    icon:'🎯', color:'indigo'  },
  { id:'ox',       label:'OX 퀴즈',      icon:'⭕', color:'emerald' },
  { id:'multiple', label:'4지선다',      icon:'📝', color:'blue'    },
  { id:'fill',     label:'빈칸 채우기',  icon:'✏️', color:'violet'  },
  { id:'short',    label:'주관식',       icon:'💭', color:'orange'  },
  { id:'match',    label:'설명 맞추기',  icon:'🔗', color:'rose'    },
]

export const LECTURES = [
  { id:'all',       label:'전체 강의'           },
  { id:'9강',       label:'9강 원소·중금속'      },
  { id:'10강',      label:'10강 노출·흡수·영향'  },
  { id:'11-12강',   label:'11-12강 제도·경영'    },
  { id:'12-13강',   label:'12-13강 반도체 공정'  },
  { id:'13-14강',   label:'13-14강 SEMI·안전'   },
]

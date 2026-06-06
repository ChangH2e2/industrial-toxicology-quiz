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

  /* ══════════════════════════════════════════════════
     ★ 추가 OX (25문제, 131~155)
  ══════════════════════════════════════════════════ */

  { id:131, type:'ox', lecture:'9강', category:'중금속 기초',
    question:'납(Pb)은 혈액 내 ALAD(아미노레불린산 탈수효소)를 억제하여 헴(Heme) 합성을 방해한다.',
    answer:true, explanation:'ALAD 억제 → δ-ALA 혈중 축적 → 헴 합성 장애 → 빈혈. ZPP 증가도 관찰.' },

  { id:132, type:'ox', lecture:'9강', category:'중금속 기초',
    question:'원소수은(Hg⁰)은 상온에서 증기를 발생시키며, 호흡기를 통해 주로 흡수된다.',
    answer:true, explanation:'원소수은 증기 흡입이 주요 노출 경로. 무기수은(Hg²⁺)은 주로 신장에 축적.' },

  { id:133, type:'ox', lecture:'9강', category:'중금속 기초',
    question:'카드뮴(Cd)의 표적 장기는 신장이며, 세뇨관 손상 시 β₂-마이크로글로불린이 소변으로 배출된다.',
    answer:true, explanation:'카드뮴 → 신장 세뇨관 손상 → 재흡수 장애 → β₂-마이크로글로불린 소변 배출 증가.' },

  { id:134, type:'ox', lecture:'9강', category:'중금속 기초',
    question:'니켈(Ni)은 접촉성 피부염(니켈 알레르기)과 폐암·비강암을 유발할 수 있다.',
    answer:true, explanation:'니켈: IARC 1군. 피부 알레르기(가장 흔한 금속 알레르기)와 흡입 시 폐암.' },

  { id:135, type:'ox', lecture:'9강', category:'발암성',
    question:'베릴륨(Be)은 IARC 1군 발암물질로, 과다 노출 시 만성 베릴륨증(폐육아종증)이 발생한다.',
    answer:true, explanation:'베릴륨: 항공우주·전자 부품에 사용. 호흡기 흡입 → 면역매개 폐육아종증.' },

  { id:136, type:'ox', lecture:'9강', category:'중금속 기초',
    question:'6가 크롬(Cr⁶⁺)의 주요 체내 흡수 경로는 피부이다.',
    answer:false, explanation:'6가 크롬의 주요 흡수 경로는 호흡기(도금·용접 흄). 피부 경로도 가능하나 주경로는 호흡기.' },

  { id:137, type:'ox', lecture:'9강', category:'방사성 원소',
    question:'방사성 원소의 반감기(Half-life)는 온도·압력에 무관하게 일정한 물리적 상수이다.',
    answer:true, explanation:'반감기는 핵의 고유 특성. 화학반응과 달리 온도·압력에 영향받지 않음.' },

  { id:138, type:'ox', lecture:'9강', category:'방사성 원소',
    question:'알파(α)선은 외부 피폭보다 내부 피폭(흡입·섭취) 시 생물학적 위해가 더 크다.',
    answer:true, explanation:'알파선은 투과력이 약해 피부 통과 못 하지만, 내부에서 방출 시 주변 조직을 강하게 손상.' },

  { id:139, type:'ox', lecture:'9강', category:'방사성 원소',
    question:'핵융합(Nuclear Fusion)은 현재 상용 원자력 발전소에서 주로 사용하는 방식이다.',
    answer:false, explanation:'상용 원전은 핵분열(Fission) 이용. 핵융합은 아직 연구 단계(ITER 프로젝트 등).' },

  { id:140, type:'ox', lecture:'9강', category:'신경독성',
    question:'납(Pb) 노출 시 아연 대신 납이 포르피린 고리에 결합해 ZPP(아연프로토포르피린)이 형성된다.',
    answer:true, explanation:'ZPP: Zn 대신 Pb가 결합된 비정상 헴 전구체. 납의 영향 바이오마커로 혈액에서 측정.' },

  { id:141, type:'ox', lecture:'10강', category:'독성 개념',
    question:'NOAEL(무관찰 독성량)은 독성 영향이 관찰되지 않는 최고 용량이다.',
    answer:true, explanation:'NOAEL(No Observed Adverse Effect Level). LOAEL은 독성이 처음 관찰되는 최저 용량.' },

  { id:142, type:'ox', lecture:'10강', category:'독성동태',
    question:'지용성(fat-soluble) 독성물질은 수용성 물질보다 피부를 통해 더 잘 흡수된다.',
    answer:true, explanation:'피부는 지질이중막 구조라 지용성이 더 잘 통과. 유기용제·농약 등이 해당.' },

  { id:143, type:'ox', lecture:'10강', category:'독성동태',
    question:'무기수은(Hg²⁺)은 주로 신장에, 유기수은(메틸수은)은 주로 중추신경계에 축적된다.',
    answer:true, explanation:'무기수은 → 신장(단백질 결합). 유기수은(지용성) → 혈뇌장벽 통과 → 뇌·신경계.' },

  { id:144, type:'ox', lecture:'10강', category:'바이오마커',
    question:'모발(Hair) 바이오마커는 혈액·소변 바이오마커에 비해 과거 장기간 노출을 추정하는 데 유리하다.',
    answer:true, explanation:'모발은 월 약 1cm 성장. 분절 분석 → 수개월 노출 이력 파악 가능.' },

  { id:145, type:'ox', lecture:'11-12강', category:'경영시스템',
    question:'ISO 국제표준은 강제적 법적 기준이 아닌 자발적 참여 기준이다.',
    answer:true, explanation:'ISO는 자발적(voluntary) 국제표준. 단, 법령·계약·구매 조건에 의해 사실상 의무화되는 경우도 있음.' },

  { id:146, type:'ox', lecture:'12-13강', category:'반도체 안전',
    question:'실란(SiH₄)은 공기 중에서 자연발화(Pyrophoric)하는 특성이 있어 화재·폭발 위험이 있다.',
    answer:true, explanation:'실란 누출 시 공기와 반응하여 불꽃 없이도 발화. 반도체 공정의 주요 화재원인.' },

  { id:147, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'포스핀(PH₃)은 반도체 P형(p-type) 도핑에 사용되는 가스이다.',
    answer:false, explanation:'포스핀(PH₃)은 인(P) 공급원으로 N형(n-type) 도핑에 사용. P형에는 붕소계 가스(BF₃, B₂H₆) 사용.' },

  { id:148, type:'ox', lecture:'13-14강', category:'반도체 안전',
    question:'불산(HF) 피부 접촉 즉시 응급처치로 글루콘산 칼슘(Calcium Gluconate) 겔을 도포한다.',
    answer:true, explanation:'Ca²⁺ 보충으로 F⁻ 이온 중화. 글루콘산칼슘 겔 도포는 불산 피부 노출의 필수 응급처치.' },

  { id:149, type:'ox', lecture:'12-13강', category:'반도체 기초',
    question:'반도체 클린룸의 ISO 등급 숫자가 낮을수록 더 청정한 환경이다.',
    answer:true, explanation:'ISO Class 1이 가장 청정. 반도체 전공정은 Class 1~5 수준. 숫자↓ = 허용 파티클 수↓.' },

  { id:150, type:'ox', lecture:'13-14강', category:'SEMI',
    question:'SEMI S2는 반도체 장비 환경·안전·보건(EHS) 가이드라인이다.',
    answer:true, explanation:'SEMI S2: EHS(Environmental Health Safety) Guideline for Semiconductor Manufacturing Equipment.' },

  { id:151, type:'ox', lecture:'13-14강', category:'SEMI',
    question:'SEMI S8은 반도체 장비 위험성평가(Risk Assessment) 방법에 관한 가이드라인이다.',
    answer:false, explanation:'S8은 반도체 장비 인간공학(Ergonomics) 가이드라인. 위험성평가는 SEMI S10.' },

  { id:152, type:'ox', lecture:'11-12강', category:'연관·인과',
    question:'Hill의 인과기준에는 연관의 강도(Strength), 일관성(Consistency), 시간적 선행성(Temporality), 노출-반응 관계가 포함된다.',
    answer:true, explanation:'Hill\'s criteria 9가지: 강도·일관성·특이성·시간성·노출반응관계·실험성·생물학적개연성·유추·일관성.' },

  { id:153, type:'ox', lecture:'11-12강', category:'탄소중립',
    question:'우리나라의 2050 탄소중립 목표는 온실가스 순 배출량(Net Emission) 제로(Zero)이다.',
    answer:true, explanation:'넷제로(Net Zero) = 탄소중립: 온실가스 배출량 = 흡수·제거량. 한국 2050 탄소중립 공식 목표.' },

  { id:154, type:'ox', lecture:'12-13강', category:'반도체 기초',
    question:'반도체 자동물류시스템(AMHS)은 클린룸 내 웨이퍼를 작업자 없이 자동으로 운반한다.',
    answer:true, explanation:'AMHS(Automated Material Handling System): 천장 OHT로 FOUP 자동 이송. 작업자 노출 최소화.' },

  { id:155, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'건식식각(Dry Etching)은 불산(HF) 수용액을 사용하는 식각 방법이다.',
    answer:false, explanation:'건식식각 = 플라즈마(기체) 이용. 습식식각(Wet Etching)이 불산(HF) 수용액 사용.' },

  /* ══════════════════════════════════════════════════
     ★ 추가 4지선다 (25문제, 156~180)
  ══════════════════════════════════════════════════ */

  { id:156, type:'multiple', lecture:'9강', category:'중금속 기초',
    question:'납(Pb) 노출 시 억제되어 헴(Heme) 합성 장애와 빈혈을 일으키는 효소는?',
    options:['ALT(아미노기전달효소)','ALAD(아미노레불린산 탈수효소)','AChE(아세틸콜린에스테라제)','SOD(초산화물 불균등화효소)'],
    answer:1, explanation:'ALAD(δ-Aminolevulinic Acid Dehydratase) 억제 → δ-ALA 혈중 축적 → 헴 합성 장애 → 빈혈.' },

  { id:157, type:'multiple', lecture:'9강', category:'중금속 기초',
    question:'원소수은(Hg⁰)이 인체에 흡수되는 주요 경로는?',
    options:['피부(경피)','소화기(경구)','호흡기(흡입)','눈(결막)'],
    answer:2, explanation:'원소수은은 상온에서 증기 발생. 호흡기 흡수가 주 경로. 무기수은(Hg²⁺)은 경구가 주.' },

  { id:158, type:'multiple', lecture:'9강', category:'중금속 기초',
    question:'카드뮴(Cd) 노출에 의한 신장 세뇨관 손상의 소변 바이오마커는?',
    options:['t,t-뮤콘산(소변)','β₂-마이크로글로불린(소변)','ZPP(혈액)','코티닌(혈액)'],
    answer:1, explanation:'β₂-마이크로글로불린: 정상 세뇨관에서 재흡수되나 손상 시 소변 배출 증가 → 카드뮴 신독성 지표.' },

  { id:159, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'다음 중 반도체 N형(n-type) 도핑에 사용하지 않는 도판트는?',
    options:['비소(As)','인(P)','붕소(B)','안티몬(Sb)'],
    answer:2, explanation:'붕소(B)는 p-type 도판트(정공 생성). n-type 도판트: As(비소), P(인), Sb(안티몬).' },

  { id:160, type:'multiple', lecture:'12-13강', category:'반도체 안전',
    question:'실란(SiH₄)의 가장 큰 위험 특성은?',
    options:['ppm 수준에서 치명적인 독성','공기 중 자연발화(Pyrophoric) 특성','강산성으로 피부 화학화상 유발','피부 침투로 심장마비 유발'],
    answer:1, explanation:'실란 누출 시 공기 중 즉시 자연발화. 불꽃 불필요. 화재·폭발 위험. 누출 감지 후 즉시 대피.' },

  { id:161, type:'multiple', lecture:'9강', category:'아르신',
    question:'다음 중 NIOSH IDLH(즉시 위험 농도) 기준이 가장 낮은(엄격한) 물질은?',
    options:['아르신(AsH₃) - 3 ppm','포스핀(PH₃) - 50 ppm','실란(SiH₄) - 3,000 ppm','암모니아(NH₃) - 300 ppm'],
    answer:0, explanation:'아르신 IDLH=3 ppm, PEL=0.05 ppm으로 극독성. 포스핀도 위험하지만 아르신이 더 낮은 기준.' },

  { id:162, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 포토리소그래피에서 노광 후 PR 현상(Development)에 사용되는 물질은?',
    options:['황산(H₂SO₄)','TMAH(테트라메틸암모늄수산화물)','불산(HF)','염산(HCl)'],
    answer:1, explanation:'TMAH는 반도체 현상액(Developer)으로 사용. 노광된 PR을 선택적으로 제거하여 회로 패턴 형성.' },

  { id:163, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 건식식각(Dry Etching)에 사용되는 주요 방법은?',
    options:['불산(HF) 용액 침지','황산·과산화수소 혼합 용액','플라즈마(Plasma) 식각','순수(DI Water) 세척'],
    answer:2, explanation:'건식식각 = 플라즈마 이용 식각(RIE, ICP 등). 습식식각이 화학 용액(HF 등) 이용.' },

  { id:164, type:'multiple', lecture:'10강', category:'독성동태',
    question:'생체변환 2상 반응(Phase II Biotransformation)에 해당하는 것은?',
    options:['CYP450에 의한 산화반응','환원(Reduction) 반응','가수분해(Hydrolysis) 반응','글루쿠론산 포합(Glucuronidation)'],
    answer:3, explanation:'2상 반응 = 포합(Conjugation) 반응: 글루쿠론산·황산·글리신·글루타치온 등과 결합. 수용성↑ → 배설↑.' },

  { id:165, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'불산(HF) 전신 독성 시 저칼슘혈증 교정을 위해 정맥 투여하는 응급 약물은?',
    options:['글루타치온(GSH)','글루콘산 칼슘(Calcium Gluconate)','황산나트륨(Na₂SO₄)','아드레날린(Epinephrine)'],
    answer:1, explanation:'글루콘산 칼슘 정주: F⁻ 이온이 Ca²⁺와 결합 → 혈중 Ca²⁺ 급감 → 심장마비 예방 목적.' },

  { id:166, type:'multiple', lecture:'11-12강', category:'연관·인과',
    question:'Hill의 인과기준(Bradford Hill\'s criteria)에 포함되지 않는 것은?',
    options:['연관의 강도(Strength of Association)','시간적 선행성(Temporality)','생물학적 개연성(Biological Plausibility)','경제적 비용-편익 분석(Cost-Benefit Analysis)'],
    answer:3, explanation:'Hill 기준 9가지: 강도·일관성·특이성·시간성·노출반응관계·실험성·개연성·유추·일관성. 경제성은 포함되지 않음.' },

  { id:167, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 P형(p-type) 반도체 제조에 사용하는 도판트 가스로 옳은 것은?',
    options:['아르신(AsH₃)','포스핀(PH₃)','디보란(B₂H₆)','실란(SiH₄)'],
    answer:2, explanation:'디보란(B₂H₆) 또는 BF₃는 붕소(B) 공급원으로 p-type 도핑에 사용. 붕소는 정공(hole) 생성.' },

  { id:168, type:'multiple', lecture:'13-14강', category:'SEMI',
    question:'SEMI S14가 다루는 주요 내용은?',
    options:['위험성평가(Risk Assessment)','화재·가스 감지 시스템(Fire Risk & Gas Detection)','인간공학(Ergonomics)','초순수(Ultra Pure Water) 품질'],
    answer:1, explanation:'SEMI S14: Safety Guideline for Fire Risk Assessment — 화재 위험성 평가 및 가스 감지 관련.' },

  { id:169, type:'multiple', lecture:'11-12강', category:'탄소중립',
    question:'UN이 2015년 채택한 지속가능발전목표(SDGs)는 총 몇 가지 목표로 구성되어 있는가?',
    options:['7가지','12가지','17가지','21가지'],
    answer:2, explanation:'SDGs: 17 Goals, 169 Targets. 2030 Agenda for Sustainable Development. ESG 평가 기준과 연계.' },

  { id:170, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 포토리소그래피 공정에서 생식독성 우려가 가장 큰 물질군은?',
    options:['황산·과산화수소','Glycol ethers(글리콜 에테르)','불산(HF)','아르신(AsH₃)'],
    answer:1, explanation:'Glycol ethers(methoxyethanol, ethoxyethanol 등): PR 용제로 사용. 난소·정소 독성으로 생식독성 인정.' },

  { id:171, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'산소결핍 환경(O₂ < 18%)에서 사용해야 하는 올바른 호흡 보호구는?',
    options:['방진 마스크(P등급)','방독 마스크(유기증기 카트리지)','공기 공급식 마스크(SCBA)','활성탄 마스크'],
    answer:2, explanation:'SCBA(Self-Contained Breathing Apparatus): 자체 공기 공급. 방독마스크는 필터 방식이라 산소결핍 시 사용 불가.' },

  { id:172, type:'multiple', lecture:'11-12강', category:'탄소중립',
    question:'기업 온실가스 배출 분류에서 "Scope 3"에 해당하는 것은?',
    options:['자사 연료 연소에서 직접 배출','구매 전력에서 간접 배출','공급망·소비자 사용 등 가치사슬 전체 간접 배출','자사 건물 냉난방 배출'],
    answer:2, explanation:'Scope 1: 직접 배출. Scope 2: 구매 전력 간접. Scope 3: 공급망·소비·폐기 등 가치사슬 전체.' },

  { id:173, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 배선(Interconnect)에서 저저항 특성으로 최근 주류가 된 금속은?',
    options:['알루미늄(Al)','구리(Cu)','철(Fe)','니켈(Ni)'],
    answer:1, explanation:'구리(Cu)는 알루미늄보다 저항이 낮아 현재 반도체 배선의 주류. 다마신(Damascene) 공법으로 증착.' },

  { id:174, type:'multiple', lecture:'10강', category:'독성 개념',
    question:'독성학에서 "LOAEL"이 의미하는 것은?',
    options:['독성 영향이 없는 최고 용량(NOAEL)','독성 영향이 처음 관찰되는 최저 용량','치사 용량의 50%(LD50)','법적 허용 노출 기준'],
    answer:1, explanation:'LOAEL(Lowest Observed Adverse Effect Level): 독성 영향이 처음 관찰되는 최저 용량. NOAEL 바로 위 단계.' },

  { id:175, type:'multiple', lecture:'12-13강', category:'반도체 안전',
    question:'반도체 공장 여성 근로자에서 보고된 건강 영향이 아닌 것은?',
    options:['자연유산(SAB) 증가','생리불순·무월경','선천성 기형','납(Pb) 중독에 의한 빈혈'],
    answer:3, explanation:'반도체 공장 여성 건강 문제: 생식독성(자연유산, 불임, 생리이상)이 주요 이슈. 납 중독은 반도체 특이 문제 아님.' },

  { id:176, type:'multiple', lecture:'13-14강', category:'SEMI',
    question:'다음 SEMI 표준과 내용의 연결 중 잘못된 것은?',
    options:['S2 – 장비 환경·안전·보건 가이드라인','S8 – 장비 인간공학 가이드라인','S10 – 위험성평가 가이드라인','F63 – 클린룸 청정도 등급 기준'],
    answer:3, explanation:'F63은 반도체 공정용 초순수(UPW) 품질 기준. 클린룸 청정도는 ISO 14644 기준.' },

  { id:177, type:'multiple', lecture:'10강', category:'독성동태',
    question:'대사 활성화(Bioactivation)의 예로 옳은 것은?',
    options:['아세트아미노펜 → 파라세타몰(해열 효과)','알코올 → CO₂+H₂O(완전 무독화)','벤젠 → 벤젠에폭사이드(골수독성 증가)','납 → 납 황화물(불용성)'],
    answer:2, explanation:'벤젠 → 에폭사이드(CYP2E1) → 골수독성·AML 유발. 1상 반응에서 독성이 강화되는 대표 예.' },

  { id:178, type:'multiple', lecture:'11-12강', category:'제도·법규',
    question:'우리나라 산업안전보건법상 특수건강검진의 주요 목적은?',
    options:['일반 성인병 조기 발견','유해물질 노출 근로자의 건강 영향 조기 발견','사망 원인 통계 수집','작업장 공기 중 농도 측정'],
    answer:1, explanation:'특수건강검진: 특정 유해물질 노출 근로자 대상. 직업성 건강 영향 조기 발견이 목적.' },

  { id:179, type:'multiple', lecture:'12-13강', category:'반도체 기초',
    question:'반도체 전공정(Fab)을 영문 약자로 올바르게 표현한 것은?',
    options:['BEOL(Back-End of Line)','FEOL(Front-End of Line)','MOL(Middle of Line)','CMP(Chemical Mechanical Planarization)'],
    answer:1, explanation:'Fab(전공정) = FEOL(Front-End of Line). 후공정(패키징) = BEOL(Back-End of Line).' },

  { id:180, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'반도체 공장 정비 작업 전 설비 내 잔류 유해가스를 제거하는 퍼지(Purge)에 주로 사용하는 기체는?',
    options:['산소(O₂)','이산화탄소(CO₂)','질소(N₂)','수소(H₂)'],
    answer:2, explanation:'퍼지는 주로 불활성인 질소(N₂)로 잔류 가스를 밀어냄. 단 밀폐공간에서는 질소 자체가 산소결핍 유발 위험.' },

  /* ══════════════════════════════════════════════════
     ★ 추가 빈칸 채우기 (15문제, 181~195)
  ══════════════════════════════════════════════════ */

  { id:181, type:'fill', lecture:'9강', category:'중금속 기초',
    question:'납(Pb)은 혈중 [①] 효소를 억제하여 헴(Heme) 합성 장애와 빈혈을 유발한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['ALAD','δ-ALAD','아미노레불린산탈수효소','ALA탈수효소']],
    explanation:'ALAD 억제 → δ-ALA 혈중 축적 → 헴 합성 차단. 혈중 ZPP 증가도 관찰.' },

  { id:182, type:'fill', lecture:'9강', category:'중금속 기초',
    question:'카드뮴(Cd) 신장 세뇨관 손상의 소변 바이오마커는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['β2마이크로글로불린','β₂마이크로글로불린','베타2마이크로글로불린','b2마이크로글로불린']],
    explanation:'카드뮴 → 신장 세뇨관 재흡수 장애 → β₂-마이크로글로불린 소변 배출 증가.' },

  { id:183, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 P형(p-type) 도핑에 사용되는 원소는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['붕소','B','Boron','boron']],
    explanation:'붕소(B)는 p-type 도판트(정공 생성). N형에는 As(비소), P(인).' },

  { id:184, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 식각 공정 중 플라즈마를 이용한 방법을 [①] 식각이라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['건식','건식(Dry)','Dry','드라이']],
    explanation:'건식(Dry) 식각 = 플라즈마 이용. 습식(Wet) 식각 = HF 등 화학 용액 이용.' },

  { id:185, type:'fill', lecture:'10강', category:'독성동태',
    question:'생체변환 1상 반응에서 주요하게 관여하는 효소군은 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['CYP450','시토크롬P450','사이토크롬P450','Cytochrome P450','CYP']],
    explanation:'CYP450(Cytochrome P450): 간에 주로 분포. 1상 산화·환원·가수분해 반응 촉매.' },

  { id:186, type:'fill', lecture:'12-13강', category:'반도체 안전',
    question:'공기 중에서 자연발화(Pyrophoric) 특성을 가진 반도체 공정 가스의 화학식은 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['SiH4','SiH₄','실란','silane','Silane']],
    explanation:'실란(SiH₄): 자연발화성. 누출 즉시 화재·폭발. 반도체 공정의 주요 화재 위험물.' },

  { id:187, type:'fill', lecture:'13-14강', category:'반도체 안전',
    question:'불산(HF) 피부 노출 시 응급처치로 도포하는 약품은 [①] 겔이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['글루콘산칼슘','Calcium Gluconate','calcium gluconate','글루콘산 칼슘']],
    explanation:'글루콘산칼슘 겔: F⁻ 이온 중화. 즉시 물 세척 후 도포. 저칼슘혈증 예방.' },

  { id:188, type:'fill', lecture:'13-14강', category:'SEMI',
    question:'SEMI S10 위험성 공식: Risk = Severity × [①]',
    blanks:[{id:'①',label:'①'}],
    answers:[['Likelihood','likelihood','가능성','발생가능성']],
    explanation:'SEMI S10: Risk = Severity(심각도) × Likelihood(발생 가능성). 결과를 매트릭스에 표시.' },

  { id:189, type:'fill', lecture:'11-12강', category:'제도·법규',
    question:'EU의 화학물질 등록(Registration)·평가(Evaluation)·허가(Authorization)를 규정하는 규정의 약자는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['REACH','reach']],
    explanation:'REACH: Registration, Evaluation, Authorisation and Restriction of Chemicals. EU 화학물질 관리 핵심 규정.' },

  { id:190, type:'fill', lecture:'11-12강', category:'탄소중립',
    question:'UN이 2015년 채택한 지속가능발전목표의 영문 약자는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['SDGs','SDG','sdgs']],
    explanation:'SDGs: Sustainable Development Goals. 17개 목표·169개 세부목표. 2030 Agenda. ESG와 연계.' },

  { id:191, type:'fill', lecture:'12-13강', category:'반도체 기초',
    question:'반도체 클린룸에서 공기를 위에서 아래로 균일하게 흐르게 하는 방식을 [①] 층류 방식이라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['수직','Vertical','vertical']],
    explanation:'수직 층류(Vertical Laminar Flow): 파티클이 위에서 아래로 쓸려 내려가도록 설계.' },

  { id:192, type:'fill', lecture:'13-14강', category:'반도체 안전',
    question:'반도체 공장 고위험 정비 작업 전 발급받는 "작업 안전 허가서"를 영문 약자로 [①]이라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['PTW','Permit to Work','permit to work']],
    explanation:'PTW(Permit To Work): 작업 전 안전성 확인 후 발급. LOTO·퍼지 완료 확인 포함.' },

  { id:193, type:'fill', lecture:'10강', category:'독성 개념',
    question:'독성학에서 독성 영향이 처음 관찰되는 최저 용량을 [①](이)라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['LOAEL','로아엘']],
    explanation:'LOAEL(Lowest Observed Adverse Effect Level). NOAEL은 독성이 관찰되지 않는 최고 용량.' },

  { id:194, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 클린룸에서 0.3μm 입자를 99.97% 이상 걸러내는 고효율 공기 필터를 [①] 필터라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['HEPA','hepa']],
    explanation:'HEPA(High Efficiency Particulate Air): 클린룸 핵심 공기 정화 장치. 더 고효율 버전은 ULPA.' },

  { id:195, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 포토리소그래피에서 노광 후 PR을 선택적으로 녹여내어 회로 패턴을 형성하는 공정을 [①](이)라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['현상','현상(Development)','Development','development']],
    explanation:'현상(Development): TMAH 등 현상액으로 노광된 PR을 제거하여 회로 패턴 형성.' },

  /* ══════════════════════════════════════════════════
     ★ 추가 주관식 (5문제, 196~200)
  ══════════════════════════════════════════════════ */

  { id:196, type:'short', lecture:'9강', category:'중금속 기초',
    question:'납(Pb)이 인체에 미치는 건강 영향을 혈액계·신경계·신장·뼈 장기계별로 서술하시오.',
    modelAnswer:'[혈액계] ALAD 억제 → 헴 합성 장애 → 빈혈. ZPP 증가.\n[신경계] ①중추신경: 어린이 IQ 저하, 학습 장애 ②말초신경: 수지·발지 근력 저하(납 마비)\n[신장] 세뇨관 손상 → 만성 신부전\n[뼈] 칼슘 대신 뼈에 축적(전체 납의 약 95%). 장기 저장 창고이자 후에 재방출 원인',
    explanation:'납 독성 핵심: 혈액(ALAD 억제·빈혈) + 신경(어린이 특히 취약) + 뼈(장기 저장).' },

  { id:197, type:'short', lecture:'13-14강', category:'반도체 안전',
    question:'불산(HF)의 독성 기전과 응급처치 방법을 단계별로 서술하시오.',
    modelAnswer:'[독성 기전] ①HF가 약산이어서 피부 통과 용이 ②통증 지연 → 인지 늦음 ③체내 F⁻ + Ca²⁺ → CaF₂(불용성) ④혈중 Ca²⁺ 급감(저칼슘혈증) ⑤심장 부정맥·심장마비\n[응급처치] ①즉시 대량 흐르는 물로 15~20분 세척 ②글루콘산 칼슘(Calcium Gluconate) 겔 도포 ③즉시 의료기관 이송 ④병원에서 정맥 글루콘산칼슘 투여(저칼슘혈증 교정)',
    explanation:'핵심: 통증 지연(약산) → 저칼슘혈증 → 심장마비. 글루콘산칼슘이 핵심 처치.' },

  { id:198, type:'short', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 이온주입(Ion Implantation) 공정의 주요 유해인자를 3가지 이상 서술하시오.',
    modelAnswer:'①독성 가스 노출: AsH₃(아르신), PH₃(포스핀), BF₃ 등 극독성 도판트 가스 → 누출 시 용혈·폐독성\n②X선(제동복사): 200~400kV 고전압 이온 가속 시 X선 발생. 이온박스 내부 정비 시 피폭 위험\n③고전압 감전 위험: 200~400kV 전압\n④잔류 비소(As) 오염: 이온박스 내부 정비 시 비소 분말 접촉 노출\n⑤소음: 진공펌프, 냉각설비 소음',
    explanation:'이온주입 3대 유해인자: 독성가스 + X선 + 고전압.' },

  { id:199, type:'short', lecture:'10강', category:'독성동태',
    question:'생체변환(Biotransformation) 1상과 2상 반응을 구분하여 설명하고, 대사활성화(Bioactivation)의 예를 드시오.',
    modelAnswer:'[1상 반응] CYP450 효소에 의한 산화·환원·가수분해. 극성기 도입 → 수용성 약간 증가. 반드시 해독이 아님\n[2상 반응] 포합(Conjugation) 반응: 글루쿠론산·황산·글리신·글루타치온 등과 결합 → 수용성 대폭↑ → 신장·담즙 배설 촉진\n[대사활성화(Bioactivation) 예] ①벤젠→벤젠에폭사이드(CYP2E1)→골수독성·AML ②메탄올→포름알데히드(ADH)→시신경 손상 ③파라세타몰 과량→NAPQI→간독성',
    explanation:'1상=극성 도입, 2상=포합·배설. Bioactivation은 독성이 강화되는 1상 반응.' },

  { id:200, type:'short', lecture:'11-12강', category:'경영시스템',
    question:'RE100, 탄소중립, ESG의 각 개념을 정의하고 세 개념의 연관성을 서술하시오.',
    modelAnswer:'[RE100] 기업이 사용하는 전력 100%를 재생에너지로 충당하겠다는 자발적 이니셔티브. 2014년 CDP·The Climate Group 주도\n[탄소중립] 온실가스 순 배출량 제로. 배출량 = 흡수량+제거량. 한국 2050 넷제로 목표\n[ESG] 환경(E)·사회(S)·지배구조(G)로 기업을 평가하는 투자·공시 기준\n[연관성] RE100 달성→탄소중립 기여→ESG의 E 점수 향상→투자 유치·평판 개선. 에너지 다소비 반도체 기업에서 RE100이 ESG 평가에 직접 반영됨',
    explanation:'RE100→탄소중립→ESG(E) 향상의 연쇄 관계.' },

  /* ══════════════════════════════════════════════════
     ★ 추가 설명 맞추기 (10문제, 201~210)
  ══════════════════════════════════════════════════ */

  { id:201, type:'match', lecture:'9강', category:'중금속 기초',
    question:'다음 설명이 가리키는 것은?\n\n"납(Pb) 노출 시 ALAD가 억제되어 아연 대신 납이 포르피린 고리에 결합해 형성되는 비정상 화합물. 납 건강 영향의 혈액 바이오마커로 활용"',
    options:['t,t-뮤콘산','β₂-마이크로글로불린','ZPP(아연프로토포르피린)','코티닌'],
    answer:2, explanation:'ZPP(Zinc Protoporphyrin): 납에 의한 헴 합성 장애의 영향 바이오마커. 혈중 농도 증가 = 납 건강 영향.' },

  { id:202, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 것은?\n\n"공기 중에서 자연발화(Pyrophoric)하는 반도체 공정 가스. 화학식 SiH₄. CVD 공정에서 실리콘막 형성에 사용. 누출 즉시 화재 발생"',
    options:['포스핀(PH₃)','아르신(AsH₃)','실란(Silane, SiH₄)','암모니아(NH₃)'],
    answer:2, explanation:'실란(SiH₄): 자연발화성. CVD 공정에서 실리콘막 형성. 화재·폭발이 주요 위험.' },

  { id:203, type:'match', lecture:'11-12강', category:'제도·법규',
    question:'다음 설명이 가리키는 것은?\n\n"EU가 2006년 제정한 화학물질 관리 규정. 화학물질 제조·수입 업체는 해당 물질의 안전 정보를 등록해야 하며, 유해물질은 별도 허가를 받아야 함"',
    options:['GHS(국제조화시스템)','REACH(화학물질 등록·평가·허가 규정)','SDS(물질안전보건자료)','SDGs(지속가능발전목표)'],
    answer:1, explanation:'REACH: Registration, Evaluation, Authorisation of Chemicals. 2만 종 이상의 화학물질 관리.' },

  { id:204, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 것은?\n\n"반도체 클린룸 공기 정화에 사용하는 필터. 0.3μm 입자를 99.97% 이상 포집. 이보다 효율 높은 ULPA가 있음"',
    options:['HEPA 필터','활성탄 필터','프리 필터(Pre-filter)','스크러버(Scrubber)'],
    answer:0, explanation:'HEPA(High Efficiency Particulate Air): 클린룸 핵심 공기 정화 장치.' },

  { id:205, type:'match', lecture:'13-14강', category:'반도체 안전',
    question:'다음 설명이 가리키는 것은?\n\n"고위험 작업 전 해당 작업의 안전성을 다각도로 확인하고 허가권자의 서명을 받는 문서. LOTO·퍼지 완료, PPE 착용, 2인 1조 여부 확인"',
    options:['FOUP 체크리스트','PTW(작업 안전 허가서)','SDS(물질안전보건자료)','SEMI S10 체크리스트'],
    answer:1, explanation:'PTW(Permit To Work): 위험 작업의 사전 안전 확인 문서. LOTO+퍼지+측정+PPE 확인이 핵심.' },

  { id:206, type:'match', lecture:'11-12강', category:'탄소중립',
    question:'다음 설명이 가리키는 것은?\n\n"2015년 UN이 채택. 2030년까지 달성해야 할 17개 목표·169개 세부 목표. 빈곤 종식부터 기후행동, 육상 생태계까지 포함"',
    options:['파리협정(Paris Agreement)','SDGs(지속가능발전목표)','RE100','탄소국경조정제도(CBAM)'],
    answer:1, explanation:'SDGs: Sustainable Development Goals. 17 Goals, 169 Targets. ESG 평가와 연계.' },

  { id:207, type:'match', lecture:'10강', category:'독성동태',
    question:'다음 설명이 가리키는 것은?\n\n"간에 주로 분포하는 효소군. 산화·환원·가수분해 반응을 촉매하는 생체변환 1상 효소. 이소효소(isoenzyme) 다형성이 개인 감수성 차이의 주요 원인"',
    options:['ALAD(아미노레불린산탈수효소)','Metallothionein','CYP450(시토크롬 P450)','AChE(콜린에스테라제)'],
    answer:2, explanation:'CYP450: 생체변환 1상 핵심 효소. CYP1A1, CYP2E1 등 이소효소 다형성 → 개인 감수성 차이.' },

  { id:208, type:'match', lecture:'10강', category:'독성동태',
    question:'다음 설명이 가리키는 것은?\n\n"생체변환 2상 반응 중 가장 대표적인 포합 반응. UGT 효소가 촉매. 수용성을 대폭 높여 담즙·신장 배설을 촉진"',
    options:['산화적 인산화','글루쿠론산 포합(Glucuronidation)','황산 포합(Sulfation)','자연발화'],
    answer:1, explanation:'글루쿠론산 포합: 2상 반응 중 가장 많은 물질에 적용. 글루쿠론산+독성물질 → 극성↑ → 배설.' },

  { id:209, type:'match', lecture:'12-13강', category:'반도체 기초',
    question:'다음 설명이 가리키는 것은?\n\n"반도체 클린룸 내 웨이퍼 박스(FOUP)를 자동으로 운반하는 통합 물류 시스템. 천장 레일을 이용한 OHT(Overhead Hoist Transport)를 포함"',
    options:['FOUP(밀폐운반용기)','AMHS(자동물류시스템)','CMP(화학기계연마)','SEMI S2'],
    answer:1, explanation:'AMHS(Automated Material Handling System): 클린룸 자동 물류. 작업자 출입 최소화·생산성 향상.' },

  { id:210, type:'match', lecture:'11-12강', category:'탄소중립',
    question:'다음 설명이 가리키는 것은?\n\n"온실가스 배출 범위 분류에서, 자사 공장·건물에서 연료 연소로 직접 배출되는 온실가스"',
    options:['Scope 1(직접 배출)','Scope 2(간접 배출 – 구매 전력)','Scope 3(가치사슬 간접 배출)','탄소 크레딧'],
    answer:0, explanation:'Scope 1: 자사 직접 배출. Scope 2: 구매 전력 간접. Scope 3: 공급망·소비·폐기 등 가치사슬 전체.' },

  /* ══════════════════════════════════════════════════
     ★ 추가 OX (211~230)
  ══════════════════════════════════════════════════ */

  { id:211, type:'ox', lecture:'9강', category:'발암성',
    question:'IARC 1군 발암물질은 인간에 대한 발암성이 충분히 확인된 물질이다.',
    answer:true, explanation:'IARC 1군: Carcinogenic to humans. 6가 크롬·비소·벤젠·석면 등이 해당.' },

  { id:212, type:'ox', lecture:'9강', category:'중금속 기초',
    question:'납(Pb)의 생물학적 반감기는 혈중(약 28~36일)보다 뼈에서(수십 년)가 훨씬 길다.',
    answer:true, explanation:'혈중 납 T½ ≈ 28~36일. 뼈 납 T½ ≈ 10~30년. 뼈에 축적된 납은 오랫동안 재방출.' },

  { id:213, type:'ox', lecture:'9강', category:'중금속 기초',
    question:'카드뮴(Cd)의 신장 내 생물학적 반감기는 10~30년으로 매우 길다.',
    answer:true, explanation:'카드뮴-Metallothionein 복합체로 신장에 장기 저장. 반감기 10~30년이 가장 대표적 특성.' },

  { id:214, type:'ox', lecture:'10강', category:'노출평가',
    question:'TLV-TWA는 하루 8시간, 주 40시간 반복 노출 시 건강에 해롭지 않은 시간가중평균 농도이다.',
    answer:true, explanation:'TWA(Time-Weighted Average): 8시간 평균 기준. ACGIH TLV-TWA가 대표적.' },

  { id:215, type:'ox', lecture:'10강', category:'독성동태',
    question:'독성동태(Toxicokinetics) ADME의 순서는 흡수(A) → 분포(D) → 대사(M) → 배설(E)이다.',
    answer:true, explanation:'ADME = Absorption → Distribution → Metabolism → Excretion. 독성학 기본 개념.' },

  { id:216, type:'ox', lecture:'10강', category:'독성동태',
    question:'생체변환 1상 반응의 CYP450 효소는 주로 폐(lung)에 분포한다.',
    answer:false, explanation:'CYP450은 주로 간(liver)에 분포. 소장·폐·신장에도 일부 존재.' },

  { id:217, type:'ox', lecture:'11-12강', category:'연관·인과',
    question:'코호트(Cohort) 연구는 노출군·비노출군을 현재에서 미래로 추적하는 전향적 연구이다.',
    answer:true, explanation:'전향적 코호트: 현재 노출 확인 → 미래 질병 발생 추적. 시간·비용 많이 소요.' },

  { id:218, type:'ox', lecture:'11-12강', category:'연관·인과',
    question:'환자-대조군(Case-Control) 연구는 전향적(Prospective) 연구이다.',
    answer:false, explanation:'환자-대조군은 후향적(Retrospective) 연구. 질병군과 대조군에서 과거 노출 비교.' },

  { id:219, type:'ox', lecture:'11-12강', category:'제도·법규',
    question:'GHS(Globally Harmonized System)는 화학물질의 분류 기준과 경고표지·SDS 형식을 국제적으로 통일하는 시스템이다.',
    answer:true, explanation:'GHS: UN 주관. 화학물질 분류·표지·SDS 국제 표준화.' },

  { id:220, type:'ox', lecture:'11-12강', category:'제도·법규',
    question:'GHS 기반 SDS(물질안전보건자료)는 총 16가지 항목으로 구성된다.',
    answer:true, explanation:'SDS 16항목: 화학물질 정보·유해성·구성성분·응급처치·소화·누출·취급·저장·노출기준 등.' },

  { id:221, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 포토리소그래피의 세부 단계는 "PR 도포 → 노광 → 현상" 순이다.',
    answer:true, explanation:'PR 도포(Coat) → 소프트 베이크 → 노광(UV Exposure) → 현상(TMAH) → 하드 베이크.' },

  { id:222, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 에피택시(Epitaxy) 공정은 웨이퍼 위에 추가 실리콘 결정층을 성장시키는 공정이다.',
    answer:true, explanation:'에피택시: 기판 결정 구조와 동일한 방향으로 원자 배열 성장. 소자 특성 향상.' },

  { id:223, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 CMP 공정은 화학적·기계적 방법으로 웨이퍼 표면을 평탄화하는 공정이다.',
    answer:true, explanation:'CMP(Chemical Mechanical Planarization): 슬러리+연마 패드. 나노 수준 평탄화.' },

  { id:224, type:'ox', lecture:'13-14강', category:'반도체 안전',
    question:'이소프로필알코올(IPA)은 반도체 웨이퍼·장비 세정에 사용되며, 가연성·폭발성이 있다.',
    answer:true, explanation:'IPA(C₃H₈O): 폭발하한(LEL) 2%, 인화점 12°C. 정전기·화기 관리 필수.' },

  { id:225, type:'ox', lecture:'9강', category:'아르신',
    question:'아르신(AsH₃)의 용혈 메커니즘은 글루타치온(GSH) 고갈 → 산화 손상 → 적혈구 파괴이다.',
    answer:true, explanation:'아르신 → GSH 고갈 → ROS 축적 → 적혈구 막 산화 손상 → 용혈 → 황달·빈혈·신부전.' },

  { id:226, type:'ox', lecture:'9강', category:'중금속 기초',
    question:'납 킬레이트 치료제로 Ca-EDTA(정주)와 DMSA/Succimer(경구)가 사용된다.',
    answer:true, explanation:'킬레이트제 + 중금속 → 수용성 복합체 → 신장 배설. 납에는 Ca-EDTA, DMSA 사용.' },

  { id:227, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'아산화질소(N₂O)는 반도체 산화막·질화막 형성 공정에서 산화제로 사용된다.',
    answer:true, explanation:'N₂O: 고온에서 분해되어 산소 공급 → SiO₂ 또는 Si₃N₄ 형성에 활용.' },

  { id:228, type:'ox', lecture:'11-12강', category:'제도·법규',
    question:'OSHA PEL은 미국 법정 허용 노출기준이고, ACGIH TLV는 산업위생 전문가의 자발적 권고 기준이다.',
    answer:true, explanation:'OSHA PEL: 법적 강제력. ACGIH TLV: 자발적이지만 과학적으로 자주 업데이트. 실제로 더 엄격한 경우 많음.' },

  { id:229, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 다이싱(Dicing)은 전공정(Fab) 완료 후 웨이퍼를 개별 칩으로 절단하는 후공정이다.',
    answer:true, explanation:'다이싱: 다이아몬드 블레이드나 레이저 절단. 후공정(패키징) 첫 단계.' },

  { id:230, type:'ox', lecture:'9강', category:'방사성 원소',
    question:'베타(β)선 차폐에는 알루미늄판이나 플라스틱이 사용된다.',
    answer:true, explanation:'알파선=종이. 베타선=알루미늄·플라스틱. 감마선=납·콘크리트. 중성자=물·파라핀.' },

  /* ══════════════════════════════════════════════════
     ★ 추가 4지선다 (231~255) — 순서·ADME·역학 포함
  ══════════════════════════════════════════════════ */

  { id:231, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'포토리소그래피(Photolithography) 세부 단계의 올바른 순서는?',
    options:['노광 → PR 도포 → 현상','현상 → 노광 → PR 도포','PR 도포 → 현상 → 노광','PR 도포 → 노광 → 현상'],
    answer:3, explanation:'PR 도포(Coat) → 소프트 베이크 → 노광(UV) → 현상(TMAH) → 하드 베이크.' },

  { id:232, type:'multiple', lecture:'10강', category:'독성동태',
    question:'독성동태(Toxicokinetics) ADME의 올바른 순서는?',
    options:['대사(M) → 흡수(A) → 분포(D) → 배설(E)','흡수(A) → 분포(D) → 대사(M) → 배설(E)','흡수(A) → 대사(M) → 분포(D) → 배설(E)','분포(D) → 흡수(A) → 대사(M) → 배설(E)'],
    answer:1, explanation:'ADME = Absorption(흡수) → Distribution(분포) → Metabolism(대사) → Excretion(배설).' },

  { id:233, type:'multiple', lecture:'11-12강', category:'경영시스템',
    question:'ISO 경영시스템 표준의 발전 순서로 올바른 것은?',
    options:['ISO 9000 → ISO 45000 → ISO 14000','ISO 14000 → ISO 9000 → ISO 45000','ISO 9000 → ISO 14000 → ISO 45000','ISO 45000 → ISO 14000 → ISO 9000'],
    answer:2, explanation:'ISO 9000(1987, 품질) → ISO 14000(1996, 환경) → ISO 45000(2018, 안전보건) 순으로 발전.' },

  { id:234, type:'multiple', lecture:'11-12강', category:'연관·인과',
    question:'전향적 코호트 연구(Prospective Cohort Study)의 특징으로 옳은 것은?',
    options:['질병군·대조군에서 과거 노출을 후향적으로 비교','특정 시점에서 노출·질병을 동시에 단면 파악','현재 노출군·비노출군을 미래로 추적하여 질병 발생률 비교','실험적으로 노출을 통제하는 무작위 대조 실험'],
    answer:2, explanation:'전향적 코호트: 현재 노출 확인 → 미래 질병 추적. 시간·비용 많이 소요되나 인과관계 증거가 강함.' },

  { id:235, type:'multiple', lecture:'11-12강', category:'연관·인과',
    question:'환자-대조군(Case-Control) 연구의 특징으로 옳은 것은?',
    options:['노출군을 미래로 추적하는 전향적 연구','질병군(Case)과 비질병군(Control)의 과거 노출을 후향적으로 비교','특정 시점 단면 조사','무작위 배정으로 노출을 통제'],
    answer:1, explanation:'환자-대조군: 후향적(Retrospective). 질병군↔대조군 과거 노출 비교. 오즈비(OR) 산출. 희귀 질환에 효율적.' },

  { id:236, type:'multiple', lecture:'9강', category:'발암성',
    question:'IARC 발암성 분류 중 "인체 발암성 증거 충분(Carcinogenic to humans)"에 해당하는 군은?',
    options:['3군','2B군','2A군','1군'],
    answer:3, explanation:'IARC 1군: 인체 발암성 확정. 2A군: 가능성 높음. 2B군: 가능성 있음. 3군: 분류 불가.' },

  { id:237, type:'multiple', lecture:'9강', category:'중금속 기초',
    question:'납(Pb)의 생물학적 반감기를 바르게 설명한 것은?',
    options:['혈중 납(수십 년) > 뼈 납(28~36일)','혈중·뼈 반감기 모두 동일','혈중 납(약 28~36일) < 뼈 납(수십 년)','혈중·뼈 반감기 모두 24시간 이내'],
    answer:2, explanation:'혈중 납 T½ ≈ 28~36일. 뼈 납 T½ ≈ 10~30년. 뼈에 축적된 납이 오래 지속되는 이유.' },

  { id:238, type:'multiple', lecture:'10강', category:'노출평가',
    question:'작업환경 노출기준 중 "단 한 순간도 초과해서는 안 되는" 기준은?',
    options:['TWA(시간가중평균)','STEL(단시간 노출기준)','Ceiling(C, 최고허용농도)','LOAEL'],
    answer:2, explanation:'Ceiling(최고허용농도): 순간이라도 초과 불가. TWA는 8시간 평균. STEL은 15분 평균 기준.' },

  { id:239, type:'multiple', lecture:'11-12강', category:'제도·법규',
    question:'GHS(Globally Harmonized System)가 규정하는 내용이 아닌 것은?',
    options:['화학물질 유해·위험 분류 기준','경고 표지(픽토그램·신호어) 요소','SDS(물질안전보건자료) 16항목 형식','작업환경측정 주기 및 방법'],
    answer:3, explanation:'GHS: 분류·표지·SDS를 국제 통일. 작업환경측정 주기는 각국 산업안전보건법에서 별도 규정.' },

  { id:240, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 CMP(Chemical Mechanical Planarization) 공정의 목적은?',
    options:['도판트 이온을 웨이퍼에 주입','웨이퍼 표면을 평탄화하여 다층 배선 형성','회로 패턴을 감광제로 전사','잔류 포토레지스트를 제거'],
    answer:1, explanation:'CMP: 슬러리+연마 패드로 표면 평탄화. 나노 수준 균일 평탄면 확보. 다층 배선 필수 공정.' },

  { id:241, type:'multiple', lecture:'9강', category:'중금속 기초',
    question:'납(Pb) 킬레이트 치료제로 사용되는 것은?',
    options:['글루콘산 칼슘(Calcium Gluconate)','글루타치온(GSH)','Ca-EDTA 또는 DMSA(Succimer)','N-아세틸시스테인(NAC)'],
    answer:2, explanation:'납 킬레이트 치료: Ca-EDTA(정주), DMSA/Succimer(경구). 킬레이트제+납 → 복합체 → 소변 배설.' },

  { id:242, type:'multiple', lecture:'9강', category:'방사성 원소',
    question:'방사선 차폐 재료와 방사선 종류의 연결이 올바른 것은?',
    options:['알파선 – 두꺼운 납','베타선 – 종이 한 장','감마선 – 납·콘크리트','중성자선 – 알루미늄판'],
    answer:2, explanation:'알파=종이·피부. 베타=알루미늄·플라스틱. 감마=납·콘크리트. 중성자=물·파라핀(수소 함유).' },

  { id:243, type:'multiple', lecture:'9강', category:'아르신',
    question:'아르신(AsH₃) 용혈 메커니즘의 올바른 순서는?',
    options:['ALAD 억제 → ZPP 증가 → 용혈','아르신 흡수 → GSH 고갈 → 산화 손상 → 용혈','F⁻ + Ca²⁺ → CaF₂ → 막 파괴','SH기 결합 → 효소 불활성화 → 막 파괴'],
    answer:1, explanation:'아르신 → GSH(글루타치온) 고갈 → 산화 스트레스 → 적혈구 막 손상 → 용혈. ALAD 억제는 납의 기전.' },

  { id:244, type:'multiple', lecture:'11-12강', category:'연관·인과',
    question:'단면 연구(Cross-sectional Study)의 특징으로 가장 적절한 것은?',
    options:['과거 노출을 소급하여 질병군과 비교','특정 시점에서 노출·질병 상태를 동시에 파악','미래로 추적하여 질병 발생률 비교','실험적으로 노출 통제'],
    answer:1, explanation:'단면 연구: 현재 시점 스냅샷. 유병률 파악에 적합. 선후관계 불명확이 단점.' },

  { id:245, type:'multiple', lecture:'10강', category:'노출평가',
    question:'STEL(단시간 노출기준)에 대한 설명으로 올바른 것은?',
    options:['8시간 시간가중평균 농도 기준','단 한 순간도 초과 불가한 최고치','15분 이하 단시간 노출이 허용되는 최고 농도','법적으로 금지된 최소 농도'],
    answer:2, explanation:'STEL(Short-Term Exposure Limit): 15분 이하 단시간 노출이 하루 4회까지 허용되는 최고 농도.' },

  { id:246, type:'multiple', lecture:'9강', category:'중금속 기초',
    question:'카드뮴(Cd)의 생물학적 반감기가 극히 긴 이유는?',
    options:['카드뮴이 뼈에 강하게 결합하기 때문','카드뮴-Metallothionein 복합체로 신장에 장기 저장되기 때문','카드뮴이 혈액에서 분해되지 않기 때문','카드뮴의 장간순환이 특히 강하기 때문'],
    answer:1, explanation:'카드뮴-MT 복합체: 신장 피질에 장기 저장. 방출·배설 속도 극히 느림 → T½ 10~30년.' },

  { id:247, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'CVD(Chemical Vapor Deposition) 공정에서 자연발화 위험이 있는 가스는?',
    options:['질소(N₂)','이산화탄소(CO₂)','실란(SiH₄)','아르곤(Ar)'],
    answer:2, explanation:'SiH₄(실란): 자연발화성(Pyrophoric). CVD에서 실리콘막 형성에 사용. 누출 즉시 공기와 반응하여 화재.' },

  { id:248, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'반도체 공장에서 이소프로필알코올(IPA) 취급 시 가장 주의할 위험은?',
    options:['중금속 독성','피부 침투로 인한 심장마비','가연성·폭발성(폭발하한 2%)','산소결핍 유발'],
    answer:2, explanation:'IPA: 폭발하한 2%, 인화점 12°C. 정전기·화기 관리 필수. 누출 시 폭발 위험.' },

  { id:249, type:'multiple', lecture:'9강', category:'중금속 기초',
    question:'무기비소(Inorganic As)와 유기비소(Organic As)의 독성 비교로 옳은 것은?',
    options:['유기비소가 무기비소보다 독성 강함','무기비소가 유기비소보다 독성 강함','두 형태의 독성은 동일','형태와 무관하게 양에만 의존'],
    answer:1, explanation:'무기비소(As³⁺·As⁵⁺) > 유기비소(MMAV·DMAV) 독성. 무기 3가(As³⁺)가 가장 독성 강함.' },

  { id:250, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 구리(Cu) 배선 형성 시 적용하는 공법은?',
    options:['이온주입법','다마신(Damascene) 공법','습식식각법','포토리소그래피만으로 형성'],
    answer:1, explanation:'다마신 공법: 절연막에 홈을 파고 Cu를 전기도금으로 채운 후 CMP로 평탄화. Cu 배선 표준 공법.' },

  { id:251, type:'multiple', lecture:'11-12강', category:'제도·법규',
    question:'PSM(공정안전관리, Process Safety Management) 적용 대상은?',
    options:['모든 사업장','일정 임계량 이상 유해·위험물질 취급 사업장','반도체 공장에만 적용','연구소에만 적용'],
    answer:1, explanation:'PSM: 대량 유해위험물질(임계량 이상) 취급 사업장 의무 적용. 공정안전보고서·위험성평가 포함.' },

  { id:252, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'밀폐공간 진입 전 가장 중요한 첫 번째 안전 조치는?',
    options:['방독마스크 착용','작업 완료 후 산소 농도 측정','진입 전 산소·유해가스 농도 측정 및 환기 확보','FOUP 점검'],
    answer:2, explanation:'밀폐공간: ①진입 전 산소(18% 이상)·유해가스 농도 측정 ②충분한 환기 ③감시인 배치 ④SCBA 준비.' },

  { id:253, type:'multiple', lecture:'9강', category:'중금속 기초',
    question:'킬레이트제(Chelating Agent)의 작용 원리는?',
    options:['항산화효소를 활성화하여 ROS 제거','금속 이온과 안정적 복합체 형성 → 소변 배설 촉진','장간순환을 차단하여 흡수 억제','혈뇌장벽을 강화하여 신경 보호'],
    answer:1, explanation:'킬레이트제: 금속 이온과 결합 → 수용성 복합체 → 신장으로 배설 촉진. 체내 자유 이온 감소.' },

  { id:254, type:'multiple', lecture:'10강', category:'독성동태',
    question:'혈뇌장벽(BBB)을 통과하기 어려운 물질의 특성은?',
    options:['지용성이 높고 분자량이 작다','수용성이 높고 분자량이 크다','이온화되지 않는 중성 분자','지질이중막과 친화성이 높다'],
    answer:1, explanation:'BBB 통과 어려운 물질: 수용성↑·분자량 큰 물질·이온화된 분자. 유기수은은 지용성이라 BBB 쉽게 통과.' },

  { id:255, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'반도체 공장 화학물질 누출 사고 시 대응 순서로 가장 적절한 것은?',
    options:['화학물질 확인 → 복구 → 신고 → 대피','신고 → 확인 → 복구 → 대피','감지·인지 → 즉시 대피·경보 → 신고 → 누출 차단','누출 차단 → 피해자 구조 → 신고 → 대피'],
    answer:2, explanation:'화학물질 누출: 감지·인지 → 즉시 대피+경보 → 119 신고 → 전문가 지휘 하 누출 차단.' },

  /* ══════════════════════════════════════════════════
     ★ 추가 빈칸 (256~270)
  ══════════════════════════════════════════════════ */

  { id:256, type:'fill', lecture:'10강', category:'독성동태',
    question:'ADME 순서: 흡수(A) → [①](D) → 대사(M) → 배설(E)',
    blanks:[{id:'①',label:'①'}],
    answers:[['분포','Distribution','distribution']],
    explanation:'ADME = Absorption → Distribution → Metabolism → Excretion.' },

  { id:257, type:'fill', lecture:'10강', category:'노출평가',
    question:'8시간 시간가중평균 노출기준을 나타내는 약자는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['TWA','TLV-TWA']],
    explanation:'TWA(Time-Weighted Average): 8시간 평균. ACGIH TLV-TWA, OSHA PEL이 대표적.' },

  { id:258, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'포토리소그래피에서 PR 도포 후 [①](UV 조사) → 현상의 순서로 진행된다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['노광','Exposure','exposure','UV노광']],
    explanation:'PR 도포 → 노광(Exposure) → 현상(Development). 노광 = UV 조사로 PR 패턴 형성.' },

  { id:259, type:'fill', lecture:'11-12강', category:'연관·인과',
    question:'코호트 연구에서 노출군과 비노출군의 질병 발생률의 비(比)를 [①]이라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['상대위험도','RR','Relative Risk','비교위험도']],
    explanation:'RR(Relative Risk, 상대위험도) = 노출군 발생률 / 비노출군 발생률. RR>1 = 노출이 위험요인.' },

  { id:260, type:'fill', lecture:'9강', category:'발암성',
    question:'IARC 발암성 분류에서 인체 발암성이 확인된 물질은 [①]군으로 분류된다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['1','1군','Group 1']],
    explanation:'IARC 1군: Carcinogenic to humans. 6가 크롬·비소·벤젠·석면 등.' },

  { id:261, type:'fill', lecture:'11-12강', category:'제도·법규',
    question:'GHS 기반 화학물질 위험정보 문서인 SDS(물질안전보건자료)는 총 [①]개 항목으로 구성된다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['16']],
    explanation:'SDS 16항목: 화학물질 정보·유해성·구성성분·응급처치·소화·누출·취급·저장·노출기준·물리화학성질·독성·환경·폐기·운송·법규·기타.' },

  { id:262, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 웨이퍼 표면을 화학적·기계적으로 평탄화하는 공정의 약자는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['CMP','화학기계연마']],
    explanation:'CMP(Chemical Mechanical Planarization): 슬러리+연마 패드로 나노 수준 평탄화.' },

  { id:263, type:'fill', lecture:'9강', category:'방사성 원소',
    question:'알파(α)선을 차폐하는 데 충분한 재료는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['종이','종이한장','종이 한 장','피부']],
    explanation:'알파선: 종이 한 장 또는 피부 표면으로 차단 가능. 단 내부 피폭 시 매우 위험.' },

  { id:264, type:'fill', lecture:'9강', category:'방사성 원소',
    question:'감마(γ)선 차폐에 주로 사용되는 재료는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['납','납(Pb)','콘크리트','Pb']],
    explanation:'감마선: 높은 투과력으로 납·콘크리트 등 고밀도 재료 필요.' },

  { id:265, type:'fill', lecture:'9강', category:'중금속 기초',
    question:'납(Pb)의 혈중 생물학적 반감기는 약 [①]~[②]일이다.',
    blanks:[{id:'①',label:'①'},{id:'②',label:'②'}],
    answers:[['28'],['36']],
    explanation:'혈중 납 T½ ≈ 28~36일. 뼈에서는 10~30년.' },

  { id:266, type:'fill', lecture:'9강', category:'중금속 기초',
    question:'카드뮴(Cd)의 신장 내 생물학적 반감기는 약 [①]~[②]년이다.',
    blanks:[{id:'①',label:'①'},{id:'②',label:'②'}],
    answers:[['10'],['30']],
    explanation:'카드뮴 T½ ≈ 10~30년(평균 20년). Metallothionein 복합체로 신장에 장기 저장.' },

  { id:267, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 웨이퍼 위에 추가 실리콘 결정층을 성장시키는 공정을 [①](이)라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['에피택시','에피탁시','Epitaxy','epitaxy']],
    explanation:'에피택시(Epitaxy): 기판 결정 구조와 동일한 방향으로 원자 배열 성장.' },

  { id:268, type:'fill', lecture:'9강', category:'아르신',
    question:'아르신(AsH₃)이 적혈구를 파괴하는 현상을 [①](이)라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['용혈','용혈작용','Hemolysis','hemolysis']],
    explanation:'용혈(Hemolysis): 아르신 → GSH 고갈 → 산화 손상 → 적혈구 파괴 → 황달·빈혈·신부전.' },

  { id:269, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 전공정 완료 후 웨이퍼를 개별 칩으로 절단하는 공정을 [①](이)라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['다이싱','Dicing','dicing']],
    explanation:'다이싱(Dicing): 다이아몬드 블레이드나 레이저로 웨이퍼를 개별 다이(Die)로 절단.' },

  { id:270, type:'fill', lecture:'9강', category:'중금속 기초',
    question:'납 중독 시 경구 투여 가능한 킬레이트 치료제는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['DMSA','Succimer','succimer']],
    explanation:'DMSA(Dimercaptosuccinic acid, Succimer): 경구 투여 납 킬레이트제. Ca-EDTA는 정주.' },

  /* ══════════════════════════════════════════════════
     ★ 추가 주관식 (271~275)
  ══════════════════════════════════════════════════ */

  { id:271, type:'short', lecture:'9강', category:'발암성',
    question:'IARC 발암성 분류 체계를 설명하고, 반도체 공정과 관련된 IARC 1군 발암물질을 3가지 이상 나열하시오.',
    modelAnswer:'[IARC 분류]\n1군: 인체 발암성 확정(충분한 증거)\n2A군: 가능성 높음(limited human + sufficient animal)\n2B군: 가능성 있음(limited human or sufficient animal)\n3군: 분류 불가\n\n[반도체 관련 1군]\n①비소(As) 및 무기비소: 피부암·폐암·방광암\n②6가 크롬(Cr⁶⁺): 폐암·비강암\n③벤젠(Benzene): AML(급성골수성백혈병)\n④석면: 중피종(참고)',
    explanation:'IARC 1군: 6가 크롬·비소·벤젠이 반도체 공정 관련 핵심.' },

  { id:272, type:'short', lecture:'10강', category:'노출평가',
    question:'생물학적 모니터링(BM)의 장점과 단점을 각각 3가지 이상 서술하시오.',
    modelAnswer:'[장점]\n①피부·소화기·호흡기 등 모든 경로의 총 노출 통합 평가\n②실제 체내 흡수량(내부 노출) 반영\n③개인별 대사·흡수 차이 포함\n\n[단점]\n①채혈·채뇨 등 침습 또는 협조 필요\n②시료 채취 시기·보관 조건이 결과에 영향\n③모든 물질에 BEI(생물학적 노출지수)가 설정되어 있지 않음\n④원인 특이성 낮은 물질은 해석 어려움',
    explanation:'BM 장점: 총 노출 통합·개인 차이 반영. 단점: 채취 제약·BEI 부족.' },

  { id:273, type:'short', lecture:'12-13강', category:'반도체 안전',
    question:'반도체 공장 클린룸 작업자에서 보고된 주요 직업성 건강 문제를 4가지 이상 서술하시오.',
    modelAnswer:'①생식독성: 여성 자연유산 증가·생리불순·불임 (Glycol ethers, 2-bromopropane 등)\n②혈액암: 벤젠 관련 AML·NHL\n③신경계 증상: 유기용제(IPA, 아세톤) 만성 노출 → 두통·집중력 저하\n④피부질환: 화학물질 접촉성 피부염\n⑤근골격계 질환: 반복 동작·불량 자세\n⑥열 스트레스: 방진복 착용에 의한 고온',
    explanation:'클린룸 직업병: 생식독성·혈액암·신경·피부·근골격계.' },

  { id:274, type:'short', lecture:'13-14강', category:'반도체 안전',
    question:'LOTO(Lockout/Tagout) 절차를 단계 순서대로 서술하시오.',
    modelAnswer:'①에너지원 파악: 전기·가스·압축공기·유압 등 모든 에너지원 확인\n②장비 정지: 정상 절차로 장비 가동 중단\n③에너지원 격리: 차단기 OFF, 밸브 잠금 등 모든 에너지원 차단\n④잠금(Lockout): 차단점에 자물쇠 적용 → 작업자 본인만 열쇠 보관\n⑤표지(Tagout): 경고 태그 부착 "작업 중 투입 금지"\n⑥잔류 에너지 제거: 잔류 압력 해제·방전\n⑦에너지 영점 확인: 시동 버튼으로 격리 확인\n⑧작업 수행 → 완료 후 역순 복구',
    explanation:'LOTO: 격리→잠금→표지→잔류에너지 제거→확인→작업.' },

  { id:275, type:'short', lecture:'9강', category:'중금속 기초',
    question:'킬레이트 치료(Chelation Therapy)의 원리와 주요 약물을 서술하시오.',
    modelAnswer:'[원리] 킬레이트제가 중금속 이온과 결합 → 안정적 수용성 복합체 형성 → 신장·담즙으로 배설 촉진. 체내 자유 이온 상태 감소 → 독성 경감\n\n[주요 약물]\n①Ca-EDTA: 납(Pb) 정주 치료\n②DMSA(Succimer): 납·비소·수은 경구 치료. 소아 납 중독 1차 선택\n③DMPS: 수은·비소 치료\n④BAL(Dimercaprol): 비소·수은·납 주사\n⑤Deferoxamine: 철(Fe) 과부하',
    explanation:'킬레이트 원리: 금속+킬레이트→복합체→배설. 납=Ca-EDTA/DMSA, 수은=DMPS.' },

  /* ══════════════════════════════════════════════════
     ★ 추가 설명 맞추기 (276~285)
  ══════════════════════════════════════════════════ */

  { id:276, type:'match', lecture:'9강', category:'중금속 기초',
    question:'다음 설명이 가리키는 것은?\n\n"중금속 이온과 결합하여 수용성 복합체를 형성하고 소변 배설을 촉진하는 해독 요법. 납에는 Ca-EDTA·DMSA, 수은에는 DMPS 사용"',
    options:['항산화 치료','킬레이트 치료(Chelation Therapy)','생체변환 억제 요법','면역 치료'],
    answer:1, explanation:'킬레이트 치료: 킬레이트제 + 중금속 → 수용성 복합체 → 신장 배설.' },

  { id:277, type:'match', lecture:'11-12강', category:'연관·인과',
    question:'다음 설명이 가리키는 역학 연구 방법은?\n\n"현재 노출 여부로 노출군·비노출군을 나누고 미래로 추적하여 질병 발생률을 비교하는 전향적 연구"',
    options:['환자-대조군 연구','단면 연구','전향적 코호트 연구','메타분석'],
    answer:2, explanation:'전향적 코호트: 현재 노출 → 미래 추적. 인과관계 증거가 강한 연구 설계.' },

  { id:278, type:'match', lecture:'11-12강', category:'제도·법규',
    question:'다음 설명이 가리키는 것은?\n\n"화학물질 분류 기준, 경고 표지(픽토그램·신호어), SDS 16항목 형식을 UN 주관으로 국제 통일한 시스템"',
    options:['REACH','SDS','GHS(국제조화시스템)','PSM'],
    answer:2, explanation:'GHS: Globally Harmonized System. UN 주관. 분류·표지·SDS 국제 표준화.' },

  { id:279, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 것은?\n\n"반도체 다층 배선 형성 시 웨이퍼 표면을 나노 수준으로 평탄화하는 공정. 슬러리(Slurry)와 연마 패드 사용"',
    options:['이온주입','에피택시','CMP(화학기계연마)','CVD(화학기상증착)'],
    answer:2, explanation:'CMP(Chemical Mechanical Planarization): 화학적+기계적 방법으로 표면 평탄화.' },

  { id:280, type:'match', lecture:'9강', category:'아르신',
    question:'다음 설명이 가리키는 것은?\n\n"아르신(AsH₃) 흡수 후 GSH 고갈 → 산화 손상 → 적혈구 파괴로 이어지는 현상. 황달·빈혈·신부전 유발"',
    options:['골연화증','비중격천공','용혈(Hemolysis)','ALAD 억제'],
    answer:2, explanation:'용혈(Hemolysis): 아르신의 대표 급성독성. 황달·빈혈·신부전으로 이어짐.' },

  { id:281, type:'match', lecture:'10강', category:'노출평가',
    question:'다음 설명이 가리키는 것은?\n\n"하루 8시간, 주 40시간 반복 노출 시 건강에 영향이 없는 시간가중평균 노출 농도 기준"',
    options:['STEL(단시간 노출기준)','Ceiling(최고허용농도)','TWA(시간가중평균)','IDLH(즉시 위험 농도)'],
    answer:2, explanation:'TWA(Time-Weighted Average): 8시간 시간가중평균. ACGIH TLV-TWA, OSHA PEL이 대표.' },

  { id:282, type:'match', lecture:'11-12강', category:'연관·인과',
    question:'다음 설명이 가리키는 역학 연구 방법은?\n\n"특정 시점에서 연구 집단의 노출과 질병 상태를 동시에 측정하는 연구. 유병률 파악에 적합하나 선후관계 파악이 어렵다"',
    options:['코호트 연구','환자-대조군 연구','단면 연구(Cross-sectional)','메타분석'],
    answer:2, explanation:'단면 연구: 현재 시점 스냅샷. 비용·시간 절약. 인과관계 파악 한계.' },

  { id:283, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 것은?\n\n"반도체 전공정 완료 후 패키징 첫 단계. 다이아몬드 블레이드나 레이저로 웨이퍼를 개별 칩(Die)으로 절단하는 공정"',
    options:['에피택시','이온주입','다이싱(Dicing)','CMP'],
    answer:2, explanation:'다이싱(Dicing): 후공정 첫 단계. 웨이퍼를 개별 다이(Die, 칩)로 절단.' },

  { id:284, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 것은?\n\n"실리콘 기판 위에 동일한 결정 구조의 실리콘 박막을 성장시키는 공정. 소자 특성 향상 목적. SiH₄ 등 가스 사용"',
    options:['CMP','이온주입','에피택시(Epitaxy)','스트리핑'],
    answer:2, explanation:'에피택시(Epitaxial Growth): 기판 위 단결정 막 성장. 불순물 제어·소자 특성 향상.' },

  { id:285, type:'match', lecture:'11-12강', category:'연관·인과',
    question:'다음 설명이 가리키는 것은?\n\n"질병군(Case)과 대조군(Control)에서 과거 노출력을 후향적으로 비교하는 역학 연구. 희귀 질환 연구에 효율적. 오즈비(OR) 산출"',
    options:['전향적 코호트 연구','단면 연구','환자-대조군 연구','무작위 대조 실험'],
    answer:2, explanation:'환자-대조군 연구(Case-Control): 후향적, 오즈비(OR) 산출. 적은 비용으로 희귀 질환 연구 가능.' },

  /* ══════════════════════════════════════════════════
     ★ 3차 추가 OX (286~320)
  ══════════════════════════════════════════════════ */

  { id:286, type:'ox', lecture:'11-12강', category:'제도·법규',
    question:'산업재해보상보험법(산재법)은 근로자의 치료비·휴업급여·장해급여·유족급여 등을 보상하는 사회보험이다.',
    answer:true, explanation:'산재법 급여: 요양급여(치료비)·휴업급여(소득보전)·장해급여·유족급여·간병급여 등 포함. 사용자 100% 부담(보험료).' },

  { id:287, type:'ox', lecture:'11-12강', category:'제도·법규',
    question:'우리나라 산업재해 발생 사업장의 약 80%는 50인 미만 소규모 사업장이다.',
    answer:true, explanation:'소규모 사업장(50인 미만)에서 재해 발생 집중. 안전관리 인력·시스템 부족이 주요 원인.' },

  { id:288, type:'ox', lecture:'11-12강', category:'제도·법규',
    question:'우리나라 산재 사망 통계에서 사고 사망보다 질병 사망이 더 많다.',
    answer:true, explanation:'직업성 질환 사망(뇌심혈관계·암·근골격계 등)이 사고 사망을 상회. 잠복기 긴 만성 질환 특성.' },

  { id:289, type:'ox', lecture:'13-14강', category:'반도체 안전',
    question:'삼성전자 반도체 직업병 보상위원회(삼성-반올림 합의)는 산재법이 아닌 자체 재정지원 방식으로 보상을 시행한다.',
    answer:true, explanation:'삼성 보상위원회: 산재법과 별도 자율 보상. 반올림과의 합의로 2018년 출범. 산재 인정과는 법적으로 다름.' },

  { id:290, type:'ox', lecture:'12-13강', category:'반도체 기초',
    question:'PCB(Printed Circuit Board)는 전자소자를 연결·지지하는 인쇄회로기판이며, IC(Integrated Circuit)와 구분된다.',
    answer:true, explanation:'PCB: 배선 연결 기판. IC: 트랜지스터 등 수천~수십억 개 소자를 실리콘 칩에 집적한 회로.' },

  { id:291, type:'ox', lecture:'12-13강', category:'반도체 기초',
    question:'반도체 생산의 3대 공정은 ①웨이퍼 제조, ②Fab(전공정), ③패키징·테스트(후공정)이다.',
    answer:true, explanation:'웨이퍼 제조(잉곳→슬라이싱) → 전공정(Fab, 회로 형성) → 후공정(패키징·테스트).' },

  { id:292, type:'ox', lecture:'12-13강', category:'반도체 기초',
    question:'실리콘 웨이퍼는 모래(SiO₂)에서 탄소 환원으로 순수 Si를 얻은 후 잉곳(Ingot)으로 성장시켜 슬라이싱하여 만든다.',
    answer:true, explanation:'SiO₂ + C → 전기용광로 → 순수 Si → 초크랄스키법 잉곳 성장 → 웨이퍼 슬라이싱.' },

  { id:293, type:'ox', lecture:'12-13강', category:'반도체 기초',
    question:'반도체 웨이퍼 크기는 시대가 지남에 따라 작아지는 추세이다.',
    answer:false, explanation:'웨이퍼 크기는 점점 커짐: 50→75→100→125→150→200→300mm. 크기 증가 = 생산성 향상.' },

  { id:294, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'포토리소그래피 공정에서 수은 UV 램프가 파손되면 수은 증기 노출 위험이 발생한다.',
    answer:true, explanation:'포토 공정 UV 광원: 수은 램프. 파손 시 수은 증기 노출 → 신경독성. 오존(O₃)도 UV 조사로 발생.' },

  { id:295, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'포토리소그래피 공정에서 UV 조사로 오존(O₃)이 생성될 수 있다.',
    answer:true, explanation:'UV 램프(단파장)가 공기 중 산소를 분해 → O₃ 발생. 폐 자극·호흡기 손상.' },

  { id:296, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 이온주입 장비 중 고전압 임플란터(IHE)만 X선(제동복사)을 발생시킨다.',
    answer:true, explanation:'IHE(High Energy Implanter, 200~400kV): 고전압 이온 가속 → X선 발생. 중전압·고전류 임플란터는 X선 발생 없음.' },

  { id:297, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'이온주입 장비의 이온박스 내부 정비 시 비소(As) 분말 노출 가능성이 있다.',
    answer:true, explanation:'이온주입 후 이온박스 내벽에 As, P 등 도판트 물질 잔류. 정비 시 분진 흡입 위험.' },

  { id:298, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'금속증착 공정에서 정비 작업자가 운전 작업자보다 유해금속에 더 많이 노출된다.',
    answer:true, explanation:'금속증착(PVD/CVD): 운전 중은 진공 밀폐. 정비 시 챔버 개방 → 증착된 금속(Al, Cu, W, Ni 등) 분진 노출.' },

  { id:299, type:'ox', lecture:'11-12강', category:'탄소중립',
    question:'공정한 전환(Just Transition)은 고탄소 산업에서 저탄소 경제로 전환할 때 발생하는 경제적·사회적 비용을 공정하게 분담하는 개념이다.',
    answer:true, explanation:'Just Transition: ILO·UN 지지. 탄소집약 산업 근로자·지역사회가 전환 과정에서 불이익을 받지 않도록 지원.' },

  { id:300, type:'ox', lecture:'11-12강', category:'탄소중립',
    question:'칼 세이건의 코스모스 우주달력에서 현생인류의 출현은 12월 31일 23시 59분에 해당한다.',
    answer:true, explanation:'138억 년 우주 역사를 1년으로 압축. 호모 사피엔스(약 20만 년 전) ≈ 12월 31일 23:52, 기록 역사 ≈ 12월 31일 23:59:32.' },

  { id:301, type:'ox', lecture:'13-14강', category:'반도체 안전',
    question:'AMHS(자동물류시스템)는 클린룸 내 웨이퍼 박스(FOUP)를 천장 레일로 자동 운반하여 작업자 직접 운반을 최소화한다.',
    answer:true, explanation:'AMHS: OHT(Overhead Hoist Transport) 포함. 작업자 운반 최소화 → 파티클 감소·생산성 향상. 단, 충돌·끼임 위험.' },

  { id:302, type:'ox', lecture:'13-14강', category:'반도체 안전',
    question:'2018년 삼성전자 반도체 공장에서 CO₂ 소화설비 오작동으로 질식 사고가 발생하였다.',
    answer:true, explanation:'2018년 CO₂ 소화설비 자동 방출 오작동 → 밀폐 공간 CO₂ 농도 급상승 → 작업자 질식 사망 사고.' },

  { id:303, type:'ox', lecture:'13-14강', category:'반도체 안전',
    question:'반도체 공장의 질소(N₂)는 불활성으로 독성이 없으므로 밀폐공간에서도 안전하다.',
    answer:false, explanation:'질소는 독성은 없으나 밀폐공간에서 산소를 치환 → 산소결핍 → 의식상실·질식 위험. "불활성 ≠ 안전".' },

  { id:304, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'포름알데히드(HCHO)는 IARC 1군 발암물질로 백혈병(혈액암)과 연관이 있다.',
    answer:true, explanation:'포름알데히드: IARC 1군(2004년 비인두암, 2009년 백혈병 추가). 반도체 클린룸 포토 공정 등에서 발생.' },

  { id:305, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 공장 여성 근로자의 자연유산(SAB) 증가와 생리불순이 생식독성의 주요 지표로 보고되었다.',
    answer:true, explanation:'SAB(Spontaneous Abortion, 자연유산): 반도체 공장 역학 연구에서 일반 여성 대비 유의한 증가 보고.' },

  { id:306, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'생식독성은 자연유산(SAB), 선천성 기형, 생식력 감소, 월경이상(MA) 4가지로 분류된다.',
    answer:true, explanation:'생식독성 4가지: ①SAB(자연유산) ②선천성 기형 ③생식력 감소(불임) ④MA(월경이상, Menstrual Abnormality).' },

  { id:307, type:'ox', lecture:'13-14강', category:'SEMI',
    question:'SEMI C1은 반도체 공정용 화학물질의 순도 기준을 규정한다.',
    answer:true, explanation:'SEMI C1: 공정 화학물질 순도 등급(SEMI Grade). C2는 알루미늄 배선용 등 세부 규격별 별도 표준.' },

  { id:308, type:'ox', lecture:'13-14강', category:'SEMI',
    question:'SEMI F57은 반도체 공정에서 사용하는 고분자(Polymer) 재질 부품의 청정도 기준이다.',
    answer:true, explanation:'SEMI F57: 폴리머 부품(튜빙, 밸브, 피팅 등)의 추출성 금속 이온·파티클 규격.' },

  { id:309, type:'ox', lecture:'13-14강', category:'SEMI',
    question:'SEMI S10 위험성 매트릭스에서 Likelihood A(Frequent) 등급의 발생확률은 약 3.3%이다.',
    answer:true, explanation:'Likelihood A Frequent: 3.3% 이상. B Likely: 0.625%. C Occasional: 0.115%. D Remote: 0.025%. E Improbable: 미만.' },

  { id:310, type:'ox', lecture:'10강', category:'노출평가',
    question:'노출-건강영향 스펙트럼 6단계 중 "임상적 질환"은 가장 마지막 단계이다.',
    answer:true, explanation:'스펙트럼: 외부노출→내부용량→생물학적영향용량→초기생체영향→조직·장기이상→임상적질환(6단계).' },

  { id:311, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'건식 식각(Dry Etch) 공정에서 할로겐화탄화수소(예: CF₄, CHF₃)가 유해 가스로 사용된다.',
    answer:true, explanation:'건식 식각: 플라즈마+CF₄, CHF₃, Cl₂, HBr 등 할로겐 가스. 분해 시 독성 불화물·염화물 가스 생성.' },

  { id:312, type:'ox', lecture:'11-12강', category:'경영시스템',
    question:'중대재해처벌법은 사업주·경영책임자에게 안전·보건 확보 의무를 부과하며, ISO 45001과 연계하여 적용된다.',
    answer:true, explanation:'중대재해처벌법(2022): 5인 이상 사업장 사업주 형사처벌. ISO 45001 안전보건경영시스템과 연계 운영.' },

  { id:313, type:'ox', lecture:'9강', category:'독성 개념',
    question:'독성 금속이 필수 금속과 형태가 유사하여 체내에서 필수 금속을 대체함으로써 독성을 나타내는 기전을 "필수금속 대체(Essential Metal Displacement)"라 한다.',
    answer:true, explanation:'예: 납(Pb)이 Ca²⁺ 대신 뼈에 저장·효소 반응에 개입. 카드뮴(Cd)이 Zn²⁺ 대체. 형태 유사성이 핵심.' },

  { id:314, type:'ox', lecture:'10강', category:'독성 개념',
    question:'직업성 질환의 발생에서 개인 감수성(Individual Susceptibility)에는 유전적 다형성, 연령, 임신, 기저질환이 포함된다.',
    answer:true, explanation:'감수성 결정 인자: ①CYP450 등 유전적 다형성 ②연령(어린이·노인 취약) ③임신 ④기저질환(간·신장 기능).' },

  { id:315, type:'ox', lecture:'11-12강', category:'연관·인과',
    question:'Hill\'s criteria(힐 기준)는 역학 연구에서 노출과 질병의 인과관계를 판단하는 9가지 기준이다.',
    answer:true, explanation:'Hill 9기준: 연관의 강도·일관성·특이성·시간성·용량반응·타당성·일관성·실험적·유추.' },

  { id:316, type:'ox', lecture:'11-12강', category:'연관·인과',
    question:'오즈비(Odds Ratio, OR)는 코호트 연구에서 산출되는 위험도 지표이다.',
    answer:false, explanation:'OR은 환자-대조군 연구에서 산출. 코호트 연구는 RR(상대위험도)·IRR(발생률비) 산출.' },

  { id:317, type:'ox', lecture:'11-12강', category:'ESG·CSR',
    question:'ESG의 G(Governance, 지배구조)에는 이사회 다양성, CEO 독립성, 기업 투명성이 포함된다.',
    answer:true, explanation:'ESG G: 이사회 구성·독립성, 임원 보수 투명성, 반부패·내부통제, 주주권리 보호 등.' },

  { id:318, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 산화 공정에서 적외선(IR) 히터, 트리클로로에탄, 염산(HCl)이 유해인자로 작용한다.',
    answer:true, explanation:'산화 공정(Thermal Oxidation): IR 히터(복사열), 웨이퍼 세정제 트리클로로에탄, 건식 산화에 HCl 사용.' },

  { id:319, type:'ox', lecture:'11-12강', category:'제도·법규',
    question:'우리나라 산재 발생에서 50세 이상 고령 근로자의 재해 비중이 높다.',
    answer:true, explanation:'50세 이상 고령자: 근력·반응속도 저하·기저질환 → 재해·직업병 취약. 전체 산재의 상당 비율 점유.' },

  { id:320, type:'ox', lecture:'11-12강', category:'제도·법규',
    question:'산업재해 신고 기피 현상은 소규모 사업장에서 특히 두드러지며, 실제 재해 발생률이 공식 통계보다 높을 것으로 추정된다.',
    answer:true, explanation:'신고 기피: 근로자가 해고 불이익 우려, 사업주가 보험료 인상 우려. 실제 재해가 과소 보고됨.' },

  /* ══════════════════════════════════════════════════
     ★ 3차 추가 4지선다 (321~360)
  ══════════════════════════════════════════════════ */

  { id:321, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'포토리소그래피 공정의 주요 유해인자로 올바르게 묶인 것은?',
    options:[
      '수은 증기·오존·크실렌·톨루엔',
      '아르신·포스핀·실란·암모니아',
      '불산·글루콘산칼슘·염산·황산',
      '납·카드뮴·비소·크롬',
    ],
    answer:0, explanation:'포토 유해인자: ①UV 수은 램프 파손→수은 증기 ②UV 조사→O₃ 발생 ③PR 용제(크실렌·톨루엔·PGMEA).' },

  { id:322, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 이온주입 공정에서 X선(제동복사)을 발생시키는 장비는?',
    options:['고전류 임플란터(HCI)','중전압 임플란터(MVI)','고전압 임플란터(IHE)','저에너지 임플란터'],
    answer:2, explanation:'IHE(High Energy/Voltage Implanter): 200~400kV 이상 고전압 → X선 발생. 중전압·고전류 임플란터는 X선 발생 없음.' },

  { id:323, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 금속증착 공정에서 사용되는 금속으로 올바르게 묶인 것은?',
    options:['Si·Ge·GaAs·InP','Al·Cu·W·Ti·Ni·Cr','HF·Cl₂·CF₄·CHF₃','SiH₄·PH₃·AsH₃·BF₃'],
    answer:1, explanation:'PVD/CVD 금속증착: Al(알루미늄), Cu(구리), W(텅스텐), Ti(티타늄), Ni(니켈), Cr(크롬), Au(금), Ag(은) 등.' },

  { id:324, type:'multiple', lecture:'13-14강', category:'SEMI',
    question:'SEMI S10 Likelihood 등급에서 발생 가능성이 가장 높은 등급은?',
    options:['E – Improbable','D – Remote','C – Occasional','A – Frequent'],
    answer:3, explanation:'Likelihood A(Frequent): 발생확률 3.3% 이상. B Likely 0.625%, C Occasional, D Remote, E Improbable 순으로 낮아짐.' },

  { id:325, type:'multiple', lecture:'12-13강', category:'반도체 기초',
    question:'반도체 생산의 3대 공정을 순서대로 올바르게 나열한 것은?',
    options:[
      'Fab(전공정) → 웨이퍼 제조 → 패키징·테스트',
      '패키징·테스트 → Fab(전공정) → 웨이퍼 제조',
      '웨이퍼 제조 → Fab(전공정) → 패키징·테스트(후공정)',
      '웨이퍼 제조 → 패키징·테스트 → Fab(전공정)',
    ],
    answer:2, explanation:'웨이퍼 제조(잉곳→슬라이싱) → 전공정 Fab(회로 패턴) → 후공정(패키징·테스트·출하).' },

  { id:326, type:'multiple', lecture:'12-13강', category:'반도체 기초',
    question:'반도체 웨이퍼 크기가 역사적으로 변화해 온 순서로 올바른 것은?',
    options:[
      '300mm → 200mm → 150mm → 100mm',
      '50mm → 100mm → 200mm → 300mm',
      '100mm → 50mm → 200mm → 300mm',
      '300mm → 150mm → 75mm → 50mm',
    ],
    answer:1, explanation:'웨이퍼 크기: 50→75→100→125→150→200→300mm(현재 주력). 클수록 칩 생산량·생산성 향상.' },

  { id:327, type:'multiple', lecture:'11-12강', category:'제도·법규',
    question:'산업재해보상보험법에 따른 재해 근로자 급여 종류로 옳지 않은 것은?',
    options:['요양급여(치료비)','휴업급여(소득보전)','장해급여','경력개발지원금'],
    answer:3, explanation:'산재법 급여: 요양·휴업·장해·유족·상병보상연금·간병·직업재활 급여. 경력개발지원금은 해당 없음.' },

  { id:328, type:'multiple', lecture:'11-12강', category:'제도·법규',
    question:'우리나라 산업재해의 특성으로 가장 적절하지 않은 것은?',
    options:[
      '재해 발생 사업장의 약 80%가 소규모 사업장',
      '50세 이상 고령 근로자의 재해 비중이 높음',
      '신고 기피로 인해 실제 재해가 과소 보고됨',
      '사고 사망이 질병 사망보다 압도적으로 많음',
    ],
    answer:3, explanation:'실제로 직업성 질병 사망이 사고 사망보다 많음. 나머지는 모두 우리나라 산재 특성에 해당.' },

  { id:329, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 공장 여성 근로자의 생식독성 4가지 지표로 옳은 것은?',
    options:[
      'SAB(자연유산)·선천성기형·생식력감소·월경이상(MA)',
      '심근경색·폐암·뇌졸중·백혈병',
      '청력손실·시력저하·피부염·신부전',
      '두통·피로·어지럼증·수면장애',
    ],
    answer:0, explanation:'생식독성 4가지: ①SAB(Spontaneous Abortion) ②선천성기형 ③생식력감소(불임) ④MA(Menstrual Abnormality, 월경이상).' },

  { id:330, type:'multiple', lecture:'11-12강', category:'연관·인과',
    question:'Hill\'s criteria(힐의 인과관계 기준) 9가지 중 가장 핵심적인 기준으로, 노출이 질병 발생보다 반드시 먼저 있어야 한다는 기준은?',
    options:['연관의 강도(Strength)','일관성(Consistency)','시간성(Temporality)','특이성(Specificity)'],
    answer:2, explanation:'Temporality(시간성): 인과관계의 필수 조건. 원인(노출)이 반드시 결과(질병) 이전에 있어야 함.' },

  { id:331, type:'multiple', lecture:'12-13강', category:'반도체 기초',
    question:'IC(Integrated Circuit)와 PCB(Printed Circuit Board)의 설명으로 올바른 것은?',
    options:[
      'IC는 회로 배선 기판, PCB는 실리콘에 소자 집적',
      'IC는 실리콘 칩에 수백만 소자 집적, PCB는 소자 연결·지지 기판',
      'IC와 PCB는 동일한 개념',
      'PCB는 CPU이고 IC는 배선판',
    ],
    answer:1, explanation:'IC: 반도체 칩에 트랜지스터·저항 등 수백만~수십억 소자 집적. PCB: 이 칩들을 배선으로 연결하는 인쇄회로기판.' },

  { id:332, type:'multiple', lecture:'10강', category:'노출평가',
    question:'노출-건강영향 스펙트럼(Exposure-Health Effect Spectrum) 6단계의 올바른 순서는?',
    options:[
      '임상적질환→조직이상→초기생체영향→생물학적영향용량→내부용량→외부노출',
      '외부노출→내부용량→생물학적영향용량→초기생체영향→조직·장기이상→임상적질환',
      '외부노출→초기생체영향→내부용량→임상적질환→조직이상→생물학적영향용량',
      '내부용량→외부노출→생물학적영향용량→임상적질환→초기생체영향→조직이상',
    ],
    answer:1, explanation:'외부노출→내부용량→생물학적영향용량(BAD)→초기생체영향(EBE)→조직·장기이상→임상적질환. 노출에서 질환으로 진행.' },

  { id:333, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 건식 식각(Dry Etching)에서 주로 사용하는 가스 종류는?',
    options:[
      '수소(H₂)·질소(N₂)·아르곤(Ar)',
      '불화탄화수소(CF₄·CHF₃)·염소(Cl₂)·HBr',
      '산소(O₂)·이산화탄소(CO₂)·수증기',
      '실란(SiH₄)·포스핀(PH₃)·암모니아(NH₃)',
    ],
    answer:1, explanation:'건식 식각 가스: CF₄, CHF₃, C₂F₆(불화계), Cl₂, HBr(염소계). 플라즈마로 활성화하여 Si, SiO₂ 등 선택적 제거.' },

  { id:334, type:'multiple', lecture:'11-12강', category:'ESG·CSR',
    question:'ESG의 G(Governance, 지배구조)에 해당하는 항목으로 옳은 것은?',
    options:[
      '온실가스 배출량·에너지 효율·생물다양성',
      '노동자 권리·공정임금·직장 안전',
      '이사회 독립성·임원 보수 투명성·반부패·주주권리',
      '공급망 환경 영향·소비자 개인정보 보호',
    ],
    answer:2, explanation:'ESG G(지배구조): 이사회 구성·독립성, CEO 보수 투명성, 반부패, 주주권리, 기업 투명성 등.' },

  { id:335, type:'multiple', lecture:'11-12강', category:'경영시스템',
    question:'중대재해처벌법(중처법)의 주요 내용으로 옳지 않은 것은?',
    options:[
      '사업주·경영책임자의 안전·보건 확보 의무 부과',
      '사망 등 중대재해 발생 시 사업주·경영책임자 형사처벌',
      '5인 이상 사업장에 적용(일부 유예)',
      '기업의 환경 성과만 평가하는 기준',
    ],
    answer:3, explanation:'중처법: 안전·보건 의무 미이행 → 경영책임자 형사처벌. 환경 평가 기준이 아님.' },

  { id:336, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 혈액암(혈액 악성종양) 발생과 가장 강하게 연관된 화학물질 순서는?',
    options:[
      '불산(HF) > 글루콘산칼슘 > 실란',
      '벤젠 > 포름알데히드 > 전리방사선',
      '납 > 카드뮴 > 비소',
      '실란 > 아르신 > 포스핀',
    ],
    answer:1, explanation:'반도체 혈액암(백혈병·NHL): 벤젠(AML) > 포름알데히드(백혈병) > 전리방사선(백혈병) 순으로 관련성 높음.' },

  { id:337, type:'multiple', lecture:'11-12강', category:'경영시스템',
    question:'ISO 45001(안전보건경영시스템) 발행 연도는?',
    options:['1987년','1996년','2018년','2022년'],
    answer:2, explanation:'ISO 45001: 2018년 발행. ISO 9001(1987), ISO 14001(1996) 이후 안전보건 분야 국제 표준.' },

  { id:338, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'AMHS(자동물류시스템) 관련 안전 위험으로 올바른 것은?',
    options:[
      '웨이퍼 오염만이 주요 위험',
      'OHT 충돌·끼임, 리프터 사고, 2인1조 미준수',
      '방사선 노출이 주요 위험',
      '화학물질 흡입이 가장 심각한 위험',
    ],
    answer:1, explanation:'AMHS 안전 위험: OHT(천장 반송) 충돌·끼임, 리프터(Lifter) 협착 사고, 정비 시 2인1조 필요.' },

  { id:339, type:'multiple', lecture:'11-12강', category:'탄소중립',
    question:'칼 세이건이 138억 년 우주 역사를 1년으로 표현한 개념의 명칭은?',
    options:['도넛 경제학','공정한 전환','코스모스 우주달력(Cosmic Calendar)','RE100'],
    answer:2, explanation:'코스모스 우주달력(Cosmic Calendar): 138억 년을 1년으로 압축. 지구 탄생=9월, 공룡멸종=12/30, 인류=12/31 23:52.' },

  { id:340, type:'multiple', lecture:'9강', category:'독성 개념',
    question:'독성 금속이 필수 금속을 대체하는 기전의 예로 올바른 것은?',
    options:[
      '수은이 Na⁺ 대신 신경세포 나트륨 채널에 결합',
      '납(Pb)이 Ca²⁺ 대신 뼈에 축적되고 효소 반응에 개입',
      '비소가 Fe²⁺ 대신 헤모글로빈에 결합',
      '카드뮴이 Mg²⁺ 대신 뼈 기질에 결합',
    ],
    answer:1, explanation:'납(Pb) ↔ Ca²⁺: 형태 유사 → 뼈에 축적, Ca 의존 효소(ALAD 등) 방해. Cd ↔ Zn²⁺, Hg ↔ -SH기 등도 유사 기전.' },

  { id:341, type:'multiple', lecture:'10강', category:'독성 개념',
    question:'개인 감수성(Individual Susceptibility) 차이를 만드는 요인으로 옳지 않은 것은?',
    options:['CYP450 유전적 다형성','연령(어린이·노인 취약)','임신 여부','작업장 환기 상태'],
    answer:3, explanation:'작업장 환기 = 외부 노출 제어 요인. 개인 감수성은 유전·연령·임신·기저질환 등 내적 요인.' },

  { id:342, type:'multiple', lecture:'11-12강', category:'연관·인과',
    question:'Hill\'s criteria 9가지 기준 중 "노출량이 증가할수록 질병 발생 위험도가 높아지는" 기준은?',
    options:['시간성(Temporality)','생물학적 개연성(Plausibility)','용량-반응 관계(Dose-Response)','특이성(Specificity)'],
    answer:2, explanation:'용량-반응 관계(Biological Gradient): 노출량↑→ 반응↑. 인과관계를 강하게 지지하는 기준 중 하나.' },

  { id:343, type:'multiple', lecture:'11-12강', category:'연관·인과',
    question:'Hill\'s criteria에서 다른 연구에서도 동일한 결과가 반복적으로 확인되는 기준은?',
    options:['일관성(Consistency)','특이성(Specificity)','시간성(Temporality)','유추(Analogy)'],
    answer:0, explanation:'Consistency(일관성): 여러 나라·다른 연구자·다른 방법으로도 동일한 결과. 인과관계 신뢰도 높임.' },

  { id:344, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 직업병 역학 연구에서 보고된 반도체 공장 관련 암 종류로 옳지 않은 것은?',
    options:['NHL(비호지킨림프종)','뇌암·흑색종','난소암·유방암','위암·대장암(소화계 암)'],
    answer:3, explanation:'반도체 관련 암 역학: NHL, 뇌암, 흑색종, 난소암, 유방암 보고. 위암·대장암은 반도체 특이 연관 없음.' },

  { id:345, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 공장에서 AML(급성골수성백혈병)과 가장 강하게 연관된 물질은?',
    options:['불산(HF)','벤젠(Benzene) / 포름알데히드','질소(N₂)','아르곤(Ar)'],
    answer:1, explanation:'AML: 벤젠(Benzene) IARC 1군. 포름알데히드도 백혈병 관련(IARC 1군). 반도체 공정에서 두 물질 모두 발생 가능.' },

  { id:346, type:'multiple', lecture:'11-12강', category:'제도·법규',
    question:'우리나라 특수건강검진 대상 유해인자로 지정되지 않은 것은?',
    options:['납(Pb)','카드뮴(Cd)','설탕(Sucrose)','벤젠(Benzene)'],
    answer:2, explanation:'특수건강검진: 중금속(Pb, Cd, Hg, Cr)·유기용제(벤젠·톨루엔)·소음·분진 등 유해인자 대상. 설탕은 해당 없음.' },

  { id:347, type:'multiple', lecture:'11-12강', category:'제도·법규',
    question:'우리나라 작업환경측정에서 노출기준 초과 사업장의 측정 주기는?',
    options:['연 1회','6개월에 1회','3개월에 1회','1개월에 1회'],
    answer:1, explanation:'작업환경측정: 일반적으로 6개월 1회. 노출기준 초과 또는 발암성물질 등 고위험 → 3개월 1회로 단축.' },

  { id:348, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 포토리소그래피에서 현상(Development)에 사용되는 대표 현상액은?',
    options:['HF(불산)','TMAH(테트라메틸암모늄히드록시드)','IPA(이소프로필알코올)','H₂O₂(과산화수소)'],
    answer:1, explanation:'TMAH(Tetramethylammonium Hydroxide): 포지티브 PR 현상액. 강염기. 피부·호흡기 자극, 전신독성(신경·심장).' },

  { id:349, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'TMAH(테트라메틸암모늄히드록시드)의 주요 독성 기전은?',
    options:[
      'F⁻ 이온에 의한 저칼슘혈증',
      '아세틸콜린에스테라제(AChE) 억제 → 콜린성 위기',
      'GSH 고갈 → 용혈',
      'ALAD 억제 → 헴 합성 장애',
    ],
    answer:1, explanation:'TMAH: 유기 암모늄염. AChE 억제로 아세틸콜린 축적 → 콜린성 위기(발한·서맥·경련·호흡 억제). HF와 기전 다름.' },

  { id:350, type:'multiple', lecture:'11-12강', category:'경영시스템',
    question:'OSHMS(안전보건경영시스템)와 일반 안전보건관리체계의 차이로 가장 적절한 것은?',
    options:[
      '두 개념은 동일하다',
      'OSHMS는 법적 의무, 안전보건관리체계는 자율적',
      'OSHMS는 PDCA 사이클 기반 체계적 시스템(ISO 45001), 안전보건관리체계는 법정 조직·절차 기반',
      'OSHMS는 품질관리, 안전보건관리체계는 환경관리',
    ],
    answer:2, explanation:'OSHMS(Occupational Safety & Health Management System): ISO 45001 기반 자율적 경영시스템. 안전보건관리체계는 법정 의무 조직·절차.' },

  { id:351, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 만성신부전(Chronic Renal Failure) 직업병 사례와 관련된 물질로 보고된 것은?',
    options:[
      '수은·납·카드뮴',
      'PR(포토레지스트)·아세톤·IPA',
      '실란·아르곤·질소',
      '불산·황산·염산',
    ],
    answer:1, explanation:'반도체 만성신부전: 포토레지스트(PR) 용제, 아세톤, IPA 등 유기용제 복합 노출 관련 보고 사례.' },

  { id:352, type:'multiple', lecture:'13-14강', category:'SEMI',
    question:'SEMI S2에서 규정하는 주요 내용은?',
    options:[
      '반도체 장비의 환경·안전·보건(EHS) 기준',
      '화학물질 순도 규격',
      '클린룸 청정도 등급',
      '위험성 평가 방법론',
    ],
    answer:0, explanation:'SEMI S2: 반도체 제조 장비의 환경·안전·보건(EHS) 가이드라인. 화학물질 관리·배기·누출 대응 포함.' },

  { id:353, type:'multiple', lecture:'11-12강', category:'탄소중립',
    question:'도넛 경제학(Doughnut Economics)에서 "도넛의 바깥쪽"이 의미하는 것은?',
    options:['사회적 빈곤(최소기준 미충족)','안전하고 공정한 경제 공간','환경적 한계(Planetary Boundary) 초과','지속가능발전목표(SDGs) 달성'],
    answer:2, explanation:'도넛 구조: 안쪽 구멍=사회적 빈곤, 도넛 빵=안전 공간, 바깥=환경 한계(기후변화·생물다양성 초과) 위험 영역.' },

  { id:354, type:'multiple', lecture:'9강', category:'독성 개념',
    question:'독성의 가역성(Reversibility) 개념으로 옳은 것은?',
    options:[
      '모든 독성 영향은 노출 제거 후 자동으로 회복된다',
      '일부 독성(세포 사멸, 섬유화, 신경세포 파괴)은 노출 제거 후에도 회복 불가',
      '가역적 독성만 임상적으로 의미 있다',
      '독성의 가역성은 농도와 무관하다',
    ],
    answer:1, explanation:'가역성: 초기 경증 영향은 회복 가능. 비가역성: 간 섬유화, 폐 진폐증, 신경세포 사멸 등 구조적 손상은 회복 불가.' },

  { id:355, type:'multiple', lecture:'10강', category:'노출평가',
    question:'생물학적 노출지수(BEI)의 설명으로 옳은 것은?',
    options:[
      '공기 중 농도를 측정하는 기준',
      'TLV-TWA와 동일한 기준',
      '근로자 체액(혈액·소변·호기)에서 화학물질·대사체를 측정하는 생물학적 모니터링 기준',
      '의복에 침착된 화학물질량을 측정하는 기준',
    ],
    answer:2, explanation:'BEI(Biological Exposure Indices): ACGIH 제정. 혈액·소변·호기에서 물질 또는 대사체 측정. 총 노출 반영.' },

  { id:356, type:'multiple', lecture:'11-12강', category:'연관·인과',
    question:'인과관계 판단에서 Hill\'s criteria의 생물학적 개연성(Biological Plausibility)이 중요한 이유는?',
    options:[
      '통계적 유의성을 보장하기 때문',
      '알려진 생물학적 기전으로 노출-질병 관계를 설명할 수 있어 인과관계를 지지하기 때문',
      '역학 연구 비용을 절감하기 때문',
      '법적 인과관계 인정의 필수 요건이기 때문',
    ],
    answer:1, explanation:'생물학적 개연성: 기전이 알려져 있으면 인과관계 가능성 높음. 단, 기전 미발견이 인과 부정을 의미하지는 않음.' },

  { id:357, type:'multiple', lecture:'12-13강', category:'반도체 기초',
    question:'실리콘 웨이퍼 제조 과정의 올바른 순서는?',
    options:[
      '웨이퍼 슬라이싱 → 잉곳 성장 → SiO₂ 환원',
      'SiO₂(모래) + C → 전기용광로 환원 → 순수 Si → 잉곳 성장 → 웨이퍼 슬라이싱',
      '잉곳 성장 → SiO₂ 환원 → 웨이퍼 슬라이싱',
      '웨이퍼 슬라이싱 → 순수 Si → 잉곳 성장 → SiO₂ 환원',
    ],
    answer:1, explanation:'SiO₂(모래)+C → 전기용광로 → 순수 Si(야금용) → 정제(트리클로로실란 법) → 초크랄스키 잉곳 → 슬라이싱→연마 → 웨이퍼.' },

  { id:358, type:'multiple', lecture:'13-14강', category:'반도체 안전',
    question:'반도체 공장 정비 작업 시 LOTO(Lockout/Tagout) 절차의 핵심 목적은?',
    options:[
      '생산 효율을 높이기 위해',
      '예기치 않은 에너지(전기·가압·유압 등) 방출로 인한 부상 방지',
      '화학물질 순도 유지',
      '클린룸 파티클 관리',
    ],
    answer:1, explanation:'LOTO: 정비 중 에너지 우발 방출(재가동·압력 방출 등) 방지. 작업자 안전 확보가 핵심 목적.' },

  { id:359, type:'multiple', lecture:'11-12강', category:'탄소중립',
    question:'탄소국경조정제도(CBAM, Carbon Border Adjustment Mechanism)의 목적으로 옳은 것은?',
    options:[
      'EU 기업의 탄소 배출 완전 금지',
      '탄소 규제가 약한 국가에서 수입되는 상품에 탄소 비용을 부과하여 탄소 유출 방지',
      '개발도상국에 탄소 보조금 지원',
      '자국 기업의 해외 생산 촉진',
    ],
    answer:1, explanation:'CBAM: EU의 탄소 비용을 지불하지 않은 수입품에 탄소 가격 부과. 탄소 누출(Carbon Leakage) 방지 목적.' },

  { id:360, type:'multiple', lecture:'9강', category:'방사성 원소',
    question:'방사성 물질의 반감기(Half-life)가 독성학적으로 중요한 이유는?',
    options:[
      '반감기가 길수록 독성이 강하기 때문',
      '반감기가 길면 체내 또는 환경에서 장기간 방사선을 방출하여 만성 피폭 위험이 높기 때문',
      '반감기와 독성은 무관',
      '반감기가 짧을수록 체내 축적이 크기 때문',
    ],
    answer:1, explanation:'반감기 긴 방사성 물질(예: Pu-239 2.4만 년): 체내 장기 잔류 → 만성 피폭. 반감기 짧은 물질은 급성 고선량 위험.' },

  /* ══════════════════════════════════════════════════
     ★ 3차 추가 빈칸 (361~385)
  ══════════════════════════════════════════════════ */

  { id:361, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'자연유산을 의미하는 생식독성 지표의 영문 약자는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['SAB','S.A.B.']],
    explanation:'SAB = Spontaneous Abortion(자연유산). 반도체 공장 여성 근로자 역학연구의 주요 생식독성 지표.' },

  { id:362, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'월경이상(생리불순)을 의미하는 생식독성 지표의 영문 약자는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['MA','M.A.']],
    explanation:'MA = Menstrual Abnormality(월경이상). 생식독성 4가지: SAB·선천성기형·생식력감소·MA.' },

  { id:363, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 이온주입 장비 중 200~400kV 고전압으로 X선을 발생시키는 장비를 [①]라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['IHE','고전압임플란터','High Energy Implanter']],
    explanation:'IHE(High Energy/Voltage Implanter): 고전압 이온 가속 → X선(제동복사) 발생. 정비자 최고 피폭 위험.' },

  { id:364, type:'fill', lecture:'13-14강', category:'SEMI',
    question:'SEMI S10 Likelihood A(Frequent) 등급의 발생확률은 약 [①]%이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['3.3','3.3%']],
    explanation:'Likelihood A Frequent: ≥3.3%. B Likely: ≥0.625%. C Occasional: ≥0.115%. D Remote: ≥0.025%. E Improbable: <0.025%.' },

  { id:365, type:'fill', lecture:'12-13강', category:'반도체 기초',
    question:'집적회로(Integrated Circuit)의 영문 약자는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['IC']],
    explanation:'IC(Integrated Circuit): 실리콘 칩에 트랜지스터·저항·캐패시터 등 수백만~수십억 소자 집적.' },

  { id:366, type:'fill', lecture:'12-13강', category:'반도체 기초',
    question:'인쇄회로기판의 영문 약자는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['PCB']],
    explanation:'PCB(Printed Circuit Board): 전자소자(IC 등)를 배선으로 연결·지지하는 기판.' },

  { id:367, type:'fill', lecture:'10강', category:'노출평가',
    question:'노출-건강영향 스펙트럼의 단계 수는 [①]단계이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['6']],
    explanation:'6단계: 외부노출→내부용량→생물학적영향용량→초기생체영향→조직·장기이상→임상적질환.' },

  { id:368, type:'fill', lecture:'13-14강', category:'SEMI',
    question:'반도체 공정용 화학물질의 순도 기준을 규정하는 SEMI 표준의 번호는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['C1','SEMI C1']],
    explanation:'SEMI C1: 공정 화학물질(산·염기·용제) 순도 등급 기준. Grade별 금속 불순물 허용 한계 규정.' },

  { id:369, type:'fill', lecture:'13-14강', category:'SEMI',
    question:'반도체 공정용 고분자 부품의 청정도 기준을 규정하는 SEMI 표준의 번호는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['F57','SEMI F57']],
    explanation:'SEMI F57: 폴리머 부품(튜빙·밸브·피팅) 추출성 금속 이온·파티클 청정도 기준.' },

  { id:370, type:'fill', lecture:'11-12강', category:'탄소중립',
    question:'칼 세이건의 코스모스 우주달력에서 기록 역사(문명)가 시작된 시각은 12월 31일 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['23:59','23시59분','23:59:32','오후 11시 59분']],
    explanation:'138억 년 = 1년으로 압축 시: 기록된 문명 역사(약 5,000년) ≈ 12월 31일 23:59:32 (마지막 수십 초).' },

  { id:371, type:'fill', lecture:'11-12강', category:'탄소중립',
    question:'고탄소 산업에서 저탄소 경제로 전환 시 경제·사회적 비용을 공정하게 분담하는 개념을 영문으로 [①]이라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['Just Transition','공정한전환','공정한 전환']],
    explanation:'Just Transition(공정한 전환): ILO·UN 지지. 탄소집약 산업 근로자·지역사회의 일자리 손실을 지원하는 원칙.' },

  { id:372, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 클린룸에서 현재 주력으로 사용하는 웨이퍼 크기는 [①]mm이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['300']],
    explanation:'현재 주력 웨이퍼: 300mm(12인치). 차세대 450mm 개발 진행 중.' },

  { id:373, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'포토리소그래피에서 PR 도포 후 사용하는 UV 광원의 대표적인 램프 종류는 [①] 램프이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['수은','수은(Hg)','Hg']],
    explanation:'포토리소그래피 UV 광원: 수은(Hg) 램프. 파손 시 수은 증기 노출 위험. 최신 장비는 ArF(193nm) 엑시머 레이저 사용.' },

  { id:374, type:'fill', lecture:'11-12강', category:'연관·인과',
    question:'환자-대조군 연구에서 산출되는 위험도 지표의 명칭은 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['오즈비','OR','Odds Ratio','교차비']],
    explanation:'OR(Odds Ratio, 오즈비/교차비): 환자-대조군 연구. 코호트 연구는 RR(Relative Risk) 산출.' },

  { id:375, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 건식 식각(Dry Etch)에서 플라즈마로 활성화하는 대표 불화 가스는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['CF4','CF₄','사불화탄소','Carbon tetrafluoride']],
    explanation:'CF₄(사불화탄소): 건식 식각 대표 가스. 플라즈마 분해 → F·(불소 라디칼) 생성 → Si, SiO₂ 선택적 식각.' },

  { id:376, type:'fill', lecture:'11-12강', category:'제도·법규',
    question:'우리나라에서 작업환경 노출기준을 고시하는 기관은 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['고용노동부','고용노동부장관']],
    explanation:'한국 노출기준: 고용노동부 고시 「화학물질 및 물리적 인자의 노출기준」. ACGIH TLV를 참고하여 설정.' },

  { id:377, type:'fill', lecture:'9강', category:'중금속 기초',
    question:'수은(Hg) 중독 치료에 사용하는 킬레이트제는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['DMPS','DMSA','BAL','디메르캡토프로판설폰산']],
    explanation:'수은 킬레이트: DMPS(2,3-Dimercapto-1-propanesulfonic acid), DMSA, BAL(Dimercaprol) 등 사용.' },

  { id:378, type:'fill', lecture:'10강', category:'독성동태',
    question:'독성물질 흡수 후 표적 기관에 도달하는 실제 양을 의미하는 개념을 [①]이라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['내부용량','내부 용량','internal dose','Internal Dose']],
    explanation:'내부용량(Internal Dose): 외부 노출과 달리, 실제로 흡수·분포된 체내 량. 생물학적 모니터링으로 측정.' },

  { id:379, type:'fill', lecture:'11-12강', category:'경영시스템',
    question:'ISO 45001은 [①] 년에 발행된 안전보건경영시스템 국제 표준이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['2018']],
    explanation:'ISO 45001: 2018년 발행. 기존 OHSAS 18001을 대체. PDCA 사이클 기반. 최고 경영진 역할 강조.' },

  { id:380, type:'fill', lecture:'13-14강', category:'반도체 안전',
    question:'밀폐공간 진입 전 산소 농도가 [①]% 미만이면 작업을 중단해야 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['18','18%']],
    explanation:'산소 농도 기준: 18% 미만 = 산소결핍. 진입 금지·환기 후 재측정 필요. 21%가 정상 대기 농도.' },

  { id:381, type:'fill', lecture:'13-14강', category:'반도체 안전',
    question:'반도체 공장에서 화재·폭발 위험을 가진 자연발화성(Pyrophoric) 가스인 SiH₄의 일반명은 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['실란','Silane','silane']],
    explanation:'SiH₄(실란/Silane): 공기와 접촉 즉시 자연발화. CVD 공정에서 실리콘막 형성에 사용.' },

  { id:382, type:'fill', lecture:'11-12강', category:'연관·인과',
    question:'코호트 연구에서 노출군의 질병 발생률을 비노출군의 발생률로 나눈 값을 [①]이라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['상대위험도','RR','Relative Risk','비교위험도']],
    explanation:'RR(Relative Risk): 코호트 연구 지표. RR=1 위험 없음, RR>1 위험요인, RR<1 보호요인.' },

  { id:383, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 P형 도핑에 사용되는 붕소(B)를 이온으로 주입할 때 사용하는 가스는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['BF3','BF₃','삼불화붕소','Boron trifluoride']],
    explanation:'BF₃(삼불화붕소): P형 이온주입 소스 가스. 맹독성(IDLH 1ppm). 누출 시 즉시 대피 필요.' },

  { id:384, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 N형 도핑 이온주입 소스 가스로 사용되는 아르신의 화학식은 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['AsH3','AsH₃','아르신']],
    explanation:'AsH₃(아르신/Arsine): N형 도판트 비소(As) 이온주입 소스. 용혈·신부전 유발 극독성 가스.' },

  { id:385, type:'fill', lecture:'11-12강', category:'제도·법규',
    question:'산재법에서 요양 완료 후에도 장해가 남는 경우 지급하는 급여를 [①]급여라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['장해','장해급여']],
    explanation:'장해급여: 업무상 부상·질병으로 치료 후 신체 장해가 남을 때 지급. 1~14급 장해등급에 따라 차등 지급.' },

  /* ══════════════════════════════════════════════════
     ★ 3차 추가 주관식 (386~395)
  ══════════════════════════════════════════════════ */

  { id:386, type:'short', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 공장 여성 근로자의 생식독성 4가지 유형을 정의하고, 관련 노출 물질을 서술하시오.',
    modelAnswer:'[생식독성 4가지]\n①SAB(Spontaneous Abortion, 자연유산): 임신 20주 이전 태아 자연 소실\n②선천성기형: 태아 구조적·기능적 이상. 에틸렌글리콜에테르류 관련\n③생식력감소: 임신 지연·불임. 2-브로모프로판(2-BP) 관련\n④MA(Menstrual Abnormality, 월경이상): 생리 주기·양 이상\n\n[관련 물질]\n에틸렌글리콜에테르(EGME·EGEE): SAB·기형 유발. 2-브로모프로판: 난소·고환 독성. 유기용제(IPA·아세톤): MA 관련',
    explanation:'생식독성 4가지: SAB·기형·생식력감소·MA. 에틸렌글리콜에테르·2-BP가 주요 원인 물질.' },

  { id:387, type:'short', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 클린룸 작업자에서 발생한 혈액암의 원인 물질과 각 암종을 서술하시오.',
    modelAnswer:'[혈액암 종류와 원인 물질]\n①AML(급성골수성백혈병): 벤젠(IARC 1군), 포름알데히드 초과 노출 관련 사례 보고\n②ALL(급성림프구성백혈병): 벤젠·포름알데히드 관련\n③NHL(비호지킨림프종): LCD 공장 역학연구에서 보고. 벤젠 관련\n\n[위험 순서]\n벤젠(가장 강한 증거) > 포름알데히드 > 전리방사선(이온주입 X선)\n\n[메커니즘]\n벤젠 → 골수독성 → 조혈세포 DNA 손상 → 악성화',
    explanation:'혈액암: 벤젠(AML/NHL) > 포름알데히드(백혈병) > 전리방사선. 반도체 공정에서 세 물질 모두 발생.' },

  { id:388, type:'short', lecture:'10강', category:'노출평가',
    question:'노출-건강영향 스펙트럼(Exposure-Health Effect Spectrum) 6단계를 순서대로 서술하고, 각 단계의 의미를 설명하시오.',
    modelAnswer:'①외부 노출(External Exposure): 작업환경 공기·피부 접촉 농도. 작업환경측정으로 평가\n②내부 용량(Internal Dose): 실제 흡수된 체내 량. 흡수율·개인 특성에 따라 다름\n③생물학적영향용량(Biologically Effective Dose, BED): 표적 부위에 도달한 양\n④초기 생체영향(Early Biological Effect): 세포·분자 수준 변화(DNA 손상 등). 아직 가역적\n⑤조직·장기 기능이상(Altered Structure/Function): 장기 기능 저하. 일부 비가역\n⑥임상적 질환(Clinical Disease): 증상·진단 가능한 질환. 생물학적 모니터링 기준점',
    explanation:'6단계: 외부노출→내부용량→BED→초기생체영향→조직이상→임상질환. 단계가 진행될수록 비가역성 증가.' },

  { id:389, type:'short', lecture:'11-12강', category:'연관·인과',
    question:'Hill\'s criteria(힐의 인과관계 기준) 9가지를 나열하고, 그중 인과관계 판단의 필수 기준을 설명하시오.',
    modelAnswer:'[9가지 기준]\n①연관의 강도(Strength): 노출-질병 OR/RR이 클수록 인과 지지\n②일관성(Consistency): 여러 연구에서 반복 확인\n③특이성(Specificity): 특정 노출-특정 질병 관계\n④시간성(Temporality): 노출이 질병 이전 필수\n⑤용량-반응 관계(Dose-Response): 노출 증가 → 위험도 증가\n⑥생물학적 개연성(Plausibility): 기전적 설명 가능\n⑦일관성(Coherence): 기존 지식과 모순 없음\n⑧실험적 증거(Experiment): 동물 실험 등 지지\n⑨유추(Analogy): 유사 노출-질병 사례 존재\n\n[필수 기준]\n④시간성(Temporality)만이 필수. 원인이 결과보다 반드시 먼저이어야 함',
    explanation:'Hill 9기준: 시간성만 필수. 나머지는 증거를 강화하는 기준. 모두 충족하지 않아도 인과 판단 가능.' },

  { id:390, type:'short', lecture:'11-12강', category:'제도·법규',
    question:'우리나라 직업성 암(산재) 인정의 어려움과 이를 극복하기 위한 접근 방법을 서술하시오.',
    modelAnswer:'[인정의 어려움]\n①장기 잠복기: 폐암(15~30년), 백혈병(5~10년) → 원인 물질 특정 어려움\n②다중 원인성: 흡연·음주·유전 등 개인 요인과 직업 노출의 복합\n③비특이성: 직업성 암과 일반 암이 병리적으로 동일\n④개인 감수성 차이\n⑤노출 기록 부재: 과거 노출 자료 없음\n\n[극복 방법]\n①역학 연구 기반 인정(집단적 증거)\n②직업력 상세 조사 및 노출 추정\n③입증 책임 완화 원칙 적용\n④특정 직업·물질 조합에 대한 추정 규정',
    explanation:'직업성 암 인정: 잠복기·다중원인·비특이성이 장벽. 역학 증거와 입증 부담 완화로 극복.' },

  { id:391, type:'short', lecture:'13-14강', category:'반도체 안전',
    question:'반도체 공장 밀폐공간 작업의 주요 위험과 안전 관리 방법을 서술하시오.',
    modelAnswer:'[주요 위험]\n①산소결핍: 질소(N₂) 퍼지 후 밀폐공간 산소 농도 저하 → 의식상실·질식\n②유해가스: 잔류 공정 가스(AsH₃·PH₃·HF 등)\n③CO₂ 소화설비 오작동: 고농도 CO₂ → 질식 (2018년 사고)\n④폭발성 가스 축적\n\n[안전 관리]\n①진입 전 산소(≥18%)·유해가스 농도 측정\n②충분한 환기 확보\n③감시인(입구 대기) 배치 필수\n④SCBA 등 공기공급식 호흡 보호구 착용\n⑤PTW(작업 안전 허가서) 발급\n⑥2인1조 작업',
    explanation:'밀폐공간: 산소결핍·유해가스·CO₂가 3대 위험. 측정→환기→감시인→SCBA→PTW가 핵심.' },

  { id:392, type:'short', lecture:'11-12강', category:'탄소중립',
    question:'공정한 전환(Just Transition)의 개념과 반도체 산업에서의 적용을 서술하시오.',
    modelAnswer:'[개념]\nJust Transition: 화석연료·고탄소 산업에서 저탄소·녹색 경제로 전환할 때, 그 과정에서 발생하는 일자리 손실·지역사회 위축 등 사회적 비용을 공정하게 분담하는 원칙. ILO·EU·UN이 지지\n\n[반도체 산업 적용]\n①전력 소비(RE100): 반도체 공장은 에너지 다소비. 재생에너지 전환 과정에서 생산 비용 증가\n②공급망 탄소 중립: 소재·부품·장비(소부장) 협력사도 함께 전환 지원\n③지역사회: 대규모 반도체 공장의 에너지 전환이 지역 전력망·고용에 영향\n④ESG G: 이해관계자(근로자·지역사회) 소통 강화',
    explanation:'Just Transition: 탄소 전환 비용의 공정 분담. 반도체는 에너지 다소비로 RE100·ESG와 직결.' },

  { id:393, type:'short', lecture:'9강', category:'독성 개념',
    question:'독성의 가역성(Reversibility)과 비가역성(Irreversibility)을 설명하고, 반도체 관련 비가역 독성 사례를 서술하시오.',
    modelAnswer:'[가역성]\n노출 제거 후 독성 영향이 원상 회복. 경증 간독성, 경도 신독성 등. 농도·기간이 낮을 때 가능\n\n[비가역성]\n노출 제거 후에도 영향 지속. 구조적 손상, 세포 사멸, 섬유화\n\n[반도체 관련 비가역 독성]\n①AML(급성골수성백혈병): 벤젠 노출 → 조혈줄기세포 DNA 손상 → 비가역 악성화\n②폐섬유화: 분진(결정질 실리카) → 진폐증\n③신경독성: 유기수은·납 만성 노출 → 신경세포 사멸 → 인지기능 저하 비가역\n④불임: 2-브로모프로판 → 난소·정소 손상 비가역',
    explanation:'비가역 독성: 암·섬유화·신경손상·불임. 예방적 노출 통제가 유일한 대책.' },

  { id:394, type:'short', lecture:'12-13강', category:'반도체 기초',
    question:'반도체 산업의 역사적 중요성과 삼성전자 직업병 문제의 사회적 의의를 서술하시오.',
    modelAnswer:'[반도체 산업의 중요성]\n①한국 GDP·수출의 핵심: 반도체가 수출 1위 품목\n②기술 집약적 고부가가치 산업: 초미세 공정(나노미터 수준)\n③국가 안보·전략 물자: 반도체 패권 경쟁(한·미·중)\n\n[직업병 문제의 사회적 의의]\n①2007년 반올림(반도체 노동자의 건강과 인권 지킴이) 설립 계기: 삼성 기흥 공장 백혈병 사망\n②"눈에 보이지 않는" 유해인자에 대한 사회적 인식 제고\n③기업의 산업보건 책임 강화 촉구\n④2018년 삼성-반올림 합의: 자율 보상위원회 설치\n⑤산재법 인과관계 입증 부담 완화 논의 촉발',
    explanation:'삼성 반도체 직업병: 2007년 백혈병 사망 → 반올림 설립 → 사회 이슈화 → 2018년 합의.' },

  { id:395, type:'short', lecture:'11-12강', category:'경영시스템',
    question:'ISO 경영시스템 3대 표준(ISO 9001·ISO 14001·ISO 45001)의 특징과 통합 관리 이점을 서술하시오.',
    modelAnswer:'[ISO 9001 (품질경영시스템, 1987)]\n제품·서비스 품질 확보. 고객 만족. PDCA 기반\n\n[ISO 14001 (환경경영시스템, 1996)]\n환경 영향 저감. 법규 준수. 탄소중립·ESG와 연계\n\n[ISO 45001 (안전보건경영시스템, 2018)]\n근로자 안전·건강 보호. 위험성평가·참여·협의 강조\n\n[통합 관리(IMS, Integrated Management System) 이점]\n①동일 PDCA 구조 → 세 시스템 통합 운영 효율\n②공통 조항(리더십·계획·지원·성과평가) 활용\n③문서·심사 중복 최소화\n④ESG 평가(E=14001, S·G=45001)와 직접 연계',
    explanation:'IMS: ISO 9001(품질)+14001(환경)+45001(안전보건) 통합. PDCA 공통 구조로 효율적 운영.' },

  /* ══════════════════════════════════════════════════
     ★ 3차 추가 설명 맞추기 (396~415)
  ══════════════════════════════════════════════════ */

  { id:396, type:'match', lecture:'11-12강', category:'탄소중립',
    question:'다음 설명이 가리키는 것은?\n\n"고탄소 산업에서 저탄소 경제로 전환할 때 발생하는 경제·사회적 비용(일자리 손실 등)을 공정하게 분담하는 원칙. ILO·EU·UN 지지"',
    options:['RE100','탄소중립(Net Zero)','공정한 전환(Just Transition)','탄소국경조정제도(CBAM)'],
    answer:2, explanation:'Just Transition: 탄소 전환 과정에서 취약 근로자·지역사회 지원. 에너지 전환의 사회적 형평성 원칙.' },

  { id:397, type:'match', lecture:'11-12강', category:'탄소중립',
    question:'다음 설명이 가리키는 것은?\n\n"천문학자 칼 세이건이 제안. 138억 년 우주 역사를 1년으로 압축. 기록된 인류 문명 = 12월 31일 23:59의 마지막 몇 초"',
    options:['도넛 경제학','SDGs 달력','코스모스 우주달력(Cosmic Calendar)','파리협정 타임라인'],
    answer:2, explanation:'코스모스 우주달력: 138억 년=1년. 지구=9월, 공룡멸종=12/30, 현생인류=12/31 23:52, 문명=23:59:32.' },

  { id:398, type:'match', lecture:'12-13강', category:'반도체 기초',
    question:'다음 설명이 가리키는 것은?\n\n"전자소자(트랜지스터·캐패시터 등) 수백만~수십억 개를 하나의 실리콘 칩에 집적한 회로"',
    options:['PCB(인쇄회로기판)','LED(발광다이오드)','IC(집적회로)','FOUP(밀폐운반용기)'],
    answer:2, explanation:'IC(Integrated Circuit): 실리콘 칩에 수천~수십억 소자 집적. 반도체 산업의 핵심 제품.' },

  { id:399, type:'match', lecture:'12-13강', category:'반도체 기초',
    question:'다음 설명이 가리키는 것은?\n\n"IC·저항·캐패시터 등 전자부품을 전기적으로 연결하고 기계적으로 지지하는 기판. 에폭시 수지와 동박 배선으로 구성"',
    options:['IC(집적회로)','웨이퍼(Wafer)','PCB(인쇄회로기판)','FOUP'],
    answer:2, explanation:'PCB(Printed Circuit Board): 부품 연결·지지 기판. IC와 함께 전자제품의 핵심 구성.' },

  { id:400, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 것은?\n\n"반도체 공장 여성 근로자의 생식독성 지표. 임신 20주 이전 태아 자연 소실. 에틸렌글리콜에테르류 노출과 연관"',
    options:['MA(월경이상)','선천성기형','SAB(자연유산)','생식력감소'],
    answer:2, explanation:'SAB(Spontaneous Abortion): 자연유산. 반도체 역학연구에서 에틸렌글리콜에테르·2-BP 관련 증가 보고.' },

  { id:401, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 것은?\n\n"IARC 1군 발암물질로 반도체 공장의 주요 혈액암(AML) 원인 물질. 전공정 세정 및 일부 합성 공정에서 발생 가능"',
    options:['실란(SiH₄)','질소(N₂)','벤젠(Benzene)','이소프로필알코올(IPA)'],
    answer:2, explanation:'벤젠: IARC 1군. AML·ALL 등 혈액암 유발. 반도체 공정에서 광화학 반응·불순물로 발생 가능.' },

  { id:402, type:'match', lecture:'13-14강', category:'SEMI',
    question:'다음 설명이 가리키는 것은?\n\n"반도체 공정용 화학물질(산·염기·유기용제)의 순도 등급(Grade)을 규정한 SEMI 표준"',
    options:['SEMI S2','SEMI S10','SEMI C1','SEMI F57'],
    answer:2, explanation:'SEMI C1: 공정 화학물질 순도 기준. Grade별 금속 불순물·파티클 허용 농도 규정.' },

  { id:403, type:'match', lecture:'13-14강', category:'SEMI',
    question:'다음 설명이 가리키는 것은?\n\n"반도체 공정용 폴리머 부품(튜빙·밸브·피팅)의 추출성 금속 이온 및 파티클 청정도 기준을 규정한 SEMI 표준"',
    options:['SEMI S2','SEMI S10','SEMI C1','SEMI F57'],
    answer:3, explanation:'SEMI F57: 폴리머 부품 청정도 기준. 추출성 이온·파티클이 공정 오염을 유발하지 않도록 관리.' },

  { id:404, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 것은?\n\n"200~400kV 고전압으로 이온을 가속하는 반도체 이온주입 장비. X선(제동복사)을 발생시켜 정비자 방사선 피폭 위험이 있음"',
    options:['중전압 임플란터(MVI)','고전류 임플란터(HCI)','고전압 임플란터(IHE)','저에너지 임플란터'],
    answer:2, explanation:'IHE(High Energy Implanter): 200~400kV 이상 고전압 → X선 발생. 이온박스 정비 시 피폭+비소 노출 이중 위험.' },

  { id:405, type:'match', lecture:'13-14강', category:'SEMI',
    question:'다음 설명이 가리키는 것은?\n\n"SEMI S10 위험성 매트릭스에서 Likelihood(발생 가능성)의 가장 높은 등급. 발생확률 약 3.3% 이상"',
    options:['E – Improbable','D – Remote','C – Occasional','A – Frequent'],
    answer:3, explanation:'Likelihood A(Frequent): ≥3.3%. Risk = Severity × Likelihood 매트릭스의 최고 발생 가능성 등급.' },

  { id:406, type:'match', lecture:'10강', category:'노출평가',
    question:'다음 설명이 가리키는 것은?\n\n"외부노출에서 임상 질환까지 6단계로 표현한 모델. 노출 → 내부용량 → 생물학적영향용량 → 초기생체영향 → 조직이상 → 임상질환"',
    options:['용량-반응 관계','ADME 모델','노출-건강영향 스펙트럼','Hill\'s criteria'],
    answer:2, explanation:'노출-건강영향 스펙트럼: 6단계. 단계가 진행될수록 비가역성·심각성 증가. 생물학적 모니터링이 중간 단계 파악.' },

  { id:407, type:'match', lecture:'9강', category:'독성 개념',
    question:'다음 설명이 가리키는 것은?\n\n"독성 금속 이온이 형태 유사성으로 인해 필수 금속 이온을 대체하여 독성을 나타내는 기전. 납(Pb)이 칼슘(Ca²⁺) 대신 뼈·효소에 결합하는 것이 대표 예"',
    options:['생물학적 증폭(Biomagnification)','필수금속 대체(Essential Metal Displacement)','킬레이트 결합','산화적 스트레스'],
    answer:1, explanation:'필수금속 대체: Pb↔Ca²⁺, Cd↔Zn²⁺, Hg↔-SH기. 형태 유사성이 독성 기전의 핵심.' },

  { id:408, type:'match', lecture:'13-14강', category:'반도체 안전',
    question:'다음 설명이 가리키는 것은?\n\n"반도체 클린룸 내 FOUP(웨이퍼 박스)를 천장 레일(OHT)로 자동 반송하는 통합 물류 시스템. 작업자 직접 운반 최소화"',
    options:['PTW(작업안전허가서)','LOTO(잠금·표지)','AMHS(자동물류시스템)','CMP(화학기계연마)'],
    answer:2, explanation:'AMHS(Automated Material Handling System): OHT 포함. 클린룸 청정도 유지+생산성 향상. 충돌·끼임 안전 위험.' },

  { id:409, type:'match', lecture:'12-13강', category:'반도체 기초',
    question:'다음 설명이 가리키는 것은?\n\n"모래(SiO₂)와 탄소를 전기용광로에서 환원하여 얻는 반도체 원료 물질. 이후 정제→잉곳→웨이퍼로 가공"',
    options:['게르마늄(Ge)','순수 실리콘(Si)','질화갈륨(GaN)','이산화실리콘(SiO₂)'],
    answer:1, explanation:'순수 Si: SiO₂ + C → 전기용광로 → 순도 98~99% Si → 추가 정제 → 초크랄스키법 단결정 잉곳 → 웨이퍼.' },

  { id:410, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 것은?\n\n"반도체 포토리소그래피에서 포지티브 PR(Photo Resist)을 녹여 회로 패턴을 형성하는 강염기성 현상액. 피부·호흡기 자극 및 신경독성"',
    options:['HF(불산)','TMAH(테트라메틸암모늄히드록시드)','IPA(이소프로필알코올)','H₂SO₄(황산)'],
    answer:1, explanation:'TMAH: 포지티브 PR 현상액. 강염기(KOH 대체). AChE 억제(콜린성 독성). 다량 노출 시 심장마비 위험.' },

  { id:411, type:'match', lecture:'11-12강', category:'제도·법규',
    question:'다음 설명이 가리키는 것은?\n\n"업무상 사망 근로자의 배우자·자녀·부모에게 지급하는 산재법 급여"',
    options:['휴업급여','장해급여','유족급여','요양급여'],
    answer:2, explanation:'유족급여: 업무상 사망 근로자의 유족(배우자·자녀·부모 순)에게 지급. 연금 또는 일시금 선택.' },

  { id:412, type:'match', lecture:'11-12강', category:'연관·인과',
    question:'다음 설명이 가리키는 것은?\n\n"Hill\'s criteria 9가지 기준 중 인과관계 판단의 유일한 필수 조건. 원인은 결과보다 반드시 시간적으로 앞서야 한다"',
    options:['연관의 강도(Strength)','일관성(Consistency)','시간성(Temporality)','용량-반응 관계'],
    answer:2, explanation:'Temporality(시간성): 유일한 필수 기준. "노출 → 질병" 순서 확인 없이는 인과관계 성립 불가.' },

  { id:413, type:'match', lecture:'9강', category:'독성 개념',
    question:'다음 설명이 가리키는 것은?\n\n"독성 노출이 제거되거나 감소할 때 체내 독성 물질의 농도가 절반으로 줄어드는 데 걸리는 시간. 납 혈중 약 28~36일, 카드뮴 신장 10~30년"',
    options:['잠복기(Latency period)','생물학적 반감기(Biological Half-life)','LD50','LOAEL'],
    answer:1, explanation:'생물학적 반감기(t₁/₂): 체내 농도가 절반으로 감소하는 시간. 물질·장기별로 다름. 장기 축적성 예측에 중요.' },

  { id:414, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 것은?\n\n"반도체 건식 식각 공정에서 SiO₂·Si₃N₄ 등을 선택적으로 제거하는 데 사용하는 플라즈마 활성화 불화 가스. 분해 시 F·(불소 라디칼) 생성"',
    options:['실란(SiH₄)','포스핀(PH₃)','CF₄(사불화탄소)','BF₃(삼불화붕소)'],
    answer:2, explanation:'CF₄: 건식 식각 대표 가스. 플라즈마 → F·(불소 라디칼)+CF₃· → SiO₂ 등과 반응하여 기상 제거.' },

  { id:415, type:'match', lecture:'13-14강', category:'반도체 안전',
    question:'다음 설명이 가리키는 것은?\n\n"반도체 공장 전산실·서버실·클린룸에 설치된 소화 설비. 오작동 시 고농도 방출로 밀폐공간 내 작업자 질식 위험. 2018년 사고 원인"',
    options:['스프링클러(물 분무)','하론 소화설비','CO₂(이산화탄소) 소화설비','포말 소화설비'],
    answer:2, explanation:'CO₂ 소화설비: 전기 화재에 유효. 밀폐공간 오방출 시 CO₂ 농도 급상승 → O₂ 치환 → 질식. 2018년 삼성 사고.' },

  /* ══════════════════════════════════════════════════
     ★ 4차 추가 OX (416~430) — 독성기초·공정·제도 보완
  ══════════════════════════════════════════════════ */

  { id:416, type:'ox', lecture:'9강', category:'독성 개념',
    question:'LD50(반수치사량)은 실험동물 집단의 50%를 사망시키는 독성물질의 투여량이다.',
    answer:true, explanation:'LD50(Lethal Dose 50): mg/kg 단위. 값이 낮을수록 독성이 강함. 독성 물질 강도 비교에 사용.' },

  { id:417, type:'ox', lecture:'9강', category:'독성 개념',
    question:'LD50 수치가 낮을수록 독성이 강한 물질이다.',
    answer:true, explanation:'LD50 낮음 = 소량으로 반수치사 가능 = 독성 강함. 보툴리눔 독소(LD50 ≈ 0.000001 mg/kg)가 자연계 최강 독.' },

  { id:418, type:'ox', lecture:'9강', category:'독성 개념',
    question:'급성독성(Acute Toxicity)은 24시간 이내 단일 또는 단기 고농도 노출로 나타나는 독성이다.',
    answer:true, explanation:'급성독성: 단일·단기 노출. 빠르게 나타남. 반면 만성독성은 저농도 반복 장기 노출로 서서히 발현.' },

  { id:419, type:'ox', lecture:'9강', category:'독성 개념',
    question:'만성독성(Chronic Toxicity)은 저농도 물질에 수개월~수년 반복 노출 후 나타나는 독성이다.',
    answer:true, explanation:'만성독성: 잠복기 길고 비특이적. 직업성 질환 대부분이 만성독성. 발암성·생식독성·신경독성 포함.' },

  { id:420, type:'ox', lecture:'10강', category:'독성동태',
    question:'경구(입) 흡수된 독성물질은 간을 통과하면서 일부 대사·분해되는 1차 통과효과(First-pass Effect)가 나타난다.',
    answer:true, explanation:'First-pass Effect(초회 통과 효과): 경구 흡수 → 간문맥 → 간 초회 대사 → 전신 순환 도달량 감소. 생체이용률 저하.' },

  { id:421, type:'ox', lecture:'10강', category:'독성동태',
    question:'독성물질의 흡수 속도는 일반적으로 호흡기 > 피부(경피) > 소화기(경구) 순이다.',
    answer:true, explanation:'폐(호흡기): 표면적 70㎡, 혈관 풍부 → 가장 빠른 흡수. 경피는 지용성 물질에서 빠를 수 있음. 경구는 소화·간 통과 필요.' },

  { id:422, type:'ox', lecture:'10강', category:'독성동태',
    question:'휘발성 유기화합물(VOC)은 폐(호기)를 통해 배설되므로, 날숨(호기)에서 측정이 가능하다.',
    answer:true, explanation:'폐 호기 배설: 에탄올(음주 측정), 아세톤, 벤젠 대사체 등 휘발성 물질. 호기 바이오마커 활용 가능.' },

  { id:423, type:'ox', lecture:'11-12강', category:'경영시스템',
    question:'OHSAS 18001은 2021년 9월에 ISO 45001로 완전히 대체되어 공식 폐지되었다.',
    answer:true, explanation:'ISO 45001(2018년 발행) 후 3년 전환 기간. 2021년 9월 OHSAS 18001 폐지. ISO 45001로 완전 이전 완료.' },

  { id:424, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'ALD(Atomic Layer Deposition, 원자층 증착)는 원자 한 층씩 순차적으로 박막을 증착하여 나노미터 이하 정밀도로 두께를 제어할 수 있다.',
    answer:true, explanation:'ALD: 두 전구체를 교대로 공급하여 표면 반응으로 원자층 단위 증착. 10nm 이하 초미세 공정 게이트 절연막·배리어 막에 필수.' },

  { id:425, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'CVD(화학기상증착)는 기상 화학물질의 반응으로 박막을 형성하고, PVD(물리기상증착)는 스퍼터링·열 증발 등 물리적 방법으로 박막을 형성한다.',
    answer:true, explanation:'CVD: 기상 전구체 화학반응 증착(SiH₄→Si막). PVD: 스퍼터링·증발로 금속막 형성(Al·Ti·Cu 등). 원리가 완전히 다름.' },

  { id:426, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'인듐(In)은 LCD·OLED 투명 전극에 사용되는 ITO의 구성 원소로, 분진 흡입 시 인듐폐증(폐포단백질증)을 유발할 수 있다.',
    answer:true, explanation:'인듐(In): ITO(Indium Tin Oxide)=LCD/OLED 전극. In₂O₃ 분진 흡입 → 폐포단백질증(PAP, 인듐폐증). IARC 2A군.' },

  { id:427, type:'ox', lecture:'11-12강', category:'탄소중립',
    question:'EU ETS(배출권 거래제)는 온실가스 배출 총량을 설정(Cap)하고 배출권을 시장에서 거래(Trade)하는 탄소 감축 시장 메커니즘이다.',
    answer:true, explanation:'ETS(Emission Trading System, Cap and Trade): 기업이 할당량 초과 시 배출권 구매, 여유분은 매도. 탄소 가격 형성.' },

  { id:428, type:'ox', lecture:'11-12강', category:'탄소중립',
    question:'2015년 파리 COP21에서 채택된 파리협정은 196개국이 참여하며, 국가결정기여(NDC)를 5년마다 제출·갱신해야 한다.',
    answer:true, explanation:'파리협정(2015): 1.5°C 노력, 2°C 이하 유지. NDC(Nationally Determined Contribution) 5년 주기 갱신 의무.' },

  { id:429, type:'ox', lecture:'11-12강', category:'제도·법규',
    question:'화학물질관리법(화관법)은 환경부 소관으로 유해화학물질 제조·수입·사용의 허가·신고 및 사고 대응을 규정한다.',
    answer:true, explanation:'화관법: 환경부 소관. ↔ 산안법(고용노동부): 작업장 안전보건. 화관법은 화학물질 취급 사업장·수송·영업 허가 규정.' },

  { id:430, type:'ox', lecture:'12-13강', category:'반도체 공정',
    question:'EUV(극자외선, 13.5nm) 노광은 ArF(193nm) 노광보다 파장이 짧아 더 미세한 회로 패턴 구현이 가능하다.',
    answer:true, explanation:'EUV(Extreme UV, 13.5nm): 5nm 이하 초미세 공정에 필수. ArF(193nm)·KrF(248nm)보다 파장 훨씬 짧음. ASML 독점 공급.' },

  /* ══════════════════════════════════════════════════
     ★ 4차 추가 4지선다 (431~445)
  ══════════════════════════════════════════════════ */

  { id:431, type:'multiple', lecture:'9강', category:'독성 개념',
    question:'LD50(반수치사량)의 올바른 정의는?',
    options:['실험동물 10%를 사망시키는 투여량','실험동물 50%를 사망시키는 투여량','독성 영향이 처음 나타나는 최저 농도','법적 허용 노출기준의 절반'],
    answer:1, explanation:'LD50(Lethal Dose 50): 집단의 50%를 사망시키는 투여량. mg/kg으로 표현. 낮을수록 독성 강함.' },

  { id:432, type:'multiple', lecture:'9강', category:'독성 개념',
    question:'급성독성과 만성독성의 비교로 올바른 것은?',
    options:[
      '급성독성은 저농도 반복 노출, 만성독성은 고농도 단기 노출',
      '급성독성은 단기 고농도 노출로 빠르게 나타나고, 만성독성은 저농도 장기 반복 노출로 서서히 나타남',
      '두 독성은 동일한 농도·시간에서 발생',
      '만성독성은 항상 급성독성보다 회복이 쉽다',
    ],
    answer:1, explanation:'급성: 단기·고농도. 만성: 장기·저농도 반복. 직업성 질환 대부분이 만성독성(잠복기·다중원인·비특이성).' },

  { id:433, type:'multiple', lecture:'10강', category:'독성동태',
    question:'독성물질의 흡수 속도를 빠른 순서대로 바르게 나열한 것은?',
    options:['경구>호흡기>경피','호흡기>경피>경구','경피>경구>호흡기','경구>경피>호흡기'],
    answer:1, explanation:'흡수 속도: 호흡기(폐, 표면적 70㎡·혈관 풍부) > 경피(지용성 물질) > 경구(소화·간 통과). 직업 노출에서 흡입이 가장 중요.' },

  { id:434, type:'multiple', lecture:'10강', category:'독성동태',
    question:'1차 통과효과(First-pass Effect)가 가장 크게 나타나는 투여 경로는?',
    options:['정맥 주사','흡입(호흡기)','경구(소화기)','경피(피부)'],
    answer:2, explanation:'경구 투여: 흡수 → 간문맥 → 간 초회 대사 → 전신 도달량 감소. 정맥·흡입은 간 초회 통과 없음 → 생체이용률 높음.' },

  { id:435, type:'multiple', lecture:'10강', category:'독성동태',
    question:'휘발성 독성물질의 주요 배설 경로는?',
    options:['신장(소변)','대장(대변)','폐(호기, 날숨)','모유'],
    answer:2, explanation:'휘발성 물질: 혈중 물질이 폐포에서 호기로 확산·배설. 에탄올(음주 측정), 아세톤·벤젠 대사체 호기 바이오마커 가능.' },

  { id:436, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'CVD(화학기상증착) 공정에서 실리콘막(Si) 형성에 사용하는 원료 가스는?',
    options:['아르곤(Ar)','실란(SiH₄)','질소(N₂)','산소(O₂)'],
    answer:1, explanation:'CVD 실리콘막: SiH₄(실란) → 열분해 → Si막+H₂. 실란은 자연발화성으로 누출 시 즉시 화재 위험.' },

  { id:437, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'PVD(물리기상증착)에서 금속막을 형성하는 주요 방법은?',
    options:['기상 화학 반응(열분해)','스퍼터링(Sputtering) 또는 열 증발(Evaporation)','전기도금(Electroplating)','화학 에칭(Chemical Etching)'],
    answer:1, explanation:'PVD: 스퍼터링(이온 충격→타깃 금속 원자 방출→기판 증착) 또는 열 증발. 화학 반응 없음. Al·Ti·W·Cu 배선 형성.' },

  { id:438, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'ALD(원자층 증착)의 특징으로 옳은 것은?',
    options:[
      '한 번에 두꺼운 막을 빠르게 증착',
      '원자 한 층씩 순차 증착으로 나노미터 이하 정밀 두께 제어',
      'PVD의 일종으로 물리적 방법 사용',
      '습식 화학 용액으로 박막을 형성',
    ],
    answer:1, explanation:'ALD: 두 전구체 교대 공급 → 표면 자기제한 반응 → 원자층 단위 증착. 10nm 이하 게이트 절연막·배리어 막 필수.' },

  { id:439, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'LCD·OLED 디스플레이 투명 전극 재료인 ITO의 구성 원소는?',
    options:['인듐(In)+구리(Cu)','인듐(In)+주석(Sn)','갈륨(Ga)+비소(As)','게르마늄(Ge)+실리콘(Si)'],
    answer:1, explanation:'ITO(Indium Tin Oxide): 인듐(In)+주석(Sn)+산소(O). 투명 전도성막. LCD·OLED·터치스크린 전극에 사용.' },

  { id:440, type:'multiple', lecture:'11-12강', category:'경영시스템',
    question:'OHSAS 18001이 대체된 ISO 표준과 대체 완료 연도는?',
    options:['ISO 14001, 2018','ISO 45001, 2021','ISO 9001, 2015','ISO 26000, 2010'],
    answer:1, explanation:'ISO 45001 발행(2018) → 3년 전환 기간 → 2021년 9월 OHSAS 18001 공식 폐지. ISO 45001로 완전 대체.' },

  { id:441, type:'multiple', lecture:'11-12강', category:'탄소중립',
    question:'파리협정(Paris Agreement)에서 설정한 지구 평균 기온 상승 억제 목표는?',
    options:['산업화 이전 대비 0.5°C 이내','산업화 이전 대비 1.5°C 이내(노력), 2°C 이하(최대)','현재 기온 대비 1°C 이내','2050년 이후 기온 변화 없음'],
    answer:1, explanation:'파리협정: 1.5°C 이내 노력, 2°C 이하 유지가 공식 목표. NDC(국가결정기여) 5년마다 갱신 제출 의무.' },

  { id:442, type:'multiple', lecture:'11-12강', category:'탄소중립',
    question:'EU ETS(배출권 거래제, Cap and Trade)에 대한 설명으로 옳은 것은?',
    options:[
      '기업이 온실가스를 무제한 배출할 수 있는 제도',
      '온실가스 배출 총량을 설정하고 배출권을 시장에서 거래하는 제도',
      '탄소세(Carbon Tax)와 동일한 개념',
      '개인에게만 적용되는 탄소 감축 규정',
    ],
    answer:1, explanation:'ETS(Emission Trading System): 총량(Cap) 설정 → 배출권 할당 → 초과분 구매·여유분 매도(Trade). 세계 최초 대규모: EU ETS(2005).' },

  { id:443, type:'multiple', lecture:'11-12강', category:'제도·법규',
    question:'화학물질관리법(화관법)의 소관 부처는?',
    options:['고용노동부','환경부','산업통상자원부','보건복지부'],
    answer:1, explanation:'화관법: 환경부 소관. 유해화학물질 영업허가·신고·취급기준·사고 신고. ↔ 산안법(고용노동부): 작업장 안전보건.' },

  { id:444, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 노광 기술에서 파장이 가장 짧아 5nm 이하 초미세 패턴을 구현하는 광원은?',
    options:['수은 UV 램프(436nm)','KrF 엑시머 레이저(248nm)','ArF 엑시머 레이저(193nm)','EUV 극자외선(13.5nm)'],
    answer:3, explanation:'EUV(Extreme Ultraviolet, 13.5nm): 가장 짧은 파장 → 가장 미세한 패턴. 3~5nm 이하 공정에 필수. ASML이 독점 공급.' },

  { id:445, type:'multiple', lecture:'12-13강', category:'반도체 공정',
    question:'인듐(In) 분진 흡입에 의한 직업성 폐질환은?',
    options:['진폐증(Pneumoconiosis)','인듐폐증(폐포단백질증, PAP)','TMAH 폐독성','이소시아네이트 천식'],
    answer:1, explanation:'인듐폐증(Indium Lung): In₂O₃·ITO 분진 흡입 → 폐포단백질증(PAP). LCD·OLED 제조 근로자에서 보고. IARC 2A군.' },

  /* ══════════════════════════════════════════════════
     ★ 4차 추가 빈칸 (446~455)
  ══════════════════════════════════════════════════ */

  { id:446, type:'fill', lecture:'9강', category:'독성 개념',
    question:'실험동물 집단의 50%를 사망시키는 독성물질의 투여량을 [①]이라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['LD50','반수치사량','Lethal Dose 50','LD₅₀']],
    explanation:'LD50(Lethal Dose 50): 반수치사량. mg/kg 단위. 낮을수록 독성 강함. 동물실험으로 산출.' },

  { id:447, type:'fill', lecture:'9강', category:'독성 개념',
    question:'급성독성은 [①] 고농도 노출로 빠르게 나타나고, 만성독성은 저농도 [②] 반복 노출로 서서히 나타난다.',
    blanks:[{id:'①',label:'①'},{id:'②',label:'②'}],
    answers:[['단기','단기간','단일'],['장기','장기간']],
    explanation:'급성(단기·고농도·빠른 발현) vs 만성(장기·저농도·잠복기 긴 발현). 직업성 질환 대부분이 만성독성.' },

  { id:448, type:'fill', lecture:'10강', category:'독성동태',
    question:'경구 흡수된 물질이 전신 순환 전에 간에서 먼저 대사되어 생체이용률이 감소하는 현상을 [①]이라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['1차통과효과','초회통과효과','First-pass Effect','first-pass effect','1차 통과효과','초회 통과 효과']],
    explanation:'First-pass Effect(1차 통과효과): 경구 흡수 → 간문맥 → 간 초회 대사 → 전신 도달량 감소.' },

  { id:449, type:'fill', lecture:'10강', category:'독성동태',
    question:'독성물질의 흡수 속도를 빠른 순서로 나타내면 [①] > 피부(경피) > 소화기(경구)이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['호흡기','폐','흡입','호흡기(흡입)','Respiratory']],
    explanation:'흡수 속도: 호흡기(폐) 가장 빠름. 폐 표면적 70㎡, 혈관 풍부 → 빠른 흡수. 직업 노출에서 흡입이 가장 중요한 경로.' },

  { id:450, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'원자 한 층씩 순차적으로 박막을 증착하는 공정의 영문 약자는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['ALD','원자층증착']],
    explanation:'ALD(Atomic Layer Deposition): 원자층 단위 정밀 증착. 두 전구체 교대 공급 → 자기제한 반응. 10nm 이하 공정에 필수.' },

  { id:451, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'스퍼터링·열 증발 등 물리적 방법으로 박막을 형성하는 공정의 약자는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['PVD','물리기상증착','Physical Vapor Deposition']],
    explanation:'PVD(Physical Vapor Deposition): 물리적 방법(스퍼터링·열 증발)으로 금속막 형성. 화학 반응 없음.' },

  { id:452, type:'fill', lecture:'11-12강', category:'탄소중립',
    question:'파리협정에서 합의한 지구 평균 기온 상승 최대 억제 목표는 산업화 이전 대비 [①]°C 이하이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['2','2.0']],
    explanation:'파리협정: 2°C 이하(최대 목표), 1.5°C 이내(이상적 목표). NDC(국가결정기여) 5년마다 갱신 제출.' },

  { id:453, type:'fill', lecture:'11-12강', category:'탄소중립',
    question:'온실가스 배출 총량(Cap)을 설정하고 배출권을 시장에서 거래(Trade)하는 탄소 감축 제도를 [①]라 한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['ETS','배출권거래제','배출권 거래제','Emission Trading System']],
    explanation:'ETS(Emission Trading System): Cap and Trade. 배출 총량 설정 → 배출권 할당 → 초과·여유분 거래. EU ETS(2005)가 세계 최초.' },

  { id:454, type:'fill', lecture:'11-12강', category:'경영시스템',
    question:'OHSAS 18001은 [①]년에 ISO 45001로 완전히 대체·폐지되었다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['2021']],
    explanation:'ISO 45001 발행(2018) → 3년 전환 기간 → 2021년 9월 OHSAS 18001 공식 폐지.' },

  { id:455, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'LCD·OLED 디스플레이 투명 전극에 사용되는 인듐 화합물의 약자는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['ITO','인듐주석산화물']],
    explanation:'ITO(Indium Tin Oxide, 인듐주석산화물): 투명 전도성 재료. LCD/OLED 전극. In₂O₃ 분진 흡입 → 인듐폐증(PAP).' },

  /* ══════════════════════════════════════════════════
     ★ 4차 추가 설명 맞추기 (456~465)
  ══════════════════════════════════════════════════ */

  { id:456, type:'match', lecture:'9강', category:'독성 개념',
    question:'다음 설명이 가리키는 것은?\n\n"실험동물 집단의 50%를 사망시키는 독성물질 투여량. mg/kg 단위. 이 값이 낮을수록 독성이 강함"',
    options:['NOAEL(무관찰독성량)','LOAEL(최저관찰독성량)','LD50(반수치사량)','BEI(생물학적노출지수)'],
    answer:2, explanation:'LD50(Lethal Dose 50): 반수치사량. 독성 강도 비교 지표. LD50↓=독성↑. 동물실험으로 산출.' },

  { id:457, type:'match', lecture:'10강', category:'독성동태',
    question:'다음 설명이 가리키는 것은?\n\n"경구 흡수된 약물·독성물질이 전신 순환 전 간문맥을 통해 간에서 먼저 대사되어 활성 물질 양이 감소하는 현상. 생체이용률 저하"',
    options:['생물학적 반감기','분포(Distribution)','1차 통과효과(First-pass Effect)','장간순환'],
    answer:2, explanation:'First-pass Effect: 경구 흡수→간문맥→간 초회 대사→전신 도달량 감소. 경피·흡입·정맥은 이 효과 없음.' },

  { id:458, type:'match', lecture:'11-12강', category:'탄소중립',
    question:'다음 설명이 가리키는 것은?\n\n"2015년 파리 COP21에서 채택된 기후변화 국제협약. 1.5°C 노력/2°C 이하 유지 목표. 196국 참여. NDC 5년 주기 제출 의무"',
    options:['교토의정서','유엔기후변화협약(UNFCCC)','파리협정(Paris Agreement)','RE100'],
    answer:2, explanation:'파리협정(2015, COP21): 196국 참여. 1.5°C 노력/2°C 이하 유지. 5년마다 NDC 갱신. 2016년 발효.' },

  { id:459, type:'match', lecture:'11-12강', category:'탄소중립',
    question:'다음 설명이 가리키는 것은?\n\n"온실가스 배출 총량(Cap)을 설정하고, 배출권을 부여하여 초과·여유분을 시장에서 거래(Trade)하는 탄소 감축 제도. EU ETS(2005)가 세계 최초"',
    options:['탄소세(Carbon Tax)','CBAM(탄소국경조정)','ETS(배출권 거래제)','RE100'],
    answer:2, explanation:'ETS(Cap and Trade): 총량 설정+배출권 거래. 탄소세는 단위당 고정 세금 부과. 두 개념은 다름.' },

  { id:460, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 것은?\n\n"두 가지 전구체를 교대 공급하여 표면 자기제한 반응으로 원자 한 층씩 박막 증착. 10nm 이하 게이트 절연막·배리어 막 형성에 필수"',
    options:['CVD(화학기상증착)','PVD(물리기상증착)','ALD(원자층증착)','스퍼터링'],
    answer:2, explanation:'ALD(Atomic Layer Deposition): 원자층 단위 정밀 증착. 두께 angstrom 수준 제어. 전구체 교대 노출로 자기제한 반응.' },

  { id:461, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 것은?\n\n"LCD·OLED·터치스크린 투명 전극에 사용되는 인듐 화합물. 분진 흡입 시 폐포단백질증(인듐폐증) 유발. IARC 2A군"',
    options:['IPA(이소프로필알코올)','BF₃(삼불화붕소)','ITO(인듐주석산화물)','TMAH'],
    answer:2, explanation:'ITO(Indium Tin Oxide): LCD/OLED 투명전극. In₂O₃ 분진 흡입 → 인듐폐증(PAP, 폐포단백질증). 디스플레이 제조 직업병.' },

  { id:462, type:'match', lecture:'11-12강', category:'경영시스템',
    question:'다음 설명이 가리키는 것은?\n\n"2018년 발행 후 2021년 9월 OHSAS 18001을 완전히 대체한 안전보건경영시스템 ISO 국제표준"',
    options:['ISO 9001','ISO 14001','ISO 45001','ISO 26000'],
    answer:2, explanation:'ISO 45001(2018년 발행, 2021년 OHSAS 18001 대체 완료): PDCA 기반. CEO 리더십·위험성평가·근로자 참여 강조.' },

  { id:463, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 것은?\n\n"파장 13.5nm의 극자외선을 사용하는 반도체 노광 장비. 5nm 이하 초미세 패턴 구현. ASML 독점 공급"',
    options:['수은 UV 램프 노광','KrF 엑시머 레이저(248nm)','ArF 엑시머 레이저(193nm)','EUV(극자외선) 노광'],
    answer:3, explanation:'EUV(Extreme Ultraviolet, 13.5nm): 3~5nm 이하 초미세 공정 필수. ArF(193nm, DUV)의 한계 극복. ASML 독점.' },

  { id:464, type:'match', lecture:'10강', category:'독성동태',
    question:'다음 설명이 가리키는 것은?\n\n"에탄올·아세톤·벤젠 등 휘발성 독성물질이 혈액에서 폐포로 확산되어 날숨(호기)으로 배설되는 경로. 호기 바이오마커 측정 가능"',
    options:['장간순환(Enterohepatic Circulation)','신장 배설(Renal Excretion)','폐 호기 배설(Pulmonary Excretion)','모유 배설(Mammary Excretion)'],
    answer:2, explanation:'폐 호기 배설: 휘발성 물질의 주요 배설 경로. 에탄올(음주 측정), 아세톤, 벤젠 대사체 호기에서 측정 가능.' },

  { id:465, type:'match', lecture:'11-12강', category:'제도·법규',
    question:'다음 설명이 가리키는 것은?\n\n"유해화학물질 제조·수입·사용 허가·신고, 취급기준, 사고 신고·수습을 환경부가 관장하는 법률. 산업안전보건법(고용노동부)과 구분"',
    options:['산업안전보건법(산안법)','화학물질관리법(화관법)','산업재해보상보험법(산재법)','고압가스안전관리법'],
    answer:1, explanation:'화관법(화학물질관리법): 환경부 소관. 화학물질 취급 사업장 등록·관리·사고 대응. ↔ 산안법: 고용노동부, 작업장 안전보건.' },

  /* ══════════════════════════════════════════════════
     ★ OX → 빈칸/설명 변형 문제 (466~490)
     기존 OX 내용을 더 어려운 유형으로 변환
  ══════════════════════════════════════════════════ */

  { id:466, type:'fill', lecture:'9강', category:'중금속 기초',
    question:'크롬은 [①]가(價) 형태가 3가보다 독성이 훨씬 강하며, 폐암·비강암·비중격천공을 유발한다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['6','6가','6가(Cr⁶⁺)','육가']],
    explanation:'6가 크롬(Cr⁶⁺): 강력한 산화제. IARC 1군. 폐암·비강암·비중격천공. 3가(Cr³⁺)는 필수 미량원소.' },

  { id:467, type:'fill', lecture:'9강', category:'신경독성',
    question:'유기수은(메틸수은)이 무기수은보다 신경독성이 강한 이유는 [①]이 높아 혈뇌장벽을 통과하기 때문이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['지용성','지용성(지질친화성)','지질친화성','지질용해도']],
    explanation:'유기수은(메틸수은): 지용성 → 혈뇌장벽 쉽게 통과 → 중추신경계 손상. 미나마타병 원인.' },

  { id:468, type:'fill', lecture:'9강', category:'방사성 원소',
    question:'방사선 투과력 순서: [①] > 베타(β)선 > 알파(α)선. 알파선은 종이 한 장으로도 차단 가능하다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['감마선','γ선','감마(γ)선','Gamma','gamma']],
    explanation:'투과력: 감마선 > 베타선 > 알파선. 알파=종이·피부, 베타=알루미늄, 감마=납·콘크리트.' },

  { id:469, type:'fill', lecture:'9강', category:'생체축적',
    question:'생물학적 반감기가 [①]수록 체내에 오래 머물러 생체축적이 더 심해진다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['길','길수록']],
    explanation:'반감기 길수록 = 배설 느림 = 축적↑. 카드뮴(신장 10~30년), 납(뼈 10~30년)이 대표적.' },

  { id:470, type:'fill', lecture:'9강', category:'필수금속 치환',
    question:'중금속 이온 노출 시 세포에서 합성되어 카드뮴·아연·구리·수은과 결합하는 해독 단백질은 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['Metallothionein','메탈로치오닌','metallothionein','MT']],
    explanation:'Metallothionein(MT): 시스테인 풍부 단백질. 중금속 결합·해독 핵심. 카드뮴 노출 시 간·신장에서 대량 합성.' },

  { id:471, type:'fill', lecture:'9강', category:'방사성 원소',
    question:'알파(α)선은 외부 피폭보다 [①] 피폭(흡입·섭취) 시 생물학적 위해가 훨씬 더 크다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['내부','내부(Internal)','내부피폭']],
    explanation:'알파선: 투과력 약(종이로 차단) → 외부 피폭 위험 낮음. 흡입·섭취로 내부 피폭 시 주변 조직에 고에너지 집중 → 매우 위험.' },

  { id:472, type:'fill', lecture:'9강', category:'방사성 원소',
    question:'현재 상용 원자력 발전소는 U-235의 핵[①]을 이용하며, 핵융합은 아직 연구 단계이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['분열','핵분열','fission']],
    explanation:'상용 원전: 핵분열(Fission). 핵융합(Fusion)은 ITER 프로젝트 등 연구 단계. 둘을 혼동하지 말 것.' },

  { id:473, type:'fill', lecture:'9강', category:'신경독성',
    question:'납(Pb) 노출 시 아연 대신 납이 포르피린 고리에 결합해 형성되는 비정상 화합물의 약자는 [①]이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['ZPP','아연프로토포르피린']],
    explanation:'ZPP(Zinc Protoporphyrin): 납에 의한 헴 합성 장애의 혈액 영향 바이오마커. 혈중 ZPP↑ = 납 건강 영향.' },

  { id:474, type:'fill', lecture:'10강', category:'독성동태',
    question:'독성 영향이 관찰되지 않는 최고 용량은 [①], 독성이 처음 관찰되는 최저 용량은 [②]이다.',
    blanks:[{id:'①',label:'①'},{id:'②',label:'②'}],
    answers:[['NOAEL','노아엘'],['LOAEL','로아엘']],
    explanation:'NOAEL(No Observed Adverse Effect Level) vs LOAEL(Lowest Observed Adverse Effect Level). NOAEL < LOAEL.' },

  { id:475, type:'fill', lecture:'10강', category:'독성동태',
    question:'피부(경피) 흡수가 잘 되는 물질의 특성은 [①]이 높다는 것이다. 불산(HF), TMAH, 유기용제가 대표적이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['지용성','지용성(지질친화성)','지질용해도']],
    explanation:'지용성↑ → 피부 지질이중막 통과 쉬움. HF·TMAH·유기용제가 경피 흡수 위험. 불산은 약산이어서 피부 침투성 강함.' },

  { id:476, type:'fill', lecture:'13-14강', category:'SEMI',
    question:'SEMI S8은 반도체 장비의 [①] 가이드라인이고, SEMI S10은 [②] 가이드라인이다.',
    blanks:[{id:'①',label:'①'},{id:'②',label:'②'}],
    answers:[['인간공학','Ergonomics','에르고노믹스'],['위험성평가','Risk Assessment','위험성 평가']],
    explanation:'SEMI S8: Ergonomics(인간공학). SEMI S10: Risk Assessment(위험성평가). 혼동 주의. S2=EHS, S14=화재.' },

  { id:477, type:'fill', lecture:'11-12강', category:'제도·법규',
    question:'ACGIH TLV는 자발적 권고 기준이고, OSHA [①]은 미국의 법적 강제 허용노출기준이다.',
    blanks:[{id:'①',label:'①'}],
    answers:[['PEL','Permissible Exposure Limit']],
    explanation:'OSHA PEL(법적 강제) vs ACGIH TLV(자발적 권고). 실제로 TLV가 더 자주 업데이트되어 더 엄격한 경우 많음.' },

  { id:478, type:'fill', lecture:'10강', category:'독성동태',
    question:'생체변환 1상 반응의 주요 효소 CYP450은 주로 [①]에 분포한다(폐가 아님).',
    blanks:[{id:'①',label:'①'}],
    answers:[['간','liver','Liver','간(liver)']],
    explanation:'CYP450: 주로 간에 분포. 소장·폐·신장에도 일부 존재. 폐에 주로 분포한다는 것은 틀린 내용.' },

  { id:479, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'포스핀(PH₃)은 인(P) 공급원으로 [①]형(type) 도핑에 사용된다(P형이 아님).',
    blanks:[{id:'①',label:'①'}],
    answers:[['N','n','N형','n형','N-type']],
    explanation:'포스핀(PH₃): N형 도핑(전자 공여). P형에는 붕소계(BF₃, B₂H₆). 자주 혼동되므로 주의.' },

  { id:480, type:'fill', lecture:'12-13강', category:'반도체 공정',
    question:'반도체 클린룸 ISO 등급에서 숫자가 [①]수록 더 청정한 환경이다(ISO Class 1이 가장 청정).',
    blanks:[{id:'①',label:'①'}],
    answers:[['낮','낮을','낮을수록']],
    explanation:'ISO 14644 클린룸 등급: 숫자 낮을수록 청정. Class 1(최고청정) ~ Class 9. 반도체 전공정은 Class 1~3.' },

  { id:481, type:'match', lecture:'9강', category:'중금속 기초',
    question:'다음 설명이 가리키는 것은?\n\n"중금속 이온 노출 시 세포에서 합성되는 해독 단백질. 시스테인 잔기에 중금속 결합. 카드뮴·아연·구리·수은과 높은 친화력. 신장 피질에 카드뮴 장기 저장의 핵심"',
    options:['킬레이트제(Chelating Agent)','Metallothionein(메탈로치오닌)','글루타치온(GSH)','항산화효소(SOD)'],
    answer:1, explanation:'Metallothionein(MT): 간·신장에서 합성. 카드뮴-MT 복합체로 신장에 장기 저장 → T½ 10~30년.' },

  { id:482, type:'match', lecture:'9강', category:'발암성',
    question:'다음 설명이 가리키는 것은?\n\n"항공우주·전자 부품 소재. IARC 1군 발암물질. 흡입 시 면역매개 만성 폐육아종증(CBD) 발생. 희귀하지만 고위험"',
    options:['니켈(Ni)','베릴륨(Be)','6가 크롬(Cr⁶⁺)','비소(As)'],
    answer:1, explanation:'베릴륨(Be): 항공·전자·원자력 소재. 흡입 → 면역매개 폐육아종증(CBD: Chronic Beryllium Disease). IARC 1군.' },

  { id:483, type:'match', lecture:'9강', category:'발암성',
    question:'다음 설명이 가리키는 것은?\n\n"IARC 1군 발암물질. 도금·용접 공정 주요 노출. 접촉 시 금속 알레르기(피부염) 가장 흔하고, 흡입 시 폐암·비강암 유발"',
    options:['납(Pb)','카드뮴(Cd)','니켈(Ni)','망간(Mn)'],
    answer:2, explanation:'니켈(Ni): IARC 1군. 금속 알레르기 가장 흔한 원인. 스테인리스·도금·합금·반도체 배선에 사용.' },

  { id:484, type:'match', lecture:'9강', category:'방사성 원소',
    question:'다음 설명이 가리키는 것은?\n\n"세 종류 방사선 중 투과력 가장 약해 종이 한 장으로 차단 가능하나, 흡입·섭취로 내부 피폭 시 주변 조직에 에너지를 집중하여 매우 위험"',
    options:['감마(γ)선','베타(β)선','알파(α)선','중성자선'],
    answer:2, explanation:'알파선: 외부 피폭(↓위험) vs 내부 피폭(↑위험). 라돈(Rn) 흡입이 대표적 내부 피폭 사례. 폐암 유발.' },

  { id:485, type:'match', lecture:'13-14강', category:'SEMI',
    question:'다음 설명이 가리키는 것은?\n\n"반도체 장비 설계에서 작업 자세·반복 동작·힘·진동·조명 등을 인체공학적으로 최적화하는 기준을 제공하는 SEMI 가이드라인 (S10·S2와 구분)"',
    options:['SEMI S2','SEMI S6','SEMI S8','SEMI S14'],
    answer:2, explanation:'SEMI S8: Ergonomics(인간공학). S2=EHS, S6=유해가스 모니터링, S10=위험성평가, S14=화재위험성평가.' },

  { id:486, type:'match', lecture:'11-12강', category:'제도·법규',
    question:'다음 설명이 가리키는 것은?\n\n"ACGIH가 제정. 법적 강제력 없는 자발적 권고 기준. 8시간 TWA. 과학적 근거로 자주 갱신되어 OSHA PEL보다 실제로 엄격한 경우 많음"',
    options:['OSHA PEL(허용노출기준)','ACGIH TLV(권고 노출기준)','BEI(생물학적 노출지수)','NIOSH REL'],
    answer:1, explanation:'ACGIH TLV(Threshold Limit Value): 자발적 권고. OSHA PEL은 법적 강제. TLV가 과학적으로 더 자주 업데이트.' },

  { id:487, type:'match', lecture:'12-13강', category:'반도체 공정',
    question:'다음 설명이 가리키는 것은?\n\n"포스핀(PH₃)을 인(P) 공급원으로 사용하며, 주어진 불순물이 전자를 공여하여 전류를 운반하는 반도체 도핑 유형"',
    options:['P형(정공 도핑)','N형(전자 도핑)','양성형(ambipolar)','절연형(intrinsic)'],
    answer:1, explanation:'N형 도핑: 인(P)·비소(As)·안티몬(Sb) 등 5족 원소 → 전자 공여. P형: 붕소(B) 등 3족 원소 → 정공(hole) 생성.' },

  { id:488, type:'match', lecture:'9강', category:'중금속 기초',
    question:'다음 설명이 가리키는 것은?\n\n"독성 금속 이온이 형태 유사성으로 필수 금속 이온 자리를 빼앗는 기전. 납→칼슘, 카드뮴→아연, 수은→-SH기 결합이 대표 예"',
    options:['산화적 스트레스','항산화 방어 파괴','필수금속 치환(Essential Metal Displacement)','SH기 결합'],
    answer:2, explanation:'필수금속 치환: 형태 유사성이 독성 기전 핵심. Pb↔Ca²⁺, Cd↔Zn²⁺ → 정상 기능 방해.' },

  { id:489, type:'match', lecture:'11-12강', category:'연관·인과',
    question:'다음 설명이 가리키는 것은?\n\n"Hill의 9가지 인과관계 기준 중 유일한 필수 조건. 원인(노출)이 결과(질병)보다 반드시 시간적으로 선행해야 한다"',
    options:['연관의 강도(Strength)','일관성(Consistency)','시간성(Temporality)','생물학적 개연성(Plausibility)'],
    answer:2, explanation:'Temporality(시간성): Hill 9기준 중 유일 필수. 노출→질병 순서가 없으면 인과 성립 불가. 나머지 8개는 지지 기준.' },

  { id:490, type:'match', lecture:'10강', category:'독성동태',
    question:'다음 설명이 가리키는 것은?\n\n"독성 영향이 관찰되지 않는 최고 용량. 이 값을 근거로 안전계수를 적용하여 독성참고치(RfD) 또는 일일허용섭취량(ADI) 산출"',
    options:['LOAEL(최저관찰독성량)','LD50(반수치사량)','NOAEL(무관찰독성량)','BEI(생물학적노출지수)'],
    answer:2, explanation:'NOAEL(No Observed Adverse Effect Level): 독성 없는 최고 용량. NOAEL ÷ 안전계수(100~1000) = RfD/ADI 기준.' },

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

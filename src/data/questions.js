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

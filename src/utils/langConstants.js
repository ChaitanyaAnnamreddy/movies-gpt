const langConstants = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  pt: 'Português',
  ru: 'Русский',
  zh: '中文',
  hi: 'हिन्दी',
  ta: 'தமிழ்',
  kn: 'ಕನ್ನಡ',
  te: 'తెలుగు',
  ml: 'മലയാളം',

  search: {
    en: 'Search',
    hi: 'खोजें',
    ta: 'தேடு',
    kn: 'ಹುಡುಕಿ',
    te: 'వెతకండి',
    ml: 'തിരയുക',
    es: 'Buscar',
    fr: 'Rechercher',
    de: 'Suchen',
    it: 'Cerca',
    ja: '検索',
    ko: '검색',
    pt: 'Pesquisar',
    ru: 'Поиск',
    zh: '搜索',
  },

  gptSearch: {
    en: 'GPT Search',
    hi: 'खोज',
    ta: 'தேடல்',
    kn: 'ಹುಡುಕಾಟ',
    te: 'వెతకండి',
    ml: 'തിരയൽ',
    es: 'Búsqueda',
    fr: 'Recherche',
    de: 'Suche',
    it: 'Ricerca',
    ja: '検索',
    ko: '검색',
    pt: 'Pesquisa',
    ru: 'поиск',
    zh: '搜索',
  },

  movie: {
    en: 'Movie',
    hi: 'फ़िल्म',
    ta: 'திரைப்படம்',
    kn: 'ಚಿತ್ರ',
    te: 'సినిమా',
    ml: 'ചലച്ചിത്രം',
    es: 'Película',
    fr: 'Film',
    de: 'Film',
    it: 'Film',
    ja: '映画',
    ko: '영화',
    pt: 'Filme',
    ru: 'Фильм',
    zh: '电影',
  },

  tv: {
    en: 'TV',
    hi: 'टीवी',
    ta: 'தொலைக்காட்சி',
    kn: 'ಟಿವಿ',
    te: 'టీవీ',
    ml: 'ടിവി',
    es: 'Televisión',
    fr: 'Télévision',
    de: 'Fernsehen',
    it: 'Televisione',
    ja: 'テレビ',
    ko: 'TV',
    pt: 'Televisão',
    ru: 'ТВ',
    zh: '电视',
  },

  people: {
    en: 'People',
    hi: 'लोग',
    ta: 'மக்கள்',
    kn: 'ಜನರು',
    te: 'ప్రజలు',
    ml: 'ജനങ്ങൾ',
    es: 'Gente',
    fr: 'Personnes',
    de: 'Menschen',
    it: 'Persone',
    ja: '人々',
    ko: '사람들',
    pt: 'Pessoas',
    ru: 'Люди',
    zh: '人们',
  },

  more: {
    en: 'More',
    hi: 'और',
    ta: 'மேலும்',
    kn: 'ಹೆಚ್ಚು',
    te: 'ఇంకా',
    ml: 'കൂടുതൽ',
    es: 'Más',
    fr: 'Plus',
    de: 'Mehr',
    it: 'Di più',
    ja: 'もっと',
    ko: '더보기',
    pt: 'Mais',
    ru: 'Больше',
    zh: '更多',
  },

  movies: {
    en: 'Movies',
    hi: 'फिल्में',
    ta: 'திரைப்படங்கள்',
    kn: 'ಚಲನಚಿತ್ರಗಳು',
    te: 'సినిమాలు',
    ml: 'സിനിമകൾ',
    es: 'Películas',
    fr: 'Films',
    de: 'Filme',
    it: 'Film',
    ja: '映画',
    ko: '영화들',
    pt: 'Filmes',
    ru: 'Фильмы',
    zh: '电影',
  },

  tvShows: {
    en: 'TV Shows',
    hi: 'टीवी शो',
    ta: 'தொலைக்காட்சி நிகழ்ச்சிகள்',
    kn: 'ಟಿವಿ ಕಾರ್ಯಕ್ರಮಗಳು',
    te: 'టీవీ షోలు',
    ml: 'ടിവി ഷോകൾ',
    es: 'Programas de televisión',
    fr: 'Émissions de télévision',
    de: 'Fernsehsendungen',
    it: 'Programmi TV',
    ja: 'テレビ番組',
    ko: 'TV 프로그램',
    pt: 'Programas de TV',
    ru: 'ТВ-шоу',
    zh: '电视剧',
  },

  findAMovie: {
    en: 'Find a movie, let AI do the magic✨',
    hi: 'एक फिल्म खोजें, एआई जादू करेगा✨',
    ta: 'ஒரு திரைப்படத்தை தேடுங்கள், ஏ.ஐ அதிசயம் செய்யும்✨',
    kn: 'ಸಿನಿಮಾ ಹುಡುಕಿ, AI ಮಾಯೆ ಮಾಡಲಿ✨',
    te: 'సినిమా వెతకండి, AI మాయ చేస్తుంది✨',
    ml: 'ഒരു സിനിമ കണ്ടെത്തുക, AI അത്ഭുതം ചെയ്യും✨',
    es: 'Encuentra una película, deja que la IA haga su magia✨',
    fr: "Trouvez un film, laissez l'IA faire sa magie✨",
    de: 'Finde einen Film, lass die KI zaubern✨',
    it: "Trova un film, lascia che l'IA faccia la magia✨",
    ja: '映画を見つけて、AIの魔法を楽しんで✨',
    ko: '영화를 찾아보세요, AI가 마법을 부립니다✨',
    pt: 'Encontre um filme, deixe a IA fazer sua mágica✨',
    ru: 'Найдите фильм, пусть ИИ творит чудеса✨',
    zh: '寻找电影，让AI施展魔法✨',
  },
  signOutNetflix: {
    en: 'Sign out of Netflix',
    hi: 'नेटफ्लिक्स से साइन आउट करें',
    ta: 'நெட்பிளிக்ஸில் இருந்து வெளியேறு',
    kn: 'Netflix ನಿಂದ ಸೈನ್ ಔಟ್ ಮಾಡಿ',
    te: 'Netflix నుండి సైన్ అవుట్ చేయండి',
    ml: 'Netflixൽ നിന്ന് സൈൻ ഔട്ട് ചെയ്യുക',
    es: 'Cerrar sesión en Netflix',
    fr: 'Se déconnecter de Netflix',
    de: 'Von Netflix abmelden',
    it: 'Esci da Netflix',
    ja: 'Netflixからサインアウト',
    ko: 'Netflix에서 로그아웃',
    pt: 'Sair da Netflix',
    ru: 'Выйти из Netflix',
    zh: '退出 Netflix',
  },
  account: {
    en: 'Account',
    hi: 'खाता',
    ta: 'கணக்கு',
    kn: 'ಖಾತೆ',
    te: 'ఖాతా',
    ml: 'അക്കൗണ്ട്',
    es: 'Cuenta',
    fr: 'Compte',
    de: 'Konto',
    it: 'Account',
    ja: 'アカウント',
    ko: '계정',
    pt: 'Conta',
    ru: 'Аккаунт',
    zh: '账户',
  },
  signIn: {
    en: 'Sign In',
    hi: 'साइन इन करें',
    ta: 'உள்நுழைக',
    kn: 'ಸೈನ್ ಇನ್ ಮಾಡಿ',
    te: 'సైన్ ఇన్ చేయండి',
    ml: 'സൈൻ ഇൻ ചെയ്യുക',
    es: 'Iniciar sesión',
    fr: 'Se connecter',
    de: 'Anmelden',
    it: 'Accedi',
    ja: 'サインイン',
    ko: '로그인',
    pt: 'Entrar',
    ru: 'Войти',
    zh: '登录',
  },
  newToNetflix: {
    en: 'New to Netflix',
    hi: 'नेटफ्लिक्स पर नए हैं?',
    ta: 'நெட்ப்ளிக்ஸில் புதியவரா?',
    kn: 'Netflixಗೆ ಹೊಸವೇರಾ?',
    te: 'Netflixకి కొత్తవారా?',
    ml: 'Netflix-ലേയ്ക്ക് പുതിയവരാണോ?',
    es: '¿Nuevo en Netflix?',
    fr: 'Nouveau sur Netflix ?',
    de: 'Neu bei Netflix?',
    it: 'Nuovo su Netflix?',
    ja: 'Netflixは初めてですか？',
    ko: 'Netflix를 처음 사용하시나요?',
    pt: 'Novo na Netflix?',
    ru: 'Новичок в Netflix?',
    zh: '刚加入Netflix？',
  },
  signUp: {
    en: 'Sign Up',
    hi: 'साइन अप करें',
    ta: 'பதிவு செய்யுங்கள்',
    kn: 'ಸೈನ್ ಅಪ್ ಮಾಡಿ',
    te: 'సైన్ అప్ చేయండి',
    ml: 'സൈൻ അപ്പ് ചെയ്യുക',
    es: 'Regístrate',
    fr: 'S’inscrire',
    de: 'Anmelden',
    it: 'Iscriviti',
    ja: 'サインアップ',
    ko: '가입하기',
    pt: 'Inscrever-se',
    ru: 'Зарегистрироваться',
    zh: '注册',
  },
  email: {
    en: 'Email',
    hi: 'ईमेल',
    ta: 'மின்னஞ்சல்',
    kn: 'ಇಮೇಲ್',
    te: 'ఇమెయిల్',
    ml: 'ഇമെയിൽ',
    es: 'Correo electrónico',
    fr: 'E-mail',
    de: 'E-Mail',
    it: 'E-mail',
    ja: 'メール',
    ko: '이메일',
    pt: 'E-mail',
    ru: 'Электронная почта',
    zh: '电子邮件',
  },
  password: {
    en: 'Password',
    hi: 'पासवर्ड',
    ta: 'கடவுச்சொல்',
    kn: 'ಗುಪ್ತಪದ',
    te: 'పాస్‌వర్డ్',
    ml: 'അടയാളവാക്ക്',
    es: 'Contraseña',
    fr: 'Mot de passe',
    de: 'Passwort',
    it: 'Password',
    ja: 'パスワード',
    ko: '비밀번호',
    pt: 'Senha',
    ru: 'Пароль',
    zh: '密码',
  },
  alreadyHaveAccount: {
    en: 'Already have an account?',
    hi: 'पहले से ही खाता है?',
    ta: 'ஏற்கனவே ஒரு கணக்கு உள்ளதா?',
    kn: 'ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೆ?',
    te: 'ఇప్పటికే ఖాతా ఉందా?',
    ml: 'ഇതിനകം ഒരു അക്കൗണ്ട് ഉണ്ടോ?',
    es: '¿Ya tienes una cuenta?',
    fr: 'Vous avez déjà un compte ?',
    de: 'Haben Sie bereits ein Konto?',
    it: 'Hai già un account?',
    ja: 'すでにアカウントをお持ちですか？',
    ko: '이미 계정이 있나요?',
    pt: 'Já tem uma conta?',
    ru: 'У вас уже есть аккаунт?',
    zh: '已有账户？',
  },
  fullName: {
    en: 'Full name',
    hi: 'पूरा नाम',
    ta: 'முழு பெயர்',
    kn: 'ಪೂರ್ಣ ಹೆಸರು',
    te: 'పూర్తి పేరు',
    ml: 'പൂർണ്ണ നാമം',
    es: 'Nombre completo',
    fr: 'Nom complet',
    de: 'Vollständiger Name',
    it: 'Nome completo',
    ja: 'フルネーム',
    ko: '전체 이름',
    pt: 'Nome completo',
    ru: 'Полное имя',
    zh: '全名',
  },
  recommendations: {
    en: 'Recommendations',
    hi: 'सिफारिशें',
    ta: 'பரிந்துரைகள்',
    kn: 'ಶಿಫಾರಸುಗಳು',
    te: 'సిఫారసులు',
    ml: 'ശുപാർശകൾ',
    es: 'Recomendaciones',
    fr: 'Recommandations',
    de: 'Empfehlungen',
    it: 'Raccomandazioni',
    ja: 'おすすめ',
    ko: '추천',
    pt: 'Recomendações',
    ru: 'Рекомендации',
    zh: '推荐',
  },
  popularMovies: {
    en: 'Popular Movies',
    hi: 'लोकप्रिय फ़िल्में',
    ta: 'பிரபலமான திரைப்படங்கள்',
    kn: 'ಜನಪ್ರಿಯ ಚಲನಚಿತ್ರಗಳು',
    te: 'ప్రముఖ సినిమాలు',
    ml: 'പ്രശസ്ത സിനിമകൾ',
    es: 'Películas populares',
    fr: 'Films populaires',
    de: 'Beliebte Filme',
    it: 'Film popolari',
    ja: '人気の映画',
    ko: '인기 영화',
    pt: 'Filmes populares',
    ru: 'Популярные фильмы',
    zh: '热门电影',
  },
  nowPlaying: {
    en: 'Now Playing',
    hi: 'अब चल रही हैं',
    ta: 'இப்போது இயக்கத்தில்',
    kn: 'ಈಗ ಪ್ರದರ್ಶನದಲ್ಲಿದೆ',
    te: 'ఇప్పుడు ప్రదర్శనలో ఉంది',
    ml: 'ഇപ്പോൾ പ്രദർശനം',
    es: 'En cartelera',
    fr: "Actuellement à l'affiche",
    de: 'Jetzt im Kino',
    it: 'Ora in riproduzione',
    ja: '現在上映中',
    ko: '현재 상영 중',
    pt: 'Em exibição',
    ru: 'Сейчас в кино',
    zh: '正在上映',
  },
  topRatedMovies: {
    en: 'Top Rated Movies',
    hi: 'सर्वश्रेष्ठ रेटेड फ़िल्में',
    ta: 'உயர்ந்த மதிப்பீட்டுக்குரிய திரைப்படங்கள்',
    kn: 'ಅತ್ಯುತ್ತಮ ರೇಟಿಂಗ್ ಪಡೆದ ಚಲನಚಿತ್ರಗಳು',
    te: 'అత్యధిక రేటింగ్ పొందిన సినిమాలు',
    ml: 'ഉയർന്ന റേറ്റിംഗ് നേടിയ സിനിമകൾ',
    es: 'Películas mejor valoradas',
    fr: 'Films les mieux notés',
    de: 'Bestbewertete Filme',
    it: 'Film più votati',
    ja: 'トップ評価の映画',
    ko: '최고 평점 영화',
    pt: 'Filmes mais bem avaliados',
    ru: 'Лучшие фильмы по рейтингу',
    zh: '最高评分电影',
  },
  awardWinningTvShows: {
    en: 'Award Winning TV Shows',
    hi: 'पुरस्कार विजेता टीवी शो',
    ta: 'விருது பெற்ற தொலைக்காட்சி நிகழ்ச்சிகள்',
    kn: 'ಪ್ರಶಸ್ತಿ ಗೆದ್ದ ಟಿವಿ ಶೋಗಳು',
    te: 'అవార్డు గెలుచుకున్న టీవీ షోలు',
    ml: 'പുരസ്കാരം നേടിയ ടിവി ഷോകൾ',
    es: 'Programas de TV premiados',
    fr: 'Émissions TV primées',
    de: 'Preisgekrönte TV-Shows',
    it: 'Programmi TV premiati',
    ja: '受賞歴のあるテレビ番組',
    ko: '수상 경력 있는 TV 프로그램',
    pt: 'Programas de TV premiados',
    ru: 'Награжденные телешоу',
    zh: '获奖电视节目',
  },
  play: {
    en: 'Play',
    hi: 'चलाएं',
    ta: 'நடத்து',
    kn: 'ಪ್ಲೇ ಮಾಡಿ',
    te: 'ప్లే చేయండి',
    ml: 'കളിക്കുക',
    es: 'Reproducir',
    fr: 'Jouer',
    de: 'Abspielen',
    it: 'Riproduci',
    ja: '再生',
    ko: '재생',
    pt: 'Reproduzir',
    ru: 'Играть',
    zh: '播放',
  },
  moreInfo: {
    en: 'More Info',
    hi: 'अधिक जानकारी',
    ta: 'மேலும் தகவல்',
    kn: 'ಹೆಚ್ಚಿನ ಮಾಹಿತಿ',
    te: 'మరింత సమాచారం',
    ml: 'കൂടുതൽ വിവരങ്ങൾ',
    es: 'Más información',
    fr: "Plus d'infos",
    de: 'Mehr Infos',
    it: 'Maggiori informazioni',
    ja: '詳細情報',
    ko: '추가 정보',
    pt: 'Mais informações',
    ru: 'Подробнее',
    zh: '更多信息',
  },
  language: {
    en: 'Language',
    hi: 'भाषा',
    ta: 'மொழி',
    kn: 'ಭಾಷೆ',
    te: 'భాష',
    ml: 'ഭാഷ',
    es: 'Idioma',
    fr: 'Langue',
    de: 'Sprache',
    it: 'Lingua',
    ja: '言語',
    ko: '언어',
    pt: 'Idioma',
    ru: 'Язык',
    zh: '语言',
  },
  home: {
    en: 'Home',
    hi: 'होम',
    ta: 'முகப்பு',
    kn: 'ಮುಖಪುಟ',
    te: 'హోమ్',
    ml: 'ഹോം',
    es: 'Inicio',
    fr: 'Accueil',
    de: 'Startseite',
    it: 'Home',
    ja: 'ホーム',
    ko: '홈',
    pt: 'Início',
    ru: 'Главная',
    zh: '首页',
  },
}

export default langConstants

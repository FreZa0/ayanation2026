import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const courseInfo = [
  "Решать задачи пользователей и бизнеса",
  "Разрабатывать внешний облик сайтов и мобильных приложений",
  "Проектировать пользовательский опыт и анализировать целевую аудиторию.",
  "Делать цифровые продукты полезными и удобными. Работать с Figma",
  "и другими инструментами",
]

const filesToStudy = [
  { id: 1, name: "UX Portfolio Resume.doc", size: "3 МБ", type: "doc" },
  { id: 2, name: "UX Portfolio Resume.MP4", size: "89 МБ", type: "video" },
  { id: 3, name: "UX Portfolio Resume 2.MP4", size: "144 МБ", type: "video" },
]

const programContent = [
  "Внедрение компьютерного зрения на сотни точек по всей России.",
  "Зачем МТС суперкомпьютер?",
  "Распределенная трассировка в экосистеме МТС.",
  "Spring Boot. Эффективное тестирование Service и Data layer.",
  "Проверка гипотезы валидности соцдем-таргетинга в наружной рекламе.",
  "Авторизация через социальные сети",
  "Архитектура многомодульного Android-приложения. Опыт внедрения",
  "Выпуск технологического радара Big Data за Q3 2021",
  "Коробка Шрёдингера. Инструкция по выживанию для котов",
  "Митап node.js + wasd.tv",
  "Кухня молодого тимлида",
  "TechTalk. Как развивать продукт, потеряв команду",
]

const youWillLearn = [
  "Как происходило внедрение коробочного решения Timesheets 2.0",
  "Что такое технологический радар, как команда его использует и с какими процессами он связан",
  "Про опыт расширения архитектуры Android-приложения",
  "Об опыте интеграции авторизации через социальные сети на платформе WASD.TV",
]

const usefulLinks = [
  { text: "Подключение к платформе Наблюдаемости Результаты нагрузочного тестирования (низкое влияние Jaeger)", href: "#" },
  { text: "Публичный дашборд с метриками платформы", href: "#" },
  { text: "GitHub", href: "#" },
]

const similarCourses = [
  {
    id: 1,
    category: "Дизайн",
    type: "Курс",
    title: "Дизайнер интерфейсов",
    description: "Если вы хоть раз думали о том, как улучшить какой-нибудь сервис, если вы склонны к анализу и цените ясность",
    date: "2 СЕНТЯБРЯ",
    time: "09:30 — 12:00",
    badge: "Вам назначено",
    badgeType: "blue",
    duration: "21 день",
    gradient: "red",
  },
  {
    id: 2,
    category: "Дизайн",
    type: "Курс",
    title: "Дизайнер интерфейсов",
    description: "Если вы хоть раз думали о том, как улучшить какой-нибудь сервис, если вы склонны к анализу и цените ясность",
    date: "21 СЕНТЯБРЯ",
    time: "08:13 — 13:00",
    badge: "Пройти до 13 мая",
    badgeType: "orange",
    duration: "13 дней",
    gradient: "purple",
  },
  {
    id: 3,
    category: "Дизайн",
    type: "Курс",
    title: "Дизайнер интерфейсов",
    description: "Если вы хоть раз думали о том, как улучшить какой-нибудь сервис, если вы склонны к анализу и цените ясность",
    date: "21 СЕНТЯБРЯ",
    time: "08:13 — 13:00",
    badge: "Пройти до 13 мая",
    badgeType: "orange",
    duration: "13 дней",
    gradient: "purple",
  },
  {
    id: 4,
    category: "Дизайн",
    type: "Курс",
    title: "Дизайнер интерфейсов",
    description: "Если вы хоть раз думали о том, как улучшить какой-нибудь сервис, если вы склонны к анализу и цените ясность",
    date: "2 СЕНТЯБРЯ",
    time: "09:30 — 12:00",
    badge: "Вам назначено",
    badgeType: "blue",
    duration: "21 день",
    gradient: "red",
  },
]

const gradientClasses = {
  red: "bg-gradient-to-br from-[#FF1B4D] to-[#FF8A65]",
  purple: "bg-gradient-to-br from-[#9FA8DA] to-[#C5CAE9]",
}

const fileIcons = {
  doc: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#1E40AF" />
      <path d="M10 12H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 16H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 20H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  video: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#0284C7" />
      <rect x="10" y="10" width="12" height="12" rx="2" fill="white" />
      <circle cx="22" cy="22" r="4" fill="#38BDF8" />
    </svg>
  ),
}

export default function LessonPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="flex h-[60px] items-center justify-between border-b px-4 lg:px-[92px]">
        <div className="flex items-center gap-3">
          <img src="/images/alrosa-logo.svg" alt="ALROSA" className="h-[32px] w-auto" />
          <span className="font-inter text-base font-semibold text-black">
            ALROSA Talent Hub
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          <a href="/" className="rounded-lg px-4 py-2 font-inter text-base font-medium text-black hover:bg-[#F5F5F5]">
            Главное
          </a>
          <a href="#" className="rounded-lg px-4 py-2 font-inter text-base font-medium text-black hover:bg-[#F5F5F5]">
            О нас
          </a>
          <a href="/courses" className="rounded-lg bg-[#F5F5F5] px-4 py-2 font-inter text-base font-medium text-black">
            Курсы
          </a>
          <a href="#" className="rounded-lg px-4 py-2 font-inter text-base font-medium text-black hover:bg-[#F5F5F5]">
            Контакты
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden h-9 rounded-lg border-[#E5E5E5] px-4 font-inter text-base font-medium text-black hover:bg-[#F5F5F5] lg:inline-flex">
            Войти
          </Button>
          <Button className="hidden h-9 rounded-lg bg-[#1A1A1A] px-4 font-inter text-base font-medium text-white hover:bg-[#1A1A1A]/90 lg:inline-flex">
            Зарегистрироваться
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-10 items-center justify-center rounded-lg lg:hidden"
          >
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-b bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2">
            <a href="/" className="rounded-lg px-4 py-3 font-inter text-base font-medium text-black hover:bg-[#F5F5F5]">
              Главное
            </a>
            <a href="#" className="rounded-lg px-4 py-3 font-inter text-base font-medium text-black hover:bg-[#F5F5F5]">
              О нас
            </a>
            <a href="/courses" className="rounded-lg bg-[#F5F5F5] px-4 py-3 font-inter text-base font-medium text-black">
              Курсы
            </a>
            <a href="#" className="rounded-lg px-4 py-3 font-inter text-base font-medium text-black hover:bg-[#F5F5F5]">
              Контакты
            </a>
            <Button variant="outline" className="mt-2 h-10 rounded-lg border-[#E5E5E5] font-inter text-base font-medium text-black">
              Войти
            </Button>
            <Button className="h-10 rounded-lg bg-[#1A1A1A] font-inter text-base font-medium text-white">
              Зарегистрироваться
            </Button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex flex-1 flex-col px-4 py-6 lg:px-[92px]">
        {/* Back Button */}
        <button className="mb-6 flex items-center gap-2 font-inter text-base text-black hover:underline">
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Назад
        </button>

        {/* Page Title */}
        <h1 className="mb-6 font-inter text-[28px] font-semibold text-black lg:text-[36px]">
          Дизайнер интерфейсов
        </h1>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main Content Area */}
          <div className="flex-1">
            {/* Video Player */}
            <div className="mb-8 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#FF1B4D] to-[#FF8A65]">
              <div className="flex aspect-video items-center justify-center">
                <button className="flex size-16 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 sm:size-20">
                  <svg className="ml-1 size-6 sm:size-8" fill="#FF1B4D" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Course Info Grid */}
            <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Left Column */}
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="mb-3 font-inter text-base font-semibold text-black">
                    Курс
                  </h2>
                  <p className="font-inter text-base text-[#737373]">
                    Курс подойдёт всем сотрудникам, которые хотят узнать больше про опыт разных команд и проектов.
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 font-inter text-base font-semibold text-black">
                    Дизайн программы
                  </h2>
                  <p className="font-inter text-base text-[#737373]">
                    Программа состоит из 11 частей.
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 font-inter text-base font-semibold text-black">
                    Содержание программы
                  </h2>
                  <div className="flex flex-col gap-2">
                    {programContent.map((item, index) => (
                      <p key={index} className="font-inter text-base text-black">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="mb-3 font-inter text-base font-semibold text-black">
                    Вы узнаете
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {youWillLearn.map((item, index) => (
                      <li key={index} className="font-inter text-base text-black">
                        <span className="mr-2">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 font-inter text-base font-semibold text-black">
                    Полезные ссылки
                  </h2>
                  <div className="flex flex-col gap-3">
                    {usefulLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="font-inter text-base text-[#0066FF] hover:underline"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Courses */}
            <div>
              <h2 className="mb-6 font-inter text-[24px] font-semibold text-black lg:text-[28px]">
                Похожие курсы
              </h2>

              <div className="relative">
                <div className="flex gap-4 overflow-x-auto pb-4">
                  {similarCourses.map((course) => (
                    <Card
                      key={course.id}
                      className={`min-w-[280px] flex-shrink-0 overflow-hidden rounded-2xl border-0 ${gradientClasses[course.gradient]}`}
                    >
                      <CardContent className="flex flex-col gap-4 p-6">
                        <div className="flex flex-col gap-1">
                          <span className="font-inter text-sm font-medium text-white/90">
                            {course.category} • {course.type}
                          </span>
                          <h3 className="font-inter text-xl font-semibold text-white">
                            {course.title}
                          </h3>
                        </div>

                        <p className="font-inter text-sm text-white/90">
                          {course.description}
                        </p>

                        <div className="mt-auto flex flex-col gap-3">
                          <div className="flex flex-col gap-1">
                            <span className="font-inter text-sm font-medium text-white">
                              {course.date}
                            </span>
                            <span className="font-inter text-sm text-white/80">
                              {course.time}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {course.badge && (
                              <span
                                className={`rounded-md px-2 py-1 font-inter text-xs font-medium text-white ${
                                  course.badgeType === "blue"
                                    ? "bg-[#0066FF]"
                                    : "bg-[#FF6B35]"
                                }`}
                              >
                                {course.badge}
                              </span>
                            )}
                            <span className="flex items-center gap-1 rounded-md bg-white/20 px-2 py-1 font-inter text-xs font-medium text-white">
                              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {course.duration}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Right Arrow */}
                <button className="absolute -right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#F5F5F5]">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[360px] lg:flex-shrink-0">
            {/* Course Card */}
            <Card className="mb-6 overflow-hidden rounded-2xl border border-[#E5E5E5]">
              <CardContent className="flex flex-col gap-4 p-6">
                <h2 className="font-inter text-xl font-semibold text-black">
                  Курс
                </h2>
                <ul className="flex flex-col gap-2">
                  {courseInfo.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 font-inter text-base text-black">
                      <span className="mt-1.5 size-1.5 flex-shrink-0 rounded-full bg-black" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="h-11 w-full rounded-lg bg-[#FF003D] font-inter text-base font-medium text-white hover:bg-[#FF003D]/90">
                  Кнопка
                </Button>
              </CardContent>
            </Card>

            {/* Files to Study */}
            <Card className="overflow-hidden rounded-2xl border border-[#E5E5E5]">
              <div className="flex items-center justify-between border-b border-[#E5E5E5] px-6 py-4">
                <h2 className="font-inter text-xl font-semibold text-black">
                  Файлы к изучению
                </h2>
                <a href="#" className="font-inter text-base font-medium text-[#0066FF] hover:underline">
                  Скачать всё
                </a>
              </div>
              <div className="flex flex-col gap-2 p-4">
                {filesToStudy.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between rounded-xl bg-[#F7F7F9] px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      {fileIcons[file.type]}
                      <div className="flex flex-col gap-0.5">
                        <span className="font-inter text-sm font-medium text-black">
                          {file.name}
                        </span>
                        <span className="font-inter text-xs text-[#737373]">
                          {file.size}
                        </span>
                      </div>
                    </div>
                    <button className="flex size-8 items-center justify-center rounded-full transition-colors hover:bg-[#E5E5E5]">
                      <svg className="size-5 text-[#9CA3AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}

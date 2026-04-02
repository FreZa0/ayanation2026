import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const courses = [
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
  {
    id: 5,
    category: "Дизайн",
    type: "Курс",
    title: "BIM-координатор",
    description: "Сможете увеличить свой доход и стать востребованным BIM-координатором",
    date: "8 ДЕКАБРЯ",
    time: "08:13 — 13:00",
    badge: "",
    badgeType: "",
    duration: "13 дней",
    gradient: "pink",
  },
]

const events = [
  {
    id: 1,
    category: "События",
    type: "Онлайн",
    title: "Продуктовый аналитик",
    date: "2 СЕНТЯБРЯ",
    time: "08:21 — 13:00",
    badge: "Вам назначено",
    badgeType: "blue",
    duration: "55 минут",
    icon: "star",
  },
  {
    id: 2,
    category: "События",
    type: "Онлайн",
    title: "Этапы разработки продукта",
    date: "2 СЕНТЯБРЯ",
    time: "08:21 — 13:00",
    badge: "",
    badgeType: "",
    duration: "55 минут",
    icon: "line",
  },
  {
    id: 3,
    category: "События",
    type: "Онлайн",
    title: "Инженер данных",
    date: "2 СЕНТЯБРЯ",
    time: "08:21 — 13:00",
    badge: "",
    badgeType: "",
    duration: "55 минут",
    icon: "triangle",
  },
  {
    id: 4,
    category: "События",
    type: "Онлайн",
    title: "Продуктовый аналитик",
    date: "2 СЕНТЯБРЯ",
    time: "08:21 — 13:00",
    badge: "Вам назначено",
    badgeType: "blue",
    duration: "55 минут",
    icon: "star",
  },
  {
    id: 5,
    category: "События",
    type: "Онлайн",
    title: "Этапы разработки продукта",
    date: "2 СЕНТЯБРЯ",
    time: "08:21 — 13:00",
    badge: "",
    badgeType: "",
    duration: "55 минут",
    icon: "line",
  },
]

const tests = [
  {
    id: 1,
    category: "Тесты",
    type: "Онлайн",
    title: "Python",
    description: "Пришло время узнать, как хорошо вы разбираетесь в Python",
    badge: "Пройти до 13 мая",
    badgeType: "orange",
    duration: "21 минута",
    testCount: "1 тест",
  },
  {
    id: 2,
    category: "Тесты",
    type: "Онлайн",
    title: "Лидерские качества",
    description: "«Лидер я или нет?» – наверняка таким вопросом задавались многие из нас",
    badge: "",
    badgeType: "",
    duration: "13 минут",
    testCount: "2 теста",
  },
  {
    id: 3,
    category: "Тесты",
    type: "Онлайн",
    title: "Лидерские качества",
    description: "«Лидер я или нет?» – наверняка таким вопросом задавались многие из нас",
    badge: "",
    badgeType: "",
    duration: "13 минут",
    testCount: "2 теста",
  },
  {
    id: 4,
    category: "Тесты",
    type: "Онлайн",
    title: "Лидерские качества",
    description: "«Лидер я или нет?» – наверняка таким вопросом задавались многие из нас",
    badge: "",
    badgeType: "",
    duration: "13 минут",
    testCount: "2 теста",
  },
  {
    id: 5,
    category: "Тесты",
    type: "",
    title: "Какая профессия мне подходит?",
    description: "В каждом из нас с рождения заложены те или иные особенности",
    badge: "",
    badgeType: "",
    duration: "8 минут",
    testCount: "1 тест",
  },
]

const gradientClasses = {
  red: "bg-gradient-to-br from-[#FF1B4D] to-[#FF8A65]",
  purple: "bg-gradient-to-br from-[#9FA8DA] to-[#C5CAE9]",
  pink: "bg-gradient-to-br from-[#BA68C8] via-[#9B5DE5] to-[#F15BB5]",
}

export default function HomePage() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="flex h-[60px] items-center justify-between border-b px-[92px]">
        <div className="flex items-center gap-3">
          <img src="/images/Vector.svg" alt="ALROSA" className="h-[32px] w-auto" />
          <span className="font-inter text-base font-semibold text-black">
            АЛРОСА Огранка талантов
          </span>
        </div>

        <nav className="flex items-center gap-1">
          <Link to="/" className="rounded-lg px-4 py-2 font-inter text-base font-medium text-black hover:bg-[#F5F5F5]">
            Главное
          </Link>
          <Link to="#" className="rounded-lg px-4 py-2 font-inter text-base font-medium text-black hover:bg-[#F5F5F5]">
            О нас
          </Link>
          <Link to="/courses" className="rounded-lg bg-[#F5F5F5] px-4 py-2 font-inter text-base font-medium text-black">
            Курсы
          </Link>
          <Link to="#" className="rounded-lg px-4 py-2 font-inter text-base font-medium text-black hover:bg-[#F5F5F5]">
            Контакты
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => navigate("/signin")}
            variant="outline"
            className="h-9 rounded-lg border-[#E5E5E5] px-4 font-inter text-base font-medium text-black hover:bg-[#F5F5F5]"
          >
            Войти
          </Button>
          <Button
            onClick={() => navigate("/register")}
            className="h-9 rounded-lg bg-[#1A1A1A] px-4 font-inter text-base font-medium text-white hover:bg-[#1A1A1A]/90"
          >
            Зарегистрироваться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-[92px] pt-10">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#E085FF] via-[#A87CFF] to-[#85B3FF] p-16">
          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            <h1 className="font-inter text-[48px] font-bold uppercase leading-tight text-white">
              АЛРОСА Огранка талантов
            </h1>
            <p className="max-w-[600px] font-inter text-lg text-white/90">
              Единая цифровая среда обучения и развития сотрудников
              <br />
              Развивайте компетенции, управляйте обучением
              <br />
              и отслеживайте результаты в единой системе
            </p>

            {/* Search Bar */}
            <div className="mt-4 flex w-full max-w-[600px] items-center gap-2 rounded-full bg-white p-2 pl-6">
              <svg className="size-5 text-[#9CA3AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <Input
                type="text"
                placeholder="Поиск по всему обучению"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-0 bg-transparent px-0 text-base placeholder:text-[#9CA3AF] focus-visible:ring-0"
              />
              <Button className="h-10 rounded-full bg-[#1A1A1A] px-6 font-inter text-base font-medium text-white hover:bg-[#1A1A1A]/90">
                Искать
              </Button>
            </div>

            {/* Pagination Dots */}
            <div className="mt-6 flex gap-2">
              {[...Array(10)].map((_, i) => (
                <button
                  key={i}
                  className={`size-2 rounded-full transition-colors ${
                    i === 0 ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="px-[92px] py-10">
        <div className="flex items-center justify-between rounded-[24px] bg-[#F7F7F9] px-16 py-10">
          {/* Left spiral decoration */}
          {/* <div className="flex">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="ml-[-8px] flex size-24 items-center justify-center rounded-full border border-[#C7C7C7]"
              />
            ))}
          </div> */}

          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-inter text-[32px] font-semibold text-black">
              АЛРОСА Огранка талантов
            </h2>
            <p className="max-w-[500px] font-inter text-base text-black">
              Единая цифровая среда обучения и развития сотрудников
              <br />
              Развивайте компетенции, управляйте обучением
              <br />
              и отслеживайте результаты в единой системе
            </p>
          </div>

          {/* Right spiral decoration */}
          {/* <div className="flex">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="ml-[-8px] flex size-24 items-center justify-center rounded-full border border-[#C7C7C7]"
              />
            ))}
          </div> */}
        </div>
      </section>

      {/* Courses Section */}
      <section className="px-[92px] py-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-inter text-[28px] font-semibold text-black">
              Курсы
            </h2>
            <span className="flex size-7 items-center justify-center rounded-lg bg-[#F5F5F5] font-inter text-sm font-medium text-black">
              8
            </span>
          </div>
          <Link to="/courses" className="font-inter text-base font-medium text-[#0066FF] hover:underline">
            Смотреть все
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {courses.map((course) => (
            <Card
              key={course.id}
              className={`min-w-[320px] flex-shrink-0 overflow-hidden rounded-2xl border-0 ${gradientClasses[course.gradient]}`}
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
      </section>

      {/* Events Section */}
      <section className="px-[92px] py-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-inter text-[28px] font-semibold text-black">
              События
            </h2>
            <span className="flex size-7 items-center justify-center rounded-lg bg-[#F5F5F5] font-inter text-sm font-medium text-black">
              13
            </span>
          </div>
          <a href="#" className="font-inter text-base font-medium text-[#0066FF] hover:underline">
            Смотреть все
          </a>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {events.map((event) => (
            <Card
              key={event.id}
              className="min-w-[320px] flex-shrink-0 overflow-hidden rounded-2xl border border-[#E5E5E5] bg-[#F7F7F9]"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex flex-col gap-1">
                  <span className="font-inter text-sm text-[#737373]">
                    {event.category} • {event.type}
                  </span>
                  <h3 className="font-inter text-lg font-semibold text-black">
                    {event.title}
                  </h3>
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-inter text-sm font-medium text-black">
                      {event.date}
                    </span>
                    <span className="font-inter text-sm text-[#737373]">
                      {event.time}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {event.badge && (
                      <span
                        className={`rounded-md px-2 py-1 font-inter text-xs font-medium text-white ${
                          event.badgeType === "blue"
                            ? "bg-[#0066FF]"
                            : "bg-[#FF6B35]"
                        }`}
                      >
                        {event.badge}
                      </span>
                    )}
                    <span className="flex items-center gap-1 rounded-md bg-white px-2 py-1 font-inter text-xs font-medium text-black">
                      <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.duration}
                    </span>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 opacity-50">
                  {event.id % 3 === 0 ? (
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <path d="M30 10L50 50L10 50L30 10Z" fill="#86EFAC" />
                    </svg>
                  ) : event.id % 3 === 1 ? (
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <path d="M10 50L20 40L30 50L40 40L50 50" stroke="#F472B6" strokeWidth="3" />
                    </svg>
                  ) : (
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <path d="M10 30H50" stroke="#FDBA74" strokeWidth="3" />
                    </svg>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tests Section */}
      <section className="px-[92px] py-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-inter text-[28px] font-semibold text-black">
              Тесты
            </h2>
            <span className="flex size-7 items-center justify-center rounded-lg bg-[#F5F5F5] font-inter text-sm font-medium text-black">
              21
            </span>
          </div>
          <a href="#" className="font-inter text-base font-medium text-[#0066FF] hover:underline">
            Смотреть все
          </a>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {tests.map((test) => (
            <Card
              key={test.id}
              className="min-w-[320px] flex-shrink-0 overflow-hidden rounded-2xl border border-[#E5E5E5] bg-[#F7F7F9]"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex flex-col gap-1">
                  <span className="font-inter text-sm text-[#737373]">
                    {test.category} {test.type && `• ${test.type}`}
                  </span>
                  <h3 className="font-inter text-lg font-semibold text-black">
                    {test.title}
                  </h3>
                </div>

                <p className="font-inter text-sm text-[#737373]">
                  {test.description}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-2">
                  {test.badge && (
                    <span
                      className={`rounded-md px-2 py-1 font-inter text-xs font-medium text-white ${
                        test.badgeType === "orange"
                          ? "bg-[#FF6B35]"
                          : "bg-[#0066FF]"
                      }`}
                    >
                      {test.badge}
                    </span>
                  )}
                  <span className="flex items-center gap-1 rounded-md bg-white px-2 py-1 font-inter text-xs font-medium text-black">
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {test.duration}
                  </span>
                  {test.testCount && (
                    <span className="rounded-md bg-white px-2 py-1 font-inter text-xs font-medium text-black">
                      {test.testCount}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#E5E5E5] bg-[#F7F7F9] px-[92px] py-12">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Logo & Description */}
            <div className="flex flex-col gap-4 md:col-span-1">
              <div className="flex items-center gap-2">
                <img src="/images/Vector.svg" alt="ALROSA" className="h-8 w-auto" />
                <span className="font-inter text-base font-semibold text-black">
                  АЛРОСА Огранка талантов
                </span>
              </div>
              <p className="font-inter text-sm text-[#737373]">
                Единая цифровая среда обучения и развития сотрудников
                <br />
                Развивайте компетенции, управляйте обучением
                <br />
                и отслеживайте результаты в единой системе
              </p>
            </div>

            {/* О нас */}
            <div className="flex flex-col gap-3">
              <h4 className="font-inter text-base font-semibold text-black">
                О нас
              </h4>
              <ul className="flex flex-col gap-2">
                <li><a href="#" className="font-inter text-sm text-[#737373] hover:text-black">Overview</a></li>
                <li><a href="#" className="font-inter text-sm text-[#737373] hover:text-black">Pricing</a></li>
                <li><a href="#" className="font-inter text-sm text-[#737373] hover:text-black">Marketplace</a></li>
                <li><a href="#" className="font-inter text-sm text-[#737373] hover:text-black">Features</a></li>
              </ul>
            </div>

            {/* Курсы */}
            <div className="flex flex-col gap-3">
              <h4 className="font-inter text-base font-semibold text-black">
                Курсы
              </h4>
              <ul className="flex flex-col gap-2">
                <li><a href="#" className="font-inter text-sm text-[#737373] hover:text-black">About</a></li>
                <li><a href="#" className="font-inter text-sm text-[#737373] hover:text-black">Team</a></li>
                <li><a href="#" className="font-inter text-sm text-[#737373] hover:text-black">Blog</a></li>
                <li><a href="#" className="font-inter text-sm text-[#737373] hover:text-black">Careers</a></li>
              </ul>
            </div>

            {/* Контакты */}
            <div className="flex flex-col gap-3">
              <h4 className="font-inter text-base font-semibold text-black">
                Контакты
              </h4>
              <ul className="flex flex-col gap-2">
                <li><a href="#" className="font-inter text-sm text-[#737373] hover:text-black">Help</a></li>
                <li><a href="#" className="font-inter text-sm text-[#737373] hover:text-black">Sales</a></li>
                <li><a href="#" className="font-inter text-sm text-[#737373] hover:text-black">Advertise</a></li>
                <li><a href="#" className="font-inter text-sm text-[#737373] hover:text-black">Privacy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between border-t border-[#E5E5E5] pt-8">
            <p className="font-inter text-sm text-[#737373]">
              ©2026 AYANATION
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-inter text-sm text-[#737373] hover:text-black">
                Условия и положения
              </a>
              <a href="#" className="font-inter text-sm text-[#737373] hover:text-black">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

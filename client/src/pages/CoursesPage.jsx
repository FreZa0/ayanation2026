import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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

const programs = [
  {
    id: 1,
    category: "Программа",
    type: "Онлайн",
    title: "HR-аналитика",
    description: "Внедрение HR-аналитики поможет компании выстроить работающую стратегию, опираясь на данные",
    badge: "Вам назначено",
    badgeType: "blue",
    duration: "55 минут",
    courseCount: "3 курса",
  },
  {
    id: 2,
    category: "Программа",
    type: "",
    title: "Python-разработчик",
    description: "Python, SQL, Django, API и другие технологии. 11 проектов: сайты, API и телеграм-бот",
    badge: "",
    badgeType: "",
    duration: "55 минут",
    courseCount: "2 курса",
  },
  {
    id: 3,
    category: "Программа",
    type: "",
    title: "Python-разработчик",
    description: "Python, SQL, Django, API и другие технологии. 11 проектов: сайты, API и телеграм-бот",
    badge: "",
    badgeType: "",
    duration: "55 минут",
    courseCount: "2 курса",
  },
  {
    id: 4,
    category: "Программа",
    type: "",
    title: "Python-разработчик",
    description: "Python, SQL, Django, API и другие технологии. 11 проектов: сайты, API и телеграм-бот",
    badge: "",
    badgeType: "",
    duration: "55 минут",
    courseCount: "2 курса",
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
  pink: "bg-gradient-to-br from-[#BA68C8] to-[#FF4081]",
}

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("actual")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="flex h-[60px] items-center justify-between border-b px-[92px]">
        <div className="flex items-center gap-3">
          <img src="/images/alrosa-logo.svg" alt="ALROSA" className="h-[32px] w-auto" />
          <span className="font-inter text-base font-semibold text-black">
            ALROSA Talent Hub
          </span>
        </div>

        <nav className="flex items-center gap-1">
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
          <Button variant="outline" className="h-9 rounded-lg border-[#E5E5E5] px-4 font-inter text-base font-medium text-black hover:bg-[#F5F5F5]">
            Войти
          </Button>
          <Button className="h-9 rounded-lg bg-[#1A1A1A] px-4 font-inter text-base font-medium text-white hover:bg-[#1A1A1A]/90">
            Зарегистрироваться
          </Button>
        </div>
      </header>

      {/* Filter Bar */}
      <section className="px-[92px] py-6">
        <div className="flex items-center gap-4">
          {/* Tabs */}
          <div className="flex items-center gap-1 rounded-full bg-[#F7F7F9] p-1">
            <button
              onClick={() => setActiveTab("actual")}
              className={`rounded-full px-5 py-2.5 font-inter text-base font-medium transition-colors ${
                activeTab === "actual"
                  ? "bg-white text-black shadow-sm"
                  : "text-[#737373] hover:text-black"
              }`}
            >
              Актуальные
            </button>
            <button
              onClick={() => setActiveTab("my")}
              className={`rounded-full px-5 py-2.5 font-inter text-base font-medium transition-colors ${
                activeTab === "my"
                  ? "bg-white text-black shadow-sm"
                  : "text-[#737373] hover:text-black"
              }`}
            >
              Мои
            </button>
            <button
              onClick={() => setActiveTab("archive")}
              className={`rounded-full px-5 py-2.5 font-inter text-base font-medium transition-colors ${
                activeTab === "archive"
                  ? "bg-white text-black shadow-sm"
                  : "text-[#737373] hover:text-black"
              }`}
            >
              Архив
            </button>
          </div>

          {/* Search */}
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Поиск"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 rounded-full border-0 bg-[#F7F7F9] pl-11 pr-4 font-inter text-base placeholder:text-[#9CA3AF] focus-visible:ring-0"
            />
            <svg
              className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#9CA3AF]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full bg-[#F7F7F9] px-4 py-2.5">
              <span className="font-inter text-base text-[#737373]">Этап</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-[80px] border-0 bg-transparent p-0 text-base font-medium text-black shadow-none focus:ring-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-[#F7F7F9] px-4 py-2.5">
              <span className="font-inter text-base text-[#737373]">Нас. пункт</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-[80px] border-0 bg-transparent p-0 text-base font-medium text-black shadow-none focus:ring-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-[#F7F7F9] px-4 py-2.5">
              <span className="font-inter text-base text-[#737373]">Район</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-[80px] border-0 bg-transparent p-0 text-base font-medium text-black shadow-none focus:ring-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
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
          <a href="#" className="font-inter text-base font-medium text-[#0066FF] hover:underline">
            Смотреть все
          </a>
        </div>

        <div className="relative">
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

          {/* Right Arrow */}
          <button className="absolute -right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#F5F5F5]">
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
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

        <div className="relative">
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
                    {event.icon === "star" ? (
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path d="M30 10L35 25L50 25L38 35L43 50L30 40L17 50L22 35L10 25L25 25L30 10Z" fill="#86EFAC" />
                      </svg>
                    ) : event.icon === "line" ? (
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path d="M10 50L20 40L30 50L40 40L50 50" stroke="#F472B6" strokeWidth="3" />
                      </svg>
                    ) : (
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path d="M10 30L50 30L30 50L10 30Z" fill="#FDBA74" />
                      </svg>
                    )}
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
      </section>

      {/* Programs Section */}
      <section className="px-[92px] py-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-inter text-[28px] font-semibold text-black">
              Программы
            </h2>
            <span className="flex size-7 items-center justify-center rounded-lg bg-[#F5F5F5] font-inter text-sm font-medium text-black">
              21
            </span>
          </div>
          <a href="#" className="font-inter text-base font-medium text-[#0066FF] hover:underline">
            Смотреть все
          </a>
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {programs.map((program) => (
              <Card
                key={program.id}
                className="min-w-[320px] flex-shrink-0 overflow-hidden rounded-2xl border border-[#E5E5E5] bg-[#F7F7F9]"
              >
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-inter text-sm text-[#737373]">
                      {program.category} {program.type && `• ${program.type}`}
                    </span>
                    <h3 className="font-inter text-lg font-semibold text-black">
                      {program.title}
                    </h3>
                  </div>

                  <p className="font-inter text-sm text-[#737373]">
                    {program.description}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center gap-2">
                    {program.badge && (
                      <span
                        className={`rounded-md px-2 py-1 font-inter text-xs font-medium text-white ${
                          program.badgeType === "blue"
                            ? "bg-[#0066FF]"
                            : "bg-[#FF6B35]"
                        }`}
                      >
                        {program.badge}
                      </span>
                    )}
                    <span className="flex items-center gap-1 rounded-md bg-white px-2 py-1 font-inter text-xs font-medium text-black">
                      <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {program.duration}
                    </span>
                    {program.courseCount && (
                      <span className="rounded-md bg-white px-2 py-1 font-inter text-xs font-medium text-black">
                        {program.courseCount}
                      </span>
                    )}
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

        <div className="relative">
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

          {/* Right Arrow */}
          <button className="absolute -right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#F5F5F5]">
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Help Section */}
      <section className="px-[92px] py-12">
        <div className="flex items-center justify-between rounded-[24px] bg-[#F7F7F9] px-8 py-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-inter text-[28px] font-semibold text-black">
              Не нашли что искали?
            </h2>
            <p className="max-w-[500px] font-inter text-sm text-[#737373]">
              Если вы не нашли то, что искали, не отчаивайтесь!
              <br />
              Наша команда готова помочь вам в поиске информации
            </p>
          </div>
          <Button className="h-11 rounded-lg bg-[#1A1A1A] px-6 font-inter text-base font-medium text-white hover:bg-[#1A1A1A]/90">
            Написать
          </Button>
        </div>
      </section>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  "Figma",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Blender",
  "Adobe After Effect",
  "Miro",
  "React Native",
  "JavaScript",
  "TypeScript",
  "Unity",
  "Tilda",
  "Tilda",
  "Tilda",
  "Tilda",
]

const coursesInProgress = [
  { id: 1, name: "Figma", type: "DESIGN TOOL", progress: 75, logo: "figma" },
  { id: 2, name: "React", type: "JAVASCRIPT LIBRARY", progress: 95, logo: "react" },
  { id: 3, name: "Next.js", type: "FULL STACK FRAMEWORK", progress: 95, logo: "nextjs" },
  { id: 4, name: "Tailwind CSS", type: "CSS FRAMEWORK", progress: 95, logo: "tailwind" },
  { id: 5, name: "v0", type: "AI TOOL", progress: 85, logo: "v0" },
  { id: 6, name: "Vite", type: "BUILD TOOL", progress: 80, logo: "vite" },
  { id: 7, name: "TypeScript", type: "PROGRAMMING LANGUAGE", progress: 90, logo: "typescript" },
  { id: 8, name: "GitHub", type: "Version Control", progress: 90, logo: "github" },
  { id: 9, name: "Notion", type: "PRODUCTIVITY TOOL", progress: 80, logo: "notion" },
  { id: 10, name: "Vercel", type: "HOSTING PLATFORM", progress: 75, logo: "vercel" },
  { id: 11, name: "Hotjar", type: "ANALYTICS TOOL", progress: 75, logo: "hotjar" },
  { id: 12, name: "Shadcn/ui", type: "COMPONENT LIBRARY", progress: 95, logo: "shadcn" },
]

const similarCourses = [
  {
    id: 1,
    category: "Дизайн",
    type: "Курс",
    title: "Дизайнер интерфейсов",
    description: "Если вы хоть раз думали о том, как улучшить какой-нибудь сервис, если вы склонны к анализу и цените ясность",
    gradient: "red",
  },
  {
    id: 2,
    category: "Дизайн",
    type: "Курс",
    title: "Дизайнер интерфейсов",
    description: "Если вы хоть раз думали о том, как улучшить какой-нибудь сервис, если вы склонны к анализу и цените ясность",
    gradient: "purple",
  },
  {
    id: 3,
    category: "Дизайн",
    type: "Курс",
    title: "Дизайнер интерфейсов",
    description: "Если вы хоть раз думали о том, как улучшить какой-нибудь сервис, если вы склонны к анализу и цените ясность",
    gradient: "purple",
  },
  {
    id: 4,
    category: "Дизайн",
    type: "Курс",
    title: "Дизайнер интерфейсов",
    description: "Если вы хоть раз думали о том, как улучшить какой-нибудь сервис, если вы склонны к анализу и цените ясность",
    gradient: "red",
  },
]

const gradientClasses = {
  red: "bg-gradient-to-br from-[#FF1B4D] to-[#FF8A65]",
  purple: "bg-gradient-to-br from-[#9FA8DA] to-[#C5CAE9]",
}

const logoComponents = {
  figma: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="8" r="4" fill="#F24E1E" />
      <circle cx="16" cy="16" r="4" fill="#A259FF" />
      <circle cx="16" cy="24" r="4" fill="#1ABCFE" />
      <circle cx="8" cy="16" r="4" fill="#FF7262" />
      <circle cx="24" cy="16" r="4" fill="#0ACF83" />
    </svg>
  ),
  react: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="4" fill="#61DAFB" />
      <ellipse cx="16" cy="16" rx="12" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 16 16)" />
      <ellipse cx="16" cy="16" rx="12" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(-30 16 16)" />
      <ellipse cx="16" cy="16" rx="12" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 16 16)" />
    </svg>
  ),
  nextjs: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" fill="black" />
      <path d="M16 8V24" stroke="white" strokeWidth="2" />
      <path d="M10 22L22 10" stroke="white" strokeWidth="2" />
    </svg>
  ),
  tailwind: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M8 12C8 12 10 8 14 8C18 8 18 12 14 12C10 12 8 12 8 12Z" fill="#38BDF8" />
      <path d="M12 18C12 18 14 14 18 14C22 14 22 18 18 18C14 18 12 18 12 18Z" fill="#0EA5E9" />
      <path d="M6 20C6 20 8 16 12 16C16 16 16 20 12 20C8 20 6 20 6 20Z" fill="#7DD3FC" />
    </svg>
  ),
  v0: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M8 10L16 22L24 10" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  vite: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4L26 20H18L16 28L14 20H6L16 4Z" fill="#FFD700" />
      <path d="M16 4L26 20H18L16 28L14 20H6L16 4Z" fill="url(#vite-gradient)" />
      <defs>
        <linearGradient id="vite-gradient" x1="6" y1="4" x2="26" y2="28">
          <stop stop-color="#646CFF" />
          <stop offset="1" stop-color="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  ),
  typescript: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#3178C6" />
      <text x="16" y="22" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">TS</text>
    </svg>
  ),
  github: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path fill="currentColor" d="M16 4C9.37 4 4 9.37 4 16c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0028 16c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  notion: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#F7F7F7" />
      <rect x="8" y="8" width="16" height="16" rx="2" fill="none" stroke="black" strokeWidth="2" />
      <text x="16" y="20" textAnchor="middle" fill="black" fontSize="10" fontWeight="bold">N</text>
    </svg>
  ),
  vercel: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 6L28 26H4L16 6Z" fill="black" />
    </svg>
  ),
  hotjar: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="4" fill="#FF3D00" />
      <path d="M16 8V12" stroke="#FF3D00" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 20V24" stroke="#FF3D00" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 16H12" stroke="#FF3D00" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 16H24" stroke="#FF3D00" strokeWidth="2" strokeLinecap="round" />
      <path d="M10.34 10.34L13.17 13.17" stroke="#FF3D00" strokeWidth="2" strokeLinecap="round" />
      <path d="M18.83 18.83L21.66 21.66" stroke="#FF3D00" strokeWidth="2" strokeLinecap="round" />
      <path d="M10.34 21.66L13.17 18.83" stroke="#FF3D00" strokeWidth="2" strokeLinecap="round" />
      <path d="M18.83 13.17L21.66 10.34" stroke="#FF3D00" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  shadcn: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M8 8L24 24" stroke="black" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 24L24 8" stroke="black" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
}

export default function ProfilePage() {
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

      {/* Main Content */}
      <main className="flex flex-1 flex-col px-[92px] py-6">
        {/* Back Button */}
        <button className="mb-6 flex items-center gap-2 font-inter text-base text-black hover:underline">
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Назад
        </button>

        {/* Profile Card */}
        <div className="rounded-[24px] border border-[#E5E5E5] bg-white p-8">
          {/* Profile Header */}
          <div className="mb-8 flex items-start gap-8">
            {/* Avatar */}
            <div className="relative">
              <Avatar className="size-40">
                <AvatarImage src="/images/avatar.png" />
                <AvatarFallback>ВМ</AvatarFallback>
              </Avatar>
            </div>

            {/* Name & Role */}
            <div className="flex flex-1 flex-col gap-2">
              <span className="inline-flex w-fit items-center rounded-full bg-[#6B4CFF] px-4 py-1.5 font-inter text-sm font-medium text-white">
                Менеджер
              </span>
              <h1 className="font-inter text-[32px] font-semibold text-black">
                Victor M.V
              </h1>
              <p className="font-inter text-base text-[#737373]">
                Махатыров Виктор
              </p>
            </div>

            {/* Form Fields */}
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-inter text-sm font-medium text-black">
                  ФИО
                </label>
                <Input
                  type="text"
                  defaultValue="Виктор Махатыров"
                  className="h-11 rounded-lg border border-[#E5E5E5] bg-white px-4 font-inter text-base focus-visible:ring-0"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-inter text-sm font-medium text-black">
                  Email
                </label>
                <Input
                  type="email"
                  defaultValue="email@example.com"
                  className="h-11 rounded-lg border border-[#E5E5E5] bg-white px-4 font-inter text-base focus-visible:ring-0"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-inter text-sm font-medium text-black">
                  Телефон
                </label>
                <Input
                  type="tel"
                  defaultValue="+7-996-915-02-13"
                  className="h-11 rounded-lg border border-[#E5E5E5] bg-white px-4 font-inter text-base focus-visible:ring-0"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-inter text-sm font-medium text-black">
                  Дата рождения
                </label>
                <Input
                  type="text"
                  defaultValue="Виктор Махатыров"
                  className="h-11 rounded-lg border border-[#E5E5E5] bg-white px-4 font-inter text-base focus-visible:ring-0"
                />
              </div>
            </div>
          </div>

          {/* Settings Button */}
          <Button className="mb-8 h-12 w-full rounded-full bg-[#1F1F29] font-inter text-base font-medium text-white hover:bg-[#1F1F29]/90">
            Настройки профиля
          </Button>

          {/* Skills Section */}
          <div className="mb-10">
            <h2 className="mb-4 font-inter text-[24px] font-semibold text-black">
              Навыки
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-[#F7F7F9] px-4 py-2 font-inter text-sm font-medium text-black"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Courses in Progress */}
          <div className="mb-10">
            <h2 className="mb-4 font-inter text-[24px] font-semibold text-black">
              Курсы в процессе обучения
            </h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {coursesInProgress.map((course) => (
                <Card
                  key={course.id}
                  className="overflow-hidden rounded-2xl border-0 bg-[#F7F7F9]"
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex size-12 items-center justify-center">
                      {logoComponents[course.logo]}
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <h3 className="font-inter text-base font-semibold text-black">
                        {course.name}
                      </h3>
                      <p className="font-inter text-xs text-[#737373]">
                        {course.type}
                      </p>
                    </div>
                    <span className="font-inter text-base font-semibold text-black">
                      {course.progress}%
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Similar Courses */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-inter text-[24px] font-semibold text-black">
                Похожие курсы
              </h2>
            </div>

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
      </main>
    </div>
  )
}

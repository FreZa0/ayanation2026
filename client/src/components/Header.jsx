import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  return (
    <header className="h-[77px] w-full border-b border-[#E5E5E5] bg-white px-[92px]">
      <div className="flex h-full items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/Vector.svg"
            alt="ALROSA Logo"
            className="size-[45px]"
          />
          <span className="font-inter text-lg font-semibold text-black">
            АЛРОСА Огранка талантов
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-[42px]">
          <a
            href="#"
            className="font-inter text-base font-medium text-[#0F172A] transition-colors hover:text-black"
          >
            О нас
          </a>
          <a
            href="/courses"
            className="rounded-lg bg-[#0A0A0A] px-3 py-2.5 font-inter text-base font-medium text-white transition-colors hover:bg-[#0A0A0A]/90"
          >
            Курсы
          </a>
          <a
            href="#"
            className="font-inter text-base font-medium text-[#0F172A] transition-colors hover:text-black"
          >
            Обучение
          </a>
        </nav>

        {/* User Profile */}
        <div className="flex items-center gap-2 rounded-full border border-[#4F4F4F] px-2 py-2">
          <Avatar className="size-8">
            <AvatarImage src="/images/avatar.png" />
            <AvatarFallback>ИИ</AvatarFallback>
          </Avatar>
          <span className="font-inter text-sm font-normal text-[#0A0A0A]">
            Иванов Иван Иванович
          </span>
        </div>
      </div>
    </header>
  )
}

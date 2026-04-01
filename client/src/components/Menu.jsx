import { cn } from "@/lib/utils"

const menuItems = [
  {
    id: "profile",
    label: "Профиль",
    href: "/profile",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="13.25" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 24C7 19.5 10.5 16 15 16C19.5 16 23 19.5 23 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "learning",
    label: "Обучение",
    href: "/learning",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 3L3 8.57143L15 14.1429L27 8.57143L15 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 10.4286V18.2857C5 19.2286 6 20.1429 8 21.0714L15 24.4286L22 21.0714C24 20.1429 25 19.2286 25 18.2857V10.4286" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 14.1429V24.4286" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "certificates",
    label: "Сертификаты",
    href: "/certificates",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 19V23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 23H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Menu({ className, activeItem }) {
  return (
    <nav
      className={cn("flex w-[200px] flex-col gap-3", className)}
    >
      {menuItems.map((item) => {
        const isActive = activeItem === item.id
        return (
          <a
            key={item.id}
            href={item.href}
            className={cn(
              "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2.5 transition-colors",
              isActive
                ? "bg-[rgba(12,12,12,0.06)]"
                : "hover:bg-[rgba(12,12,12,0.06)]"
            )}
          >
            <span
              className={cn(
                "flex size-[30px] items-center justify-center text-black",
                isActive && "text-black"
              )}
            >
              {item.icon}
            </span>
            <span
              className={cn(
                "font-inter font-medium text-black",
                isActive ? "text-[24px] font-semibold" : "text-[20px]"
              )}
            >
              {item.label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}

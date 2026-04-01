import { useState } from "react"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Обработка регистрации
    console.log("Form submitted:", formData)
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white px-4">
      <div className="flex w-full max-w-[440px] flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <img
            src="/images/alrosa-logo.svg"
            alt="ALROSA"
            className="h-[60px] w-auto"
          />
          <h1 className="font-inter text-[32px] font-medium text-black">
            Создание аккаунта
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
          {/* Email */}
          <div>
            <Input
              id="email"
              type="email"
              placeholder="Электронная почта"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="h-[56px] rounded-[12px] border-0 bg-[#F7F7F9] px-5 font-inter text-base placeholder:text-[#8E8E93] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          {/* Full Name */}
          <div>
            <Input
              id="fullName"
              type="text"
              placeholder="ФИО"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="h-[56px] rounded-[12px] border-0 bg-[#F7F7F9] px-5 font-inter text-base placeholder:text-[#8E8E93] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          {/* Password */}
          <div>
            <Input
              id="password"
              type="password"
              placeholder="Придумайте пароль"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="h-[56px] rounded-[12px] border-0 bg-[#F7F7F9] px-5 font-inter text-base placeholder:text-[#8E8E93] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Подтвердите пароль"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className="h-[56px] rounded-[12px] border-0 bg-[#F7F7F9] px-5 font-inter text-base placeholder:text-[#8E8E93] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="mt-4 h-[56px] w-full rounded-[12px] bg-[#1A1A1A] font-inter text-base font-medium text-white transition-colors hover:bg-[#1A1A1A]/90"
          >
            Создать профиль
          </Button>

          {/* Login Link */}
          <p className="mt-2 text-center font-inter text-sm text-black">
            Уже есть существующий профиль?{" "}
            <Link to="/signin" className="text-[#0066FF] hover:underline">
              Войти
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

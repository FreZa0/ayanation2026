import { useState } from "react"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Обработка входа
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
            Войти в аккаунт
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

          {/* Password */}
          <div>
            <Input
              id="password"
              type="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="h-[56px] rounded-[12px] border-0 bg-[#F7F7F9] px-5 font-inter text-base placeholder:text-[#8E8E93] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="mt-4 h-[56px] w-full rounded-[12px] bg-[#1A1A1A] font-inter text-base font-medium text-white transition-colors hover:bg-[#1A1A1A]/90"
          >
            Войти
          </Button>

          {/* Register Link */}
          <p className="mt-2 text-center font-inter text-sm text-black">
            Нет существующего аккаунта?{" "}
            <Link to="/register" className="text-[#0066FF] hover:underline">
              Зарегистрироваться
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Settings3Page() {
  const [activeTab, setActiveTab] = useState("security")
  const [formData, setFormData] = useState({
    phone: "+7(914) 224-99-00",
    email: "ivanovich@mail.ru",
    password: "••••••••",
  })

  const handleSave = () => {
    console.log("Saving:", formData)
  }

  const handleCancel = () => {
    console.log("Canceling changes")
  }

  const handleChangePhone = () => {
    console.log("Change phone")
  }

  const handleChangePassword = () => {
    console.log("Change password")
  }

  return (
    <div className="flex min-h-screen flex-col bg-white p-4 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-inter text-[32px] font-semibold text-black lg:text-[40px]">
          Редактировать профиль
        </h1>
        <button className="flex size-12 items-center justify-center rounded-2xl bg-[#F7F7F9] transition-colors hover:bg-[#E5E5E5]">
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main Tabs */}
      <div className="mb-8 inline-flex rounded-2xl bg-[#F7F7F9] p-1">
        <button
          onClick={() => setActiveTab("profile")}
          className={`rounded-xl px-6 py-3 font-inter text-base font-medium transition-colors lg:px-8 lg:py-4 ${
            activeTab === "profile"
              ? "bg-white text-black shadow-sm"
              : "text-[#737373] hover:text-black"
          }`}
        >
          Профиль
        </button>
        <button
          onClick={() => setActiveTab("details")}
          className={`rounded-xl px-6 py-3 font-inter text-base font-medium transition-colors lg:px-8 lg:py-4 ${
            activeTab === "details"
              ? "bg-white text-black shadow-sm"
              : "text-[#737373] hover:text-black"
          }`}
        >
          Сведения
        </button>
        <button
          onClick={() => setActiveTab("security")}
          className={`rounded-xl px-6 py-3 font-inter text-base font-medium transition-colors lg:px-8 lg:py-4 ${
            activeTab === "security"
              ? "bg-white text-black shadow-sm"
              : "text-[#737373] hover:text-black"
          }`}
        >
          Безопасность
        </button>
      </div>

      {/* Security Tab Content */}
      {activeTab === "security" && (
        <div className="flex flex-col gap-6">
          {/* Phone & Email Row */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Phone Number */}
            <div className="flex items-center justify-between rounded-3xl bg-[#F7F7F9] px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white">
                  <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.95C20.83 20.96 20.66 20.97 20.5 20.97C10.06 20.97 1.53 12.44 1.53 2C1.53 1.84 1.54 1.67 1.55 1.5C1.57 0.94 2.02 0.5 2.58 0.5H5.58C6.11 0.5 6.58 0.85 6.72 1.36L7.55 4.39C7.69 4.91 7.53 5.46 7.13 5.82L5.35 7.6C6.73 10.03 8.47 11.77 10.9 13.15L12.68 11.37C13.04 10.97 13.59 10.81 14.11 10.95L17.14 11.78C17.65 11.92 18 12.39 18 12.92V15.92C18 16.48 17.55 16.92 17 16.92H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-inter text-sm text-[#737373]">
                    Номер телефона
                  </label>
                  <span className="font-inter text-xl font-medium text-black">
                    {formData.phone}
                  </span>
                </div>
              </div>
              <button
                onClick={handleChangePhone}
                className="flex items-center gap-1 font-inter text-base font-medium text-black hover:underline"
              >
                Изменить
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between rounded-3xl bg-[#F7F7F9] px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white">
                  <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-inter text-sm text-[#737373]">
                    Эл.Почта
                  </label>
                  <span className="font-inter text-xl font-medium text-black">
                    {formData.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="flex items-center justify-between rounded-3xl bg-[#F7F7F9] px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-white">
                <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="16" r="1" fill="currentColor"/>
                  <circle cx="12" cy="16" r="1" fill="currentColor" transform="translate(3 0)"/>
                  <circle cx="12" cy="16" r="1" fill="currentColor" transform="translate(-3 0)"/>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-inter text-sm text-[#737373]">
                  Пароль
                </label>
                <span className="font-inter text-xl font-medium text-black">
                  {formData.password}
                </span>
              </div>
            </div>
            <button
              onClick={handleChangePassword}
              className="flex items-center gap-1 font-inter text-base font-medium text-black hover:underline"
            >
              Изменить
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button
              onClick={handleSave}
              className="h-14 flex-1 rounded-2xl bg-[#1F1F29] px-8 font-inter text-base font-medium text-white hover:bg-[#1F1F29]/90"
            >
              Сохранить
            </Button>
            <Button
              onClick={handleCancel}
              variant="outline"
              className="h-14 flex-1 rounded-2xl border-0 bg-[#F7F7F9] px-8 font-inter text-base font-medium text-black hover:bg-[#E5E5E5]"
            >
              Отменить
            </Button>
          </div>
        </div>
      )}

      {/* Other Tabs Placeholder */}
      {activeTab === "profile" && (
        <div className="flex items-center justify-center rounded-3xl bg-[#F7F7F9] py-20">
          <p className="font-inter text-lg text-[#737373]">
            Раздел "Профиль"
          </p>
        </div>
      )}

      {activeTab === "details" && (
        <div className="flex items-center justify-center rounded-3xl bg-[#F7F7F9] py-20">
          <p className="font-inter text-lg text-[#737373]">
            Раздел "Сведения"
          </p>
        </div>
      )}
    </div>
  )
}

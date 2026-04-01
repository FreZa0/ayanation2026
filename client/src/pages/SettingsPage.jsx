import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [formData, setFormData] = useState({
    nickname: "Terano",
    lastName: "Иванов",
    firstName: "Иван",
    middleName: "Иванович",
    about: "",
    avatar: "/images/avatar.png",
  })

  const handleSave = () => {
    console.log("Saving:", formData)
  }

  const handleCancel = () => {
    console.log("Canceling changes")
  }

  const handleDeleteAvatar = () => {
    setFormData({ ...formData, avatar: "" })
  }

  const handleUploadAvatar = () => {
    console.log("Upload avatar")
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

      {/* Tabs */}
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

      {/* Form Content */}
      {activeTab === "profile" && (
        <div className="flex flex-col gap-6">
          {/* Nickname & Avatar Section */}
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Nickname */}
            <div className="flex flex-1 items-center gap-4 rounded-3xl bg-[#F7F7F9] px-6 py-5">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-white">
                <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-inter text-sm text-[#737373]">
                  Никнейм
                </label>
                <input
                  type="text"
                  value={formData.nickname}
                  onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                  className="bg-transparent font-inter text-xl font-medium text-black outline-none placeholder:text-[#737373]"
                  placeholder="Введите никнейм"
                />
              </div>
            </div>

            {/* Avatar */}
            <div className="flex flex-1 items-center justify-between gap-4 rounded-3xl bg-[#F7F7F9] px-6 py-5">
              <div className="flex items-center gap-4">
                <Avatar className="size-14">
                  <AvatarImage src={formData.avatar} />
                  <AvatarFallback>ИИ</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <span className="font-inter text-base text-[#737373]">
                    Изображение профиля
                  </span>
                  <button
                    onClick={handleUploadAvatar}
                    className="font-inter text-base font-medium text-[#0066FF] hover:underline"
                  >
                    Загрузить аватар
                  </button>
                </div>
              </div>
              {formData.avatar && (
                <button
                  onClick={handleDeleteAvatar}
                  className="flex items-center gap-2 font-inter text-base font-medium text-[#FF3B30] hover:underline"
                >
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="hidden lg:inline">удалить аватар</span>
                </button>
              )}
            </div>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* Last Name */}
            <div className="rounded-3xl bg-[#F7F7F9] px-6 py-5">
              <label className="font-inter text-sm text-[#737373]">
                Фамилия
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="mt-1 w-full bg-transparent font-inter text-xl font-medium text-black outline-none placeholder:text-[#737373]"
                placeholder="Введите фамилию"
              />
            </div>

            {/* First Name */}
            <div className="rounded-3xl bg-[#F7F7F9] px-6 py-5">
              <label className="font-inter text-sm text-[#737373]">
                Имя
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="mt-1 w-full bg-transparent font-inter text-xl font-medium text-black outline-none placeholder:text-[#737373]"
                placeholder="Введите имя"
              />
            </div>

            {/* Middle Name */}
            <div className="rounded-3xl bg-[#F7F7F9] px-6 py-5">
              <label className="font-inter text-sm text-[#737373]">
                Отчество
              </label>
              <input
                type="text"
                value={formData.middleName}
                onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                className="mt-1 w-full bg-transparent font-inter text-xl font-medium text-black outline-none placeholder:text-[#737373]"
                placeholder="Введите отчество"
              />
            </div>
          </div>

          {/* About Me */}
          <div className="rounded-3xl bg-[#F7F7F9] px-6 py-5">
            <label className="mb-3 block font-inter text-sm text-[#737373]">
              Обо мне
            </label>
            <Textarea
              value={formData.about}
              onChange={(e) => setFormData({ ...formData, about: e.target.value })}
              placeholder="Расскажите о себе"
              rows={6}
              className="min-h-[160px] w-full resize-none bg-transparent font-inter text-base text-black outline-none placeholder:text-[#737373]"
            />
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
      {activeTab === "details" && (
        <div className="flex items-center justify-center rounded-3xl bg-[#F7F7F9] py-20">
          <p className="font-inter text-lg text-[#737373]">
            Раздел "Сведения" в разработке
          </p>
        </div>
      )}

      {activeTab === "security" && (
        <div className="flex items-center justify-center rounded-3xl bg-[#F7F7F9] py-20">
          <p className="font-inter text-lg text-[#737373]">
            Раздел "Безопасность" в разработке
          </p>
        </div>
      )}
    </div>
  )
}

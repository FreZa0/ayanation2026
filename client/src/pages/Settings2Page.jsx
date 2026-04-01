import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Settings2Page() {
  const [activeTab, setActiveTab] = useState("details")
  const [studentType, setStudentType] = useState("school")
  const [formData, setFormData] = useState({
    city: "Якутск",
    region: "Якутская область",
    school: "Школа №20",
    grade: "9 класс",
    role: "Менеджер",
  })

  const [skills, setSkills] = useState([
    "Figma",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Blender",
    "JavaScript",
    "JavaScript",
    "JavaScript",
    "JavaScript",
    "JavaScript",
    "JavaScript",
    "JavaScript",
    "JavaScript",
    "JavaScript",
    "JavaScript",
  ])

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  const handleSave = () => {
    console.log("Saving:", formData, skills)
  }

  const handleCancel = () => {
    console.log("Canceling changes")
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

      {/* Details Tab Content */}
      {activeTab === "details" && (
        <div className="flex flex-col gap-6">
          {/* Student Type Tabs */}
          <div className="inline-flex rounded-2xl bg-[#F7F7F9] p-1">
            <button
              onClick={() => setStudentType("school")}
              className={`rounded-xl px-8 py-3 font-inter text-base font-medium transition-colors ${
                studentType === "school"
                  ? "bg-white text-black shadow-sm"
                  : "text-[#737373] hover:text-black"
              }`}
            >
              Школьник
            </button>
            <button
              onClick={() => setStudentType("student")}
              className={`rounded-xl px-8 py-3 font-inter text-base font-medium transition-colors ${
                studentType === "student"
                  ? "bg-white text-black shadow-sm"
                  : "text-[#737373] hover:text-black"
              }`}
            >
              Студент
            </button>
          </div>

          {/* Location Fields */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* City */}
            <div className="rounded-3xl bg-[#F7F7F9] px-6 py-5">
              <label className="font-inter text-sm text-[#737373]">
                Населенный пункт
              </label>
              <div className="mt-1 flex items-center justify-between">
                <span className="font-inter text-xl font-medium text-black">
                  {formData.city}
                </span>
                <svg className="size-5 text-[#737373]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Region */}
            <div className="rounded-3xl bg-[#F7F7F9] px-6 py-5">
              <label className="font-inter text-sm text-[#737373]">
                Район
              </label>
              <div className="mt-1 flex items-center justify-between">
                <span className="font-inter text-xl font-medium text-black">
                  {formData.region}
                </span>
                <svg className="size-5 text-[#737373]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* School, Grade, Role Fields */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* School */}
            <div className="rounded-3xl bg-[#F7F7F9] px-6 py-5">
              <label className="font-inter text-sm text-[#737373]">
                Учебное заведение
              </label>
              <div className="mt-1 flex items-center justify-between">
                <span className="font-inter text-xl font-medium text-black">
                  {formData.school}
                </span>
                <svg className="size-5 text-[#737373]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Grade */}
            <div className="rounded-3xl bg-[#F7F7F9] px-6 py-5">
              <label className="font-inter text-sm text-[#737373]">
                Класс
              </label>
              <div className="mt-1 flex items-center justify-between">
                <span className="font-inter text-xl font-medium text-black">
                  {formData.grade}
                </span>
                <svg className="size-5 text-[#737373]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Role */}
            <div className="rounded-3xl bg-[#F7F7F9] px-6 py-5">
              <label className="font-inter text-sm text-[#737373]">
                Роль
              </label>
              <div className="mt-1 flex items-center justify-between">
                <span className="font-inter text-xl font-medium text-black">
                  {formData.role}
                </span>
                <svg className="size-5 text-[#737373]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Skills Selector */}
          <div className="rounded-3xl bg-[#F7F7F9] px-6 py-5">
            <div className="flex items-center justify-between">
              <label className="font-inter text-sm text-[#737373]">
                Выбрать навыки
              </label>
              <svg className="size-5 text-[#737373]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Selected Skills Tags */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full bg-[#F7F7F9] px-4 py-2.5"
              >
                <span className="font-inter text-sm font-medium text-black">
                  {skill}
                </span>
                <button
                  onClick={() => removeSkill(skill)}
                  className="flex size-5 items-center justify-center rounded-full bg-[#B4B4B4] transition-colors hover:bg-[#737373]"
                >
                  <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
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

      {activeTab === "security" && (
        <div className="flex items-center justify-center rounded-3xl bg-[#F7F7F9] py-20">
          <p className="font-inter text-lg text-[#737373]">
            Раздел "Безопасность"
          </p>
        </div>
      )}
    </div>
  )
}

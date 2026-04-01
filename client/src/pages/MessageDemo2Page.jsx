import { useState } from "react"
import MessageModal2 from "@/components/MessageModal2"

export default function MessageDemo2Page() {
  const [showModal, setShowModal] = useState(true)

  const handleConfirm = () => {
    console.log("Registration confirmed!")
    setShowModal(false)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const handleOpen = () => {
    setShowModal(true)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F7F7F9] p-4">
      <div className="text-center">
        <h1 className="mb-6 font-inter text-[32px] font-semibold text-black">
          Демонстрация компонента MessageModal2
        </h1>
        <p className="mb-6 font-inter text-base text-[#737373]">
          Модальное окно успешной регистрации на курс
        </p>
        <button
          onClick={handleOpen}
          className="h-14 rounded-2xl bg-[#1F1F29] px-8 font-inter text-base font-medium text-white hover:bg-[#1F1F29]/90"
        >
          Открыть модальное окно
        </button>
      </div>

      {showModal && (
        <MessageModal2
          courseName="Дизайнер интерфейсов"
          onConfirm={handleConfirm}
          onClose={handleClose}
        />
      )}
    </div>
  )
}

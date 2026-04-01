import { useState } from "react"
import MessageModal from "@/components/MessageModal"

export default function MessageDemoPage() {
  const [showModal, setShowModal] = useState(true)

  const handleSend = () => {
    console.log("Application sent!")
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
          Демонстрация компонента MessageModal
        </h1>
        <p className="mb-6 font-inter text-base text-[#737373]">
          Нажмите кнопку, чтобы открыть модальное окно отправки заявки
        </p>
        <Button
          onClick={handleOpen}
          className="h-14 rounded-2xl bg-[#1F1F29] px-8 font-inter text-base font-medium text-white hover:bg-[#1F1F29]/90"
        >
          Открыть модальное окно
        </Button>
      </div>

      {showModal && (
        <MessageModal
          courseName="Дизайнер интерфейсов"
          onSend={handleSend}
          onClose={handleClose}
        />
      )}
    </div>
  )
}

function Button({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  )
}

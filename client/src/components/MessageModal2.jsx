import { Button } from "@/components/ui/button"

export default function MessageModal2({
  courseName = "Дизайнер интерфейсов",
  onConfirm,
  onClose,
}) {
  const handleConfirm = () => {
    console.log("Confirmed!")
    onConfirm?.()
  }

  const handleClose = () => {
    console.log("Closing modal...")
    onClose?.()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative flex w-full max-w-[440px] flex-col items-center rounded-[32px] bg-white px-8 py-10 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 flex size-12 items-center justify-center rounded-2xl bg-[#F7F7F9] transition-colors hover:bg-[#E5E5E5]"
        >
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Success Icon */}
        <div className="mb-8 mt-4">
          <div className="relative flex size-32 items-center justify-center">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-[#4ADE80] opacity-20 blur-3xl" />
            {/* 3D Checkmark Button */}
            <div className="relative flex size-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-[#4ADE80] to-[#22C55E] shadow-lg">
              {/* Checkmark */}
              <svg
                width="56"
                height="48"
                viewBox="0 0 56 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-md"
              >
                <path
                  d="M6 24L20 38L50 8"
                  stroke="white"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-2 text-center font-inter text-[32px] font-semibold leading-tight text-black">
          Успешная регистрация
          <br />
          на курс
        </h2>

        {/* Course Name */}
        <p className="mb-8 text-center font-inter text-lg text-[#737373]">
          {courseName}
        </p>

        {/* Confirm Button */}
        <Button
          onClick={handleConfirm}
          className="h-14 w-full rounded-2xl bg-[#1F1F29] font-inter text-base font-medium text-white hover:bg-[#1F1F29]/90"
        >
          Хорошо
        </Button>
      </div>
    </div>
  )
}

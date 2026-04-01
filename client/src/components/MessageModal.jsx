import { Button } from "@/components/ui/button"

export default function MessageModal({
  courseName = "Дизайнер интерфейсов",
  onSend,
  onClose,
}) {
  const handleSend = () => {
    console.log("Sending application...")
    onSend?.()
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

        {/* Illustration */}
        <div className="mb-8 mt-4">
          <div className="relative">
            {/* Document */}
            <div className="flex size-40 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8E0F5] to-[#F0E6F5]">
              <svg
                width="120"
                height="140"
                viewBox="0 0 120 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Paper */}
                <rect
                  x="20"
                  y="10"
                  width="80"
                  height="120"
                  rx="8"
                  fill="url(#paper-gradient)"
                />
                {/* Lines */}
                <rect x="32" y="30" width="56" height="4" rx="2" fill="#B4B4B4" />
                <rect x="32" y="42" width="56" height="4" rx="2" fill="#B4B4B4" />
                <rect x="32" y="54" width="56" height="4" rx="2" fill="#B4B4B4" />
                <rect x="32" y="66" width="40" height="4" rx="2" fill="#B4B4B4" />
                {/* Curled corner */}
                <path
                  d="M100 130H30C25.5817 130 22 126.418 22 122V20C22 15.5817 25.5817 12 30 12H88L100 24V130Z"
                  fill="url(#paper-gradient)"
                />
                <defs>
                  <linearGradient
                    id="paper-gradient"
                    x1="20"
                    y1="10"
                    x2="100"
                    y2="130"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E8E0F5" />
                    <stop offset="1" stopColor="#D4C4E8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* Pencil */}
            <div className="absolute -right-2 -top-2 rotate-12">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Pencil body */}
                <path
                  d="M50 10L70 30L45 55L25 35L50 10Z"
                  fill="url(#pencil-body)"
                />
                {/* Pencil tip */}
                <path
                  d="M25 35L45 55L40 60L20 40L25 35Z"
                  fill="#F5D0A9"
                />
                {/* Pencil lead */}
                <path
                  d="M40 60L45 55L42 58L40 60Z"
                  fill="#4A4A4A"
                />
                {/* Pencil eraser */}
                <path
                  d="M50 10L55 5L75 25L70 30L50 10Z"
                  fill="#FF6B9D"
                />
                {/* Pencil metal band */}
                <path
                  d="M55 5L52 8L72 28L75 25L55 5Z"
                  fill="#C0C0C0"
                />
                <defs>
                  <linearGradient
                    id="pencil-body"
                    x1="25"
                    y1="10"
                    x2="70"
                    y2="55"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF9500" />
                    <stop offset="1" stopColor="#FF6B00" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-2 text-center font-inter text-[32px] font-semibold leading-tight text-black">
          Вы отправляете
          <br />
          заявку обучение
        </h2>

        {/* Course Name */}
        <p className="mb-8 text-center font-inter text-lg text-[#737373]">
          {courseName}
        </p>

        {/* Submit Button */}
        <Button
          onClick={handleSend}
          className="h-14 w-full rounded-2xl bg-[#1F1F29] font-inter text-base font-medium text-white hover:bg-[#1F1F29]/90"
        >
          Отправить заявку
        </Button>
      </div>
    </div>
  )
}

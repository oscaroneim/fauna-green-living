export async function Reviews() {
  return (
    <div className="flex space-x-12 overflow-x-auto pb-2 pt-2 md:p-2 md:px-6">
      <div className="relative flex h-[180px] w-[450px]  flex-col items-center justify-center rounded-[14px]">
        <div className="relative left-[5px] top-[5px] z-[2px] h-[95%] w-[420px] overflow-hidden rounded-[10px] border border-gray-300 bg-white bg-opacity-[95%] pt-[30px] text-center shadow-lg outline-[2px] outline-white backdrop-blur-[24px]">
          “A quote from a customer.”
        </div>
      </div>
      <div className="relative flex h-[180px] w-[450px]  flex-col items-center justify-center rounded-[14px]">
        <div className="relative left-[5px] top-[5px] z-[2px] h-[95%] w-[420px] overflow-hidden rounded-[10px] border border-gray-300 bg-white bg-opacity-[95%] pt-[30px] text-center shadow-lg outline-[2px] outline-white backdrop-blur-[24px]">
          “A quote from a customer.”
        </div>
      </div>
      <div className="relative flex h-[180px] w-[450px]  flex-col items-center justify-center rounded-[14px]">
        <div className="relative left-[5px] top-[5px] z-[2px] h-[95%] w-[420px] overflow-hidden rounded-[10px] border border-gray-300 bg-white bg-opacity-[95%] pt-[30px] text-center shadow-lg outline-[2px] outline-white backdrop-blur-[24px]">
          “A quote from a customer.”
        </div>
      </div>
    </div>
  );
}
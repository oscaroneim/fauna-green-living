export async function Reviews() {
  return (
    <div className="flex space-x-12 overflow-x-auto pb-2 pt-2 no-scrollbar md:p-2 md:px-6">
      <div className="relative flex h-[180px] w-[450px] flex-col items-center justify-center rounded-lg">
        <div className="relative left-[5px] top-[0px] z-[2px] h-[95%] w-[420px] overflow-hidden rounded-[10px] border border-customGreen bg-white bg-opacity-[95%] pt-[10px] shadow-sm outline-[2px] outline-white backdrop-blur-[24px]">
          <p className="pb-2 pl-3 text-left font-bold">Mennell, Owner Welch Bakes </p>
          <p className="pl-3 text-left">
            “Working with Kim couldn't be easier. First, we have a great handmade product that
            improves the life and freshness of our sourdough! Her attention to detail to bring our
            brand to life was amazing and didn't disappoint with the branded sleeve that just
            finished the wrap off!”
          </p>
        </div>
      </div>
      <div className="relative flex h-[180px] w-[450px]  flex-col items-center justify-center rounded-lg">
        <div className="relative left-[5px] top-[0px] z-[2px] h-[95%] w-[420px] overflow-hidden rounded-[10px] border border-customGreen bg-white bg-opacity-[95%] pt-[10px] shadow-sm outline-[2px] outline-white backdrop-blur-[24px]">
          <p className="pb-2 pl-3 text-left font-bold">Jenni Griffiths</p>
          <p className="pl-3 text-left">
            “I really liked the range of fabric choices for these beeswax wraps. They look great and
            do the job, and were delivered within the time scale promised. Would definitely
            recommend and buy from this seller again.”
          </p>
        </div>
      </div>
      <div className="relative flex h-[180px] w-[450px]  flex-col items-center justify-center rounded-lg">
        <div className="relative left-[5px] top-[0px] z-[2px] h-[95%] w-[420px] overflow-hidden rounded-[10px] border border-customGreen bg-white bg-opacity-[95%] pt-[10px] shadow-sm outline-[2px] outline-white backdrop-blur-[24px]">
          <p className="pb-2 pl-3 text-left font-bold">Louise Chambers</p>
          <p className="pl-3 text-left">
            “Apart from the obvious environmental benefit these are great for my mum who has really
            bad arthritis in her hands and struggles to use cling film”
          </p>
        </div>
      </div>
      <div className="relative flex h-[180px] w-[450px]  flex-col items-center justify-center rounded-lg">
        <div className="relative left-[5px] top-[0px] z-[2px] h-[95%] w-[420px] overflow-hidden rounded-[10px] border border-customGreen bg-white bg-opacity-[95%] pt-[10px] shadow-sm outline-[2px] outline-white backdrop-blur-[24px]">
          <p className="pb-2 pl-3 text-left font-bold">Malissa Denney</p>
          <p className="pl-3 text-left">
            “Great quality, have been using them for my lunches and the have kept my sandwiches
            really well!”
          </p>
        </div>
      </div>
    </div>
  );
}

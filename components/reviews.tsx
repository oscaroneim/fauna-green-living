import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export async function Reviews() {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="text-m text-yellow-600" />
        ))}
        {[...Array(halfStars)].map((_, i) => (
          <FontAwesomeIcon key={i + fullStars} icon={faStar} className="text-m text-yellow-600" />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <FontAwesomeIcon
            key={i + fullStars + halfStars}
            icon={faStar}
            className="text-gray-300"
          />
        ))}
      </>
    );
  };

  return (
    <div className="flex space-x-12 overflow-x-auto pb-2 pt-2 no-scrollbar md:p-2 md:px-6">
      <div className="relative flex h-[180px] w-[450px] flex-col items-center justify-center rounded-lg">
        <div className="relative left-[5px] top-[0px] z-[2px] h-[95%] w-[420px] overflow-hidden rounded-[10px] border border-customGreen bg-white bg-opacity-[95%] pt-[10px] shadow-sm outline-[2px] outline-white backdrop-blur-[24px]">
          <div className="flex justify-between pr-2">
            <p className="pb-2 pl-3 text-left font-bold">Mennell, Owner Welch Bakes</p>
            <p className="flex h-10 w-12">{renderStars(5)}</p>
          </div>
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
          <div className="flex justify-between pr-2">
            <p className="pb-2 pl-3 text-left font-bold">Jen</p>
            <p className="flex h-10 w-12">{renderStars(5)}</p>
          </div>
          <p className="pl-3 text-left">
            “The beeswax wraps are amazing. I have used them on bread and cheese and it keeps it so
            fresh for so much longer. I also feel like I'm doing my part in reducing the use of
            cling film and plastics which are destroying the world. Great product I would highly
            recommend.”
          </p>
        </div>
      </div>
      <div className="relative flex h-[180px] w-[450px]  flex-col items-center justify-center rounded-lg">
        <div className="relative left-[5px] top-[0px] z-[2px] h-[95%] w-[420px] overflow-hidden rounded-[10px] border border-customGreen bg-white bg-opacity-[95%] pt-[10px] shadow-sm outline-[2px] outline-white backdrop-blur-[24px]">
          <div className="flex justify-between pr-2">
            <p className="pb-2 pl-3 text-left font-bold">Kim R</p>
            <p className="flex h-10 w-12">{renderStars(4)}</p>
          </div>
          <p className="pl-3 text-left">
            “Fauna Green Living&#x2019;s Beeswax wraps are a great alternative to clingfilm, we use
            ours constantly. They&#x2019;re brilliant quality, love the patterns and they last a
            really long time”
          </p>
        </div>
      </div>
    </div>
  );
}

/**<div className="relative flex h-[180px] w-[450px]  flex-col items-center justify-center rounded-lg">
        <div className="relative left-[5px] top-[0px] z-[2px] h-[95%] w-[420px] overflow-hidden rounded-[10px] border border-customGreen bg-white bg-opacity-[95%] pt-[10px] shadow-sm outline-[2px] outline-white backdrop-blur-[24px]">
          <div className="flex justify-between pr-2">
            <p className="pb-2 pl-3 text-left font-bold">Malissa Denney</p>
            <p className="flex h-10 w-12">{renderStars(5)}</p>
          </div>
          <p className="pl-3 text-left">
            “Great quality, have been using them for my lunches and the have kept my sandwiches
            really well!”
          </p>
        </div>
      </div> */

import {
  Carousel,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function CarouselDefault() {
  return (
    <Carousel
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div className="relative h-full w-full">
        <img
          src="https://images2.alphacoders.com/724/724132.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              XXX Movie Theater
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              "Step into the enchanting realm of cinematic wonders! Embark on a
              journey through our movie theater homepage, where you shall unveil
              the latest blockbuster spectacles, the mystique of showtimes, and
              the allure of exclusive promotions, all within the mesmerizing
              tapestry of the silver screen's enchantment."
              <br />
              ---Chatgpt---
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Book Ticket Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative h-full w-full">
        <img
          src="https://images2.alphacoders.com/491/491173.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75"></div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="https://images2.alphacoders.com/280/280472.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75"></div>
      </div>
    </Carousel>
  );
}

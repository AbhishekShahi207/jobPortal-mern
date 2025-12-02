import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const categories =[
    "Frontend Developer",
    "Full Stack Developer",
    "Data Analyst",
    "Business Analyst",
    "Project Manager",
    "Ui/Ux Designer"
]


const CategoryCarousel = () => {

    
  return (
     <div className="w-full flex items-center justify-center mt-6 pt-3 nocopy">
      <Carousel opts={{ loop: true ,dragFree:true}}  plugins={[
          Autoplay({
            delay: 1300,            // always running
            stopOnMouseEnter: false,
            stopOnInteraction: false,
            speed: 1,            // lower = slower, higher = faster
          }),
        ]} className="w-full max-w-4xl">
        {/* Left Arrow */}
        <CarouselPrevious className="rounded-full border shadow-none bg-white text-black hover:bg-gray-100" />

        {/* Items */}
        <CarouselContent className="flex gap-4 py-2">
          {categories.map((item, i) => (
            <CarouselItem
              key={"dup-" + i}
              className="
                w-auto basis-auto shrink-0
              "
            >
              <div
                className="
                  px-6 py-3 bg-gray-100 rounded-xl font-semibold
                  whitespace-nowrap
                  text-sm sm:text-base
                "
              >
                {item}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Right Arrow */}
        <CarouselNext className="rounded-full border shadow-none bg-white text-black hover:bg-gray-100" />
      </Carousel>
    </div>
  )
}

export default CategoryCarousel

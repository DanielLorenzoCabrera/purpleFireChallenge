import Image from "next/image";
import icon_left from "@/assets/img/icon-left.svg"
import icon_right from "@/assets/img/icon-right.svg"

type CarouselProps = {
  children: React.ReactNode;
  onPrev?: () => void;
  onNext?: () => void;
  totalSlides: number;
  displayArrows?: boolean;
  slideSelectedIndex?: number
};

export default function Carousel({
  children,
  onPrev,
  onNext,
  totalSlides,
  displayArrows = false,
  slideSelectedIndex = 0
}: CarouselProps) {

const isSlideSelected = (slideIndex: number) => slideIndex === slideSelectedIndex ? 'selected' : ''


  return (
    <div className="carousel">
      {displayArrows && (
        <figure onClick={onPrev} className="prev carousel-arrow">
          <Image
            src={"/images/icon-left.svg"}
            width={50}
            height={50}
            alt="carousel left icon"
          />
        </figure>
      )}
      <div className="carousel-content">
        {children}
        {totalSlides > 1 && (
          <div className="slides">
            {Array.from({ length: totalSlides }).map((item, index) => {
              return <div key={index} className={isSlideSelected(index) }></div>;
            })}
          </div>
        )}
      </div>
      {displayArrows && (
        <figure onClick={onNext} className="next carousel-arrow">
          <Image
            src={"/images/icon-right.svg"}
            width={50}
            height={50}
            alt="carousel right icon"
          />
        </figure>
      )}
    </div>
  );
}

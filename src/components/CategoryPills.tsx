import { Button } from "./Button";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CategoryPillsProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const TRANSLATE_AMOUNT = 200;

export const CategoryPills = ({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillsProps) => {
  const [isLeftVisible, setLeftVisible] = useState(false);
  const [isRightVisible, setRightVisible] = useState(true);
  const [translate, setTranslate] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0].target as HTMLDivElement;

      if (!container) return;

      setLeftVisible(translate > 0);
      setRightVisible(
        container.scrollWidth > container.clientWidth + translate,
      );
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [translate, categories]);

  return (
    <div ref={containerRef} className="overflow-x-hidden relative">
      <div
        className="flex whitespace-nowrap gap-3 transition transition-transform w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category) => {
          return (
            <Button
              onClick={() => onSelect(category)}
              key={category}
              variant={category === selectedCategory ? "dark" : "default"}
              className="py-1 px-3 ronded-lg whitespace-nowrap"
            >
              {category}
            </Button>
          );
        })}
      </div>

      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - TRANSLATE_AMOUNT;
                if (newTranslate <= 0) {
                  return 0;
                }
                return newTranslate;
              });
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}

      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                if (!containerRef.current) return translate;

                const newTranslate = translate + TRANSLATE_AMOUNT;
                const edge = containerRef.current.scrollWidth;
                const width = containerRef.current.clientWidth;

                if (newTranslate + width >= edge) {
                  return edge - width;
                }
                return newTranslate;
              });
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};

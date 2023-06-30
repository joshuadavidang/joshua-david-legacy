import { IconButton, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { storeInArray } from '@/helpers/storeInArray';

export default function Carousel({ content }: any) {
  const { colorMode } = useColorMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [handleNextButton, setHandleNextButton] = useState(false);
  const bulletIndicator = storeInArray(content);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === content.length - 1) {
          setHandleNextButton(false);
          return 0;
        } else {
          setHandleNextButton(true);
          return Math.min(prevIndex + 1, content.length - 1);
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [content]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setHandleNextButton(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, content.length - 1));
    setHandleNextButton(true);
  };

  const initialX = handleNextButton ? 500 : -500;

  return (
    <>
      <div className="flex flex-row items-center gap-36 lg:max-w-[1000px] min-h-[300px]">
        <div>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="left-circle"
            size="lg"
            icon={<AiFillLeftCircle style={{ fontSize: '1.8rem' }} />}
            onClick={handlePrev}
            isDisabled={currentIndex === 0}
          />
        </div>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: initialX }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content[currentIndex]}
        </motion.div>

        <div>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="right-circle"
            size="lg"
            icon={<AiFillRightCircle style={{ fontSize: '1.8rem' }} />}
            onClick={handleNext}
            isDisabled={currentIndex === content.length - 1}
          />
        </div>
      </div>

      <div className="flex justify-center mt-12">
        {bulletIndicator.map((bullet) => {
          let selectedBulletColor = '';
          if (colorMode === 'dark') {
            selectedBulletColor = 'bg-white';
          } else {
            selectedBulletColor = 'bg-black';
          }
          return (
            <button
              key={bullet}
              className={`h-2 w-2 rounded-full mx-1 ${
                bullet === currentIndex ? selectedBulletColor : 'bg-gray'
              }`}
              onClick={() => setCurrentIndex(bullet)}
            />
          );
        })}
      </div>
    </>
  );
}

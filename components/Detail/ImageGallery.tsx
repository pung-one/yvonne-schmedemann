import { AnimatePresence, delay, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import { Category } from "@/lib/types";
import { ImageData } from "@/lib/types";
import { getCategoriesBlurDataUrl } from "@/lib/_utils";
import arrowLeft from "@/public/svg/arrowLeft.svg";

const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;

const variants = {
  enter: (slideDirection: string) => {
    return {
      x: slideDirection === "right" ? "-30%" : "30%",
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: (slideDirection: string) => {
    return {
      x: slideDirection === "right" ? "30%" : "-30%",
      opacity: 0,
      transition: { duration: 0.3 },
    };
  },
};

type Props = {
  imageData: ImageData[];
  category: Category;
  fullscreen: boolean;
};

export function ImageGallery({ imageData, category, fullscreen }: Props) {
  const [buttonEnabled, setButtonEnabled] = useState<boolean>(true);

  const [imageIndexAndDirection, setImageIndexAndDirection] = useState<{
    index: number;
    direction: "left" | "right";
  }>({ index: 0, direction: "right" });

  const {
    attributes: {
      alternativeText,
      formats: {
        large: { url, width, height },
      },
    },
  } = imageData[imageIndexAndDirection.index];

  function prevImage() {
    if (buttonEnabled) {
      setImageIndexAndDirection(({ index }) => {
        return {
          index: index > 0 ? (index -= 1) : imageData.length - 1,
          direction: "left",
        };
      });
    }
  }

  function nextImage() {
    if (buttonEnabled) {
      setImageIndexAndDirection(({ index }) => {
        return {
          index: index < imageData.length - 1 ? (index += 1) : 0,
          direction: "right",
        };
      });
    }
  }

  return (
    <Container>
      <AnimatePresence
        initial={false}
        mode={"popLayout"}
        custom={imageIndexAndDirection.direction}
      >
        <motion.div
          style={{ position: "relative" }}
          key={url}
          custom={imageIndexAndDirection.direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          onAnimationStart={() => setButtonEnabled(false)}
          onAnimationComplete={() => setButtonEnabled(true)}
        >
          <Navigation>
            <StyledButton $direction="left" onClick={() => prevImage()}>
              <PiArrowLeftThin />
            </StyledButton>
            <StyledButton $direction="right" onClick={() => nextImage()}>
              <PiArrowRightThin />
            </StyledButton>
          </Navigation>
          <StyledImage
            priority
            $fullscreen={fullscreen}
            alt={alternativeText || ""}
            src={cmsBaseUrl + url}
            width={width}
            height={height}
          />
        </motion.div>
      </AnimatePresence>
      <ImageCounter>{`${imageIndexAndDirection.index + 1}/${
        imageData.length
      }`}</ImageCounter>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: 100vw;
  overflow: hidden;
`;

const StyledImage = styled(Image)<{ $fullscreen: boolean }>`
  width: 100%;
  height: ${({ $fullscreen }) => ($fullscreen ? "100vh" : "80vh")};
  object-fit: ${({ $fullscreen }) => ($fullscreen ? "cover" : "contain")};
  object-position: center;
`;

const Navigation = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
`;

const StyledButton = styled.button<{ $direction: "left" | "right" }>`
  flex: 1;
  display: flex;
  justify-content: ${({ $direction }) =>
    $direction === "right" ? "flex-end" : "flex-start"};
  align-items: center;
  background: none;
  border: none;
  padding: 0 20px;
  @media only screen and (min-width: 768px) {
    * {
      display: none;
    }
    cursor: ${({ $direction }) =>
      $direction === "right" ? "e-resize" : `w-resize`};
  }
`;

const ImageCounter = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { Category, ImageData, RequestContext } from "../RequestWrapper";
import styled from "styled-components";
import Image from "next/image";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import { getCategoriesDataUrl } from "@/lib/_utils";

const variants = {
  enter: (slideDirection: string) => {
    return {
      x: slideDirection === "right" ? "-10%" : "10%",
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: (slideDirection: string) => {
    return {
      x: slideDirection === "right" ? "10%" : "-10%",
      opacity: 0,
      transition: {
        x: { duration: 0.4 },
        opacity: { delay: 0.1, duration: 0.3 },
      },
    };
  },
};

type Props = {
  imageData: ImageData[];
  category: Category;
};

export function ImageGallery({ imageData, category }: Props) {
  const { cmsBaseUrl } = useContext(RequestContext);

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

  console.log(category);

  return (
    <Container>
      <AnimatePresence
        initial={false}
        mode={"wait"}
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
            placeholder="blur"
            blurDataURL={getCategoriesDataUrl(category)}
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
  max-width: 100vw;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: fit-content;
  object-fit: contain;
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
    $direction === "right" ? "flex-end" : "flex-sart"};
  align-items: center;
  background: none;
  border: none;
  padding: 0 20px;
`;

const ImageCounter = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

import { Carousel, IconButton, Image, ImageProps } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { IListingImages } from "../../../types/models/IListingImages";
import { getStaticImageFromServer } from "../../../lib/getStaticImageFromServer";

type Props = {
  images: IListingImages[];
  carName: string;
  onClick?: (index: number) => void;
};

export const MyListingCarousel = ({ onClick, images, carName }: Props) => {
  return (
    <Carousel.Root slideCount={images.length} minW={"sm"} maxW="full" gap="4">
      <Carousel.Control justifyContent="center" gap="4" width="full">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="outline">
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.ItemGroup width="full">
          {images.map((item, index) => (
            <Carousel.Item key={index} index={index}>
              <Image
                onClick={() => onClick(index)}
                cursor={"pointer"}
                aspectRatio="16/9"
                src={getStaticImageFromServer(item.image_name)}
                alt={`${carName} photo`}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="outline">
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>

      <Carousel.IndicatorGroup>
        {images.map((item, index) => (
          <Carousel.Indicator
            key={index}
            index={index}
            unstyled
            _current={{
              outline: "2px solid currentColor",
              outlineOffset: "2px",
            }}
          >
            <Image
              w="20"
              aspectRatio="16/9"
              src={getStaticImageFromServer(item.image_name)}
              alt={`${carName} photo`}
              objectFit="cover"
            />
          </Carousel.Indicator>
        ))}
      </Carousel.IndicatorGroup>
    </Carousel.Root>
  );
};

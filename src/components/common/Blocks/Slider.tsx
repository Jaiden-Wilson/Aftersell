import { Box, css, SystemProps } from '@storyofams/react-ui';
import {
  Image as ToolkitImage,
  getImageProps,
} from '@storyofams/storyblok-toolkit';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SliderProps extends SystemProps {
  content?: any;
}

SwiperCore.use([Autoplay]);

export const Slider = ({ content, ...props }: SliderProps) => {
  return (
    <Box
      width="100%"
      css={css({
        '.swiper-container': {
          overflow: 'visible',
        },
        '.swiper-slide': {
          width: 'auto !important',
        },
      })}
      {...props}
    >
      <Swiper
        spaceBetween={32}
        slidesPerView="auto"
        loop
        centeredSlides
        speed={2000}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
      >
        {content?.images?.[0]?.image &&
          content?.images?.map(({ image }, idx) => {
            const imageProps = getImageProps(image?.filename, {
              fluid: 640,
            });

            return (
              <SwiperSlide key={image?._uid || idx}>
                <Box
                  css={css({
                    '.storyblok-image-wrapper': {
                      boxShadow: content?.rounded_corners ? 'xs' : 'none',
                      borderRadius: content?.rounded_corners ? 'md' : 'none',
                      height: [160, 320],
                      width: [
                        (160 / imageProps?.height) * imageProps?.width,
                        (320 / imageProps?.height) * imageProps?.width,
                      ],
                    },
                    img: {
                      borderRadius: content?.rounded_corners ? 'md' : 'none',
                    },
                  })}
                >
                  <ToolkitImage
                    alt={image?.alt || ''}
                    src={image?.filename}
                    fluid={640}
                    fit="contain"
                    key={image?._uid}
                    showPlaceholder={false}
                  />
                </Box>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Box>
  );
};

import React, { FC, ReactElement, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { ImageProps } from "./Image.interface";

const Image: FC<ImageProps> = (props): ReactElement => {
  const { src, alt } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imageLoading, setImageLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = (): void => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  return <motion.img onLoad={imageLoaded} src={src} alt={alt} loading="lazy" />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

export default Image;

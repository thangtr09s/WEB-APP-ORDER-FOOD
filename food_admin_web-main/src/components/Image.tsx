import { ImgHTMLAttributes, memo, useState } from "react";

interface Props extends ImgHTMLAttributes<any> {
  fallback?: string;
}

const Image = ({ fallback, src, ...props }: Props) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const onError = () => setImgSrc(fallback);

  return <img src={imgSrc ? imgSrc : fallback} onError={onError} {...props} />;
};

export default memo(Image);

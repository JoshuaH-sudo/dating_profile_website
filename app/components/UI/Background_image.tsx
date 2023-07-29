import { DetailedHTMLProps, FC, ImgHTMLAttributes } from "react";

interface Background_image_props {
  image_src: string;
  style_props?: React.CSSProperties;
  img_props?: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}
const Background_image: FC<Background_image_props> = ({
  image_src,
  style_props,
  img_props,
}) => {
  return (
    <img
      src={image_src}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1000,
        ...style_props,
      }}
      {...img_props}
    />
  );
};

export default Background_image;

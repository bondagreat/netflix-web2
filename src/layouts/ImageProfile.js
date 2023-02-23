import blankImage from '../assets/blank.png';

export default function ImageProfile({ src, size }) {
  return (
    <img
      src={src || blankImage}
      className="rounded-sm cursor-pointer"
      alt="ImageProfile"
      width={size}
      height={size}
    />
  );
}

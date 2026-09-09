import minifig3 from '@/assets/images/minifig3.png';
import type { ImgHTMLAttributes } from 'react';

type Minifig2Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;

const Minifig3 = ({ alt = 'Minifig 3', ...props }: Minifig2Props) => (
  <img {...props} src={minifig3} alt={alt} />
);

export default Minifig3;

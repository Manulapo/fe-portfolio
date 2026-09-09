import type { ImgHTMLAttributes } from 'react';
import minifig2 from '@/assets/images/minifig2.png';
import { Link } from 'react-router-dom';

type Minifig2Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;

const Minifig2 = ({ alt = 'Minifig 2', ...props }: Minifig2Props) => (
  <Link to="/network">
  <img {...props} src={minifig2} alt={alt} />
  </Link>
);

export default Minifig2;

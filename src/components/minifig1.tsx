import type { ImgHTMLAttributes } from 'react';
import minifig1 from '@/assets/images/minifig1.png';
import { Link } from 'react-router-dom';

type Minifig1Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;

const Minifig1 = ({ alt = 'Minifig 1', ...props }: Minifig1Props) => (
  <Link to="/profile">
  <img {...props} src={minifig1} alt={alt} />
  </Link>
);

export default Minifig1;

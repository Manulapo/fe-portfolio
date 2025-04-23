import { useDelay } from '@/hooks/use-delay';
import { getRandomNumber } from '@/lib/utils';
import { Loader } from 'lucide-react';

const LoadingSection = ({
  delay,
  children,
}: {
  delay: number;
  children: React.ReactNode;
}) => {
  const delayRange = getRandomNumber(0, delay);
  const showContent = useDelay(delayRange);

  return showContent ? (
    <>{children}</>
  ) : (
    <Loader className="w-full mx-auto animate-spin" />
  );
};

export default LoadingSection;

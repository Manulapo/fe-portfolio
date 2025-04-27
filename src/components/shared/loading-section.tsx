import { useDelay } from '@/hooks/use-delay';
import { cn, getRandomNumber } from '@/lib/utils';
import { Loader } from 'lucide-react';

const LoadingSection = ({
  className,
  delay,
  children,
}: {
  className?: string;
  delay: number;
  children: React.ReactNode;
}) => {
  const delayRange = getRandomNumber(0, delay);
  const showContent = useDelay(delayRange);

  return showContent ? (
    <>{children}</>
  ) : (
    <Loader className={cn("w-full mx-auto animate-spin mt-13", className)} />
  );
};

export default LoadingSection;

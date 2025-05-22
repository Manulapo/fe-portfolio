import { TestimonialData } from '@/types';
import quotes from '@/assets/icons/quotes-2.svg';
import { formatDate } from '@/lib/utils';

const TestimonialRow = ({ data }: { data: TestimonialData }) => {
  return (
    <div className="flex flex-col gap-2 p-2 relative">
      <img
        src={quotes}
        className="absolute top-2 right-10 text-blue-400 opacity-10 dark:opacity-20 w-20"
      />
      <div className="flex items-center gap-4">
        {data.avatarUrl && (
          <img
            src={data.avatarUrl}
            alt={data.name}
            className="w-12 h-12 rounded-full"
          />
        )}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">{data.name}</h3>
          <div className="flex items-center gap-3">
            <img src={data.companyLogo} alt={data.company} className='rounded-full w-5 h-5' />
            <p className="text-sm text-gray-500">
              {data.role} at {data.company}
            </p>
          </div>
        </div>
      </div>
      <p className="text-gray700 italic text-md ml-3 mt-5">{data.text}</p>
      <span className="text-xs text-gray-500 w-full text-right mt-2 mr-3">
        {formatDate(data.date).fullDate}
      </span>
    </div>
  );
};

export default TestimonialRow;

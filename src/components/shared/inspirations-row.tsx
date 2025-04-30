import { InspirationsData } from '@/types';

const InspirationsRow = ({ data }: { data: InspirationsData }) => {
  return (
    <div className="flex flex-col gap-2 p-2 relative">
      <div className="flex items-center gap-4">
        {data.avatarUrl && (
          <img
            src={data.avatarUrl}
            alt={data.name}
            className="w-12 h-12 rounded-full"
          />
        )}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{data.name}</h3>
          <div className="flex items-center gap-3">
            <p className="text-sm text-gray-500">{data.company}</p>
          </div>
        </div>
      </div>
      <p className="text-gray700 italic text-md ">{data.text}</p>
    </div>
  );
};

export default InspirationsRow;

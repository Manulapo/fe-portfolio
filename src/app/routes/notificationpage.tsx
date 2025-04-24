import NotificationFilter from '@/components/shared/notification-filter';
import NotificationRow from '@/components/shared/notificationRow';
import { Card } from '@/components/ui/card';
import { notifications } from '../constants/notifications';
import { NotificationData } from '@/types';
import { Separator } from '@/components/ui/separator';
import { getRandomNumber, shuffleArray } from '@/lib/utils';
import { dateTypes } from '../constants';
import { useState } from 'react';
import LoadingSection from '@/components/shared/loading-section';

const addToreadStatus = (notifications: NotificationData[]) => {
  notifications = shuffleArray(notifications);
  return notifications
    .map((notification) => ({
      ...notification,
      toRead: getRandomNumber(0, 100000) % 2 === 0,
    }))
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
};

const assignDateTypeByRank = (rowNum: number, totalNotification: number) => {
  // divide the total number of notifications by the number of date types
  const dateTypeCount = Math.floor(totalNotification / dateTypes.length);
  const dateTypeIndex = Math.floor(rowNum / dateTypeCount);
  const dateType = dateTypes[dateTypeIndex % dateTypes.length];
  return dateType.name;
};

const NotificationPage = () => {
  let notificationArray;
  const notificationsWithToReadStatus = addToreadStatus(notifications);
  const notificationsWithDateType = notificationsWithToReadStatus.map(
    (notification, i) => {
      return {
        ...notification,
        date: assignDateTypeByRank(i, notificationsWithToReadStatus.length),
      };
    },
  );

  // Build a lookup to assign a rank to each date type
  const dateTypeRank = dateTypes.reduce(
    (acc, type, index) => {
      acc[type.name] = index;
      return acc;
    },
    {} as Record<string, number>,
  );

  // Sort the notifications based on the rank from dateTypes
  notificationArray = notificationsWithDateType.sort((a, b) => {
    return dateTypeRank[a.date] - dateTypeRank[b.date];
  });

  const [array, setArray] = useState(notificationArray);

  return (
    <>
      <NotificationFilter
        onFilterToggle={(filterType) => {
          setArray(
            notificationArray.filter((notification) => {
              if (filterType === 'all') return true;
              return (
                notification.type.toLocaleLowerCase() ===
                filterType.toLocaleLowerCase()
              );
            }),
          );
        }}
      />
      <Card className="p-0 m-0 gap-0 min-h-15">
        <LoadingSection className='mt-4' delay={500} key={array.length}>
          {array.map((notification: NotificationData, i: number) => (
            <>
              <NotificationRow key={notification.title} data={notification} />
              {i < array.length - 1 && (
                <Separator className="my-0 bg-gray-300" />
              )}
            </>
          ))}
        </LoadingSection>
      </Card>
    </>
  );
};

export default NotificationPage;

import LoadingSection from '@/components/shared/loading-section';
import NotificationFilter from '@/components/shared/notification-filter';
import NotificationRow from '@/components/shared/notificationRow';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getRandomNumber, shuffleArray } from '@/lib/utils';
import { NotificationData } from '@/types';
import { useMemo, useState } from 'react';
import { dateTypes } from '../constants';
import { notifications } from '../constants/notifications';

const addToreadStatus = (notifications: NotificationData[]) => {
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
  // Divide total notifications by number of date types
  const dateTypeCount = Math.floor(totalNotification / dateTypes.length);
  const dateTypeIndex = Math.floor(rowNum / dateTypeCount);
  const dateType = dateTypes[dateTypeIndex % dateTypes.length];
  return dateType.name;
};

const NotificationPage = () => {
  const notificationArray = useMemo(() => {
    const notificationsWithStatus = shuffleArray(addToreadStatus(notifications));
    const notificationsWithDateType = notificationsWithStatus.map(
      (notification, i) => ({
        ...notification,
        date: assignDateTypeByRank(i, notificationsWithStatus.length),
      }),
    );
    const dateTypeRank = dateTypes.reduce(
      (acc, type, index) => {
        acc[type.name] = index;
        return acc;
      },
      {} as Record<string, number>,
    );
    return notificationsWithDateType.sort((a, b) => {
      return dateTypeRank[a.date] - dateTypeRank[b.date];
    });
  }, []);

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
        <LoadingSection className="mt-4" delay={500} key={array.length}>
          {array.map((notification: NotificationData, i: number) => (
            <div key={notification.title}>
              <NotificationRow data={notification} />
              {i < array.length - 1 && (
                <Separator className="my-0 bg-gray-300" />
              )}
            </div>
          ))}
        </LoadingSection>
      </Card>
    </>
  );
};

export default NotificationPage;

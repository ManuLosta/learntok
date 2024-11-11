'use client';

import { ChevronRight } from '@/components/common/icon/ChevronRight';
import { Avatar } from '@/components/common/avatars/Avatars';

export interface UserListProps {
  avatarColor: 'blue' | 'orange' | 'green';
  username: string;
  avatarUrl: string;
}

export const UserList = ({ username, avatarUrl, avatarColor }: UserListProps) => {

  return (
    <div className="flex w-full max-w-full flex-col gap-2 p-4 overflow-hidden">
      <div className="flex w-full cursor-pointer items-center gap-4">
        <Avatar variant={avatarColor} imageUrl={avatarUrl} />
        <div className="flex flex-grow flex-col w-[220px] h-[24px]">
          <p className="typography-body-bold">{username}</p>
        </div>
        <ChevronRight size={24} className="text-gray-600 w-[24px] h-[24px]" />
      </div>
    </div>
  );
};
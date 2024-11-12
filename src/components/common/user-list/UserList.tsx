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
    <div className="flex w-full max-w-full flex-col gap-2 overflow-hidden">
      <div className="flex w-full cursor-pointer items-center gap-4">
        <Avatar variant={avatarColor} imageUrl={avatarUrl} size={56} />
        <div className="flex flex-grow flex-col w-[220px] h-[24px]">
          <p className="typography-body-bold">{username}</p>
        </div>
        <ChevronRight size={24} className="text-slate-500" />
      </div>
    </div>
  );
};
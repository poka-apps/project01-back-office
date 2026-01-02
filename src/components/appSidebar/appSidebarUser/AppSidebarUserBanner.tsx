import { AvatarFallback, AvatarImage, Avatar } from '@/components/shadcn';

const CONSTS = {
  name: 'shadcn',
  avatar: '/avatars/shadcn.jpg'
};

export const AppSidebarUserBanner = () => {

  const { name, avatar } = CONSTS;

  return (
    <Avatar className='h-8 w-8 rounded-lg'>
      <AvatarImage
        src={avatar}
        alt={name} />
      <AvatarFallback className='rounded-lg'>
        CN
      </AvatarFallback>
    </Avatar>
  );

};

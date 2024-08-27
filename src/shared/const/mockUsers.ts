import avatar1 from '@/shared/assets/images/mockAvatar1.png';
import avatar2 from '@/shared/assets/images/mockAvatar2.png';
import avatar3 from '@/shared/assets/images/mockAvatar3.png';
import avatar4 from '@/shared/assets/images/mockAvatar4.png';
import avatar5 from '@/shared/assets/images/mockAvatar5.png';
import avatar6 from '@/shared/assets/images/mockAvatar6.png';
import avatar7 from '@/shared/assets/images/mockAvatar7.png';

import backGround1 from '@/shared/assets/images/mockBG1.png';
import backGround2 from '@/shared/assets/images/mockBG2.png';
import backGround3 from '@/shared/assets/images/mockBG3.png';

export interface MockUsers {
	id: number;
	name: string;
	occupation: string;
	avatar: string;
	verified: boolean;
	location: string;
	backGround?: string;
}

export const fakeUsers: Array<MockUsers> = [
	{
		id: 0,
		name: 'Екатерина Александрова',
		occupation: 'HR',
		avatar: avatar7,
		verified: true,
		location: 'Россия, Пушкин',
		backGround: backGround1,
	},
	{
		id: 1,
		name: 'Дмитрий Гагауз',
		occupation: 'Backend developer',
		avatar: avatar2,
		verified: true,
		location: 'Россия, Краснодар',
	},
	{
		id: 2,
		name: 'Леся Журавлёва',
		occupation: 'UI/UX designer',
		avatar: avatar3,
		verified: true,
		location: 'Россия, Москва',
	},
	{
		id: 3,
		name: 'Роман Нимов',
		occupation: 'Game developer',
		avatar: avatar4,
		verified: true,
		location: 'Россия, Калуга',
	},
	{
		id: 4,
		name: 'Алиса Гамалеева',
		occupation: 'Frontend developer',
		avatar: avatar6,
		verified: true,
		location: 'Россия, Санкт-Петербург',
		backGround: backGround2,
	},
	{
		id: 5,
		name: 'Айрат Хафизов',
		occupation: 'Frontend developer',
		avatar: avatar1,
		verified: true,
		location: 'Россия, Уфа',
	},
	{
		id: 6,
		name: 'Евгения Долгова',
		occupation: 'Graphic Designer',
		avatar: avatar5,
		verified: true,
		location: 'Австрия, Вена',
		backGround: backGround3,
	},
];

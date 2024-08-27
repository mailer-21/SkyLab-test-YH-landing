import avatar1 from '@/shared/assets/images/mockAvatar1.png';
import avatar2 from '@/shared/assets/images/mockAvatar2.png';
import avatar3 from '@/shared/assets/images/mockAvatar3.png';
import avatar4 from '@/shared/assets/images/mockAvatar4.png';
import avatar5 from '@/shared/assets/images/mockAvatar5.png';
import avatar6 from '@/shared/assets/images/mockAvatar6.png';
import avatar7 from '@/shared/assets/images/mockAvatar7.png';


export interface MockFeedback {
	feedback: string;
	author: string;
	avatar: string;
	occupation: string;
}

export const mockFeedback: Array<MockFeedback> = [
	{
		author: 'Екатерина Александрова',
		avatar: avatar7,
		feedback:
			'«Впечатлена возможностями YeaHub по построению карьеры. Система рекомендаций и менторинга здесь — на высоте. Моя роль ментора на этой платформе также открыла мне новые горизонты для профессионального роста»',
		occupation: 'HR',
	},
	{
		author: 'Леся Журавлёва',
		avatar: avatar3,
		feedback:
			'«YeaHub предоставил мне, начинающему UI/UX дизайнеру, неоценимую возможность для профессионального роста. Благодаря этой платформе я обрела не только вдохновение и ценные ресурсы для улучшения своих навыков, но и возможность живого общения с опытными коллегами»',
		occupation: 'UI/UX designer',
	},
	{
		author: 'Дмитрий Гагауз',
		avatar: avatar2,
		feedback:
			'«Классная платформа для обмена знаниями, которую я искал всю карьеру. Публиковать статьи и общаться c единомышленниками — бесценный опыт для специалиста c десятилетним стажем»',
		occupation: 'Backend developer',
	},{
		author: 'Евгения Долгова',
		avatar: avatar5,
		feedback:
			'«YeaHub подарил мне, возможность не только углубить свои знания и следить за новейшими трендами в индустрии, но и нашел для меня источник вдохновения в лице моих талантливых коллег.»',
		occupation: 'Graphic Designer',
	},
	
	{
		author: 'Айрат Хафизов',
		avatar: avatar1,
		feedback:
			'«Это нечто большее, чем просто платформа для обмена знаниями. Это место, где я нашел поддержку и мотивацию, необходимые для преодоления трудностей на пути к становлению успешным фронтенд-разработчиком. Здесь каждый день я открываю для себя что-то новое, будь то свежие подходы к разработке, инструменты или просто слова ободрения от тех, кто прошел этот путь до меня.»',
		occupation: 'Frontend developer',
	},
	{
		author: 'Алиса Гамалеева',
		avatar: avatar6,
		feedback:
			'«Как начинающий разработчик, я чувствовала себя потерянным в огромном мире программирования. YeaHub помог мне поверить в свои силы, и теперь я себя чувствую увереннее»',
		occupation: 'Frontend developer',
	},
	
];

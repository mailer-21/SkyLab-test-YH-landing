import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '@/shared/assets/icons/logo.svg';
import LogoImg from '@/shared/assets/images/logoImg.png';

import { classNames } from '../../libs/utils/classNames/classNames';

import cls from './AppLogo.module.css';

type LogoColorType = 'white' | 'black';

interface AppLogoProps {
	fill?: LogoColorType;
}

export const AppLogo: FC<AppLogoProps> = ({ fill = 'black' }) => {
	return (
		<NavLink to="/" className={cls.logo}>
			<img className={cls['logo-image']} src={LogoImg} alt="LogoImg" />
			<Logo className={classNames(cls.name, {}, [cls[fill]])} />
		</NavLink>
	);
};

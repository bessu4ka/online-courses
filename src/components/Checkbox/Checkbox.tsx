import { FC, useState } from 'react';

import sprite from 'images/sprite.svg';

import styled from './Checkbox.module.scss';

interface IProps {
	checked?: boolean;
}

const Checkbox: FC<IProps> = ({ checked }) => {
	return (
		<>
			{checked ? (
				<div className={styled.checked}>
					<svg>
						<use href={sprite + '#check'} />
					</svg>
				</div>
			) : (
				<div className={styled.notChecked} />
			)}
		</>
	);
};

export { Checkbox };

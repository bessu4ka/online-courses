import sprite from 'images/sprite.svg';

import styled from './PlayAnimateButton.module.scss';

const PlayAnimateButton = (): JSX.Element => {
	return (
		<div className={styled.container}>
			<div className={styled.button}>
				<div className={styled.animate}></div>
				<div className={styled.btn}></div>
				<svg className={styled.icon}>
					<use href={sprite + '#play'}></use>
				</svg>
			</div>
			<p className={styled.text}>Play showreel</p>
		</div>
	);
};

export { PlayAnimateButton };

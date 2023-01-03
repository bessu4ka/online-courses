import {
	certificate,
	certificate_logo_1,
	certificate_logo_2,
	certificate_logo_3,
} from 'images/homePage';

import styled from './Certificate.module.scss';

const Certificate = (): JSX.Element => {
	return (
		<div className={styled.container}>
			<aside>
				<h3>Createx Certificate</h3>
				<h2>Your expertise will be confirmed</h2>
				<p>We are accredited by international professional organizations and institutes:</p>
				<div className={styled.logoWrapper}>
					<img className={styled.logo} src={certificate_logo_1} alt="logo" />
					<img className={styled.logo} src={certificate_logo_2} alt="logo" />
					<img className={styled.logo} src={certificate_logo_3} alt="logo" />
				</div>
			</aside>

			<img src={certificate} alt="certificate" />
		</div>
	);
};

export { Certificate };

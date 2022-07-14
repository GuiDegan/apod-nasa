import React from 'react';
import BoxPrimary from '../BoxPrimary/BoxPrimary';

export default function BackgroundPrimary(props) {
	return (
		<>
			<div className='bg bg-primary'>
				<h1 className='bg-primary-logo'>{props.logo}</h1>
				<BoxPrimary />
			</div>
		</>
	);
}

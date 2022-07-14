import React from 'react';
import BoxSecondary from '../BoxSecondary/BoxSecondary';

export default function BackgroundSecondary() {
	return (
		<>
			<div className='bg bg-secondary'>
				<div className='bg-secondary-texts'>
					<div className='bg-secondary-align'>
						<h2>APOD</h2>
						<h1>NASA</h1>
					</div>
					<div className='bg-secondary-align'>
						<h1>data</h1>
						<h2>Universo</h2>
					</div>
					<h3>#fotododia</h3>
					<h2>Astronomia</h2>
					<h4>13.7 Bilhões de anos</h4>
				</div>
				<BoxSecondary />
			</div>
		</>
	);
}

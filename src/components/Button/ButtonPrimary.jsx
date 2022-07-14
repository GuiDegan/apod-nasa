import React from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ButtonPrimary() {

	function scrollWindow() {
		document.getElementById('bg-image').scrollIntoView({
			behavior: 'smooth'
		});
	}

	return (
		<>
			<IconButton className='btn-arrow' onClick={scrollWindow} color="primary" aria-label="roll page" component="span">
				<KeyboardArrowDownIcon className='btn-arrow-icon' />
			</IconButton>
		</>
	);
}

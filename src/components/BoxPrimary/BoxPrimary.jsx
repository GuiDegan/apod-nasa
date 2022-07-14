import React from 'react';
import { Box } from '@mui/system';
import LinkIcon from '@mui/icons-material/Link';

export default function BoxPrimary() {

	return (
		<>
			<Box className="box-primary">
				<p className='box-primary-title'>API</p>
				<p className='box-primary-text'>Conheça a API<a href="https://api.nasa.gov/" target="_blank" rel="noreferrer"><LinkIcon /></a></p>
			</Box>
		</>
	);
}
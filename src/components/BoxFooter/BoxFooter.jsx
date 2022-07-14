import React from 'react';
import { Box } from '@mui/system';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function BoxFooter() {
	return (
		<>
			<Box className='box-footer'>
				<div className='box-footer-align'>
					<RocketLaunchIcon className='box-footer-rocket' />
					<div className='box-footer-mobile'>
						<a href="https://www.linkedin.com/in/guilherme-degan-b1ba05124/" target="_blank" rel="noreferrer"><LinkedInIcon className='box-footer-linkedin' /></a>
						<a href="https://github.com/GuiDegan" target="_blank" rel="noreferrer"><GitHubIcon className='box-footer-github' /></a>
					</div>
				</div>
			</Box>
		</>
	);
}

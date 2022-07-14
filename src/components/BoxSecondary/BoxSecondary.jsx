import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import ButtonPrimary from '../Button/ButtonPrimary';
import api from '../../services/api';

export default function BoxSecondary() {
	const [user, setUser] = useState();

	useEffect(() => {
		api
			.get('apod?api_key=aUuMz3Faxp0PGzYZUl9GZcloyciPMvPBftyfP3cN')
			.then((response) => setUser(response.data))
			.catch((err) => {
				console.error('ops! ocorreu um erro' + err);
			});
	}, []);

	return (
		<>
			<Box className="box-secondary">
				<p className='box-secondary-title'>Explorar</p>
				<div className='box-secondary-align'>
					<p className='box-secondary-text'>Foto do dia {user?.date}</p>
					<ButtonPrimary />
				</div>
			</Box>
		</>
	);
}

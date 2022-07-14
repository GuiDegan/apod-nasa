import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import api from '../../services/api';

export default function SimpleAccordion() {
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
			<div className="acord-image-align">
				<Accordion className="acord-image">
					<AccordionSummary
						expandIcon={<ExpandLessIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						className="acord-image-summary"
					>
					</AccordionSummary>
					<AccordionDetails>
						<h4>Imagem: {user?.title}</h4>
						<h4>Créditos: {user?.copyright}</h4>
						<Typography>
							{user?.explanation}
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>
		</>
	);
}

import React from 'react';
import { Box } from '@mui/system';

export default function BoxAbout() {
	return (
		<>
			<Box className='box-content'>
				<div>
					<div className='box-content-align'>
						<h4>Sobre o projeto oficial</h4>
						<p>O Astronomy Picture of the Day ou <a href="https://apod.nasa.gov/" target="_blank" rel="noreferrer">APOD</a>, em português: Imagem Astronômica do Dia, é um website mantido pela NASA e pela Universidade Tecnológica de Michigan. De acordo com o website, <i><q>cada dia uma imagem ou <a href="https://www.instagram.com/astronomypicturesdaily/" target="_blank" rel="noreferrer">foto</a> diferente do universo é mostrada, com uma curta explicação escrita por um astrônomo profissional</q></i>. A fotografia mostrada não foi necessariamente tomada no mesmo dia em que foi mostrada, e por vezes fotos já mostradas anteriormente são apresentadas novamente.</p>
					</div>
				</div>
			</Box>
		</>
	);
}

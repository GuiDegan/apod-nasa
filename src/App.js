import React, { useEffect, useState } from 'react';
import './styles/styles.scss'
import Grid from '@mui/material/Grid';
import BackgroundPrimary from './components/BackgroundPrimary/BackgroundPrimary';
import Logo from '../src/assets/logo.png';
import BackgroundSecondary from './components/BackgroundSecondary/BackgroundSecondary';
import SimpleAccordion from './components/Accordion/Accordion';
import BoxFooter from './components/BoxFooter/BoxFooter';
import BoxAbout from './components/BoxAbout/BoxAbout';
import api from './services/api';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    api
      .get('apod?api_key=aUuMz3Faxp0PGzYZUl9GZcloyciPMvPBftyfP3cN')
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  return (
    <>
      <Grid container columns={12}>
        <Grid item xs={12} md={6}>
          <BackgroundPrimary logo="APOD" />
        </Grid>
        <img className='bg-logo' src={Logo} />
        <Grid item xs={12} md={6}>
          <BackgroundSecondary />
        </Grid>
        <Grid item xs={12} md={12} style={{ position: 'relative' }}>
          <img id='bg-image' src={data?.hdurl} />
          <SimpleAccordion />
        </Grid>
        <Grid item xs={12} md={12}>
          <BoxAbout />
        </Grid>
        <Grid item xs={12} md={12}>
          <BoxFooter />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

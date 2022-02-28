import React from 'react'

export default function Banners() {
  return (
    <div className='Banners'>
        <div className='LeftBanner'>
          <h1 className='header'>Koronavirus</h1>
          <div className='Koronakuva'>
          <img src="https://hs.mediadelivery.fi/img/468/fd9e9d77278dce9af68d996d0d1ca205.jpg" alt="Koronakuva" width="1000" height="600"/>
          </div>
          <h3 className='header1'>HS seuraa</h3>
          <h2 className='header12'>Päivittyvä seuranta | STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan</h2>
          <h4 className='header13'>Koronaviruksen vaikutuket suomessa</h4>
          <div className='koronadata'>
            <div className='data1'>Tartunnat <br></br>yhteensä</div>
            <div className='data2'>Tuoreimmat <br></br>14 päivää</div>
            <div className='data3'>Edeltävät <br></br>14 yhteensä</div>
          </div>
          <div className='koronadata2'>
            <div className='data4'>7776</div>
            <div className='data5'>293</div>
            <div className='data6'>132</div>
          </div>
        </div>

        <div className='RightBanner'>
          <h1 className='header2'>Luetuimmat</h1>
          <table>
            <tr>
              <th className='numbers'>1</th>
              <th className='text'>Oli sumuinen aamuyö lokakuussa. Rykimäajan huipulla metsäpeurahirvaat olivat kiimassa ja komeimmillaan. Niiden kaulat olivat syksyn mittaan pullistuneet paksuiksi, suurimmat sarvikruunut olivat taulutelevision kokoisia.</th>
            </tr>
            <tr>
              <th className='numbers'>2</th>
              <th className='text'>Oli sumuinen aamuyö lokakuussa. Rykimäajan huipulla metsäpeurahirvaat olivat kiimassa ja komeimmillaan. Niiden kaulat olivat syksyn mittaan pullistuneet paksuiksi, suurimmat sarvikruunut olivat taulutelevision kokoisia.</th>
            </tr>
            <tr>
              <th className='numbers'>3</th>
              <th className='text'>Oli sumuinen aamuyö lokakuussa. Rykimäajan huipulla metsäpeurahirvaat olivat kiimassa ja komeimmillaan. Niiden kaulat olivat syksyn mittaan pullistuneet paksuiksi, suurimmat sarvikruunut olivat taulutelevision kokoisia.</th>
            </tr>
            <tr>
              <th className='numbers'>4</th>
              <th className='text'>Oli sumuinen aamuyö lokakuussa. Rykimäajan huipulla metsäpeurahirvaat olivat kiimassa ja komeimmillaan. Niiden kaulat olivat syksyn mittaan pullistuneet paksuiksi, suurimmat sarvikruunut olivat taulutelevision kokoisia.</th>
            </tr>
            <tr>
              <th className='numbers'>5</th>
              <th className='text'>Oli sumuinen aamuyö lokakuussa. Rykimäajan huipulla metsäpeurahirvaat olivat kiimassa ja komeimmillaan. Niiden kaulat olivat syksyn mittaan pullistuneet paksuiksi, suurimmat sarvikruunut olivat taulutelevision kokoisia.</th>
            </tr>
            <tr>
              <th className='numbers'>6</th>
              <th className='text'>Oli sumuinen aamuyö lokakuussa. Rykimäajan huipulla metsäpeurahirvaat olivat kiimassa ja komeimmillaan. Niiden kaulat olivat syksyn mittaan pullistuneet paksuiksi, suurimmat sarvikruunut olivat taulutelevision kokoisia.</th>
            </tr>
          </table>
        </div>
    </div>
  )
}
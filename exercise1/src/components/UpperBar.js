import React from 'react'

export default function UpperBar() {
  return (
    <div className = "UpperBar">
            <img src="https://www.hs.fi/css/icons/hs-logo-neg_6dacca07.svg" alt="HSlogoS"/>
            <div className ="menuElement"> Etusivu</div>
            <div className ="menuElement"> Uutiset</div>
            <div className ="menuElement"> Lehdet</div>
            <div className ="menuElement"> Asiakaspalvelu</div>
            <div className='Tilaa'>Tilaa</div>
            <div className='menuElement'>Kirjaudu</div>
            <div className='Valikko'>
            <div>Valikko</div>
            <i class="fas fa-bars"></i>
            </div>
    </div>
  )
}
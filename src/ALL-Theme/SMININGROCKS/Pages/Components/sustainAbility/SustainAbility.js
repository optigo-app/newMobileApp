import React from 'react'
import './sustain.css'
import { storImagePath } from '../../../Utils/globalFunctions/GlobalFunction'

const SustainAbility = () => {
  return (
    <>
      <div className='sustaionMain'>
        <div style={{ textAlign: 'center' }}>
          <p className='sustaionMainTitle' style={{ fontSize: '40px', fontFamily: 'FreightDisp Pro Medium', color: '#7d7f85' }}>Committed on Sustainability</p>
          <p style={{ fontSize: '14px', fontFamily: "TT Commons, sans-serif", color: '#7d7f85' }}>For our planet, our home, and our future</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: '#fafafa', padding: '0px', textAlign: 'center' }} className='sustainBoxImageBoxMain'>
            <img src={`${storImagePath()}/images/sustainability/sustainability1.jpg`} alt={''} className='sustaionImage1' />
            <p style={{ marginTop: "7px", color: '#7d7f85', fontSize: '13px', fontFamily: "TT Commons, sans-serif", fontWeight: '600' }}>1% for the Planet</p>
          </div>
          <div style={{ background: '#fafafa', padding: '0px', textAlign: 'center' }} className='sustainBoxImageBoxMain'>
            <img src={`${storImagePath()}/images/sustainability/sustainability2.jpg`} alt={''} className='sustaionImage2' />
            <p style={{ marginTop: "7px", color: '#7d7f85', fontSize: '13px', fontFamily: "TT Commons, sans-serif", fontWeight: '600' }}> Certified Butterfly Mark on ESG+</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SustainAbility
import React from 'react'

const Testimonial = ({ quote, quoter }) => (
  <div className='testinomal-section-part'>
    <q className='testinomal-section-part--quote'>
      { quote }
    </q>
    <div className="line-orange line-orange-testimonial" />
    <p className='testinomal-section-part--quoter'>
      { quoter }
    </p>
  </div>

)

export default Testimonial
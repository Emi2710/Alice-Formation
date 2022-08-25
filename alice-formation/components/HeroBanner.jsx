import React from 'react'

const HeroBanner = ({ heroBanner, styles }) => {
  
  
  
  return (
    <div className='formation__banner'>
        <div>
            <p className='formation_banner_subtitle'>Les formations</p>
            <h1 className='bold-title'>{heroBanner.title}</h1>
        </div>


        <style jsx>
          {`

            .formation__banner {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              margin-top: 4rem;
            }

            .formation_banner_subtitle{
              font-weight: 600;
              opacity: 80%;
            }


          `}</style>
    </div>
  )
}

export default HeroBanner
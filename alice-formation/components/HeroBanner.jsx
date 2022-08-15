import React from 'react'

const HeroBanner = ({ heroBanner, styles }) => {
  
  
  
  return (
    <div className='formation__banner'>
        <div>
            <p className='formation_banner_subtitle'>Les formations</p>
            <h1 className='bold-title'>{heroBanner.title}</h1>
            <div className='display-flex'>
                {['Business en ligne', 'Réseaux sociaux', 'Productivité', 'Remote', 'Manuel'].map((item, index) => (
                <div  
                  key={index}
                  onClick={() => handleFilter(item)}
                  className='tag'
                >
                  {item}
                </div>
              ))}
              </div>
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
              font-weight: 500;
              opacity: 80%;
            }

            .display-flex {
              display: flex;
              justify-content: space-between;
              margin: 1.5rem 0 3.5rem 0;

              
            }

            
            .tag {
            margin-right: 1rem ;
            padding: 0.3rem 0 0.3rem 0;
            background: var(--tag-color);
            color: var(--white);
            font-size: 14px;
            border-radius: 12px;
            min-width: 120px;
          
            }


          `}</style>
    </div>
  )
}

export default HeroBanner
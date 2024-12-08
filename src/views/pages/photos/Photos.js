import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
    CCarousel,
  CCarouselCaption,
  CCarouselItem,
} from '@coreui/react'
import houseboatImg from 'src/assets/images/houseBoat.jpg'
import anandhamLogo from 'src/assets/images/ResortLogo2.jpg'
import exterior2 from 'src/assets/images/exterior2.jpg'
import exterior from 'src/assets/images/exterior.jpg'
import mainroom from 'src/assets/images/mainroom.jpg'
import livingarea from 'src/assets/images/livingarea.jpg'
import stair from 'src/assets/images/stair.jpg'
import dining from 'src/assets/images/dining.jpg'
import bedroom1 from 'src/assets/images/bedroom.jpg'
import bedroom1_1 from 'src/assets/images/bedroom2.jpg'
import bedroom2 from 'src/assets/images/bedroom2-3.jpg'
import bedroom2_1 from 'src/assets/images/bedroom2-4.jpg'
import restroom from 'src/assets/images/restroom.jpg'
import restroom2 from 'src/assets/images/restroom2.jpg'
import kitchen from 'src/assets/images/kitchen.jpg'

 
const items = [
    {
      src: exterior2,
      altText: 'Exterior',
      caption: 'Exterior'
    },
    {
      src: exterior,
      altText: 'Exterior',
      caption: 'Exterior'
    },
    {
      src: mainroom,
      altText: 'mainroom',
      caption: 'Mainroom'
    },
    {
        src: livingarea,
        altText: 'Living area',
        caption: 'Living area'
      },
      {
        src: stair,
        altText: 'Living area',
        caption: 'Living area'
      },
      {
        src: dining,
        altText: 'Dining area',
        caption: 'Dining area'
      },
      {
        src: bedroom1,
        altText: 'Bedroom one',
        caption: 'Bedroom one'
      },
      {
        src: bedroom1_1,
        altText: 'Bedroom one',
        caption: 'Bedroom one'
      },
      {
        src: bedroom2,
        altText: 'Bedroom two',
        caption: 'Bedroom two'
      },
      {
        src: bedroom2_1,
        altText: 'Bedroom two',
        caption: 'Bedroom two'
      },
      {
        src: restroom,
        altText: 'Restroom one',
        caption: 'Restroom one'
      },
      {
        src: restroom2,
        altText: 'Restroom two',
        caption: 'Restroom two'
      }
  ];
  

const Photos=()=>{
    return (
 
        
    <CCard className="mb-4">
    <CCardBody>
 
      <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
         
          <CCardBody>
            
            
            <CCarousel controls  animate="true"  >
                {items.map((item, index) => (
                    
                    <CCarouselItem key={index}>
                        <p className="d-flex  text-medium-emphasis medium justify-content-center"><h5>{item.caption}</h5></p>
                        <img style={{ maxHeight: '500px', objectFit: 'contain' }} className="d-block w-100" src={item.src} alt={item.altText} />
                        
                    </CCarouselItem>
                    ))}
              </CCarousel>
         
          </CCardBody>
        </CCard>
      </CCol>
      </CRow>
 

    </CCardBody>
    </CCard>
    )

}


export default Photos

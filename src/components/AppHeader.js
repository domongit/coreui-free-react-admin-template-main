import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CAvatar,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CImage
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'
import houseBoat from 'src/assets/images/houseBoat.jpg'
import anandhamLogo from 'src/assets//images/banner.jpg'
import WhatsAppButton from '../views/widgets/WhatsAppButton'
import exterior2 from 'src/assets/images/ResortLogo3.jpg'
const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const phoneNumber = '+17039090205';
  return (
    <CHeader >
    {/* Your logo banner */}
    <div className="header-logo"  >
       <img  style={{ width: '100%',height:'60%' }} src={anandhamLogo} alt="Logo" />
       
    </div>
      <CContainer fluid>
        
            <CHeaderNav className="d-md-flex me-auto" >
          <CNavItem >
            <CNavLink to="/dashboard" component={NavLink}>
              
            </CNavLink>
          </CNavItem>
          {/* <CNavItem>
            <CNavLink  to ='/pages/welcome' component={NavLink} >Home</CNavLink>
          </CNavItem> */}
           <CNavItem>
           <CNavLink  to ='/pages/photos' component={NavLink} >Home</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink  to ='/pages/Info' component={NavLink} >About Us </CNavLink>
          </CNavItem>
          
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              {/* <CIcon icon={cilBell} size="lg" /> */}
              <WhatsAppButton phoneNumber={phoneNumber} />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="mailto:dvpjames@gmail.com">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      
    </CHeader>
  )
}

export default AppHeader

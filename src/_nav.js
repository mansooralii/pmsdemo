import React from 'react'
import CIcon from '@coreui/icons-react'
// import { LayoutTextSidebarReverse,FileFontFill,FileTextFill,ChatRightDotsFill,ChatRightTextFill,CardHeading,JournalText,ListTask,CalendarDay } from 'react-bootstrap-icons'

import {
  cilPuzzle,
  cilSpeedometer,
  cilUserFollow,
  cilCommentSquare,
  cilSpreadsheet,
  cilHandshake,
  cilUser,
  cilLibrary,
  cilHamburgerMenu,
  cilListRich,
  cilList,

} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Vendor',
    to: '/vendor',
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Products',
    to: '/Product',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Customers',
    to: '/Costomes',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Purchases',
    to: '/Purchases',
    icon: <CIcon icon={cilCommentSquare} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Support Enquiry',
    to: '/supportenq',
    icon: <CIcon icon={cilHandshake} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Settings',
    to: '/settings',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Pricing package',
        to: '/settings/Pricingpackages/Pricingpackages',
        icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
        // icon: <LayoutTextSidebarReverse className="me-3" customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Category ',
        to: '/settings/course',
        icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,
        // icon: <CardHeading className="me-3" customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Sub Category',
        to: '/settings/subject',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
        // icon: <FileTextFill className="me-3" customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Enquiry type',
        to: '/settings/topic',
        icon: <CIcon icon={cilHamburgerMenu} customClassName="nav-icon" />,

        // icon: <FileFontFill className="me-3" customClassName="nav-icon" />,
      },
     
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: 'Miscellaneous',

  //   to: '/miscellaneous',
    // icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    // items: [
    //   {
    //     component: CNavItem,
    //     name: 'Task',
    //     to: '/miscellaneous/task',
        // icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
        // icon: <LayoutTextSidebarReverse className="me-3" customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Task Type',
      //   to: '/miscellaneous/tasktype',
        // icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
        // icon: <LayoutTextSidebarReverse className="me-3" customClassName="nav-icon" />,
    //   },

    // ]

  // }
]

export default _nav

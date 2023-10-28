import React from 'react'
import ControllerFooter from '../../ControllerFooter/ControllerFooter'
import PrivateMessages from './PrivateMessages/PrivateMessages'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/typedHooks'
import { UI_VIEW_CHANGE, currentUIState } from '@/redux/slices/dashboardUI_controller/dashboardUI_controller'
import turbo_icon from '../../../../../public/controller/shopping.svg'
import shop from '../../../../../public/controller/shop.svg'
import friends_switch from '../../../../../public/controller/friends_switch.svg'
import SingleOption from '../../PanelOptions/SingleOption'
import { useMediaQuery } from 'react-responsive'
import PanelOptions from '../../PanelOptions/PanelOptions'
import PanelSection from '../PanelSection'
const NewUserPanel = () => {
  const {type, status} = useAppSelector(currentUIState).controller_panel
  const dispatch = useAppDispatch()
  const currentFriendPanelStatus:boolean = useAppSelector(currentUIState).friendList_panel
  const widthQuery = useMediaQuery({ query: '(max-width: 768px)' })

  const handleFriendListDisplay = () => {
    if(widthQuery === true){
      dispatch(UI_VIEW_CHANGE({UI:"controller_panel", status:false}))
    }
    dispatch(UI_VIEW_CHANGE({UI:"friendList_panel", status:!currentFriendPanelStatus}))
  }
  return (
    <PanelSection status={type ==="user" && status ? true : false}>
      <PanelOptions>
        <SingleOption icon={turbo_icon} text='Turbo'/>
        <SingleOption icon={shop} text='Marketplace'/>
        <SingleOption icon={friends_switch} text='Friends' onClickCallback={handleFriendListDisplay}/>
        <SingleOption icon={friends_switch} text='Mailbox'modal={true} modalType='mailBoxModal'/>
        <PrivateMessages/>
      </PanelOptions>
      <ControllerFooter/>      
    </PanelSection>
  )
}

export default NewUserPanel

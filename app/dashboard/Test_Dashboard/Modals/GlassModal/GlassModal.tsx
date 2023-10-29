import Modal from 'react-modal'
import React from 'react'
import ModalGlassContainer from '../Components/ModalGlassContainer'
import ModalHeader from '../Components/ModalHeader'

interface Props {
    children:JSX.Element[],
    header_title:string,
    header_subtitle:string,
    modalIsOpen:boolean,
    setModal:(new_status: boolean) => void
}

const GlassModal = ({children, header_title, header_subtitle, modalIsOpen, setModal}:Props) => {
    const childrenWIthHeder = [
    <ModalHeader 
        top_title={header_title}
        subtitle={header_subtitle}
        modalIsOpen={modalIsOpen} 
        setModal={setModal}
      />,
      ...children
    ]
  return (
    <Modal        
        ariaHideApp={false}
        isOpen={modalIsOpen}
        contentLabel="User modal"
        style={{content:{background:"transparent"}, overlay:{background:"#0004", zIndex:"50"}}}
        className={"flex flex-col backdrop-blur-lg backdrop-opacity-100 h-full justify-center items-center"}>
        <ModalGlassContainer>
            {childrenWIthHeder}
        </ModalGlassContainer>
    </Modal>
  )
}

export default GlassModal

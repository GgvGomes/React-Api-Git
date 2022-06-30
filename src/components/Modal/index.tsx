import './style.css'
import { Modal as ModalComponent } from 'antd'
import { UseModalContext } from './modal.context'

export const Modal = () => {
    // const { modalState: {message, visible}, closeModal } = UseModalContext()

    return (
        <ModalComponent 
            // onCancel={closeModal} 
            // onOk={closeModal} 
            // visible={visible}
        >
            {/* <p>{message}</p> */}
        </ModalComponent>
    )
}
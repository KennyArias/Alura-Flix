import { useState } from "react"

function useModalForm () {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return{ isModalOpen, openModal, closeModal }
}

export default useModalForm;
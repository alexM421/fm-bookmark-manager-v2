import ModalWrapper from "./ModalWrapper"

type BaseModalProps = {
    modalDisplay: boolean
    setModalDisplay: (modalDisplay: boolean) => void
    onClick: () => void
}

/*Archive Modal*/
export function ArchiveModal({ modalDisplay, setModalDisplay, onClick }: BaseModalProps) {
    return (
        <ModalWrapper
            modalDisplay={modalDisplay}
            setModalDisplay={setModalDisplay}
            title="Archive Bookmark"
            description="Are you sure you want to archive this bookmark?"
            buttonText="Archive"
            variant="small"
            onClick={onClick}
        />
    )
}

/*UnArchive Modal*/
export function UnArchiveModal({ modalDisplay, setModalDisplay, onClick }: BaseModalProps) {
    return (
        <ModalWrapper
            modalDisplay={modalDisplay}
            setModalDisplay={setModalDisplay}
            title="Unarchive Bookmark"
            description="Move this bookmark back to your active list?"
            buttonText="Unarchive"
            variant="small"
            onClick={onClick}
        />
    )
}

/*Delete Modal*/
export function DeleteModal({ modalDisplay, setModalDisplay, onClick }: BaseModalProps) {
    return (
        <ModalWrapper
            modalDisplay={modalDisplay}
            setModalDisplay={setModalDisplay}
            title="Delete Bookmark"
            description="Are you sure you want to delete this bookmark?"
            buttonText="Delete permanently"
            variant="small"
            onClick={onClick}
        />
    )
}

/*Edit Modal*/
export function EditModal({ 
    modalDisplay, 
    setModalDisplay, 
    onClick, 
    initialValues 
}: BaseModalProps & { 
    initialValues: { title: string, description: string, url: string, tags: string } 
}) {
    return (
        <ModalWrapper
            modalDisplay={modalDisplay}
            setModalDisplay={setModalDisplay}
            title="Edit Bookmark"
            description="Update your saved link details — change the title, description, URL, or tags anytime."
            buttonText="Edit"
            onClick={onClick}
            initialValues={initialValues}
        />
    )
}

/*Add Modal*/
export function AddModal({ modalDisplay, setModalDisplay, onClick }: BaseModalProps) {
    return (
        <ModalWrapper
            modalDisplay={modalDisplay}
            setModalDisplay={setModalDisplay}
            title="Add Bookmark"
            description="Save a link with details to keep your collection organized. We extract the favicon automatically from the URL."
            buttonText="Add"
            onClick={onClick}
        />
    )
}

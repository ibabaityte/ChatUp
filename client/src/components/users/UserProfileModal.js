// style imports
import Modal from '@mui/material/Modal';

// component imports
import UserProfileInfo from "./UserProfileInfo";
import UserProfileEdit from "./UserProfileEdit";

const UserProfileModal = (props) => {

    const {
        userInfo,
        modalOpen,
        setModalOpen
    } = props;

    return (
        <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {/*need a div because otherwise modal cries about ref*/}
            <div>
                <UserProfileInfo
                    userInfo={userInfo}
                />
            </div>

            {/*<div>*/}
            {/*    <UserProfileEdit*/}
            {/*        userInfo={userInfo}*/}
            {/*    />*/}
            {/*</div>*/}
        </Modal>
    );
}

export default UserProfileModal;

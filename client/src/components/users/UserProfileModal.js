import {useState} from "react";

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

    console.log(userInfo);

    const [editInfo, setEditInfo] = useState(false);

    return (
        <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {/*need a div because otherwise modal cries about ref*/}
            <div>
                {
                    editInfo ?
                        <UserProfileEdit
                            userInfo={userInfo}
                            setEditInfo={setEditInfo}
                        />
                        :
                        <UserProfileInfo
                            userInfo={userInfo}
                            setEditInfo={setEditInfo}
                            setModalOpen={setModalOpen}
                        />
                }
            </div>
        </Modal>
    );
}

export default UserProfileModal;

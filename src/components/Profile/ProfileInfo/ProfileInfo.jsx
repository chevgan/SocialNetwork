import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpg";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.cardProfile}>
            <div className={s.avatar}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt=""/>
            </div>
            <div className={s.nameProfile}>{props.profile.fullName}</div>

            <div className={s.id}>
                <div className={s.textId}>ID:</div>
                <div className={s.dataId}>{props.profile.userId}</div>
            </div>

            <div className={s.aboutMe}>
                <div>aboutMe</div>
                <div className={s.descrProfile}>{props.profile.aboutMe != null ? props.profile.aboutMe : 'Информации нет...'}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;
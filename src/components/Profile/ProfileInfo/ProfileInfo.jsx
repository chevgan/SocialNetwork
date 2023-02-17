import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.cardProfile}>
            <div className={s.avatar}>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <div className={s.nameProfile}>{props.profile.fullName}</div>

            <div className={s.id}>
                <div className={s.textId}>ID:</div>
                <div className={s.dataId}>{props.profile.userId}</div>
            </div>

            <div className={s.aboutMe}>
                <div>aboutMe</div>
                <div className={s.descrProfile}>{props.profile.aboutMe}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;
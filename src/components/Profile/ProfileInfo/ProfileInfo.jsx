import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.cardProfile}>
            <div className={s.avatar}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt=""/>
                <div className={s.id}>
                    <h4 className={s.nameProfile}>{props.profile.fullName}</h4>
                    <div className={s.idd}>
                        <div className={s.textId}>ID:</div>
                        <div className={s.dataId}>{props.profile.userId}</div>
                    </div>
                </div>
            </div>

            <div className={s.aboutMe}>
                <h4>Profile Intro</h4>
                <div
                    className={s.descrProfile}>{props.profile.aboutMe != null ? props.profile.aboutMe : 'Информации нет...'}</div>
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}

export default ProfileInfo;
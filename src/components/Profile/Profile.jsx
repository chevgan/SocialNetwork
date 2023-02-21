import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css'

const Profile = (props) => {

    return (
        <div>
            <div className={s.wrapperProfile}>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>

                <div className={s.contentProfile}>
                    <MyPostsContainer />
                </div>

                <div className={s.photoProfile}>

                </div>
            </div>

        </div>
    )
}

export default Profile;
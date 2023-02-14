import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import BannerProfile from "./BannerProfile/BannerProfile";
import s from './Profile.module.css'

const Profile = (props) => {
    return (
        <div>
            <BannerProfile />
            <div className={s.wrapperProfile}>
                <ProfileInfo profile={props.profile} />

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
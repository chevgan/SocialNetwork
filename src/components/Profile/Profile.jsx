import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import BannerProfile from "./BannerProfile/BannerProfile";
import MyPostsContainer from "./MyPost/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <BannerProfile />
            <div className={s.wrapperProfile}>
                <ProfileInfo />

                <div className={s.contentProfile}>
                    <MyPostsContainer />
                </div>

                <div className={s.photoProfile}>

                </div>
            </div>

        </div>
    );
}

export default Profile;
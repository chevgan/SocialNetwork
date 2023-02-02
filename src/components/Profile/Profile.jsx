import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import BannerProfile from "./BannerProfile/BannerProfile";

const Profile = (props) => {

    return (
        <div>
            <BannerProfile />
            <div className={s.wrapperProfile}>
                <ProfileInfo />

                <div className={s.contentProfile}>
                    <MyPosts posts={props.posts} addPost={props.addPost}/>
                </div>

                <div className={s.photoProfile}>

                </div>
            </div>

        </div>
    );
}

export default Profile;
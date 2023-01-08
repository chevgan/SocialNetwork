import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
            <div className={s.cardProfile}>
                <div className={s.avatar}>
                    <img src="https://i.pinimg.com/236x/54/f7/37/54f737502df8f8f7333ac3a073a392c3.jpg" alt=""/>
                </div>
                <div className={s.nameProfile}>Danil Chevgan</div>
                <div className={s.nameId}>@daniljzzi</div>
                <div className={s.descrProfile}>I am a beginner Frontend Developer <br/>  Currently I am actively learning JavaScript & React.</div>
            </div>
    );
}

export default ProfileInfo;
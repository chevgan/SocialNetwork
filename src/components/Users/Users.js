import React from "react";
import s from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'http://sun9-73.userapi.com/s/v1/if1/14elKBUrx5jA5rXYwwLgtHYZNuskD2xIMBpkyPUS_mnY4oArSA5x4ief1mHQCbSGMCoiJuto.jpg?size=200x200&quality=96&crop=0,0,960,960&ava=1',
                    followed: true,
                    fullName: 'Danil C',
                    status: 'I am learning JS',
                    location: {city: 'Almaty', country: 'Qazaqstan'}
                },
                {
                    id: 2,
                    photoUrl: 'https://i.pinimg.com/736x/1f/a7/ea/1fa7eace6c146e2a30bca2c4efefdd68.jpg',
                    followed: false,
                    fullName: 'Bogdan S',
                    status: 'I am learning HTML',
                    location: {city: 'Almaty', country: 'Qazaqstan'}
                },
                {
                    id: 3,
                    photoUrl: 'https://cdn.ren.tv/cache/960x540/media/img/a5/e7/a5e7b0666dcfb9a7698c62fde870ff57bba698ea.jpg',
                    followed: true,
                    fullName: 'Askar A',
                    status: 'I am a mid-level Front-end developer',
                    location: {city: 'Almaty', country: 'Qazaqstan'}
                },
                {
                    id: 4,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32BZy4Vq_FftwlUFXY4IefxDx1kdkhWJ02A&usqp=CAU',
                    followed: false,
                    fullName: 'Yaroslav С',
                    status: 'I am a junior data scientist',
                    location: {city: 'Russia', country: 'Orenburg'}
                },
            ]
        )
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                       <img src={u.photoUrl} alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Отписаться</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Подписаться</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;
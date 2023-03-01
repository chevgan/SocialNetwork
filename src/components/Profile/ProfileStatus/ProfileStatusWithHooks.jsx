import {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    // Используем useState для установки внутреннего состояния компонента
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    // Используем useEffect для обновления внутреннего состояния компонента при изменении props.status
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    // Функция для активации режима редактирования статуса
    const activateEditMode = () => {
        setEditMode(true);
    };

    // Функция для деактивации режима редактирования статуса
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status); // Вызываем функцию обновления статуса на сервере
    };

    // Функция для обновления внутреннего состояния статуса при изменении значения input поля
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            { !editMode &&
                // Отображаем статус в режиме просмотра
                <div>
                    <span onDoubleClick={ activateEditMode }> {props.status || "-------"}</span>
                </div>
            }
            { editMode &&
                // Отображаем поле для редактирования статуса
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode } value={status}/>
                </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;

import style from './massege.module.css'

export const Massege = (props) => {
    return(
        <div className={style.main}>
            <p className={style.name}>
                {props.name}
            </p>
            <p>{props.age}</p>
            <button onClick={() => props.handelAge()}>+</button>
            <button onClick={() => props.handelDelete(props.id)}>удалить</button>
        </div>
    )
}










































/* 
import style from './massege.module.css'

export const Massege = (props) => {
    return(
        <div className={style.main}>
            <p className={style.name}>
                {props.name}
            </p>
            <p>{props.age}</p>
            <button onClick={() => props.handelAge()}>+</button>
            <button onClick={() => props.handelDelete(props.id)}>удалить</button>
        </div>
    )
} */
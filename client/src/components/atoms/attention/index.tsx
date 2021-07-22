import './styles.scss'
interface AttentionProps{
    notification:string
}

export function Attention({ notification }: AttentionProps){
    console.log(notification)
    return(
        <div className="notification" aria-label="notification">

            {notification}
            

        </div>
    )
}
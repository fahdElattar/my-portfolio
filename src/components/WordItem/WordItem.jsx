import Image from "next/image"
import "./WordItem.css"

export const WordItem = ({avatarImg, avatarName, avatarLocation, avatarAccount, comment}) => {
    return (
        <div className="word-item">
            <div className="word-item-heading">
                <div className="left-word-heading">
                    <div className="word-icon">
                        <Image src={`/images/${avatarImg}.png`} alt="avatar" width={50} height={50} />
                    </div>
                    <div className="word-details">
                        <h3>{`${avatarName}`}</h3>
                        <div className="position">
                            <Image src={`/icons/position.svg`} alt="avatar" width={20} height={20}/>
                            <span>{`${avatarLocation}`}</span>
                        </div>
                    </div>
                </div>
                <a href={`${avatarAccount}`} className="right-word-heading">
                    <Image src={`/icons/twitter.svg`} alt="avatar" width={20} height={20}/>
                </a>
            </div>
            <div className="word-item-body">
                <p className="word-description">{`${comment}`}</p>
            </div>
        </div>
    )
}

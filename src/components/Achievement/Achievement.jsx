import './Achievement.css';

export const Achievement = ({score, title}) => {
    return (
        <div className="achievement">
            <h1 className="achievement-score">{score}+</h1>
            <span className="achievement-title text-md">{title}</span>
        </div>
    )
}

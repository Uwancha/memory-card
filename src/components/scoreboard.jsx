function ScoreBoard({score}) {
    
    return (
        <div className="scoreBoard">
            <div>
                <h3>Get points by clicking on an image but don't click on any more than once!</h3>
            </div>
            <div>
                <h3>Score: {score}</h3>
            </div>
        </div>
    )
}

export default ScoreBoard
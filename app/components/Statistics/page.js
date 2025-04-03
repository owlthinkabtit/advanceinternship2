export default function Statistics() {
  return (
    <div className="statistics__wrapper">
      <div className="statistics__content--header">
        <div className="statistics__heading">Enhance your knowledge</div>
        <div className="statistics__heading">Achieve greater success</div>
        <div className="statistics__heading">Improve your health</div>
        <div className="statistics__heading">Develop better parenting skills</div>
        <div className="statistics__heading">Increase happiness</div>
        <div className="statistics__heading">Be the best version of yourself!</div>
      </div>
      <div className="statistics__content--details">
        <div className="statistics__data">
          <div className="statistics__data--number">93%</div>
          <div className="statistics__data--title">
            of Summarist members
            <b>significantly increase</b>
            reading frequency.
          </div>
        </div>
        <div className="statistics__data">
          <div className="statistics__data--number">96%</div>
          <div className="statistics__data--title">
            of Summarist members
            <b>establish better</b>
            habits.
          </div>
        </div>
        <div className="statistics__data">
          <div className="statistics__data--number">90%</div>
          <div className="statistics__data--title">
            have made
            <b>significant positive</b>
            change in their lives.
          </div>
        </div>
      </div>
    </div>
  )
}
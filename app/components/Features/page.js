import { IoDocumentTextSharp } from "react-icons/io5";
import { MdLightbulb } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";

export default function Features() {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <div className="section__title">Understand books in few minutes</div>
          <div className="features__wrapper">
            <div className="features">
              <div className="features__icon">
                <IoDocumentTextSharp stroke="currentColor" fill="currentColor" strokeWidth={0} height="1em" width="1em" />
              </div>
              <div className="features__title">Read or listen</div>
              <div className="features_-sub--title">Save time by getting the core ideas from the best books.</div>
            </div>
            <div className="features">
              <div className="features__icon">
                <MdLightbulb stroke="currentColor" fill="currentColor" strokeWidth={0} height="1em" width="1em" />
              </div>
              <div className="features__title">Find your next read</div>
              <div className="features_-sub--title">Explore book lists and personalized recommendations.</div>
            </div>
            <div className="features">
              <div className="features__icon">
                <FaMicrophone stroke="currentColor" fill="currentColor" strokeWidth={0} height="1em" width="1em" />
              </div>
              <div className="features__title">Briefcasts</div>
              <div className="features_-sub--title">Gain valuable insights from briefcasts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
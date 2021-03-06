import React from "react"
import bgImage from "../../assets/images/no_video_background.jpg"
import firstFrame from "../../assets/images/blog_loop_first_frame.jpg"
import video from "../../assets/video/blog_loop.mp4"

const HeroVideo = (title, subtitle) => (
  <div
    className="hero-video"
    style={{
      // backgroundColor: `tomato`,
      backgroundImage: "url(" + bgImage + ")",
    }}
  >
    <video
      className="hero-video__player"
      autoPlay
      muted
      loop=""
      poster={firstFrame}
    >
      <source className="video" src={video} type="video/mp4" />
    </video>
    <div className="hero-video__text">
      <h2 className="hero-video__quote">
        "In every walk with nature, one receives far more than he seeks."
      </h2>
      <h3 className="hero-video__quote-attribution">John Muir</h3>
    </div>
  </div>
)

export default HeroVideo

//import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = ({ movies }) => {
  if (!movies) return;
  const mainMovie = movies[1];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[40%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

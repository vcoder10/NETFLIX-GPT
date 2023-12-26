//import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = ({ movies }) => {
  //const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[1];
  const { original_title, overview, id } = mainMovie;
  // console.log("mai");
  // console.log(mainMovie);
  // console.log(id);
  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

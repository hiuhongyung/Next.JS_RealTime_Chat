import {Circle} from "better-react-spinkit";

function Loading() {
  return (
    <center style={{display:"grid", placeItems: "center", height: "100vh"}}>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/CUHK.svg/1200px-CUHK.svg.png"
          alt="cuhk"
          style={{marginBottom: 10}}
          height={200}
        />
        <Circle color="#fed049" size={60} />
      </div>
    </center>
  );
}

export default Loading;

import { Card } from "react-bootstrap";
import ReactAudioPlayer from 'react-audio-player';

export default ({post}) => {
  return (
    <Card style={{ marginTop:"20px", marginBottom:"20px", border:"none",backgroundColor:"#e9ebec",borderRadius:"10%",boxShadow:"2px 2px 20px 10px #896eff"}}>
      <div className="card-body-wrapper">
        <Card.Header style={{backgroundColor:"rgba(0,0,0,0)"}} className="flex-row">
          <div>
          <ReactAudioPlayer
            src={post.audio}
            controls
          />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-main-title">
            Нэр : {post.names}
          </Card.Title>
          <Card.Text>Хүйс : {post.gender}</Card.Text>
          <Card.Text>Нас : {post.age}</Card.Text>
          <Card.Text>Хэл : {post.lang}</Card.Text>
          <Card.Text>Туршлага : {post.Level}</Card.Text>
          <Card.Text> Оруулсан огно : {post.date}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};

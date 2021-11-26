import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Media,
  Image,
  Card,
} from "react-bootstrap";

import MyNavbar from "components/my-navbar";
import ListItem from "components/list-item";
import GridItem from "components/grid-item";
import { getAllPosts } from "lib/api";

export default function Home({posts}) {
  return (
    <>
      <div className="top_nav_fex">
    <MyNavbar />
</div>
   <ListItem />
    <Container>
      <div className="blog-detail-page">
        <div className={`page-wrapper`}>
          <Row className="mb-12">
            {
              posts.map((post) =>(
             <Col md="4">
              <GridItem post={post} />
             </Col>
              ))
            }
          </Row>
        </div>
      </div>
      <pre> {JSON.stringify(posts,null,2)}</pre>
      <footer className="page-footer">
        <div>
          <a href="#">Home</a>
          {" | "}
          <a href="#">сургалт</a>
          {" | "}
          <a href="#">фэйсбүүк</a>
        </div>
      </footer>
    </Container>
    </>
  );
}
export const getStaticProps = async () => {
  const posts=await getAllPosts();
  return{
    props:{
      posts,
    },
  };
};
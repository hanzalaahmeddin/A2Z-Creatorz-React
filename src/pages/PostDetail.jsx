import { useParams } from "react-router-dom";
import InnerPageBanner from "../components/InnerPageBanner";
import newsPosts from "../data/newsPosts";

function PostDetail() {
    const { id } = useParams();
    const post = newsPosts.find(p => p.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <InnerPageBanner
                title={post.title}
                subtitle="News & Events"
                imageSrc={post.thumbnail}
            />
            <section className="py-5">
                <div className="container">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <h3>Gallery</h3>
                    <div className="row">
                        {post.gallery.map((image, index) => (
                            <div key={index} className="col-md-4 mb-3">
                                <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PostDetail;
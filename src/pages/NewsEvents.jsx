import { Link } from "react-router-dom";
import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import newsPosts from "../data/newsPosts";

function NewsEvents() {
    usePageTitle('News & Events - A2Z Creatorz | Latest Updates');
    return (
        <div>
            <InnerPageBanner
                title="News & Events"
                subtitle="Stay updated with the latest news and events from A2Z Creatorz."
                imageSrc="/src/assets/images/news-right-image.png"
            />
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Latest News & Events</h2>
                    <div className="row">
                        {newsPosts.map(post => (
                            <div key={post.id} className="col-md-6 col-lg-4 mb-4">
                                <div className="card h-100">
                                    <img src={post.thumbnail} className="card-img-top" alt={post.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <Link to={`/news-events/${post.id}`} className="btn btn-primary">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NewsEvents;
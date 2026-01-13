import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";
import ToolsSection from "../components/ToolsSection";

function MobileApplication() {
    usePageTitle('Mobile Application Development - A2Z Creatorz | iOS & Android Apps');
    const tools = [
        { name: 'React Native', image: '/src/assets/images/react-native.png' },
        { name: 'Flutter', image: '/src/assets/images/flutter.png' },
        { name: 'Swift', image: '/src/assets/images/swift.png' },
        { name: 'Kotlin', image: '/src/assets/images/kotlin.png' },
        { name: 'Android Studio', image: '/src/assets/images/android-studio.png' },
        { name: 'Xcode', image: '/src/assets/images/xcode.png' }
    ];

    return (
        <div>
            <InnerPageBanner
                title="Mobile Application"
                subtitle="Develop cutting-edge mobile apps for iOS and Android platforms."
                imageSrc="/src/assets/images/mboile-app-right.webp"
            />
            <section className="inner-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className="img-fluid fade-in-delay-1" src="/src/assets/images/a2z-about-image-1.webp" alt="A2Z Creatorz Image" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="testimonials-subtitle fade-in-delay-2 mb-4">Who Are We</h2>
                            <p className="fade-in-delay-2">
                                Develop cutting-edge mobile applications for iOS and Android that provide seamless user experiences. Our team leverages the latest technologies and frameworks to build scalable, high-performance apps that meet your business needs and delight your users.
                            </p>
                        </div>
                    </div>
                    <ToolsSection tools={tools} />

                </div>
                <ContactReachUs />
            </section>

        </div>
    );
}

export default MobileApplication;
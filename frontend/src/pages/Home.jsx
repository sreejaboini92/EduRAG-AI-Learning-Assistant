import FeatureCard from "../components/FeatureCard/FeatureCard";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <h1>EduRAG</h1>

      <h2>Personalized AI Learning Assistant</h2>

      <p>
        Learn smarter with Retrieval-Augmented Generation (RAG).
      </p>

      <button>Get Started</button>

      <button>Learn More</button>

    <h3 className="features-heading">Features</h3>

      <div className="features">

  <FeatureCard
    icon="📄"
    title="Upload PDFs"
    description="Upload your study materials securely."
  />

  <FeatureCard
    icon="🤖"
    title="AI Chat"
    description="Ask questions from uploaded PDFs."
  />

  <FeatureCard
    icon="📝"
    title="Quiz Generator"
    description="Generate quizzes instantly."
  />

  <FeatureCard
    icon="📈"
    title="Progress Tracking"
    description="Track your learning progress."
  />

</div>
    </div>
  );
}

export default Home;
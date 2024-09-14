import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <section id="about" className="my-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>Write something about yourself here.</p>
        </section>
        <section id="projects" className="my-8">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Add project cards here */}
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Project Title</h3>
              <p>Description of the project.</p>
            </div>
          </div>
        </section>
        <section id="contact" className="my-8">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>How people can contact you.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

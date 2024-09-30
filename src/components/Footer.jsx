export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
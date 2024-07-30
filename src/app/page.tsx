import Header from './components/Header';
import RandomThemeGenerator from './components/RandomThemeGenerator';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <Header />
      <main className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center p-6 w-4/5 mt-10">
          <h2 className="text-4xl font-bold text-center mb-6">Welcome to Theme Tinker</h2>
          <p className="text-lg text-center text-gray-600 mb-4">The ultimate tool for generating and customizing beautiful color themes for your projects. Click the button below to generate a random theme!</p>
          <RandomThemeGenerator />
        </div>
      </main>
    </div>
  );
}
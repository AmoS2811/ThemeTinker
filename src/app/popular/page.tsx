import Header from '../components/Header';

const PopularThemes = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <Header />
      <main className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center p-6 w-full max-w-6xl mt-10">
          <h2 className="text-4xl font-bold text-center mb-6">Popular Themes</h2>
          <p className="text-lg text-center text-gray-600 mb-8">Here you can find a collection of the most popular themes.</p>
          {
            // TODO I need to find an api or library that offers something like this
          }
        </div>
      </main>
    </div>
  );
};

export default PopularThemes;
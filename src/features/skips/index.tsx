import { useState } from 'react';
import { useGetSkips } from './api/hooks';
import type { Skip } from './api/skipsService';
import SkipCard from './components/SkipCard';
import Loading from '../ui/components/Loading';
import Steps from './components/Steps';
import Footer from './components/Footer';

function Skips() {
  const { skips, loading, error } = useGetSkips();
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Steps />
      <div className="min-h-screen">
        <div className="flex justify-center w-full">
          <div className="container max-w-7xl px-4 py-12">
            <h2 className="text-3xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Available Skips
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Choose the perfect skip size for your waste management needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skips.map((skip: Skip) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  isSelected={selectedSkip?.id === skip.id}
                  onSelect={skip => setSelectedSkip(skip)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Skips;

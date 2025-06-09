import { useEffect, useState } from 'react';
import { skipsService } from './skipsService';
import type { Skip } from './skipsService';

export function useGetSkips() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const data = await skipsService.getAll();
        setSkips(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch skips');
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  return { skips, loading, error };
}

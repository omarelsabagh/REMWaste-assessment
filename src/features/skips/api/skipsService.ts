import api from '../../../services/axiosService';

export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  imageUrl?: string;
}

export const skipsService = {
  // Get all skips
  getAll: async (): Promise<Skip[]> => {
    const response = await api.get('/skips/by-location?postcode=NR32&area=Lowestoft');
    const skips = response.data;

    // Add image URLs to each skip
    return skips.map((skip: Skip) => ({
      ...skip,
      imageUrl: `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/${skip.size}-yarder-skip.jpg`,
    }));
  },
};

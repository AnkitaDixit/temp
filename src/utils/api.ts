interface Input {
    input: string;
}
export const getLocalitySuggestions = async (inputData: Input): Promise<Input> => {
    try {
      const response = await fetch('http://localhost:3001/searchLocality', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error creating user: ${error}`);
    }
  };

  export const getLodgingSuggestions = async (inputData: Input): Promise<Input> => {
    try {
      const response = await fetch('http://localhost:3001/searchLodging', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error creating user: ${error}`);
    }
  };

  export const getDetails = async (params: any): Promise<Input> => {
    try {
      const response = await fetch('http://localhost:3001/placeDetails'+  params);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error creating user: ${error}`);
    }
  };
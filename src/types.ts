 type Place = {
    description: string;
    place_id: string;
    structured_formatting: {
      main_text: string,
      secondary_text: string
    }
    terms: object[]
  };
  
  type Lodge = {
    description: string;
    place_id: string;
    structured_formatting: {
      main_text: string,
      secondary_text: string
    }
    terms: object[]
  };

  type Detail = {
    name: string;
    formatted_address: string;
    formatted_phone_number: string;
    international_phone_number: string;
    rating: string;
    url: string;
    website: string;
    photos: any;
    place_id: string;
    structured_formatting: {
      main_text: string,
      secondary_text: string
    }
    terms: object[]
  };

export type { Place, Lodge, Detail}
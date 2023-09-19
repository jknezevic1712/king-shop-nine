export type Product = {
	id: number;
	title: string;
	price: number;
	shortDescription: string;
	description: string;
	category: string;
	subcategory: string;
	image: string;
	dateAdded: string;
	rating: {
		rate: number;
		count: number;
	};
};

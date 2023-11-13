import { Billboard } from "../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (): Promise<Billboard | null> => {
	const res = await fetch(URL);

	let data = await res.json();

	if (data.length) {
		return data[0];
	} else {
		// Return null when there's no data.
		return null;
	}
};

export default getBillboard;

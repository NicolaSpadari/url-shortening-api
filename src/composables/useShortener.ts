export const useShortener = async(url: string): Promise<ShortenedLink> => {
    const BASE_URL = "https://api.shrtco.de/v2/shorten";

    try {
        const { data: { result } } = await axios.get(`${BASE_URL}?url=${url}`);
        return result;
    } catch (err: any) {
        return err;
    }
};

export default useShortener;

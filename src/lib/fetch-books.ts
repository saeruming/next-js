import { BookData } from "@/type";
export default async function fetchBooks(
  q?: string
): Promise<BookData[]> {
  let url = `https://onebite-books-server-main-silk.vercel.app/book`;
  //매개변수로 검색어가 전달이 되었다면,
  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
//

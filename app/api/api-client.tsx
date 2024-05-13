const baseURL = "http://localhost:5044/api";
export class APIServer {
  getAll = async (
    endpoint: string,
    searchText?: string,
    pageSize?: number,
    pageNumber?: number
  ) => {
    try {
      const queryParams = new URLSearchParams();

      // Add parameters if provided
      if (searchText) queryParams.append("searchText", searchText);
      if (pageSize) queryParams.append("pageSize", pageSize.toString());
      if (pageNumber) queryParams.append("pageNumber", pageNumber.toString());

      const res = await fetch(
        baseURL + "/" + endpoint + "/search?" + queryParams.toString(),
        {
          cache: "no-store",
        }
      );
      return await res.json();
    } catch (error) {
      console.error("error in fetching api", error);
    }
  };
}

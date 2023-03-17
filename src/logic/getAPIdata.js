const getAPIdata = async (link) => {

  try {
    const response = await fetch(link);
    const data = await response.json();
    if (data) {
      let {slip} = data;
      return slip;
    } else {
      throw new Error("No data found.");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data.");
  }
}

export default getAPIdata;


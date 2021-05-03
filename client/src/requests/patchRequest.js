import api from "../apis/api";

export default async (value) => {
  try {
    const data = await api.patch(`/api/v1/progress`, { click_count: value });
    return data;
  } catch (err) {
    console.log(err);
  }
};

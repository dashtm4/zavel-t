import axios from "axios";

import { api } from "./apis";

export const fetchListApi = () => axios.get(api.fetchList);

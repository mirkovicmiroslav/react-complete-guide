import axios from "axios";

const instance = axios.create({
	baseURL: "https://react-burger-builder-63ac9.firebaseio.com/"
});

export default instance;

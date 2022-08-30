import api from "../api";

const getToken = () => {
    const sessionStorageUser = sessionStorage.getItem('currentUser');

    if (sessionStorageUser) {
        const currentUser = JSON.parse(sessionStorageUser);
        const token = currentUser && currentUser.token;
        return token ? token : '';
    }

    return '';
};

const login = async (email, password) => {
    const loginData = {email: email, password: password};

    const response = await api.post('/auth/login', loginData);

    const token = response && response.data['accessToken'];
    const expiresIn = response && response.data['expiresIn'];

    if (token && expiresIn) {
        sessionStorage.setItem('currentUser', JSON.stringify({
            token: token,
            expiresIn: expiresIn
        }));
    }

    return response;
}

const authService = {
    getToken,
    login
}

export default authService;
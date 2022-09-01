import api from "../api";

const login = async (loginData) => {
    const response = await api.post('/auth/login', loginData);

    const token = response && response.data['accessToken'];
    const expiresIn = response && response.data['expiresIn'];

    if (token && expiresIn) {
        sessionStorage.setItem('currentUser', JSON.stringify({
            token: token,
            expiresIn: expiresIn
        }));
    }

    return response.data;
}

const logout = () => {
    sessionStorage.removeItem('currentUser');
};

const getToken = () => {
    const sessionStorageUser = sessionStorage.getItem('currentUser');

    if (sessionStorageUser) {
        const currentUser = JSON.parse(sessionStorageUser);
        const token = currentUser && currentUser.token;
        return token ? token : '';
    }

    return '';
};

const getRole = (token) => {
    if (token !== '' && token !== undefined) {
        let jwtData = token.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.role.authority;
    }
    return '';
};

const getCurrentUserEmail = () => {
    const token = getToken();
    if (token !== '' && token !== undefined) {
        let jwtData = token.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.sub;
    }
    return '';
};

const isAdmin = () => {
    return getRole(getToken()) === 'ROLE_ADMIN';
};

const isLoggedIn = () => {
    return getToken() !== '';
};

const authService = {
    login,
    logout,
    getToken,
    getRole,
    getCurrentUserEmail,
    isAdmin,
    isLoggedIn
}

export default authService;
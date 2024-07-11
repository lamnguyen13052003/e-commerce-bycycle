import {User} from "../types/user.type";
import {ProductType} from "../types/product.type";

enum KEY {
    USER = "USER",
    USERNAME_VERIFY = "USERNAME_VERIFY",
    RECENTLY_PRODUCT = "RECENTLY_PRODUCT"
}

const saveUser = (user: User) => {
    sessionStorage.setItem(KEY.USER, JSON.stringify(user))
}

const saveUsernameVerify = (usernameVerify: string) => {
    sessionStorage.setItem(KEY.USER, usernameVerify)
}

const removeUser = () => {
    sessionStorage.removeItem(KEY.USER)
}
const removeUsernameVerify = () => {
    sessionStorage.removeItem(KEY.USERNAME_VERIFY)
}

const getUser = (): User | undefined => {
    const data = sessionStorage.getItem(KEY.USER)
    if (!data) return undefined;
    return JSON.parse(data) as User
}

const updateProfile = (user: User): void => {
    const oldUser = getUser();
    if (!oldUser) return;
    oldUser.birthday = user.birthday
    oldUser.email = user.email
    oldUser.fullName = user.fullName
    oldUser.phone = user.phone
    oldUser.gender = user.gender
    saveUser(oldUser);
}

const getUsernameVerify = (): string | undefined => {
    return sessionStorage.getItem(KEY.USERNAME_VERIFY) ?? undefined;
}
const getRecentlyProduct = (): ProductType[] => {
    const data = sessionStorage.getItem(KEY.RECENTLY_PRODUCT);
    return data ? JSON.parse(data) as ProductType[] : [];
}

const pushRecentlyProduct = (product: ProductType) => {
    let recentlyProductList: ProductType[] = getRecentlyProduct();

    if (recentlyProductList.filter(product => product._id === product._id).length) return;

    recentlyProductList.push(product);

    sessionStorage.setItem(KEY.RECENTLY_PRODUCT, JSON.stringify(recentlyProductList))
}

export {
    saveUser,
    saveUsernameVerify,
    removeUser,
    removeUsernameVerify,
    getUser,
    getUsernameVerify,
    getRecentlyProduct,
    pushRecentlyProduct,
    updateProfile
}

import {CustomError} from "./custom.error.type";

const wrongUsernameOrPassword: CustomError = {
    code: 404,
    message: "Tài khoản hoặc mật khẩu không đúng"
};
const wrongPassword: CustomError = {
    code: 404,
    message: "Mật khẩu không đúng"
};

const wrongVerifyCode: CustomError = {
    code: 404,
    message: "Mã xác thực không đúng"
};
const verifyFail: CustomError = {
    code: 404,
    message: "Xác thực thất bại"
};

const accountNotVerify: CustomError = {
    code: 401,
    message: "Tài khoản chưa được xác thực"
}

const accountExist: CustomError = {
    code: 404,
    message: "Username đã tồn tại"
}

const accountNotExist: CustomError = {
    code: 404,
    message: "Tài khoản chưa được đăng ký"
}
const userNotFound: CustomError = {
    code: 404,
    message: "Tài khoản không tồn tại"
}

const registerFail: CustomError = {
    code: 404,
    message: "Đăng ký thất bại"
}
const passwordNotCompare: CustomError = {
    code: 404,
    message: "Mật khẩu không trùng khớp"
}
const changePasswordFail: CustomError = {
    code: 404,
    message: "Đổi mật khẩu thất bại"
}
const updateProfileFail: CustomError = {
    code: 404,
    message: "Cập nhật thông tin thất bại"
}
const productNotFound: CustomError = {
    code: 404,
    message: "Không tìm thấy sản phẩm"
}
const payFailed: CustomError = {
    code: 404,
    message: "Thanh toán thất bại"
}
const reviewIdNotExists: CustomError = {
    code: 404,
    message: "Id review không tồn tại"
}


export {
    wrongUsernameOrPassword,
    wrongVerifyCode,
    accountNotVerify,
    accountExist,
    accountNotExist,
    registerFail,
    verifyFail,
    passwordNotCompare,
    changePasswordFail,
    productNotFound,
    payFailed,
    updateProfileFail,
    wrongPassword,
    userNotFound,
    reviewIdNotExists
};
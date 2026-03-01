// export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
export const BASE_URL = "/api";

export const USER_ICON_IMAGE=`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`;



export const REGISTRATION_FIELDS = [
    {
        id : "firstName",
        type : "text",
        placeHolder : "Enter First Name",
        label : "First Name",
        required : true,
    },
     {
        id : "lastName",
        type : "text",
        placeHolder : "Enter Last Name",
        label : "Last Name",
        required : true,

    },
     {
        id : "emailId",
        type : "email",
        placeHolder : "Enter Your Email",
        label : "Email",
        required : true,

    },
     {
        id : "mobileNumber",
        type : "number",
        placeHolder : "Enter Mobile Number",
        label : "Mobile Number",
        required : true,

    },
     {
        id : "password",
        type : "password",
        placeHolder : "Enter Password",
        label : "Password",
        required : true,

    },

]
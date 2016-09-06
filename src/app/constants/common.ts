import { ShopSorting, ShopSortingType } from "../reducers/shop";

export const API_PATH = "http://23.111.128.122:8081/api";
export const GOOGLE_API_KEY = "AIzaSyAMLbpTTmfPO8v9yM7hJv3rvonHKy0yKnI";
export const MOCKS_API_PATH = "/mocks";

export const ALERT_CLOSE_TIMEOUT = 2000;

export const GUID = "guid";
export const ACCESS_TOKEN = "access_token";
export const USER = "user";

export enum DeviceMode {
    MOBILE,
    TABLET,
    DESKTOP
}

export const MAX_SLIDER_ELEMENTS = 5;

export const FILE_HOST_URL = "https://res.cloudinary.com/woahstork/image/upload";

// client id
export const GOOGLE_CLIENT_ID = "228511423293-v8alshtkalk5c3fcmr6ab6tfmh8v0436.apps.googleusercontent.com";
export const GOOGLE_SCOPE = "profile email";

// dev id
// export const GOOGLE_CLIENT_ID = "413564253377-5die237htaogd6a0ceuaj2kdtpt5j7s9.apps.googleusercontent.com";

// Client id
export const FACEBOOK_APP_ID = "1094529347252446";

// dev id
// export const FACEBOOK_APP_ID = "843030319165418";

export const ACTIVITY_GROUP_COLOR_MAP = {
    "Energize": "#d94c49",
    "Create": "#e6653c",
    "Elevate": "#f1c815",
    "Medicate": "#5ca960",
    "Chill": "#3c95dd",
    "Sleep": "#9b41ab"
};

export const PATIENT_DOCS_CLOUD = "https://s3-us-west-1.amazonaws.com/woahstork-private";

export const PATIENT_STATUSES = {
    1: "not applied",
    2: "applied",
    3: "rejected",
    4: "accepted",
    5: "other"
};

export const MAX_PASSWORD_LENGTH = 40;
export const MAX_FIRST_NAME_LENGTH = 30;
export const MAX_NAME_LENGTH = 100;

export const PASSWORD_REGEX = /(?=.*[!@#\$%\^&\*]){8,40}/g;
export const ANY_CHAR = /(\S){1,100}/g;
export const CHECK_USERNAME = /(\S){3,30}/g;

export const SHOP_SORTING: { value: ShopSorting, text: string}[] = [
    {
        text: "Default",
        value: {
            type: ShopSortingType.Default,
            reverse: false
        }
    },
    {
        text: "Alphabetical",
        value: {
            type: ShopSortingType.Alphabetical,
            reverse: true,
        }
    },
    {
        text: "Distance",
        value: {
            type: ShopSortingType.Distance,
            reverse: false
        }
    },
    {
        text: "Price (Low-High)",
        value: {
            type: ShopSortingType.PriceLowHigh,
            reverse: false
        }
    },
    {
        text: "Price (High-Low)",
        value: {
            type: ShopSortingType.PriceHighLow,
            reverse: true,
        }
    },
    {
        text: "Rating (High-Low)",
        value: {
            type: ShopSortingType.Rating,
            reverse: true,
        }
    },
    {
        text: "Most Reviewed (High-Low)",
        value: {
            type: ShopSortingType.MostReviewed,
            reverse: true,
        }
    }
];

export const MAIL_SUBJECT = "Check Out Canny, it's a Great Place to Buy Cannabis.";
export const MAIL_BODY = "Hey! Check out this online store called Canny that sales cannabis.";

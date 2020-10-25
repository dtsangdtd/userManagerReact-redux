import { DELETE_USER, SUBMIT_USER, EDIT_USER, GET_KEYWORD } from "./constant";

let initialState = {
  userList: [
    {
      id: 1,
      name: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP",
    },
    {
      id: 2,
      name: "hao",
      username: "nguyendp",
      email: "nguyendp@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP",
    },
  ],
  userEdit: null, // userEdit: null => Add; userEdit: !null => Edit
  keyWord: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER: {
      let userList = [...state.userList];
      userList = userList.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.userList = userList;
      return { ...state };
    }

    case SUBMIT_USER: {
      /**
       * 2 hướng
       *    * Nếu id tồn tại => Update
       *    * Ngược lại (id k tồn tại) => Add
       */
      if (action.payload.id) {
        //UPDATE
        const index = state.userList.findIndex((item) => {
          return item.id === action.payload.id;
        });
        if (index !== -1) {
          let userList = [...state.userList];
          userList[index] = action.payload;
          state.userList = userList;
        }
      } else {
        //ADD
        const user = { ...action.payload, id: Math.random() };
        let userList = [...state.userList, user];
        state.userList = userList;
      }

      return { ...state };
    }

    case EDIT_USER: {
      state.userEdit = action.payload;
      return { ...state };
    }

    case GET_KEYWORD: {
      state.keyWord = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default userReducer;

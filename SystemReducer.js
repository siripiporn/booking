import { combineReducers } from 'redux';

const INITIAL_STATE = {
  Version:0,
  Account: {
    Card0: "",
    CardTypeCode: "",
    CardTypeName: "",
    StartDate: "",
    ExpireDate: "",
    ValueBalance: 0,
    FreeCash: 0,
    Point: 0,
    CashCoupon: 0,
    Active: false,
    Code: "",
    FirstName: "",
    LastName: "",
    BirthDate: "",
    Address1: "",
    Address2: "",
    Address3: "",
    Address4: "",
    City: "",
    CounTry: "",
    ZipCode: "",
    Phone0: "",
    Mobile0: "",
    EmailAddress: "",
    MessageRespone: "",
    Identifier0: "",
    CustomerComplete: ""
  },
  Index: 0,
  ListMemberCardArray: [],
  ListVoucherArrays: [],
  ListCardVoucherArray:[],
  ListHistoryTransactionArray: [],
  ListHistoryVoucherArray: []
};

const SystemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_Version':
        //Action Process: payload?
        if(action.payload == undefined || action.payload == null){
            return state;
        }
        //update
        state.Version = action.payload
        return state
    case 'UPDATE_Account':
        //Action Process: payload?
        if(action.payload == undefined || action.payload == null){
            return state;
        }
        //update
        state.Account = action.payload
        return state
    case 'UPDATE_Index':
        //Action Process: payload?
        if(action.payload == undefined || action.payload == null){
            return state
        }
        state.Index = action.payload
        return state
    case 'UPDATE_ListVoucherArrays':
        //Action Process: payload?
        if(action.payload == undefined || action.payload == null){
            return state;
        }
        state.ListVoucherArrays = action.payload
        return state
    case 'UPDATE_ListMemberCardArray':
        //Action Process: payload?
        if(action.payload == undefined || action.payload == null){
            return state;
        }
        state.ListMemberCardArray = action.payload
        return state
    case 'UPDATE_ListCardVoucherArray':
        //Action Process: payload?
        if(action.payload == undefined || action.payload == null){
            return state;
        }
        state.ListCardVoucherArray = action.payload
        return state
    case 'UPDATE_ListHistoryTransactionArray':
        //Action Process: payload?
        if(action.payload == undefined || action.payload == null){
            return state;
        }
        state.ListHistoryTransactionArray = action.payload
        return state
    case 'UPDATE_ListHistoryVoucherArray':
        //Action Process: payload?
        if(action.payload == undefined || action.payload == null){
            return state;
        }
        state.ListHistoryVoucherArray = action.payload
        return state
    default:
        //Action Process Default
      return state
  }
};

export default combineReducers({
  system: SystemReducer
});
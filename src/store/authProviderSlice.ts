import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type authProvider = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    brandName: string,
    serviceName: string,
    tokenID: string,
}

type ProviderState = {
    authProvider: authProvider;
    arrayServiceName: string[],
  }
  
  const initialState: ProviderState = {
    authProvider: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        brandName: '',
        serviceName: '',
        tokenID: '',
    },
    arrayServiceName: [],
  }
  

const authProviderSlice = createSlice({
    name: 'authProviderInfo',
    initialState,
    reducers: {
        addProvider(state, action: PayloadAction<authProvider>) {
            state.authProvider.firstName = action.payload.firstName
            state.authProvider.lastName = action.payload.lastName
            state.authProvider.email = action.payload.email
            state.authProvider.password = action.payload.password
            state.authProvider.brandName = action.payload.brandName
            
        },
        addProviderServiceName(state, action: PayloadAction<string>){
            state.authProvider.serviceName = action.payload
        },
        addArrayServiceName(state, action: PayloadAction<string[]>){
            state.arrayServiceName = action.payload
        },
        addGoogleRegistration(state, action: PayloadAction<string>){
            state.authProvider.tokenID = action.payload
        },

    },
});

export const {addProvider, addArrayServiceName, addGoogleRegistration, addProviderServiceName} = authProviderSlice.actions;

export default authProviderSlice.reducer;
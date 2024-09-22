import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ProductInterface, productsApi } from "./api/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

export interface CartItem extends ProductInterface {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  showToasty: boolean;
}

const initialState: CartState = {
  items: [],
  showToasty: false,
};

const initialScrollState: { enabled: boolean } = {
  enabled: false,
};

const scrollSlice = createSlice({
  name: "rootScroll",
  initialState: initialScrollState,
  reducers: {
    toggleRootScroll: (state) => {
      state.enabled = !state.enabled;
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInterface>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
    scroll: scrollSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(productsApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export const { addToCart, removeFromCart } = cartSlice.actions;
export const { toggleRootScroll } = scrollSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

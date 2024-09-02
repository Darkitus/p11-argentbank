import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Création de l'action asynchrone loginUser pour la connexion d'un utilisateur à l'API
export const loginUser = createAsyncThunk(
  "auth/loginUser", // Nom de l'action asynchrone
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email,
          password,
        }
      ); // Requête POST à l'API
      return response.data.body; // La réponse de l'API est retournée
    } catch (error) {
      return rejectWithValue(error.response.data.message); // Le message d'erreur de l'API est retourné
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (_, { getState }) => {
    const state = getState(); // Récupération de l'état actuel du store
    const token = state.auth.token; // Récupération du token d'authentification de l'utilisateur
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.body; // Contient les données du profil utilisateur
  }
);

// Création du slice authSlice pour gérer l'état de l'authentification de l'utilisateur
const authSlice = createSlice({
  name: "auth", // Nom du slice
  // État initial du slice
  initialState: {
    token: localStorage.getItem("token") || null,
    username: localStorage.getItem("username") || null,
  },
  // Reducer pour la déconnexion de l'utilisateur
  reducers: {
    logout(state) {
      state.token = null; // Le token est réinitialisé
      state.username = null; // Le nom d'utilisateur est réinitialisé
      localStorage.removeItem("token"); // Le token est supprimé du localStorage
      localStorage.removeItem("username"); // Le nom d'utilisateur est supprimé du localStorage
    },
  },
  // Gestion des actions asynchrones loginUser avec les états loading, succeeded et failed
  extraReducers: (builder) => {
    builder
      // Gestion de la réussite de l'action
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token; // Le token d'authentification est stocké
        localStorage.setItem("token", action.payload.token); // Le token est stocké dans le localStorage
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.username = action.payload.userName; // Le nom d'utilisateur est stocké
        localStorage.setItem("username", action.payload.userName); // Le nom d'utilisateur est stocké dans le localStorage
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

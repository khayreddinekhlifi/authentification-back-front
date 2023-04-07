import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const addproduct=createAsyncThunk('product/add',async(product)=>{
  try {
    let result=axios.post('http://localhost:8000/produit/add',product)
    return result
  } catch (error) {
    console.log(error)
  }
})
export const getproduct=createAsyncThunk('product/all',async(product)=>{
  try {
    let result=axios.get('http://localhost:8000/produit/all',product)
    return result
  } catch (error) {
    console.log(error)
  }
})
export const deleteproduct=createAsyncThunk('product/delete',async({id})=>{
  try {
    let result=axios.delete(`http://localhost:8000/produit/${id}`)
    return result
  } catch (error) {
    console.log(error)
  }
})
export const updateproduct=createAsyncThunk('product/update',async({id,product})=>{
  try {
    let result=axios.put(`http://localhost:8000/produit/${id}`,product)
    return result
  } catch (error) {
    console.log(error)
  }
})
const initialState = {
  product: [],
  state: null
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers:{
    //add
    [addproduct.pending]:(state)=>{
      state.status="pending"
    },
    [addproduct.fulfilled]:(state,action)=>{
      state.status="success"
      state.product=action.payload.data?.product
    },
    [addproduct.rejected]:(state,action)=>{
      state.status="failed"
    },
    //get
    [getproduct.pending]:(state)=>{
      state.status="pending"
    },
    [getproduct.fulfilled]:(state,action)=>{
      state.status="success"
      state.product=action.payload.data?.product
    },
    [getproduct.rejected]:(state,action)=>{
      state.status="failed"
    },
//delete
    [deleteproduct.pending]:(state)=>{
      state.status="pending"
    },
    [deleteproduct.fulfilled]:(state,action)=>{
      state.status="success"
      state.product=action.payload.data?.product
    },
    [deleteproduct.rejected]:(state,action)=>{
      state.status="failed"
    },
    //put
    [updateproduct.pending]:(state)=>{
      state.status="pending"
    },
    [updateproduct.fulfilled]:(state,action)=>{
      state.status="success"
      state.product=action.payload.data?.product
    },
    [updateproduct.rejected]:(state,action)=>{
      state.status="failed"
    },
  }
})

// Action creators are generated for each case reducer function
export const {} = productSlice.actions

export default productSlice.reducer
import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import { mainAxios } from "../config/mainAxios";
import { DropDownOptionType, FilterPayload, FiltersTypeInterface, InitialStateInterface } from "../types";
import { RootState } from './index'

export const getGallery = createAsyncThunk<ReturnType<typeof mainAxios.get> , void, { state: RootState }>(
  '/getGallery',
  async (_, { getState }) => {
  const {section,sort,window,page,showViral} = getState().gallery.filters as FiltersTypeInterface

  const response = await mainAxios.get(`/gallery/${section}/${sort}/${window}/${page}?showViral=${showViral}`)
  return response.data;
  }
);

const initialState:InitialStateInterface = {
  pageLoading:true,
  photos:[],
  filters:{
    section:"hot",
    sort:"viral",
    page:1,
    window:"day",
    showViral:true
  }
}


const galleryComponent=createSlice({
  name:"gallery",
  initialState:initialState,
  reducers:{
    setFilters: (state, action: PayloadAction<FilterPayload>)=>{
      const { payload } = action
      return {
        ...state,
        filters:{
          ...state.filters,
          [payload.key]:payload.value
        }
      }
    },
    incrementPage:(state)=>{
      return {
        ...state,
        filters:{
          ...state.filters,
          page:state.filters.page+1
        }
      }
    },
    decrementPage:(state)=>{
      if(state.filters.page>1){
        return {
          ...state,
          filters:{
            ...state.filters,
            page:state.filters.page-1
          }
        }
      }
      return state
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGallery.pending, (state) => {
        state.pageLoading = true;
      })
      .addCase(getGallery.fulfilled, (state, action: PayloadAction<any>) => {
        state.photos = action.payload.data;
        state.pageLoading = false;
      })
      .addCase(getGallery.rejected, (state) => {
        state.pageLoading = false
      });
  },
})


export const sectionOptions: DropDownOptionType[] = [
  { value: 'hot', label: 'Hot' },
  { value: 'top', label: 'Top' },
  { value: 'user', label: 'User' }
]

export const sortOptions: DropDownOptionType[] = [
  { value: 'viral', label: 'Viral' },
  { value: 'top', label: 'Top' },
  { value: 'time', label: 'Time' },
  { value: 'rising', label: 'Rising' }
]

export const windowOptions: DropDownOptionType[] = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' }
]


export const { setFilters,incrementPage,decrementPage } = galleryComponent.actions;
export default galleryComponent.reducer;
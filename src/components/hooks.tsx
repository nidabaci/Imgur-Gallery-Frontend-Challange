import {
  TypedUseSelectorHook,
  useDispatch as useDefaultDispatch,
  useSelector as useDefaultSelector,
} from 'react-redux'
import type { RootState, AppDispatch } from '../redux/index'

export const useSelector: TypedUseSelectorHook<RootState> = useDefaultSelector
export const useDispatch = () => useDefaultDispatch<AppDispatch>()

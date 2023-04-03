import React from 'react'
import { useSelector, useDispatch } from '../components/hooks'
import {
  setFilters,
  sectionOptions,
  sortOptions,
  windowOptions,
} from '../redux/GallerySlice'
import DropDown from './DropDown'
import { Switch } from '@headlessui/react'

const Filters = () => {
  const dispatch = useDispatch()
  const { section, sort, window, showViral } = useSelector(
    (state) => state.gallery.filters
  )

  return (
    <div className="mb-2 flex justify-center items-center">
      <div className="h-[50px] w-[400px] mb-2 mx-4 flex justify-between items-center px-5 rounded-xl text-white bg-[#474a51]">
        <DropDown
          name="section"
          value={section}
          options={sectionOptions}
          onChange={(key, value) => dispatch(setFilters({ key, value }))}
        />
        <DropDown
          name="sort"
          value={sort}
          options={sortOptions}
          onChange={(key, value) => dispatch(setFilters({ key, value }))}
        />
        <DropDown
          name="window"
          value={window}
          options={windowOptions}
          onChange={(key, value) => dispatch(setFilters({ key, value }))}
        />
        <div className="flex items-center">
          <div className="mr-2">Viral</div>
          <Switch
            checked={showViral}
            onChange={(value) =>
              dispatch(setFilters({ key: 'showViral', value }))
            }
            className={`${
              showViral ? 'bg-indigo-700' : 'bg-gray-200'
            } relative inline-flex h-5 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                showViral ? 'translate-x-6' : 'translate-x-1 bg-slate-600'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Filters

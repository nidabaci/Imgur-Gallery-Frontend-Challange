import React from 'react'
import '../styles/filters.scss'
import { Button } from 'primereact/button'
import { useSelector, useDispatch } from '../components/hooks'
import {
  setFilters,
  sectionOptions,
  sortOptions,
  windowOptions,
} from '../redux/GalleryComponent'

export const FiltersBar = () => {
  const dispatch = useDispatch()
  const { section, sort, window, showViral } = useSelector(
    (state) => state.gallery.filters
  )

  const handleFilterClick = (filterKey, filterValue) => {
    dispatch(setFilters({ key: filterKey, value: filterValue }))
  }

  const handleViralToggle = () => {
    dispatch(setFilters({ key: 'showViral', value: !showViral }))
  }
  return (
    <>
      <div className="mb-10 mt-10 flex justify-center items-center filter_bar">
        <div className="container filter_button">
          <div>
            <Button
              className={section === 'top' ? 'active' : ''}
              onClick={() => handleFilterClick('section', 'top')}
            >
              TOP
            </Button>
            <Button
              className={section === 'hot' ? 'active' : ''}
              onClick={() => handleFilterClick('section', 'hot')}
            >
              HOT
            </Button>
            <Button
              className={section === 'user' ? 'active' : ''}
              onClick={() => handleFilterClick('section', 'user')}
            >
              USERS
            </Button>
          </div>
          <div className="trending_button">
            <Button
              className={showViral ? 'active' : ''}
              onClick={() => handleViralToggle()}
            >
              TRENDING
            </Button>
           
          </div>
        </div>
      </div>
    </>
  )
}

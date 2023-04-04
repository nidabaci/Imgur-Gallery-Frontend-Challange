import '../styles/filters.scss'
import { Button } from 'primereact/button'
import { useSelector, useDispatch } from '../components/hooks'
import { setFilters, sortOptions, windowOptions, } from '../redux/GalleryComponent'
import DropDown from './DropDown'

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
      <div className="mb-5 mt-5 flex justify-center items-center filter_bar">
        <div className="container filter_button">
          <div>
            <Button
              className={section === 'hot' ? 'active' : ''}
              onClick={() => handleFilterClick('section', 'hot')}
            >
              HOT
            </Button>
            <Button
              className={section === 'top' ? 'active' : ''}
              onClick={() => handleFilterClick('section', 'top')}
            >
              TOP
            </Button>
            
            <Button
              className={section === 'user' ? 'active' : ''}
              onClick={() => handleFilterClick('section', 'user')}
            >
              USERS
              </Button>
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
          </div>
          <div className="trending_button">
            <Button
              className={showViral ? 'active' : ''}
              onClick={() => handleViralToggle()}
            >
              SHOW VIRAL
            </Button>
           
          </div>
        </div>
      </div>
    </>
  )
}

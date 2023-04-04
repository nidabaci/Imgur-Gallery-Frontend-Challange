import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import classNames from 'classnames'
import { DropDownInterface } from '../types'
import "../styles/filters.scss"
const DropDown = ({
  options = [] ,
  value,
  name,
  onChange,
}: DropDownInterface) => {
  let label = options.find(opt => opt.value === value)?.label ?? ""
  return (
    <Menu as="div" className="dropdown_menu relative text-center">
      <div>
        <Menu.Button className="flex uppercase items-center"
        >
          {label}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((opt) => {
              const active = opt.value == value
              return (
                <Menu.Item key={opt.value + name}>
                  <div
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                    onClick={() => onChange(name, opt.value)}
                  >
                    {opt.label}
                  </div>
                </Menu.Item>
              )
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropDown

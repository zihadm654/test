import { useState } from "react"
import Axios from 'axios'
import { useEffect } from "react"
const categories = [
  {
    id: 0,
    name: 'Choose an option',
  },
  {
    id: 1,
    name: 'Manufacturing',
  },
  {
    id: 2,
    name: 'Furniture',
  },
  {
    id: 3,
    name: 'Machinery',
  },
  {
    id: 4,
    name: 'Metalworking',
  },
  {
    id: 5,
    name: 'Plastic and Rubber',
  },
  {
    id: 6,
    name: 'Printing',
  },
  {
    id: 7,
    name: 'TextTile and Clothing',
  },
  {
    id: 8,
    name: 'Wood',
  },
  {
    id: 9,
    name: 'Services',
  },
]
const subCategories = [
  {
    id: 0,
    name: "Choose an option"
  },
  {
    id: 1,
    name: "Construction materials"
  },
  {
    id: 2,
    name: "Electronics and Optics"
  },
  {
    id: 3,
    name: "Food and Beverage"
  },
  {
    id: 4,
    name: "Bakery"
  },
  {
    id: 5,
    name: "Beverages"
  },
  {
    id: 6,
    name: "fish products"
  },
]

export default function Example() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const res = await Axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(res.data)
    } catch (error) {
      console.error(error, 'error');
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await Axios.post('https://jsonplaceholder.typicode.com/posts', {
        name: name,
        category: category,
        subCategory: subCategory
      })
      console.log('sucess', res.data);
    } catch (error) {
      console.error(error, "error")
    }
  }
  console.log(name, category, subCategory);
  console.log(data);
  return (
    <div className='p-10 lg:w-[70%]'>
      <article>Please enter your name and pick the Sectors you are currently involved in.</article>
      <br />
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          required
          className='block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type="text"
          placeholder='provide a name' />
        <br />
        <label htmlFor="sectors" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Sectors:</label>
        <select
          id="small"
          defaultValue={categories[0]}
          onChange={(e) => setCategory(e.target.value)}
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {categories?.map((cat => (
            <option className="p-1" value={cat.name} key={cat.id}>{cat.name}</option>
          )))}
        </select>
        <label htmlFor="sub sectors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sub Sections</label>
        <select
          defaultValue={subCategories[0]}
          onChange={(e) => setSubCategory(e.target.value)}
          id="subCategory"
          className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {subCategories?.map((cat => (
            <option value={cat.name} key={cat.id}>{cat.name}</option>
          )))}
        </select>
        <input required type="checkbox" name="agree" id="terms" />
        <label className='pl-2' htmlFor="agree">Agree to Terms & condition</label>
        <br />
        <input type="submit" name="submit" value={"save"} className='mt-2 px-5 py-2 bg-gray-900' />
      </form>
    </div>
  )
}

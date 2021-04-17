import axios from "axios"

const BucketItem = (props) => {
  const { item, getBucketAndMoments } = props

  const toggleCheckbox = () => {
    axios.put(`/api/bucket/${item.id}`, { completed: item.completed })
      .then(res => getBucketAndMoments())
      .catch(err => console.log(err))
  }


  return (
    <div className='bucket-item'>
      <input type='checkbox' onChange={toggleCheckbox} />
      <h3>{item.list_item}</h3>
    </div>
  )
}

export default BucketItem
import axios from "axios"

const MomentsItem = (props) => {
  const { item, updateMoments } = props

  // const toggleCheckbox = () => {
  //   axios.put(`/api/bucket/${item.id}`, { completed: item.completed })
  //     .then(res => updateBucket(res.data))
  //     .catch(err => console.log(err))
  // }


  return (
    <div className='moments-item'>
      <h3>{item.list_item}</h3>
    </div>
  )
}

export default MomentsItem
import axios from "axios";
import { updateBucket } from '../../../redux/bucketReducer';
import { connect } from 'react-redux';

const BucketItem = (props) => {
  const { item, getBucketAndMoments } = props

  const toggleCheckbox = () => {
    axios.put(`/api/bucket/${item.id}`, { completed: item.completed })
      .then(res => getBucketAndMoments())
      .catch(err => console.log(err))
  }

  const deleteItem = () => {
    let itemId = item.id 
    axios.delete(`/api/bucket/${itemId}`) 
      .then(res => props.updateBucket(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div className='bucket-item' key={props.key}>
      <input type='checkbox' onChange={toggleCheckbox} />
      <h3>{item.list_item}</h3>
      <button onClick={deleteItem}>delete</button>
    </div>
  )
}

export default connect(null, {updateBucket})(BucketItem)
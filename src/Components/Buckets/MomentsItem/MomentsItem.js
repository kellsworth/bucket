import axios from "axios";
import './MomentsItem.css';
import { updateMoments } from '../../../redux/bucketReducer';
import { connect } from 'react-redux';

const MomentsItem = (props) => {
  const { item, getBucketAndMoments } = props

  // const toggleCheckbox = () => {
  //   axios.put(`/api/moments/${item.id}`, { completed: item.completed })
  //     .then(res => getBucketAndMoments())
  //     .catch(err => console.log(err))
  // }

  const deleteItem = () => {
    let itemId = item.id 
    axios.delete(`/api/bucket/${itemId}`) 
      .then(res => {
        // props.updateMoments(res.data)
        getBucketAndMoments()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='moments-item'>
      {/* <input type='checkbox' onChange={toggleCheckbox} /> */}
      <h3>{item.list_item}</h3>
      <button onClick={deleteItem} className="delete">X</button>
    </div>
  )
}

export default connect(null, {updateMoments})(MomentsItem)
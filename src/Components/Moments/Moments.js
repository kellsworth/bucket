import axios from 'axios';
import './Moments.css';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateBucket, updateMoments } from '../../redux/bucketReducer';
import MomentsItem from '../../Components/Buckets/MomentsItem/MomentsItem';


const Moments = (props) => {
  const { updateBucket, updateMoments, momentsList } = props

  const [momentsInput, setMomentsInput] = useState('')

  const getBucketAndMoments = useEffect(() => {
    axios.get('/api/bucket')
      .then(res => {
        updateBucket(res.data.newBucketList)
        updateMoments(res.data.newMomentsList)
      })
      .catch((err) => console.log(err))
  })

  const addToMoments = () => {
    axios.post('/api/moments', { momentsInput })
      .then((res) => {
        console.log(res.data)
        getBucketAndMoments()
        // updateBucket(res.data)
        // setting input box back to empty
        setMomentsInput('')
      })
      .catch((err) => {
        console.log(err)
      })
  }
 
  console.log(props)

  return (
    <section>
      <h2>Moments List</h2>
      <div>
        <input value={momentsInput} onChange={(e) => setMomentsInput(e.target.value)} />
        <button onClick={addToMoments}>Add</button>
      </div>
      <div>
        <div>
          {momentsList.map(item => {
            return <MomentsItem key={item.id} item={item} getBucketAndMoments={getBucketAndMoments} />
          })}
        </div>
        <div>
          {momentsList.map(item => {
            return <MomentsItem key={item.id} item={item} updateMoments={updateMoments} />
          })}
        </div>
      </div>
    </section>
  )

}

const mapStateToProps = (stateRedux) => {
  return {
    user: stateRedux.userReducer.user,
    bucketList: stateRedux.bucketReducer.bucketList,
    momentsList: stateRedux.bucketReducer.momentsList,
  }
}

export default connect(mapStateToProps, { updateBucket, updateMoments })(Moments)


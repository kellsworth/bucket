import axios from 'axios';
import './Buckets.css';
import { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { updateBucket, updateMoments } from '../../redux/bucketReducer'
import BucketItem from './BucketItem/BucketItem';
import MomentsItem from './MomentsItem/MomentsItem';


const Buckets = (props) => {
  const { user, updateBucket, updateMoments, bucketList, momentsList } = props

  const [bucketInput, setBucketInput] = useState('')

  const getBucketAndMoments = useCallback(() => {
    axios.get('/api/bucket')
      .then(res => {
        updateBucket(res.data.newBucketList)
        updateMoments(res.data.newMomentsList)
      })
      .catch((err) => console.log(err))
  })

  const addToBucket = () => {
    axios.post('/api/bucket', { bucketInput })
      .then((res) => {
        console.log(res.data)
        getBucketAndMoments()
        // updateBucket(res.data)
        // setting input box back to empty
        setBucketInput('')
      })
      .catch((err) => {
        console.log(err)
      })
  }


  useEffect(() => {
    getBucketAndMoments()

  }, [])
  console.log(props)

  return (
    <section>
      <h2>Bucket List</h2>
      <div>
        <input value={bucketInput} onChange={(e) => setBucketInput(e.target.value)} />
        <button onClick={addToBucket}>Add</button>
      </div>
      <div>
        <div>
          {bucketList.map(item => {
            return <BucketItem key={item.id} item={item} getBucketAndMoments={getBucketAndMoments} />
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

export default connect(mapStateToProps, { updateBucket, updateMoments })(Buckets)
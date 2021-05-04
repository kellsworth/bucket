import axios from 'axios';
import './Buckets.css';
import { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { updateBucket, updateMoments } from '../../redux/bucketReducer';
import BucketItem from './BucketItem/BucketItem';
import MomentsItem from './MomentsItem/MomentsItem';


const Buckets = (props) => {
  const { updateBucket, updateMoments, bucketList, momentsList } = props

  const [bucketInput, setBucketInput] = useState('')

  const getBucketAndMoments = useCallback(() => {
    axios.get('/api/bucket')
      .then(res => {
        updateBucket(res.data.newBucketList)
        updateMoments(res.data.newMomentsList)
      })
      .catch((err) => console.log(err))
  })

  useEffect(() => {
    getBucketAndMoments()
  },[])

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

  return (
    <body>
      
      <div className="container">
        <section className="hero">
          <div className="header">
            <h1>It's a Bucket List, Do Something Rad!</h1>
          </div>
        </section>
      </div>
      <div className="bucket">
        <h2>The Bucket List</h2>
          <input value={bucketInput} onChange={(e) => setBucketInput(e.target.value)} placeholder='Enter Bucket Item Here'/>
          <button onClick={addToBucket} className="button-bucket">Add to Bucket List</button>
      </div>
      <div>
        <div className="completed">
          {bucketList.map(item => {
            return <BucketItem key={item.id} item={item} getBucketAndMoments={getBucketAndMoments} />
          })}
        </div>
          <h3>Done!</h3>
        <div>
          {momentsList.map(item => {
            return <MomentsItem key={item.id} item={item} updateMoments={updateMoments} />
          })}
        </div>
      </div>
    </body>
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
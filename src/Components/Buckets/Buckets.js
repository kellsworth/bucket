import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateBucket, updateMoments } from '../../redux/bucketReducer'


const Buckets = (props) => {
  const { user, updateBucket, updateMoments, bucketList } = props

  const [bucketInput, setBucketInput] = useState('')

  const addToBucket = () => {
    axios.post('/api/bucket', { bucketInput })
      .then((res) => {
        console.log(res.data)
        updateBucket(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    axios.get('/api/bucket')
      .then(res => updateBucket(res.data))
      .catch((err) => console.log(err))

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
        {bucketList.map(item => {
          return <p>{item.list_item}</p>
        })}
      </div>
    </section>
  )

}

const mapStateToProps = (stateRedux) => {
  return {
    user: stateRedux.userReducer.user,
    bucketList: stateRedux.bucketReducer.bucketList,
  }
}

export default connect(mapStateToProps, { updateBucket, updateMoments })(Buckets)
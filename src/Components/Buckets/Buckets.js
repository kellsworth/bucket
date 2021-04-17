import { useEffect } from 'react';
import { connect } from 'react-redux';

const Buckets = (props) => {
  const { user } = props

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div>
      buckets
    </div>
  )

}

const mapStateToProps = (stateRedux) => {
  return {
    user: stateRedux.userReducer.user
  }
}

export default connect(mapStateToProps, {})(Buckets)
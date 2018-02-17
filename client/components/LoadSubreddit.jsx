import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import {updateSub} from '../actions'

const LoadSubreddit = ({dispatch, sub}) => (
  <div>
     <input type ='text' onChange = {(e) => dispatch(updateSub(e.target.value))} />
   <button onClick={() => dispatch(fetchPosts(sub))}>
    Fetch Posts
    </button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    sub: state.sub
  }
}

export default connect(mapStateToProps)(LoadSubreddit)
